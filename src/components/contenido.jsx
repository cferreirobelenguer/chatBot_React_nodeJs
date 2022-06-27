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
    var array_sugerencias=['Try our new carbonara pizza', 'We have ice-cream oreo delicious', 'Our barbacue pizza is a good option', 'If you like pepperoni, you have to try our diabolo pizza', 'Do you like cheese?, try our four stations pizza '];
    var valor=Math.floor(Math.random()*array_sugerencias.length);
    var sugerencia=array_sugerencias[valor];
    return sugerencia;
}

const steps = [
    {
        id: 'intro',
        message: 'Welcome to Pizza Restaurant. ¿Do you want to do an order?',
        trigger: 'respuesta-pedido'
    },
    {
        id: 'respuesta-pedido',
        options: [
            {value: 'y', label: "Yes", trigger: 'respuesta-pedidoy'},
            {value: 'n', label: "No", trigger: 'respuesta-pedidon'},
        ]
    },
    {
        id: 'respuesta-pedidoy',
        message: 'Please, give us your address',
        trigger: 'respuesta-pedidoy2'
    },
    {
        id:'respuesta-pedidoy2',
        options: [
            {value: 'continue', label: "Give us your address", trigger: 'direccion'},
            {value: 'cancel', label: "Cancel order", trigger: 'cancelar'},
            
        ]

    },
    {
        id: 'cancelar',
        message: 'Thank for your visit, see you soon',
        end:true
    },
    {
        id: 'respuesta-pedidon',
        message: 'Do you want a products suggestion?',
        trigger: 'sugerencia',
    },
    {
        id: 'sugerencia',
        options: [
            {value: 'y', label: "Yes", trigger: 'sugerencia-si'},
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
        message: 'Do you want anything else?',
        trigger: 'cosa-mas',
    },
    {
        id: 'cosa-mas',
        options: [
            {value: 'y', label: "Yes", trigger: 'cosa-mas-si'},
            {value: 'n', label: "No", trigger: 'cosa-mas-no'},
        ]
    },
    {
        id: 'cosa-mas-no',
        message: "Thank you for your visit, we are delighted to serve you ",
        end:true
    },
    {
        id: 'cosa-mas-si',
        message: 'What do you want?',
        trigger: 'respuesta-cosa-si'
    },
    {
        id: 'respuesta-cosa-si',
        options: [
            {value: 'info', label: "I want suggestions of your products", trigger: 'sugerencia-si'},
            {value: 'pedir', label: "I want to do an order", trigger: 'respuesta-pedidoy'},
        ]
    },
    {
        id: 'direccion',
        user:true,
        trigger: 'direccion-respuesta',
    },
    {
        id: 'direccion-respuesta',
        message: 'Please , give us your telephone',
        trigger: 'direccion-respuesta2',
    },
    {
        id:'direccion-respuesta2',
        options: [
            {value: 'continue2', label: "Give us your telephone", trigger: 'telefono'},
            {value: 'cancel', label: "Cancel order", trigger: 'cancelar'},
            
        ]

    },
    {
        id: 'telefono',
        user:true,
        trigger: 'telefono-respuesta',
    },
    {
        id: 'telefono-respuesta',
        message: 'Do you want extra cheese?',
        trigger: 'respuesta-queso'
    },
    {
        id: 'respuesta-queso',
        options: [
            {value: 'si', label: "Yes", trigger: 'queso-si'},
            {value: 'no', label: "No", trigger: 'queso-no'},
            {value: 'cancel', label: "Cancel order", trigger: 'cancelar'},
        ]
    },
    {
        id: 'queso-si',
        message: 'Please, tell us the size of your pizza',
        trigger: 'respuesta-queso-si'
    },
    {
        id: 'queso-no',
        message: 'Please, tell us the size of your pizza',
        trigger: 'respuesta-queso-no'
    },
    {
        id: 'respuesta-queso-si',
        options: [
            {value: 's', label: "Small", trigger: 'respuesta-pequena'},
            {value: 'm', label: "Medium", trigger: 'respuesta-mediana'},
            {value: 'l', label: "Family", trigger: 'respuesta-familiar'},
            {value: 'cancel', label: "Cancel order", trigger: 'cancelar'},
        ]
    },
    {
        id: 'respuesta-queso-no',
        options: [
            {value: 's', label: "Small", trigger: 'respuesta-pequena'},
            {value: 'm', label: "Medium", trigger: 'respuesta-mediana'},
            {value: 'l', label: "Family", trigger: 'respuesta-familiar'},
            {value: 'cancel', label: "Cancel order", trigger: 'cancelar'},
        ]
    },
    {
        id: 'respuesta-pequena',
        message: 'Do you want a drink?',
        trigger:'drink'
        
    },
    {
        id: 'respuesta-mediana',
        message: 'Do you want a drink?',
        trigger:'drink'
    },
    {
        id: 'respuesta-familiar',
        message: 'Do you want a drink?',
        trigger:'drink'
    },
    {
        id:'drink',
        options: [
            {value: 'si', label: "Yes", trigger: 'drink-si'},
            {value: 'no', label: "No", trigger: 'drink-no'},
            {value: 'cancel', label: "Cancel order", trigger: 'cancelar'},
        ]
    },
    {
        id: 'drink-si',
        message: 'Please, choose a drink',
        trigger:'drink-eleccion'
    },
    {
        id:'drink-eleccion',
        options: [
            {value: 'cocacola', label: "Coca-cola", trigger: 'coca-cola'},
            {value: 'fanta', label: "Fanta", trigger: 'fanta'},
            {value: 'nestea', label: "Nestea", trigger: 'nestea'},
            {value: 'cancel', label: "Cancel order", trigger: 'cancelar'},
        ]
    },
    {
        id: 'fanta',
        message: 'Do you want an ice-cream?',
        trigger:'ice-cream'
    },
    {
        id: 'nestea',
        message: 'Do you want an ice-cream?',
        trigger:'ice-cream'
    },
    
    {
        id: 'coca-cola',
        message: 'Do you want an ice-cream?',
        trigger:'ice-cream'
    },
    {
        id: 'drink-no',
        message: 'Do you want an ice-cream?',
        trigger:'ice-cream'
    },
    
    {
        id:'ice-cream',
        options: [
            {value: 'si', label: "Yes", trigger: 'ice-si'},
            {value: 'no', label: "No", trigger: 'ice-no'},
            {value: 'cancel', label: "Cancel order", trigger: 'cancelar'},
        ]
    },
    {
        id: 'ice-si',
        message: 'Please, choose an ice-cream',
        trigger:'ice-eleccion'
    },
    {
        id: 'ice-eleccion',
        options: [
            {value: 'si', label: "Oreo ice-cream", trigger: 'ice-oreo'},
            {value: 'cancel', label: "Cancel order", trigger: 'cancelar'},
        ]
    },
    {
        id: 'ice-oreo',
        message: 'We have your data',
        end:true
    },
    
    {
        id: 'ice-no',
        message: 'We have your data',
        end:true
    },
    

    
    
];

const Contenido = () => (
    <ThemeProvider theme={estilos}>
        <ChatBot 
            headerTitle="Pizza Restaurant"
            speechSynthesis={{ enable: true, lang: "en" }}
        steps={steps} />
    </ThemeProvider>
);

export default Contenido;