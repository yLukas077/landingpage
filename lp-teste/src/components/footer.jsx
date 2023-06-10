import React from 'react';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Visa from '../assets/visa.png';
import MasterCard from '../assets/mastercard.png';
import Boleto from '../assets/boleto.png';
import Elo from '../assets/elo.png';
import AmericanExpress from '../assets/american-express.png';
import Hiper from '../assets/hiper.png';
import Secutiry from '../assets/security.png';
import Shield from '../assets/shield.png';
import Google from '../assets/google.png';


const Footer = () => {
  return (
    <div className="w-full h-sreen mt-28 text-[10px] bg-[#F2F2F2]">
      <div className="w-full h-[48px] bg-gradient-to-r from-[#DC7BE5] to-[#A741B9]"></div>
        <footer className="w-full h-sreen flex flex-col m-5 font-kanit">
            <div className="w-full flex justify-center">
                <a href="">
                    <img src={Instagram} alt="instagram" className="w-9 h-9"/>
                </a>
                <a href="">
                    <img src={Facebook} alt="facebook" className="w-9 h-9 ml-4"/>
                </a>
    
            </div>
            <div className="flex flex-col items-start w-[50%]">
                <h3 className="mb-3">Dúvidas?</h3>
                <div className="flex flex-col items-start mb-3">
                    <span>Email</span>
                    <a href="mailto:contato@rosaselvagembrasil.com" className="font-bold">contato@rosaselvagembrasil.com</a>
                </div>
                <div className="flex flex-col items-start text-start mb-3">
                    <span>Central de Atendimento</span>
                    <a href="" className="font-bold">Clique Aqui</a>
                </div>
                <button className="text-[8px] bg-[#3E8B2C] text-white p-2 rounded-2xl">QUERO COMPRAR VIA WHATSAPP</button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row mt-4">
              <div className="flex flex-col items-start">
                <a href="" className="mb-1">Home</a>
                <a href="" className="mb-1">Benefícios</a>
                <a href="" className="mb-1">Como Funciona</a>
                <a href="" className="mb-1">Comprar Agora</a>
                <a href="" className="mb-1">Onde Comprar</a>
              </div>
              <div className="flex flex-col items-start">
                <a href="" className="mb-1">Regulamentos</a>
                <a href="" className="mb-1">Termos e Condições</a>
                <a href="" className="mb-1">Políticas de Privacidade</a>
                <a href="" className="mb-1">Políticas de Troca</a>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-[#424242] font-bold mb-4">Formas de Pagamento</h1>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center justify-center bg-white p-1">
                    <img src={Visa} alt="visa" />
                  </div>
                  <div className="flex items-center justify-center bg-white p-1">
                    <img src={MasterCard} alt="mastercard" />
                  </div>
                  <div className="flex items-center justify-center bg-white p-1">
                    <img src={Boleto} alt="boleto" />
                  </div>
                  <div className="flex items-center justify-center bg-white p-1">
                    <img src={Elo} alt="elo" />
                  </div>
                  <div className="flex items-center justify-center bg-white p-1">
                    <img src={AmericanExpress} alt="americanexpress" />
                  </div>
                  <div className="flex items-center justify-center bg-white p-1">
                    <img src={Hiper} alt="hiper" />
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-col">
                <h1 className="text-[#424242] font-bold mb-4">Loja Segura</h1>
                <div className="flex bg-white p-2">
                  <img src={Secutiry} alt="cadeado de segurança" />
                  <h1 className="text-[#969BA2] pl-1 pr-2">SITE 100% SEGURO</h1>
                </div>
                <div className="flex justify-center items-center p-4 pl-8">
                    <img src={Shield} alt="escudo" />
                    <img src={Google} alt="google" className="m-1 mt-2" />
                </div>
              </div>
            </div>
        </footer>
        <div className="w-screen h-[28px] text-[8px] text-[#969BA2] bg-white flex items-center justify-center"> 
            <h2>CNPJ: 40.865.780/0001-57 | CNPJ: 34.729.858/0001-03 R. PADRE CARAPUCEIRO, 858, RECIFE</h2>
        </div>
        <div className="bg-[#303030] text-[#B6B6B6]">
            <h1>Copyright 2023 ©</h1>
            <h1>Rosa Selvagem</h1>
        </div>
    </div>
    
  );
};

export default Footer;