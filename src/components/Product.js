import React, { useContext } from 'react'
import './product.css'
import Veg from '../images/veg.png'
import Add from '../images/add.png'
import { CartContext } from '../context/userContext'
import { toast } from 'react-toastify';

const Product = ({ product }) => {
    const { cart, setCart } = useContext(CartContext);

    const onAddCart = () => {
        const isProductPresent = cart.filter(c => c.id === product.id)
        if (isProductPresent.length > 0) {
             const index = cart.findIndex(c => product.id === c.id)
             const cartMock = [...cart]
             cartMock[index] = {...cartMock[index], quantity: cartMock[index]['quantity'] + 1}
             setCart(cartMock)
             toast("Cart Updated", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
        } else {
            setCart([...cart, {...product, quantity: 1}])
            toast(`${product.name} Added to Cart!`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
        }
    }

    return (
        <div key={product.id} className='prodContainer'>
            <img src={product.img} className='prodImg' alt={product.name} />
            <div className='flex flex-row items-center my-1 mx-2'>
                <img src={Veg} alt='veg' />
                <div className='prodName'>{product.name}</div>
            </div>
            <div className='flex flex-row items-center justify-between m-2 pb-4'>
                <div className='prodName'>₹{product.price}</div>
                <div className='addBtn' onClick={onAddCart}>
                    <img src={Add} alt='add' />
                    <div className='prodName'>ADD</div>
                </div>
            </div>
        </div>
    )
}

export default Product