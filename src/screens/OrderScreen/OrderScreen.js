import React, { useContext, useEffect, useState } from 'react'
import Warning from '../../images/warning.png'
import Back from '../../images/back.png'
import './order.css'
import { useNavigate } from 'react-router-dom'
import DwonArrow from '../../images/downArrow.png'
import UpArrow from '../../images/upArrow.png'
import { CartContext } from '../../context/userContext'
import Veg from '../../images/veg.png'
import Add from '../../images/add.png'
import Minus from '../../images/minus.png'
import PlaceOrder from '../../images/placeOrder.png'
import { ToastContainer, toast } from 'react-toastify';

const OrderScreen = () => {
    const navigate = useNavigate();
    const [currentOrders, setCurrentOrders] = useState(false);
    const [previousOrders, setPreviousOrders] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const [prevCart, setPrevCart] = useState([]);

    useEffect(() => {
        const previousData =  localStorage.getItem('previousOrders');
        if (previousData) setPrevCart(JSON.parse(previousData))
    }, [])

    const onDecrease = (product) => {
        const index = cart.findIndex(c => product.id === c.id)
        const cartMock = [...cart]
        if (cartMock[index]['quantity'] === 1) {
            cartMock.splice(index, 1)
            toast(`${product.name} removed from Cart!`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
        } else {
            toast("Cart Updated", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
            cartMock[index] = {...cartMock[index], quantity: cartMock[index]['quantity'] - 1}
        }
        setCart(cartMock)
    }

    const onIncrease = (product) => {
        const index = cart.findIndex(c => product.id === c.id)
        const cartMock = [...cart]
        cartMock[index] = {...cartMock[index], quantity: cartMock[index]['quantity'] + 1}
        toast("Cart Updated", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        });
        setCart(cartMock)
    }

    const onCheckout = () => {
        const proceed = window.confirm('Are you sure you want to checkout?');
        if (proceed) {
            let updatedCart = [...cart];
            let previousData =  localStorage.getItem('previousOrders');
            previousData = JSON.parse(previousData)
            if (previousData) {
                updatedCart = [...previousData, ...cart]
            }
            localStorage.setItem('previousOrders', JSON.stringify(updatedCart))
            setCart([])
            toast.success("Checkout Success!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
            navigate(-1)
        }
    } 

    return ( 
        <div className='container2'>
            <div className='upperContainer'>
                <div className='flex flex-row py-5 px-7 items-center justify-between'>
                    <div className='flex flex-row items-center'>
                        <img src={Back} className='cursor-pointer' onClick={() => navigate(-1)} alt='Back' />
                        <div className='ml-5 logName'>Place Order</div>
                    </div>
            
                    <div className=''>
                        <img src={Warning} alt='Warning' />
                    </div>
                </div>
            </div>
            <div onClick={() => setCurrentOrders(!currentOrders)} className='flex flex-row mx-10 my-5 items-center justify-between cursor-pointer'>
                <div className='text2'>Current Orders</div>
                <div className='line' />
                {!currentOrders && <img className='h-2 w-3' src={UpArrow} alt='upArrow' />}
                {currentOrders && <img className='h-2 w-3' src={DwonArrow} alt='downArrow' />}
            </div>
            {!currentOrders && cart.length > 0 && <div className='orders'>
                {cart.map(c => (<div key={c.id} className='flex flex-row items-center justify-between my-4'>
                    <div className='flex flex-row items-center'>
                        <img src={Veg} alt='veg' />
                        <div className='ml-2'>
                            <div className='prodName max-w-xs'>{c.name}</div>
                            <div className='prodName'>₹{c.price}</div>
                        </div>
                        
                    </div>
                    <div className='addBtn'>
                        <img onClick={() => onDecrease(c)} className='mr-1' src={Minus} alt='Minus' />
                        <div className='prodName mr-3'>{c.quantity}</div>
                        <img onClick={() => onIncrease(c)} src={Add} alt='Add' />
                    </div>
                </div>))}
                <div className='instructions'>Add cooking Intructions</div>
            </div>}

            <div onClick={() => setPreviousOrders(!previousOrders)} className='flex flex-row mx-10 my-5 items-center justify-between cursor-pointer'>
                <div className='text2'>Previous Orders</div>
                <div className='line' />
                {!previousOrders && <img className='h-2 w-3' src={UpArrow} alt='upArrow' />}
                {previousOrders && <img className='h-2 w-3' src={DwonArrow} alt='downArrow' />}
            </div>

            {!previousOrders && prevCart.length > 0  && <div className='orders'>
                {prevCart.map(c => (<div key={c.id} className='flex flex-row items-center justify-between my-4'>
                    <div className='flex flex-row items-center'>
                        <img src={Veg} alt='veg' />
                        <div className='ml-2'>
                            <div className='prodName max-w-xs'>{c.name}</div>
                            <div className='prodName'>₹{c.price}</div>
                        </div>
                        
                    </div>
                    <div className='addBtn'>
                        <div className='prodName mr-1'>{c.quantity}</div>
                    </div>
                </div>))}
                <div className='instructions'>Add cooking Intructions</div>
            </div>}

            {cart.length > 0 && <div className='checkout' onClick={onCheckout}>
                <div className='font-normal'>
                    {cart.length} Items
                </div>
                <div className='flex flex-row items-center'>
                    <div className='font-semibold mr-5 tracking-wider'>
                        PLACE ORDER
                    </div>
                    <img src={PlaceOrder} alt='placeorder' />
                </div>
            </div>}
        </div>
    )
}

export default OrderScreen