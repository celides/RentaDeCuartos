const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')



document.addEventListener('DOMContentLoaded', function () {
    var hamburguer = document.querySelector('.hamburguer');
    var menuNavegacion = document.querySelector('.menu-navegacion');

    hamburguer.addEventListener('click', function () {
        menuNavegacion.classList.toggle('active');
    });
});

=======
const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})
>>>>>>> 6713f613258c744d81352c5fec7203d4f196ad3d
