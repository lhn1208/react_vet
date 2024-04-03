import React from 'react';
import { Header } from './Header';
import { ContWidth, ContWrap, PcBlock} from "../common/common.style";
import { MainWrap, MainHeader, ContLetter, MemorialWrap, MemorialSlide, ServiceSec } from './main.style';
import { MainSwiper } from './MainSwiper';
import { Service } from './Service';

export const Main = () => {
    return (
        <MainWrap>
            <ContWrap>
                <MainHeader>
                  <ContWidth>
                      <Header />
                  </ContWidth>
                </MainHeader>
                <section>
                    <ContLetter>With Remembered</ContLetter>
                    <MemorialWrap>  
                        <ContWidth>
                            <h2 className="title">추모관</h2>
                            <div className='cont_top'>
                                <p>고인의 추모관을 방문해 고인에 대한 그리운 마음과<PcBlock>생전에 하지 못한 이야기를 나누세요.</PcBlock></p>
                                <button className='btn'>더보기</button>
                            </div>
                        </ContWidth>
                        <MemorialSlide>
                            <MainSwiper type="memorial"/>
                        </MemorialSlide>
                    </MemorialWrap>
                </section>
                <ServiceSec>
                    <ContWidth>
                        <Service />
                    </ContWidth>
                </ServiceSec>
            </ContWrap>
        </MainWrap>
    );
}