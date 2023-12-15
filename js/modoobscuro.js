document.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí
    const colorSwitch = document.getElementById('colorSwitch');
    // Resto de tu código
});

    const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
    function cambiaTema(ev) {
        if (ev.target.checked) {
            document.documentElement.setAttribute('tema', 'dark');
        } else {
            document.documentElement.setAttribute('tema', 'light');
        }
    }
    colorSwitch.addEventListener('change', cambiaTema);

     // JavaScript para activar/desactivar el modo oscuro
     function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode'); // Agrega o quita la clase 'dark-mode' en el body
    }
    