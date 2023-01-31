var copiar_portapapeles = "copiado al portapapeles";
window.onload=init;


function init() {
    cargar_cambiar_idioma();
    cargar_tooltips();
    cargar_copiar_portapapeles();
}

function cargar_copiar_portapapeles() {
    var icono = document.getElementById("icono-correo")

    icono.addEventListener("mouseover", function(e) {
	  icono.style.color ='#3366CCD7';
    });

    icono.addEventListener("mouseout", function(e) {
	  icono.style.color="#3366CC";
    });

    icono.addEventListener("click", function(e) {
        navigator.clipboard.writeText("leandro.ezequiel.alfaro.01@gmail.com");
        alert("'leandro.ezequiel.alfaro.01@gmail.com' " + copiar_portapapeles);
    });
}

function cargar_tooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}

function cargar_cambiar_idioma() {
    document.getElementById("selector-idioma").onchange = function() {
        var idioma = this.value;
        
        if(idioma=="es")
        {
            document.getElementById("titulo-pagina").innerHTML="Leandro Alfaro | Desarrollador";
            
            document.getElementById("nav-bar-Sobre-mi").innerHTML="Sobre mí";
            document.getElementById("nav-bar-Proyectos").innerHTML="Proyectos";
            document.getElementById("nav-bar-Estudios").innerHTML="Estudios";
            document.getElementById("nav-bar-Contacto").innerHTML="Contacto";
            
            document.getElementById("hero-titulo").innerHTML="Hola, soy Leandro Alfaro";
            document.getElementById("hero-subtitulo").innerHTML="Desarrollador de software";
            
            document.getElementById("titulo-seccion-sobre-mi").innerHTML="Sobre mí";
            document.getElementById("seccion-sobre-mi-p1").innerHTML="¡Hola! ¿como están? ¡yo de maravilla! estoy actualmente terminando mi grado en ingeniería en informatica además de otros proyectos en los que estoy trabajando. Me considero un apasionado por la tecnología en general pero disfruto mucho de programar, aprender y de por sobre todo de resolver problemas.";
            document.getElementById("seccion-sobre-mi-p2").innerHTML="Me considero una persona seria, organizada y que sobre todo tiene la habilidad de adquirir conocimiento en poco tiempo. Soy Artista marcial, práctico kick-boxing y soy primer dan de Taekwondo, además de que me encanta hacer musculación. Soy una persona que le encanta trabajar, compartir y vivir experiencias con otros.";
            document.getElementById("seccion-sobre-mi-p3").innerHTML="Estoy interesado en participar de proyectos donde pueda desempeñar mis habilidades con gente positiva y con la que poder mejorar y aprender.";
            
            document.getElementById("seccion-proyectos-titulo").innerHTML="Mis proyectos recientes";
            document.getElementById("seccion-proyectos-subtitulo").innerHTML="Estos son algunos proyectos que he creado recientemente";
            
            document.getElementById("seccion-estudios-titulo").innerHTML="Mis estudios";
            
            document.getElementById("seccion-estudios-tecnicatura-titulo").innerHTML="Tecnicatura universitaria en desarrollo de software";
            document.getElementById("seccion-estudios-tecnicatura-descripcion").innerHTML="El ciclo básico del grado de ingeniería en informatica me dio la posibilidad de tener una base sólida en matemática, lógica, análisis de problemas y me dio los fundamentos de los sistemas discretos, y de las tecnologías de la información.";
            document.getElementById("seccion-estudios-tecnicatura-promedio").innerHTML="Promedio: 8.038";

            document.getElementById("seccion-estudios-ingenieria-titulo").innerHTML="Ingeniería en informatica";
            document.getElementById("seccion-estudios-ingenieria-descripcion").innerHTML="La carrera me dio la posibilidad de tener una vision balanceada entre la teoría y la práctica. Adicionalmente tambien obtuve mucho conocimiento y la posibilidad de poner en práctica mis habilidades blandas, trabajo en equipo, liderazgo, comunicación, entre otros.";
            document.getElementById("seccion-estudios-ingenieria-promedio").innerHTML="Promedio actual: 8.077";

            document.getElementById("seccion-estudios-ingles-titulo").innerHTML="Inglés";
            document.getElementById("seccion-estudios-ingles-descripcion").innerHTML="Durante 7 años cursé en un instituto especializado en lengua inglesa, finalicé mis estudios en el año 2017.";

            document.getElementById("seccion-estudios-master_php-titulo").innerHTML="Master en PHP, SQL, POO, MVC, Laravel, Symfony, WordPress+";
            document.getElementById("seccion-estudios-master_php-descripcion").innerHTML="Durante el master de más de 56hs de cursada logre obtener conocimientos profundos sobre la programación web, tanto de front-end como en back-end. Desde PHP 8, mySQL, frameworks y Habilidades full-stack.";
            
            /* BADGES*/
            document.getElementById("badge-analisis-sistemas").innerHTML="Análisis de sistemas";
            document.getElementById("badge-implementacion").innerHTML="implementacion";
            document.getElementById("badge-analisis-matematico").innerHTML="Análisis matemático";
            document.getElementById("badge-estadistica").innerHTML="estadística";
            document.getElementById("badge-programacion").innerHTML="programacion";

            document.getElementById("badge-ingenieria-software").innerHTML="Ingeniería de software";
            document.getElementById("badge-diseno").innerHTML="Diseño";

            document.getElementById("badge-escritura").innerHTML="Escritura";
            document.getElementById("badge-lectura").innerHTML="Lectura";
            document.getElementById("badge-conversacion").innerHTML="Conversación fluida";

            document.getElementById("badge-librerias").innerHTML="Librerias";
            /*FIN BADGES*/

            document.getElementById("seccion-contacto-titulo").innerHTML="Contacto";
            document.getElementById("seccion-contacto-subtitulo").innerHTML="Contáctame para cualquier tipo de proyecto, tanto de corto como a largo plazo. O cualquier pregunta que quieras hacerme no dudes en enviarmela.";

		document.getElementsByName('name')[0].placeholder='Tu nombre...';		
		document.getElementsByName('email')[0].placeholder='Tu email...';
		document.getElementsByName('subject')[0].placeholder='Asunto...';
		document.getElementsByName('message')[0].placeholder='Tu mensaje...';

            document.getElementById("form-submit").innerHTML="Enviar mensaje";		

		copiar_portapapeles = "copiado al portapapeles";

        }
        else if(idioma=="en")
        {
            document.getElementById("titulo-pagina").innerHTML="Leandro Alfaro | Developer";
            
            document.getElementById("nav-bar-Sobre-mi").innerHTML="About me";
            document.getElementById("nav-bar-Proyectos").innerHTML="Projects";
            document.getElementById("nav-bar-Estudios").innerHTML="Education";
            document.getElementById("nav-bar-Contacto").innerHTML="Contact";
            
            document.getElementById("hero-titulo").innerHTML="Hi, I'm Leandro Alfaro";
            document.getElementById("hero-subtitulo").innerHTML="Software developer";
            
            document.getElementById("titulo-seccion-sobre-mi").innerHTML="About me";
            document.getElementById("seccion-sobre-mi-p1").innerHTML="Hey! How is it going? I am very happy! Right now I'm finishing my degree in computing engineering besides, i'm working in other interesting projects, I consider myself a techonology passionated person. Also, i enjoy a lot programming, learning and especially solving problems.";
            document.getElementById("seccion-sobre-mi-p2").innerHTML="I could be considered as a serious person, organized but above all i have the ability to acquire knowledge in short perioud of time. I'm a martial artist, I practice kick-boxing and I got a taekwondo frist dan. What's more, i really like the fitness world. I love working while I share and live experiences with others.";
            document.getElementById("seccion-sobre-mi-p3").innerHTML="I'm interested in participating in projects where i can perform my abilities with positive people improving my skills and getting more knowledge in the process.";
            
            document.getElementById("seccion-proyectos-titulo").innerHTML="My recent projects";
            document.getElementById("seccion-proyectos-subtitulo").innerHTML="These are some of the projects I've been working recently";
            
            document.getElementById("seccion-estudios-titulo").innerHTML="Education";
            document.getElementById("seccion-estudios-tecnicatura-titulo").innerHTML="Technician in software development";
            document.getElementById("seccion-estudios-tecnicatura-descripcion").innerHTML="The basic cicle of engineering computing degree gave me the posibility of having a solid base in maths, locic, analysis of problems and gave me the fundamentals of discrete systems and from information technologies.";
            document.getElementById("seccion-estudios-tecnicatura-promedio").innerHTML="average qualification: 8.038";

            document.getElementById("seccion-estudios-ingenieria-titulo").innerHTML="Degree in computing engineering";
            document.getElementById("seccion-estudios-ingenieria-descripcion").innerHTML="The carreer gave me the posibility to have a balanced vision betweeen teoric and practice. In addition, I got a lot of knowledge and the posibility to put in practice my soft skills such as team working, leadership, comunication, and more.";
            document.getElementById("seccion-estudios-ingenieria-promedio").innerHTML="Average qualification: 8.077";

            document.getElementById("seccion-estudios-ingles-titulo").innerHTML="English";
            document.getElementById("seccion-estudios-ingles-descripcion").innerHTML="For 7 year i'd coursed in an institute specialized in english language. I finished my studies in 2017.";

            document.getElementById("seccion-estudios-master_php-titulo").innerHTML="Master in PHP, SQL, POO, MVC, Laravel, Symfony, WordPress+";
            document.getElementById("seccion-estudios-master_php-descripcion").innerHTML="During the master that lasted more than 56 hours, I archivied deep knowledge in web development, both  front-end and back-end. Since PHP 8, mySQL, frameworks and full-stack abilities.";

            /*BADGES*/
            document.getElementById("badge-analisis-sistemas").innerHTML="system analysis";
            document.getElementById("badge-implementacion").innerHTML="implementation";
            document.getElementById("badge-analisis-matematico").innerHTML="math calculus";
            document.getElementById("badge-estadistica").innerHTML="statistics";
            document.getElementById("badge-programacion").innerHTML="programming";
            
            document.getElementById("badge-ingenieria-software").innerHTML="Ingeniería de software";
            document.getElementById("badge-diseno").innerHTML="Design";

            document.getElementById("badge-escritura").innerHTML="Writing";
            document.getElementById("badge-lectura").innerHTML="Reading";
            document.getElementById("badge-conversacion").innerHTML="Fluid conversation";

            document.getElementById("badge-librerias").innerHTML="Libraries";
            /*FIN BADGES*/

            document.getElementById("seccion-contacto-titulo").innerHTML="Contact";
            document.getElementById("seccion-contacto-subtitulo").innerHTML="Contact me for any kind of project, since short to long ones. If you have any question don't hesitate to send me a message.";
	
		document.getElementsByName('name')[0].placeholder='Your name...';		
		document.getElementsByName('email')[0].placeholder='Your email...';
		document.getElementsByName('subject')[0].placeholder='Subject...';
		document.getElementsByName('message')[0].placeholder='Your message...';

            document.getElementById("form-submit").innerHTML="Send message";		

		copiar_portapapeles = "copied to clipboard";

        }

    };

}


