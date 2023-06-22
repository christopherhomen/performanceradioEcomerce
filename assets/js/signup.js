// /*Código del registro:/Inicializar una variable que reciba datos del DOM*/
// const signupForm = document.querySelector('#signupForm')

// //Inicializaremos un evento para que nos envíe los datos con el botón
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     //Referenciar los datos
//     const name = document.querySelector('#name').value
//     const email = document.querySelector('#email').value
//     const password = document.querySelector('#password').value

//     //Trae los datos almacenados del arreglo que se nombra (users)
//     //Nos convierte los datos en JSON en el localstorage
//     const Users = JSON.parse(localStorage.getItem('users')) || []

//     //la función find() nos ayuda a buscar los datos almacenados
//     //Nos comprueba si el correo que se ingresa es igual al que esta guardado en el localstorage
//     const isUserRegistered = Users.find(user => user.email === email)

//     //Realizaremos una comprobación
//     if(isUserRegistered) {
//         return alert('El usuario ya esta registrado! , intentalo con otro')
//     }
//     //Agregaremos los datos al objeto
//     Users.push({name: name, email: email, password: password})
//     localStorage.setItem('users', JSON.stringify(Users))

//     alert('Registro Exitoso')
//     window.location.href = 'iniciosesionLS.html'
// })

const signupForm = document.querySelector('#signupForm')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []

    const isUserRegistered = Users.find(user => user.email === email)

    if(isUserRegistered) {
        return Swal.fire('El usuario ya esta registrado! , intentalo con otro')
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))

    Swal.fire({
        title: 'Registro Exitoso',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            window.location.href = 'iniciosesionLS.html'
        }
    })
})
