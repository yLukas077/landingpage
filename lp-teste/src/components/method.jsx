import React from 'react';

const Method = () => {
  return (
    <div>
        <div className="h-[1200px] mt-20 justify-center text-center flex flex-col">
            <h1 className="font-extrabold text-[35px] mb-10">Modo de uso</h1>
            <section className="gap-[125px] bg-cover rounded-3xl bg-dayNight-mobile bg-no-repeat h-[1000px] w-full text-white flex flex-col justify-center items-center">
                    <div className="text-left m-5 mt-[200px]">
                        <h1 className="font-bold text-[21px]">CUIDADOS NOTURNOS:</h1>
                        <p className="py-2 text-[14px]">Limpar bem a área de aplicação</p>
                        <p className="py-2 text-[14px]">Aplique o Ácido Rosa Selvagem, massageando até a total absorção do produto pela pele</p>
                        <p className="py-2 text-[14px]">Seguir sua rotina de cuidados com a pele e maquiagem</p>
                        <p className="pt-2 pb-6 text-[14px]">Aplicar protetor solar</p>
                        <div className="bg-white p-4 rounded-lg mt-1 m-4 relative">
                            <p className="text-[12px] text-black leading-4">À noite, é importante usar produtos que garantem uma hidratação e tonifique a pele. A Vitamina C é perfeita para isso que o nosso Sérum Lifting possui em sua composição.</p>
                            <div className="absolute top-[-20px] left-[-20px] rounded-full w-[40px] h-[40px] bg-[#7AB3E7] flex justify-center items-center "><span className="text-[40px]" style={{ transform: 'rotate(-20deg)' }}>!</span></div>
                    </div>
                    </div>
                    <div className="text-left m-5 ">
                        <h1 className="font-bold text-[21px]">CUIDADOS DIURNOS:</h1>
                        <p className="py-2 text-[14px]">Limpar bem a área de aplicação</p>
                        <p className="py-2 text-[14px]">Aplique o Ácido Rosa Selvagem, massageando até a total absorção do produto pela pele</p>
                        <p className="py-2 text-[14px]">Seguir sua rotina de cuidados com a pele e maquiagem</p>
                        <p className="pt-2 pb-6 text-[14px]">Aplicar protetor solar</p>
                        <div className="bg-white p-4 rounded-lg mt-1 m-4 relative">
                            <p className="text-[12px] text-black leading-4">O uso do protetor solar diariamente é recomendado por especialistas e esse cuidado deve ser intensificado ao usar produtos com ácido pela manhã.</p>
                            <div className="absolute top-[-20px] right-[-20px] rounded-full w-[40px] h-[40px] bg-[#14123C] flex justify-center items-center "><span className="text-[40px]" style={{ transform: 'rotate(20deg)' }}>!</span></div>
                    </div>
                    </div>
            </section>
        </div>
    </div>
  );
};

export default Method;