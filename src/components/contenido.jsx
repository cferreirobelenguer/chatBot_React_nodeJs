import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const estilos = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#8B0000',
    headerFontColor: '#fff',
    headerFontSize: '16px',
    botBubbleColor: '#8B0000',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a'
};
const sugerencias=()=>{
    var array_sugerencias=['Prueba nuestro pollo crugiente chickenCrush', 'Tenemos helados de oreo deliciosos', 'Nuestra pizza barbacoa está para chuparse los dedos', 'Si te gusta el pepperoni no puedes perderte la pizza diabolo', 'Para los amantes del queso tenemos la pizza cuatro quesos', 'No puedes perderte nuestra pizza carbonara'];
    var valor=Math.floor(Math.random()*array_sugerencias.length);
    var sugerencia=array_sugerencias[valor];
    return sugerencia;
}

const steps = [
    {
        id: 'intro',
        message: 'Bienvenido a Pizza Planet 🍕. ¿Desea realizar un pedido?',
        trigger: 'respuesta-pedido'
    },
    {
        id: 'respuesta-pedido',
        options: [
            {value: 'y', label: "Sí", trigger: 'respuesta-pedidoy'},
            {value: 'n', label: "No", trigger: 'respuesta-pedidon'},
        ]
    },
    {
        id: 'respuesta-pedidoy',
        message: 'Por favor, indíquenos su dirección',
        trigger: 'direccion',
    },
    {
        id: 'respuesta-pedidon',
        message: '¿Deseas alguna sugerencia?',
        trigger: 'sugerencia',
    },
    {
        id: 'sugerencia',
        options: [
            {value: 'y', label: "Sí", trigger: 'sugerencia-si'},
            {value: 'n', label: "No", trigger: 'cosa-mas-si'},
        ]
    },
    
    {
        id: 'sugerencia-si',
        message: sugerencias(),
        trigger: 'sugerencia-respuesta',
    },
    {
        id: 'sugerencia-respuesta',
        message: '¿Deseas alguna cosa más?',
        trigger: 'cosa-mas',
    },
    {
        id: 'cosa-mas',
        options: [
            {value: 'y', label: "Sí", trigger: 'cosa-mas-si'},
            {value: 'n', label: "No", trigger: 'cosa-mas-no'},
        ]
    },
    {
        id: 'cosa-mas-no',
        message: 'Muchas gracias por visitarnos, estamos encantados de atenderte 😍',
        end:true
    },
    {
        id: 'cosa-mas-si',
        message: '¿Qué deseas?',
        trigger: 'respuesta-cosa-si'
    },
    {
        id: 'respuesta-cosa-si',
        options: [
            {value: 'info', label: "Quiero sugerencias de pedidos", trigger: 'sugerencia'},
            {value: 'pedir', label: "Quiero hacer un pedido", trigger: 'respuesta-pedidoy'},
        ]
    },
    {
        id: 'direccion',
        user:true,
        trigger: 'direccion-respuesta',
    },
    {
        id: 'direccion-respuesta',
        message: 'Por favor, indíquenos su número de teléfono',
        trigger: 'telefono',
    },
    {
        id: 'telefono',
        user:true,
        trigger: 'telefono-respuesta',
    },
    {
        id: 'telefono-respuesta',
        message: '¿Quieres extra de queso? 🧀',
        trigger: 'respuesta-queso'
    },
    {
        id: 'respuesta-queso',
        options: [
            {value: 'si', label: "Sí", trigger: 'queso-si'},
            {value: 'no', label: "No", trigger: 'queso-no'},
        ]
    },
    {
        id: 'queso-si',
        message: 'Por favor, indícanos el tamaño de tu pizza 🍕',
        trigger: 'respuesta-queso-si'
    },
    {
        id: 'queso-no',
        message: 'Por favor, indícanos el tamaño de tu pizza 🍕',
        trigger: 'respuesta-queso-no'
    },
    {
        id: 'respuesta-queso-si',
        options: [
            {value: 's', label: "Pequeña", trigger: 'respuesta-pequena'},
            {value: 'm', label: "Mediana", trigger: 'respuesta-mediana'},
            {value: 'l', label: "Familiar", trigger: 'respuesta-familiar'}
        ]
    },
    {
        id: 'respuesta-queso-no',
        options: [
            {value: 's', label: "Pequeña", trigger: 'respuesta-pequena'},
            {value: 'm', label: "Mediana", trigger: 'respuesta-mediana'},
            {value: 'l', label: "Familiar", trigger: 'respuesta-familiar'}
        ]
    },
    {
        id: 'respuesta-pequena',
        message: 'Se han recogido tus datos',
        end:true
    },
    {
        id: 'respuesta-mediana',
        message: 'Se han recogido tus datos',
        end:true
    },
    {
        id: 'respuesta-familiar',
        message: 'Se han recogido tus datos',
        end:true
    },
    
];

const Contenido = () => (
    <ThemeProvider theme={estilos}>
        <ChatBot steps={steps} />
    </ThemeProvider>
);

export default Contenido;