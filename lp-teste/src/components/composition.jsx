import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Acido from '../assets/acido.png';
import Gluconolactona from '../assets/gluconolactona.png';
import Extrato1 from '../assets/extrato-de-aloe-vera.png';
import Extrato2 from '../assets/extrato-de-camomila.png';


const Composition = () => {
    
    SwiperCore.use([Navigation, Pagination]);

    const arrowStyles = {
        backgroundImage: 'linear-gradient(301.31deg, #A942BC -0.43%, #DA78E4 98.76%)',
    }
  return (
    <div>
        <section className="bg-gradient-to-br from-purple-900 via-pink-500 to-purple-300 rounded-2xl w-350  h-[730px] relative">
            <div className="text-center text-white">
            <h1 className="pt-6 font-extrabold text-[27px] leading-32">Composição</h1>
            <div className="text-start"><p className="m-5">O <span className="font-bold">Ácido Clareador Ativado Rosa Selvagem</span> possui uma fórmula desenvolvida especialmente para controlar a oleosidade da pele e promover um efeito peeling suave. Sendo assim, ele é <span className="font-bold">PERFEITO</span> para combater a foliculite e acne corporal e facial. Saiba mais o que cada ativo nosso é capaz de fazer.</p>
            </div>
            <Swiper
                navigation={{ nextEl: '.custom-swiper-button-next', prevEl: '.custom-swiper-button-prev' }}
                pagination
                className="h-[360px]"
                slidesPerView={2.5}
                spaceBetween={'10'}
                
                >
                <SwiperSlide className="bg-white ml-4 rounded-lg p-2 text-black text-center">
                    <img src={Acido} alt="Ácido" />
                    <h2 className="font-extrabold text-15 py-2">Ácido salicílico</h2>
                    <p className="text-[11px] leading-13">Tem ação anti-inflamatória, age diretamente no combate à lesões na pele, clareando manchas e otimizando a textura.</p>
                </SwiperSlide>
                <SwiperSlide className="bg-white  p-2 text-black rounded-lg">
                    <img src={Gluconolactona} alt="Gluconolactona" />
                    <h2 className="font-extrabold text-15 py-2">Gluconolactona</h2>
                    <p className="text-[11px] leading-13">Devolve a capacidade de autoproteção da pele contra agentes irritantes e reduz os sinais de fotoenvelhecimento.</p>
                </SwiperSlide>
                <SwiperSlide className="bg-white p-2 text-black rounded-lg">
                    <img src={Extrato1} alt="Extrato aloe vera" />
                    <h2 className="font-extrabold text-15 py-2">Extrato de Aloe Vera</h2>
                    <p className="text-[11px] leading-13">Auxilia na restauração de tecidos danificados e hidrata profundamente a pele.</p>
                </SwiperSlide>
                <SwiperSlide className="bg-white text-black rounded-lg p-2">
                    <img src={Extrato2} alt="Extrato de camomila" />
                    <h2 className="font-extrabold text-15 py-2">Extrato de Camomila</h2>
                    <p className="text-[11px] leading-13">Tem ação protetora, anti acne e antialérgica além de contribuir para uma pele mais calma e livre de irritações.</p>
                </SwiperSlide>

                <div className="custom-swiper-button-next" style={arrowStyles}></div>
                <div className="custom-swiper-button-prev" style={arrowStyles}></div>
                </Swiper>
                </div>
            <button className="font-bold absolute bottom-[30px] right-[120px] w-[150px] uppercase text-white h-[40px] bg-green-400 shadow-md border-2 border-green-400 rounded-lg">
                    Compre agora
            </button>
        </section>
    </div>
  );
};

export default Composition;