import React, { useState } from 'react'
import UpArrow from '../../images/upArrow.png'
import { MockData2 } from '../../MockData'
import MainProduct from '../../components/MainProduct'
import DwonArrow from '../../images/downArrow.png'

const MainScreen = () => {
    const [isHideAcai, setIsHideAcai] = useState(false);
    const [isHideAcai2, setIsHideAcai2] = useState(false);

    return (
        <div>
            <div onClick={() => setIsHideAcai(!isHideAcai)} className='flex flex-row mx-10 my-5 items-center justify-between cursor-pointer'>
                <div className='text2'>Acai Bowl</div>
                <div className='line' />
                {!isHideAcai && <img className='h-2 w-3' src={UpArrow} alt='upArrow' />}
                {isHideAcai && <img className='h-2 w-3' src={DwonArrow} alt='downArrow' />}
            </div>
            {!isHideAcai && MockData2.map(m => <MainProduct product={m} />)}
            <div onClick={() => setIsHideAcai2(!isHideAcai2)} className='flex flex-row mx-10 my-5 items-center justify-between cursor-pointer'>
                <div className='text2'>Acai Bowl2</div>
                <div className='line' />
                {!isHideAcai2 && <img className='h-2 w-3' src={UpArrow} alt='upArrow' />}
                {isHideAcai2 && <img className='h-2 w-3' src={DwonArrow} alt='downArrow' />}
            </div>
            {!isHideAcai2 && MockData2.map(m => <MainProduct product={m} />)}
            <div className='menuContainer'>
            <div className='menu'>
                Menu
            </div>
            </div>

        </div>
    )
}

export default MainScreen