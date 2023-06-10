import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Questions = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };

  const toggleAccordion2 = () => {
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };

  const toggleAccordion3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
  };

  const toggleAccordion4 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(!isOpen4);
    setIsOpen5(false);
    setIsOpen6(false);
  };

  const toggleAccordion5 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(!isOpen5);
    setIsOpen6(false);
  };

  const toggleAccordion6 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(!isOpen6);
  };

  return (
    <div className="text-[#490B1B] font-bold text-[12px] flex flex-col items-center">
      <div className="m-4 mb-2">
        <div className="border-l border-r border-t border-gray-300 rounded-t-md rounded-b-none w-[360px] h-14 flex flex-col items-center">
          <div className="w-[360px] h-20 flex items-center justify-between py-2 px-4" onClick={toggleAccordion1}>
            <h3 className="">Em quanto tempo vejo resultado?</h3>
            <span className="text-gray-600 cursor-default">{isOpen1 ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          {isOpen1 && (
            <div className="border-l border-r border-b border-gray-300 rounded-b-md rounded-t-none w-[360px] h-14 flex flex-col text-left mt-[-5px]">
              <h3 className="py-2 px-[17px]">* Os primeiros resultados já aparecem nos primeiros 30 dias de uso, mas o tratamento precisa ser continuo.</h3>
            </div>
          )}
        </div>
      </div>
      <div className="m-4 mb-2">
        <div className="border-l border-r border-t border-gray-300 rounded-t-md rounded-b-none w-[360px] h-14 flex flex-col items-center" style={{ marginTop: isOpen1 ? "14px" : "0" }}>
          <div className="w-[360px] h-20 flex items-center justify-between py-2 px-4" onClick={toggleAccordion2}>
            <h3 className="">Gestantes podem usar?</h3>
            <span className="text-gray-600 cursor-default">{isOpen2 ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          {isOpen2 && (
            <div className="border-l border-r border-b border-gray-300 rounded-b-md rounded-t-none w-[360px] h-14 flex flex-col text-left mt-[-5px]">
              <h3 className="py-2 px-[17px]">* Por conter ácido salicílico em sua fórmula, não é indicado o seu uso para gestantes.</h3>
            </div>
          )}
        </div>
      </div>
      <div className="m-4 mb-2">
        <div className="border-l border-r border-t border-gray-300 rounded-t-md rounded-b-none w-[360px] h-14 flex flex-col items-center" style={{ marginTop: isOpen2 ? "14px" : "0" }}>
          <div className="w-[360px] h-20 flex items-center justify-between py-2 px-4" onClick={toggleAccordion3}>
            <h3 className="">Qual o prazo de entrega?</h3>
            <span className="text-gray-600 cursor-default">{isOpen3 ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          {isOpen3 && (
            <div className="border-l border-r border-b border-gray-300 rounded-b-md rounded-t-none w-[360px] h-14 flex flex-col text-left mt-[-5px]">
              <h3 className="py-2 px-[17px]">* 2 - 8 dias após a confirmação do pagamento</h3>
            </div>
          )}
        </div>
      </div>
      <div className="m-4 mt-2 mb-2" style={{ marginBottom: isOpen4 ? "40px" : "0" }}>
        <div className="border-l border-r border-t border-gray-300 rounded-t-md rounded-b-none w-[360px] h-14 flex flex-col items-center" style={{ marginTop: isOpen3 ? "0" : "0" }}>
          <div className="w-[360px] h-20 flex items-center justify-between py-2 px-4" onClick={toggleAccordion4}>
            <h3 className="">Preciso aplicar quantas vezes ao dia?</h3>
            <span className="text-gray-600 cursor-default">{isOpen4 ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          {isOpen4 && (
            <div className="border-l border-r border-b border-gray-300 rounded-b-md rounded-t-none w-[360px] h-19 flex flex-col text-left mt-[-5px]">
              <h3 className="py-2 pb- px-[17px]">* Para obter os resultados desejados, utilize regularmente 2x ao dia, manhã e noite, lembrando de sempre utilizar o protetor solar na ultima etapa da sua rotina de skincare matinal</h3>
            </div>
          )}
        </div>
      </div>
      <div className="m-4 mb-1">
        <div className="border-l border-r border-t border-gray-300 rounded-t-md rounded-b-none w-[360px] h-14 flex flex-col items-center" style={{ marginTop: isOpen4 ? "14px" : "0" }}>
          <div className="w-[360px] h-20 flex items-center justify-between py-2 px-4" onClick={toggleAccordion5}>
            <h3 className="">Em quanto tempo vejo resultado?</h3>
            <span className="text-gray-600 cursor-default">{isOpen5 ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          {isOpen5 && (
            <div className="border-l border-r border-b border-gray-300 rounded-b-md rounded-t-none w-[360px] h-14 flex flex-col text-left mt-[-5px]">
              <h3 className="py-2 px-[17px]">* Os primeiros resultados já aparecem nos primeiros 30 dias de uso, mas o tratamento precisa ser continuo.</h3>
            </div>
          )}
        </div>
      </div>
      <div className="m-4">
        <div className="border-l border-r border-t border-gray-300 rounded-t-md rounded-b-none w-[360px] h-14 flex flex-col items-center" style={{ marginTop: isOpen5 ? "14px" : "0" }}>
          <div className="w-[360px] h-20 flex items-center justify-between py-2 px-4" onClick={toggleAccordion6}>
            <h3 className="">Pode ser utilizado na região intima?</h3>
            <span className="text-gray-600 cursor-default">{isOpen6 ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          {isOpen6 && (
            <div className="border-l border-r border-b border-gray-300 rounded-b-md rounded-t-none w-[360px] h-16 flex flex-col text-left mt-[-5px]">
              <h3 className="py-2 px-[17px]">* Sim, o Rosa Selvagem Ácido Clareador Ativado pode ser usado na virilha, mas em regiões como ânus, vagina, etc., não é recomendado.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
