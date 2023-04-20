import React from 'react'
import Banner from '../../images/banner.png'
import UpArrow from '../../images/upArrow.png'
import './tab.css'
import Product from '../../components/Product'
import MockData from '../../MockData'
const SpecialScreen = () => {
    return (
        <div>
            <div>
                <img className='w-full' src={Banner} alt='banner' />
            </div>
            <div className='flex flex-row mx-10 my-5 items-center justify-between'>
                <div className='text2'>Today's Special</div>
                <div className='line' />
                <img className='h-2 w-3' src={UpArrow} alt='upArrow' />
            </div>
            <div className='list grid grid-cols-2 gap-5'>
                {MockData.map(m => <Product product={m} />)}
            </div>
        </div>       
    )
}

export default SpecialScreen