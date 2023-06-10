import React from 'react';
import Modelo1 from '../assets/modelo1.png';
import Modelo2 from '../assets/modelo2.png';
import Modelo3 from '../assets/modelo3.png';
import Delivery2 from '../assets/delivery2.png';
import Sale1 from '../assets/sale1.png';
import Clock from '../assets/clock.png';
import Sale2 from '../assets/sale2.png';
import Delivery3 from '../assets/delivery3.png';
import Modelo4 from '../assets/modelo4.png';
import Selo from '../assets/selo.png';
import Questions from './questions';
import Footer from './footer';

const Products = () => {
  return (
    <div>
        <div className="mx-10">
            <img src={Modelo3} alt="" className="pb-4"/>
            <img src={Modelo2} alt="" className="pb-4"/>
            <img src={Modelo1} alt="" className="pb-4"/>
        </div>
        <section className="w-full h-screen  flex flex-col text-center">
            <div className="m-4 mt-10 text-[34px]">
                <h1 className="font-bold">Escolha a melhor opção para você</h1>
            </div>
            <div className="m-4 flex flex-wrap gap-2 justify-center">
                <div className="h-[430px] border border-red-700 rounded-lg w-[160px] mt-6">
                    <div className="flex relative mt-3">
                        <div className="bg-[#A741B9] border-red-700 border-[1px] rounded-[14px] w-[70px] h-[25px] absolute right-[45px]">
                            <img src={Clock} alt="" className="bg-black"/>
                        </div>
                        <div className="bg-white border-red-700 border-[1px] rounded-r-[14px] w-[70px] h-[25px] absolute left-[0px]">
                        </div>
                        </div>
                            <div className="bg-white ml-1 w-32 h-32"></div>
                                <div className="m-5 flex flex-col text-left">
                                    <h1 className="text-[15px]">Rosa Selvagem Ácido</h1>
                                    <p className="text-[10px]">Tratamento 00 dias</p>
                                    <p className="text-[10px] line-through">de R$00,00 por</p>
                                    <h1 className="text-[20px]">12x R$00,00</h1>
                                    <p className="text-[10px] text-[#767676]">ou R$00 à vista</p>
                                    <div className="flex flex-col mt-5 w-32">
                                        <div className="flex items-center">
                                            <img src={Delivery2} alt="Selo de Venda" className="w-4" />
                                            <p className="text-[10px] ml-2 pb-1">Frete GRÁTIS</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img src={Sale1} alt="Selo de Venda" className="w-4" />
                                            <p className="text-[10px] ml-2">
                                            Você economiza <span className="font-bold">R$00</span>
                                            </p>
                                    </div>
                            </div>
                        </div>
                        <button className="font-extrabold text-[13px] w-[120px] uppercase text-white h-[33px] bg-green-500 shadow-md border-2 border-green-500 rounded-[5px]">
                            Compre agora
                        </button>
                    </div>
                    <div className="h-[480px] bg-gradient-to-r from-[#DC7BE5] to-[#A741B9] w-[160px] border border-red-700 rounded-lg">
                        <div className="flex relative mt-3">
                            <div className="bg-[#621B6F] border-red-700 border-[1px] rounded-[14px] w-[70px] h-[25px] absolute right-[45px]">
                                <img src={Clock} alt="" className="bg-black"/>
                            </div>
                            <div className="bg-white border-red-700 border-[1px] rounded-r-[14px] w-[70px] h-[25px] absolute left-[0px]">
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#DC7BE5] to-[#A741B9] ml-1 w-32 h-32 mt-16"></div>
                        <div className="m-5 flex flex-col text-left text-white">
                            <h1 className="text-[15px]">Compre 2 Leve 3</h1>
                            <p className="text-[10px]">Tratamento 00 dias</p>
                            <p className="text-[10px] line-through">de R$00,00 por</p>
                            <h1 className="text-[20px]">12x R$00,00</h1>
                            <p className="text-[10px] text-white">ou R$00 à vista</p>
                            <div className="flex flex-col mt-5 w-32">
                                <div className="flex items-center">
                                    <img src={Delivery3} alt="Selo de Venda" className="w-4" />
                                    <p className="text-[10px] ml-2 pb-1">Frete GRÁTIS</p>
                                </div>
                                <div className="flex items-center">
                                    <img src={Sale2} alt="Selo de Venda" className="w-4" />
                                    <p className="text-[10px] ml-2">
                                    Você economiza <span className="font-bold">R$00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="font-extrabold text-[13px] w-[120px] uppercase text-white h-[33px] bg-green-500 shadow-md border-2 border-green-500 rounded-[5px]">
                            Compre agora
                        </button>
                     </div>
                <div className="h-[430px] w-[160px] border border-red-700 rounded-lg">
                <div className="flex relative mt-3">
                        <div className="bg-[#A741B9] border-red-700 border-[1px] rounded-[14px] w-[70px] h-[25px] absolute right-[45px]">
                            <img src={Clock} alt="" className="bg-black"/>
                        </div>
                        <div className="bg-white border-red-700 border-[1px] rounded-r-[14px] w-[70px] h-[25px] absolute left-[0px]">
                        </div>
                    </div>
                    <div className="bg-white ml-1 w-32 h-32 mt-6"></div>
                    <div className="m-5 flex flex-col text-left">
                        <h1 className="text-[15px]">Compre 3 Leve 5</h1>
                        <p className="text-[10px]">Tratamento 00 dias</p>
                        <p className="text-[10px] line-through">de R$00,00 por</p>
                        <h1 className="text-[20px]">12x R$00,00</h1>
                        <p className="text-[10px] text-[#767676]">ou R$00 à vista</p>
                        <div className="flex flex-col mt-5 w-32">
                            <div className="flex items-center">
                                <img src={Delivery2} alt="Selo de Venda" className="w-4" />
                                <p className="text-[10px] ml-2 pb-1">Frete GRÁTIS</p>
                            </div>
                            <div className="flex items-center">
                                <img src={Sale1} alt="Selo de Venda" className="w-4" />
                                <p className="text-[10px] ml-2">
                                Você economiza <span className="font-bold">R$00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="font-extrabold text-[13px] w-[120px] uppercase text-white h-[33px] bg-green-500 shadow-md border-2 border-green-500 rounded-[5px]">
                        Compre agora
                    </button>
                </div>
            </div>
            <div className="h-[1300px] w-full bg-white mt-32">
                <div className="flex flex-col bg-gradient-to-r from-[#DC7BE5] to-[#A741B9]">
                    <div className="text-white mx-5 mt-5 text-left">
                        <h1 className="my-3 font-bold text-[35px]">Garantia de <span className="font-extrabold">90 dias </span>EXCLUSIVA no Mercado Brasileiro!</h1>
                        <p className="text-[18px]">Confiamos tanto na eficácia do Rosa Selvagem Ácido que caso você utilize ele durante 90 dias e não tenha resultados, devolvemos o seu dinheiro. Isso mesmo!</p>
                        <h3 className="font-bold text-[15px] py-10">Resultados em 90 dias ou seu dinheiro de volta.</h3>
                        <a href="#" className="border-b">Confira o regulamento</a>
                        <img src={Selo} alt="selo" className="hidden sm:block" />
                    </div>
                    <img src={Modelo4} alt="modelo" className="mb-[px]"/>
                </div>
            </div>
            <div className="h-[1000px]] w-full bg-white mt-32">
                 <h1 className="font-bold text-[20px]">Perguntas frequentes</h1>
                <Questions />
                <Footer />
            </div>
        </section>
    </div>
  );
};

export default Products;