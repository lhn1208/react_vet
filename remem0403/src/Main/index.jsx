import React from 'react';

import { ContWrap, PcBlock} from "../common/common.style";
import { MainWrap, MainHeaderStyle, ContLetter, MemorialWrap, MemorialSlide, ServiceSec } from './main.style';
import { MainSwiper } from './MainSwiper';
import { MainHeader } from './MainHeader';
import { Service } from './Service';
import { Header } from '../CommonLayout/Header';
import { MainContWidth } from './main.style';

export const Main = () => {
    return (
        <>
            <Header />
            <MainWrap>
                <ContWrap>
                    <MainHeaderStyle>
                        <MainContWidth>
                            <MainHeader />
                        </MainContWidth>
                    </MainHeaderStyle>
                    <section>
                        <ContLetter>With Remembered</ContLetter>
                        <MemorialWrap>  
                            <MainContWidth>
                                <h2 className="title">추모관</h2>
                                <div className='cont_top'>
                                    <p>고인의 추모관을 방문해 고인에 대한 그리운 마음과<PcBlock>생전에 하지 못한 이야기를 나누세요.</PcBlock></p>
                                    <button className='btn'>더보기</button>
                                </div>
                            </MainContWidth>
                            <MemorialSlide>
                                <MainSwiper type="memorial"/>
                            </MemorialSlide>
                        </MemorialWrap>
                    </section>
                    <ServiceSec>
                        <MainContWidth>
                            <Service />
                        </MainContWidth>
                    </ServiceSec>
                </ContWrap>
            </MainWrap>
        </>
    );
}