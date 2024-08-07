//Importação do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import { SwiperNavBottons } from './slidesComponents/NavBottobs';
import { A11y, Navigation, Pagination } from 'swiper/modules';

//Estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './slidesComponents/swiperStyle.module.css';


import { ContentWho } from './slidesComponents/contentSlides/What';
import {ThinkContent} from './slidesComponents/contentSlides/Think';
import { ExpandingContent } from './slidesComponents/contentSlides/Expanding';



register();

/**
 * className="flex flex-col justify-center items-center gap-2 w-screen h-[] bg-black"
 * @returns 
 * 
 * 
 * 
 */


export function SlidesContainer(){
    return(
           
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={10}
            slidePrevClass='auto'
            className={styles.swiper}  
            >           
              <SwiperSlide className='h-[400px] w-screen'>
                <ContentWho/>
              </SwiperSlide>

              <SwiperSlide className='h-[400px] w-screen'>
                <ThinkContent/>
              </SwiperSlide >

              <SwiperSlide className='h-[400px] w-screen'>
                <ExpandingContent/>
              </SwiperSlide>
                        
              <SwiperNavBottons/>
              </Swiper>
    )
}