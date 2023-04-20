import React, { useContext, useState } from 'react'
import './home.css'
import Logo from '../../images/logo.png'
import Record from '../../images/record.png'
import Hash from '../../images/hash.png'
import IconUser from '../../images/icon-user.png'
import IconCart from '../../images/icon-user (1).png'
import IconHome from '../../images/icon-home.png'

import SpecialScreen from '../TabScrrens/SpecialScreen'
import MainScreen from '../TabScrrens/MainScreen'
import { CartContext } from '../../context/userContext'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState('Special')
    const { cart } = useContext(CartContext);

    const updateActiveTab = (tName) => {
        setActiveTab(tName)
    }
    return (
        <div className='container'>
            <div className='upperContainer'>
                <div className='flex flex-row p-10 items-center justify-between'>
                    <div className='flex flex-row items-center'>
                        <img src={Logo} alt='logo' />
                        <div className='ml-5 logName'>Sacred Earth Cafe</div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='imgCOntainer'>
                            <img src={Record} alt='logo' />
                        </div>
                        <div className='imgCOntainer'>
                            <img src={Hash} alt='logo' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row mx-10 justify-between'>
                    <div onClick={() => updateActiveTab('Special')} style={{ borderBottomWidth: activeTab === 'Special' ? 2 : 0, color:activeTab === 'Special' ? '#3CBCB4' : 'rgba(74, 86, 98, 0.6)' }} className='tab'>
                        Special
                    </div>
                    <div onClick={() => updateActiveTab('Main')} style={{ borderBottomWidth: activeTab === 'Main' ? 2 : 0, color:activeTab === 'Main' ? '#3CBCB4' : 'rgba(74, 86, 98, 0.6)' }} className='tab'>
                        Main
                    </div>
                    <div onClick={() => updateActiveTab('Dessert')} style={{ borderBottomWidth: activeTab === 'Dessert' ? 2 : 0, color:activeTab === 'Dessert' ? '#3CBCB4' : 'rgba(74, 86, 98, 0.6)' }} className='tab'>
                        Dessert
                    </div>
                    <div onClick={() => updateActiveTab('Beverages')} style={{ borderBottomWidth: activeTab === 'Beverages' ? 2 : 0, color:activeTab === 'Beverages' ? '#3CBCB4' : 'rgba(74, 86, 98, 0.6)' }} className='tab'>
                        Beverages
                    </div>
                </div>
            </div>

            {
                activeTab === 'Special' && <SpecialScreen />
            }

            {
                activeTab === 'Main' && <MainScreen />
            }


            <div className='footer'>
    
                <div className='cursor-pointer'>
                    <img src={IconUser} alt='user' />
                </div>
                <div className='cursor-pointer'>
                    <img src={IconHome} alt='home' />
                </div>
                <Link to={'/order'} className='cursor-pointer'>
                    <img src={IconCart} alt='cart' />
                    {cart.length > 0 && <div className='items'>{cart.length}</div>}
                </Link>
            </div>


        </div>
    )
}

export default HomeScreen