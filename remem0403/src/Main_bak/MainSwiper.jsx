import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { SwiperItem } from './SwiperItem';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const MainSwiper = ({type}) => {
    return (
        <>
            {type === "visual" && (
                <Swiper 
                    effect={"fade"} 
                    navigation={true} 
                    modules={[Autoplay, EffectFade, Navigation]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide><img src={'/images/main/img_main1.jpg'} alt="메인 이미지"/></SwiperSlide>
                    <SwiperSlide><img src={'/images/main/img_main2.jpg'} alt="메인 이미지"/></SwiperSlide>
                </Swiper>
            )}
            {type === "memorial" && (
                <Swiper 
                    slidesPerView={1.8}
                    spaceBetween={20}
                    centeredSlides={true}
                    navigation={true} 
                    loop={true}     
                    pagination={{
                        clickable: true,
                        type: 'progressbar',
                    }}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        480: {
                            slidesPerView: 1.4,
                            spaceBetween: 20,
                          },
                        768: {
                          slidesPerView: 1.4,
                          spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                          },
                    }}
                >
                    <SwiperSlide>
                        <SwiperItem 
                            imgSrc="/images/sample/img_memorial1.jpg" 
                            alt="메인 이미지" 
                            name="홍길동 집사" 
                            date="1946.01.03 ~ 2021.6.19" 
                            guardian="이미숙" 
                            coffin="2000.02.16">
                        </SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperItem 
                            imgSrc="/images/sample/img_memorial2.jpg" 
                            alt="메인 이미지" 
                            name="김한국" 
                            date="1999.01.03 ~ 20222.12.19" 
                            guardian="김상주" 
                            coffin="2022.02.10">
                        </SwiperItem>
                        </SwiperSlide>
                    <SwiperSlide>
                        <SwiperItem 
                            imgSrc="/images/sample/img_memorial1.jpg" 
                            alt="메인 이미지" 
                            name="홍길여" 
                            date="1999.01.03 ~ 20222.12.19" 
                            guardian="홍상주" 
                            coffin="2020.02.02">
                        </SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperItem 
                            imgSrc="/images/sample/img_memorial2.jpg" 
                            alt="메인 이미지" 
                            name="홍길여" 
                            date="1999.01.03 ~ 20222.12.19" 
                            guardian="홍상주" 
                            coffin="2020.02.02">
                        </SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperItem 
                            imgSrc="/images/sample/img_memorial1.jpg" 
                            alt="메인 이미지" 
                            name="김한국" 
                            date="1999.01.03 ~ 20222.12.19" 
                            guardian="홍상주" 
                            coffin="2020.02.02">
                        </SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperItem 
                            imgSrc="/images/sample/img_memorial1.jpg" 
                            alt="메인 이미지" 
                            name="김한국" 
                            date="1999.01.03 ~ 20222.12.19" 
                            guardian="홍상주" 
                            coffin="2020.02.02">
                        </SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperItem 
                            imgSrc="/images/sample/img_memorial1.jpg" 
                            alt="메인 이미지" 
                            name="김한국" 
                            date="1999.01.03 ~ 20222.12.19" 
                            guardian="홍상주" 
                            coffin="2020.02.02">
                        </SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperItem 
                            imgSrc="/images/sample/img_memorial1.jpg" 
                            alt="메인 이미지" 
                            name="김한국" 
                            date="1999.01.03 ~ 20222.12.19" 
                            guardian="홍상주" 
                            coffin="2020.02.02">
                        </SwiperItem>
                    </SwiperSlide>
                </Swiper>
            )}

        </>
    );
}