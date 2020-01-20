import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';

let titulo = React.createElement('h2', {className:'h2'}, 'Formulario de Registro');

const icon = React.createFactory('i');
const label = React.createFactory('label');
const input = React.createFactory('input');

let label1 = label({for: 'nombre'}, icon({className: 'fa fa-user icon col-lg-1'},''));
let input1 = input({id:'nombre',type: 'text',placeholder: 'Nombre de Usuario', className: 'col-lg-11'});
let datos1 = [label1, input1];
let div1 = React.createElement('div',{className: 'form-group col-lg-9'}, datos1);

let label2 = label({for: 'correo'}, icon({className: 'fa fa-envelope icon col-lg-1'},''));
let input2 = input({id:'correo',type: 'text',placeholder: 'Correo electrónico', className: 'col-lg-11'});
let datos2 = [label2, input2];
let div2 = React.createElement('div',{className: 'form-group col-lg-9'}, datos2);

let label3 = label({}, icon({className: 'fa fa-key icon col-lg-1'},''));
let input3 = input({id: 'password', type: 'password', placeholder: 'Contraseña', className: 'col-lg-11'});
let datos3 = [label3, input3];
let div3 = React.createElement('div', {className: 'form-group col-lg-9'}, datos3);

let button = React.createElement('button', {type: 'button', className: 'btn btn-primary col-lg-9'}, 'Registrarse');

let restoDIV = [titulo, div1, div2, div3, button];
let form = React.createElement('form',{className: 'col-lg-9'}, restoDIV);


ReactDOM.render(form, document.getElementById('form'));
