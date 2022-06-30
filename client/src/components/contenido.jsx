import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import validator from 'validator';

const estilos = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#8B0000",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#8B0000",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};
//random options of menu
const sugerencias = () => {
  var array_sugerencias = [
    "Try our new carbonara pizza",
    "We have ice-cream oreo delicious",
    "Our barbacue pizza is a good option",
    "If you like pepperoni, you have to try our diabolo pizza",
    "Do you like cheese?, try our four stations pizza ",
  ];
  var valor = Math.floor(Math.random() * array_sugerencias.length);
  var sugerencia = array_sugerencias[valor];
  return sugerencia;
};
//chatbot conversation flow
const steps = [
  {
    id: "intro",
    message: "Welcome to Pizza Restaurant. ¿Do you want to do an order?",
    trigger: "respuesta-pedido",
  },
  {
    id: "respuesta-pedido",
    options: [
      { value: "y", label: "Yes", trigger: "respuesta-pedidoy" },
      { value: "n", label: "No", trigger: "respuesta-pedidon" },
    ],
    
  },
  {
    id: "respuesta-pedidoy",
    message: "What's your name?",
    trigger: "respuesta-nombre",
  },
  {
    id: "respuesta-nombre",
    user: true,
    //validate only letters
    validator: (value)=>{
        if(/^[A-Z]{1}[a-z]{2,15}/.test(value)){
            return true;
        }else{
            return 'Please enter a valid name';
        }
    },
    trigger: "respuesta-nombre2",
  },
  {
    id: "respuesta-nombre2",
    message: "Hello {previousValue}, please, give us your address",
    trigger: "respuesta-pedidoy2",
  },
  {
    id: "respuesta-pedidoy2",
    options: [
      {
        value: "continue",
        label: "Give us your address",
        trigger: "direccion",
      },
      { value: "cancel", label: "Cancel order", trigger: "cancelar" },
    ],
  },

  {
    id: "cancelar",
    message: "Thank for your visit, see you soon",
    end: true,
  },
  {
    id: "respuesta-pedidon",
    message: "Do you want a products suggestion?",
    trigger: "sugerencia",
  },
  {
    id: "sugerencia",
    options: [
      { value: "y", label: "Yes", trigger: "sugerencia-si" },
      { value: "n", label: "No", trigger: "cosa-mas-si" },
    ],
  },

  {
    id: "sugerencia-si",
    message: sugerencias(),
    trigger: "sugerencia-respuesta",
  },
  {
    id: "sugerencia-respuesta",
    message: "Do you want anything else?",
    trigger: "cosa-mas",
  },
  {
    id: "cosa-mas",
    options: [
      { value: "y", label: "Yes", trigger: "cosa-mas-si" },
      { value: "n", label: "No", trigger: "cosa-mas-no" },
    ],
  },
  {
    id: "cosa-mas-no",
    message: "Thank you for your visit, we are delighted to serve you ",
    end: true,
  },
  {
    id: "cosa-mas-si",
    message: "What do you want?",
    trigger: "respuesta-cosa-si",
  },
  {
    id: "respuesta-cosa-si",
    options: [
      {
        value: "info",
        label: "I want suggestions of your products",
        trigger: "sugerencia-si",
      },
      {
        value: "pedir",
        label: "I want to do an order",
        trigger: "respuesta-pedidoy",
      },
    ],
  },
  {
    id: "direccion",
    user: true,
    trigger: "direccion-respuesta",
  },
  {
    id: "direccion-respuesta",
    message: "Please , give us your telephone",
    trigger: "direccion-respuesta2",
  },
  {
    id: "direccion-respuesta2",
    options: [
      {
        value: "continue2",
        label: "Give us your telephone",
        trigger: "telefono",
      },
      { value: "cancel", label: "Cancel order", trigger: "cancelar" },
    ],
  },
  {
    id: "telefono",
    user: true,
    //validate only numbers
    validator: (value)=>{
        if(validator.isNumeric(value)){
            return true;
        }else{
            return 'Please enter a valid telephone';
        }
    },
    trigger: "telefono-respuesta",
  },
  {
    id: "telefono-respuesta",
    message: "Do you want extra cheese?",
    trigger: "respuesta-queso",
  },
  {
    id: "respuesta-queso",
    options: [
      { value: "si", label: "Yes", trigger: "queso-si" },
      { value: "no", label: "No", trigger: "queso-no" },
      { value: "cancel", label: "Cancel order", trigger: "cancelar" },
    ],
  },
  {
    id: "queso-si",
    message: "Please, choose the size of your pizza",
    trigger: "respuesta-queso-si",
  },
  {
    id: "queso-no",
    message: "Please, choose the size of your pizza",
    trigger: "respuesta-queso-no",
  },
  {
    id: "respuesta-queso-si",
    options: [
      { value: "s", label: "Small", trigger: "respuesta-pequena" },
      { value: "m", label: "Medium", trigger: "respuesta-mediana" },
      { value: "l", label: "Family", trigger: "respuesta-familiar" },
      { value: "cancel", label: "Cancel order", trigger: "cancelar" },
    ],
  },
  {
    id: "respuesta-queso-no",
    options: [
      { value: "s", label: "Small", trigger: "respuesta-pequena" },
      { value: "m", label: "Medium", trigger: "respuesta-mediana" },
      { value: "l", label: "Family", trigger: "respuesta-familiar" },
      { value: "cancel", label: "Cancel order", trigger: "cancelar" },
    ],
  },
  {
    id: "respuesta-pequena",
    message: "Do you want a drink?",
    trigger: "drink",
  },
  {
    id: "respuesta-mediana",
    message: "Do you want a drink?",
    trigger: "drink",
  },
  {
    id: "respuesta-familiar",
    message: "Do you want a drink?",
    trigger: "drink",
  },
  {
    id: "drink",
    options: [
      { value: "si", label: "Yes", trigger: "drink-si" },
      { value: "no", label: "No", trigger: "drink-no" },
      { value: "cancel", label: "Cancel order", trigger: "cancelar" },
    ],
  },
  {
    id: "drink-si",
    message: "Please, choose a drink",
    trigger: "drink-eleccion",
  },
  {
    id: "drink-eleccion",
    options: [
      { value: "cocacola", label: "Coca-cola", trigger: "coca-cola" },
      { value: "fanta", label: "Fanta", trigger: "fanta" },
      { value: "nestea", label: "Nestea", trigger: "nestea" },
      { value: "cancel", label: "Cancel order", trigger: "cancelar" },
    ],
  },
  {
    id: "fanta",
    message: "Do you want an ice-cream?",
    trigger: "ice-cream",
  },
  {
    id: "nestea",
    message: "Do you want an ice-cream?",
    trigger: "ice-cream",
  },

  {
    id: "coca-cola",
    message: "Do you want an ice-cream?",
    trigger: "ice-cream",
  },
  {
    id: "drink-no",
    message: "Do you want an ice-cream?",
    trigger: "ice-cream",
  },

  {
    id: "ice-cream",
    options: [
      { value: "si", label: "Yes", trigger: "ice-si" },
      { value: "no", label: "No", trigger: "ice-no" },
      { value: "cancel", label: "Cancel order", trigger: "cancelar" },
    ],
  },
  {
    id: "ice-si",
    message: "Please, choose an ice-cream",
    trigger: "ice-eleccion",
  },
  {
    id: "ice-eleccion",
    options: [
      { value: "si", label: "Oreo ice-cream", trigger: "ice-oreo" },
      { value: "cancel", label: "Cancel order", trigger: "cancelar" },
    ],
  },
  {
    id: "ice-oreo",
    message: "We have your data, how do you prefer to pay?",
    trigger: "pago_opciones",
  },

  {
    id: "ice-no",
    message: "We have your data, how do you prefer to pay?",
    trigger: "pago_opciones",
  },
  {
    id: "pago_opciones",
    options: [
      { value: "cash", label: "Cash", trigger: "cash" },
      { value: "credit card", label: "Credit card", trigger: "credit_card" },
      { value: "cancel", label: "Cancel order", trigger: "cancelar" },
    ],
  },
  {
    id: "cash",
    message:
      "When you recives the order, you will pay in cash to the delivery man. Thank you for your purchase",
    end: true,
  },
  {
    id: "credit_card",
    message: "Please, can you give me your credit card details?",
    trigger: "pago_tarjeta",
  },
  {
    id: "pago_tarjeta",
    user: true,
    //validate only numbers
    validator: (value)=>{
        if(validator.isNumeric(value)){
            return true;
        }else{
            return 'Please enter a valid telephone';
        }
    },
    trigger: "pago_tarjeta_confirmacion",
  },
  {
    id: "pago_tarjeta_confirmacion",
    message:
      "Thank you for your purchase, you will recive the order in 15 minutes",
    end: true,
  },
];

const Contenido = () => (
  <ThemeProvider theme={estilos}>
    <ChatBot
      headerTitle="Pizza Restaurant"
      speechSynthesis={{ enable: true, lang: "en" }}
      steps={steps}
    />
  </ThemeProvider>
);

export default Contenido;
