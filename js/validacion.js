const form = document.getElementById('formulario')
const buttom = document.getElementsByClassName('formulario__submit')

const name = document.getElementById('nombre')
const email = document.getElementById('email')
const phone = document.getElementById('telefono')
const mensaje = document.getElementById('mensaje')

const formIsValid = {
    name: false,
    email:false,
    phone:false,
    mensaje:false,
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    validateForm()
})

name.addEventListener('change', (e)=>{
    if (e.target.value.trim().length > 0) formIsValid.name = true
})

email.addEventListener('change', (e)=>{
    if (e.target.value.trim().length > 0) formIsValid.email = true
})

phone.addEventListener('change', (e)=>{
    if (e.target.value.trim().length > 0) formIsValid.phone = true
})

mensaje.addEventListener('change', (e)=>{
    if (e.target.value.trim().length > 0) formIsValid.mensaje = true
})

const validateForm = () =>{
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if (valid == -1) form.submit()
    else alert ("Aun quedan campos por completar")
}