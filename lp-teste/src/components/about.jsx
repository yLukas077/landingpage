import React from 'react';
import Woman from '../assets/woman.png';
import PurpleBall from '../assets/purple-ball.png';
import Video from './video';
import Composition from './composition';
import Method from './method';
import Products from './products';


const About = () => {
  return (
    <div className="">         
        <section className="w-full h-screen">
          <div className="m-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-700 rounded-[2.5px] text-white p-2 leading-[19px]">Livre-se da foliculite, acne corporal e rosto</div>
            <h1 className="text-[37px] leading-[44px] my-2">Use o Ácido Clareador Ativado Rosa Selvagem</h1>
            <p className="mb-4 font-bold">Rico em Ácido Salicílico e Gluconolactona</p>
            <p className="mb-4">Controle a oleosidade e a acne do seu corpo e rosto de forma simples!</p>
            <p c>O Ácido Rosa Selvagem é um produto feito à base de ácido salicílico, um poderoso anti-inflamatório e gluconolactona, que promove uma ação esfoliante na pele, além de ter ação antioxidante, antirrugas, antiacne, eliminando a coceira e hidratando.</p>
          </div>
          <div className="text-black">
          <div className="flex items-center font-normal text-xs leading-[99.5%] mb-2 mt-5 w-[17rem] ml-3">
            <img src={PurpleBall} className="mr-3 w-3" alt="purple-ball" />
            <p className="ml-1">Combate a foliculite e coceira</p>
          </div>
          <div className="flex items-center font-normal text-xs leading-[99.5%] mb-2 mt-5 w-[17rem] ml-3">
            <img src={PurpleBall} className="mr-3 w-3" alt="purple-ball"/>
            <p className="ml-1">Combate a foliculite e coceira</p>
          </div>
          <div className="flex items-center font-normal text-xs leading-[99.5%] mb-2 mt-5 w-[17rem] ml-3">
            <img src={PurpleBall} className="mr-3 w-3" alt="purple-ball"/>
            <p className="ml-1">Controle da oleosidade</p>
          </div>
          <div className="flex items-center font-normal text-xs leading-[99.5%] mb-2 mt-5 w-[17rem] ml-3">
            <img src={PurpleBall} className="mr-3 w-3" alt="purple-ball"/>
            <p className="ml-1">Prevenção da acne corporal</p>
          </div>
          <div className="flex items-center font-normal text-xs leading-[99.5%] mb-2 mt-5 w-[17rem] ml-3">
            <img src={PurpleBall} className="mr-3 w-3"alt="purple-ball"/>
            <p className="ml-1">Melhora na textura da pele</p>
          </div>
        </div>
        <img src={Woman} alt="Modelo segurando o produto" className="m-5 w-[320px]"/>
        <div className="my-10 flex flex-col justify-center w-full items-center text-[24px]">
        <h1>Recomendado por</h1>
        <span className="font-bold">Especialistas em cosméticos</span>
        </div>
        <Video />
        <Composition />
        <Method />
        <Products />
        </section>
    </div>
  );
};

export default About;