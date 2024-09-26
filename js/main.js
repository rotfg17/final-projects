
    /*this code works for the active when you press a nav*/
    document.addEventListener('DOMContentLoaded', function() {
        var links = document.querySelectorAll('.menu-container li a');
    
        links.forEach(function(link) {
            link.addEventListener('click', function(event) {
                // Eliminar la clase "active" de todos los enlaces
                links.forEach(function(link) {
                    link.classList.remove('active');
                });
    
                // Agregar la clase "active" solo al enlace actual
                event.target.classList.add('active');
            });
        });
    });
    
    /*This one work for button back to top*/
    document.addEventListener('DOMContentLoaded', function() {
        var backButton = document.querySelector('.back-top');
        var homeLink = document.querySelector('.menu-container a[href="#home"]');
    
        backButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    
            // Desplazamiento suave al encabezado
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
    
            // Establecer el enlace "Home" como activo
            setActiveLink(homeLink);
        });
    
        function setActiveLink(link) {
            // Eliminar la clase "active" de todos los enlaces
            var links = document.querySelectorAll('.menu-container a');
            links.forEach(function(link) {
                link.classList.remove('active');
            });
    
            // Agregar la clase "active" al enlace proporcionado
            link.classList.add('active');
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const tabButtons = document.querySelectorAll(".qualification__button");
        const tabContents = document.querySelectorAll(".qualification__content");
    
        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remover la clase activa de todos los botones
                tabButtons.forEach(btn => btn.classList.remove("qualification__active"));
                
                // Añadir la clase activa al botón seleccionado
                button.classList.add("qualification__active");
    
                // Obtener el valor del atributo data-tab para identificar la sección
                const tab = button.getAttribute("data-tab");
    
                // Ocultar todas las secciones
                tabContents.forEach(content => {
                    content.classList.remove("qualification__content-active");
                });
    
                // Mostrar la sección correspondiente
                const activeContent = document.querySelector(`[data-content="${tab}"]`);
                activeContent.classList.add("qualification__content-active");
            });
        });
    });
    


