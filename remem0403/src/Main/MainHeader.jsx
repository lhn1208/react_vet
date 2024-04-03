import React from 'react';
import { PcBlock } from '../common/common.style';
import { Search } from '../common/Search';
import { HeaderInner, TopTitle, MainSlide } from './main.style';
import { MainSwiper } from './MainSwiper';
import MainTitleImg from '../images/main/main_title.png';

export const MainHeader = () => {
    return (
        <HeaderInner>
           <MainSlide>
                <MainSwiper type="visual"/>
            </MainSlide>  
            <TopTitle>
                <Search type="round"/>
                <div className='letter'><img src={MainTitleImg} alt="With Remembered" /></div>
                <p className="text">사랑하는 고인의 가족, 친지분들에게 부고를 알리며 <PcBlock>온라인 장례를 통해 조문을 하실 수 있습니다.</PcBlock></p>
            </TopTitle>
        </HeaderInner>
    );
}