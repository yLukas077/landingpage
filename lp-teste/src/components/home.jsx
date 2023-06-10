import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import Card from '../assets/card.png';
import Pix from '../assets/pix.png';
import Box from '../assets/box-hand.png';
import Delivery from '../assets/delivery.png';
import Produto from '../assets/produto.png';
import LimitedTime from '../assets/limited-time.png';

const Home = () => {
  return (
      <div>
        <section className="h-[1000px] w-full bg-cover bg-center bg-no-repeat bg-home-mobile sm:bg-home-desktop sm:mt-20 sm:flex sm:flex-col">
          <div className="sm:w-[200px]">
            <h1 className="text-white pl-3 text-xl font-bold pt-[15px] w-[17rem]">Livre das marcas inflamação de acne no corpo & rosto</h1>
            <p className="text-white font-light text-[9px] pl-3 w-[17rem]">Chegou o ácido esfoliante ativado - Rosa Selvagem</p>

            <div className="flex items-center font-normal text-xs leading-[99.5%] text-white mb-2 mt-5 w-[17rem] ml-3">
              <FaCheckCircle size={11} color="white" />
              <p className="ml-1">Combate a foliculite e coceira</p>
            </div>

            <div className="flex items-center font-normal text-xs leading-[99.5%] text-white mb-2 w-[17rem] ml-3">
              <FaCheckCircle size={11} color="white" />
              <p className="ml-1">Controle da oleosidade</p>
            </div>

            <div className="flex items-center font-normal text-xs leading-[99.5%] text-white mb-2 w-[17rem] ml-3">
              <FaCheckCircle size={11} color="white" />
              <p className="ml-1">Prevenção da acne corporal</p>
            </div>

            <div className="flex font-normal text-xs leading-[99.5%] text-white mb-2 w-[13rem] ml-3">
              <FaCheckCircle size={19} color="white" />
              <p className="ml-1">Costas com bolinhas de inflamação da acne, bumbum, rosto</p>
            </div>
            <div className="flex items-start relative ml-7 mt-12 w-[151px] h-[92px] bg-gradient-to-br from-[#FD97FF] to-[#DF4EFA] rounded-[8.5px] shadow-[2px 3px 33px rgba(0, 0, 0, 0.25)] " >
                <div className="font-bold absolute items-center text-center flex justify-center text-[12px] leading-[99.5%] text-white bg-cover bg-[#570a66b9] rounded-t-[8px] w-full h-[22px]">
                  <div className="w-8 h-8 items-center flex justify-center rounded-full bg-white absolute bottom-[-2px] right-[-15px]">
                  <FaClock size={20} color="#692872"/>
                  </div>
                  Resultados em
                </div>
                <h1 className="font-bold text-7xl leading-[99.5%] text-white absolute top-5 left-7">30</h1>
                <p className="font-bold text-sm leading-[99.5%] text-white absolute top-12 right-[9px]">dias</p>
            </div>
          </div>
            <div className="mt-[140px] sm:mt-0 sm:relative sm:w-[500px]">
              <button className="bg-green-500 w-screen p-4 flex items-center justify-center shadow-md mt-[39px] rounded-md font-extrabold text-3xl leading-[99.5%] text-white sm:w-[320px] sm:absolute">COMPRE AGORA</button>
              <div className="bg-white shadow-md rounded-lg m-auto mt-10 w-[350px] h-[200px] flex relative sm:flex-col-reverse sm:w-[250px] sm:h-[750px]">
                  <img src={Produto} alt="Rosa Selvagem Ácido" className="w-[35px] h-[150px] m-auto ml-9"/>
                  <img src={LimitedTime} alt="Oferta" className="w-[180px] h-[50px] mr-16 mt-3"/>
                  <div className=" w-26 h-2 absolute flex top-16 right-[100px]">
                    <span className="font-light text-[10px] leading-[88%] text-purple-700">ROSA SELVAGEM <span className="font-bold">ÁCIDO</span></span>
                  </div>
                  <div className="absolute flex flex-col w-52 item-center text-center items-center gap-1 leading-[88%] text-purple-800 bottom-10 right-3 ">
                    <p className="line-through">de R$178 por:</p>   
                    <div className="bg-[#FD42CC] w-32 h-9 flex justify-center items-center">
                    <h1 className="font-extrabold text-2xl leading-[88%] text-white">R$147,00</h1> 
                    </div>
                    <div className="">         
                    <p>ou<span className="font-bold px-[2px]">6x de R$24,50</span> S/juros</p>
                    </div>
                  </div>
                  <div className="w-[70px] h-[70px] bg-[#FD42CC] rounded-full flex flex-col justify-center items-center absolute right-[-20px] top-[-20px]">
                    <p className="font-medium text-[8px] text-white mb-[-10px]">Site com até</p>
                    <div className="flex flex-col justify-center items-center text-white">
                    <h1 className="font-extrabold text-[28px]">19%</h1>
                    <span className="mt-[-12px] font-bold">OFF</span>
                    </div>
                  </div>
                </div>
            </div>
      <div className="bg-gray-100 shadow-md flex flex-col justify-center items-center h-[180px] p-4 mt-14">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
           <img src={Card} alt="Cartão" className="w-5 mr-1" />
            <p className="font-medium text-[12px] leading-[107%]">PARCELAMENTO EM <span className="font-bold">ATÉ 6X SEM JUROS</span></p>
          </div>
          <div className="flex items-center">
            <img src={Pix} alt="Pix" className="w-5 mr-1" />
            <p className="font-medium text-[12px] leading-[107%]">PAGAMENTO NO PIX E CARTÃO <span className="font-bold">APROVAÇÃO IMEDIATA</span></p>
          </div>
          <div className="flex items-center">
            <img src={Box} alt="Entrega em suas mãos" className="w-5 mr-1" />
            <p className="font-medium text-[12px] leading-[107%]">ENVIO EM ATÉ 24H <span className="font-bold">ENTREGA EXPRESSA</span></p>
          </div>
          <div className="flex items-center">
            <img src={Delivery} alt="Entrega rápida" className="w-5 mr-1" />
            <p className="font-medium text-[12px] leading-[107%]">FRETE GRÁTIS <span className="font-bold">PARA TODO O BRASIL</span></p>
          </div>
          </div>
        </div>
        </section>
      </div>
  );
};

export default Home;