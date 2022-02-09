'use strict'

const contact = document.getElementById('contact');
const error = document.getElementById('contact-message');
const inputs = document.querySelectorAll('#contact input');
const expresions = {
    name: /^[A-Za-zÑñ]{1,25}$/,
    lastname: /^[A-Za-zÑñ]{1,25}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    born: /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/,
    age: /^[0-9]{1,3}$/
}
const fields = {
    name: false,
    lastname: false,
    email: false,
    born: false,
    age: false
}
var message = '';

const validate = ( e ) => {
    switch( e.target.name ){
        case 'name':
            validateField(expresions.name, e.target, 'name');         
        break;
        case 'lastname':
            validateField(expresions.lastname, e.target, 'lastname');
        break;
        case 'email':
            validateField(expresions.email, e.target, 'email');
        break;
        case 'born':
            validateField(expresions.born, e.target, 'born');
        break;
        case 'age':
            validateField(expresions.age, e.target, 'age');
        break;
    }
}

const validateField = ( expresion, input, field ) =>{
    if( expresion.test( input.value ) ){
        document.getElementById( `contact-${field}` ).classList.remove( 'contact-group-incorrect' );
        document.getElementById( `contact-${field}` ).classList.add( 'contact-group-correct' );
        fields[field] = true;
    } else {
        document.getElementById( `contact-${field}` ).classList.remove( 'contact-group-correct' );
        document.getElementById( `contact-${field}` ).classList.add( 'contact-group-incorrect' );
        fields[field] = false;
    }
}

inputs.forEach( ( input ) => {
    input.addEventListener( 'blur', validate);
} );

contact.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    if( fields.name && fields.lastname && fields.email && fields.born && fields.age ){
        contact.reset();
        message = '';
        console.log( 'El formulario se ha enviado exitosamente' )
    } else {
        if( !fields.name )
            message = message + 'El nombre no es válido<br>'   
        if( !fields.lastname )
            message = message + 'El apellido no es válido<br>'
        if( !fields.email )
            message = message + 'El email no es válido<br>'
        if( !fields.born )
            message = message + 'La fecha de nacimietno no es válida<br>'
        if( !fields.age )
            message = message + 'La edad no es válida'
        error.innerHTML = `<p>El formulario no se ha podido envíar!<br>${message}</p>`;
        message = '';
    }
} );