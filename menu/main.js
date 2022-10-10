import countdown from "./cuenta_regresiva.js";
import hamburguerMenu from "./menu_hamburguesa.js";
import {digitalClock,alarm} from"./reloj.js";
import {moveBall , shortcuts } from "./teclado.js";
import scrollTopButton from "./botton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto-responsive.js";
import responsiveTester from "./prueba-responsive.js";
import userDevicenInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";



 const d=document;

d.addEventListener('DOMContentLoaded',()=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock('#reloj',"#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma_2.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","sep 16,2023 12:13:19","Feliz cumpleaños y amigo");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia('youtube','(min-width:1024px)',`<a href='https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=96' target='_blank'rel='noopener'>Ver video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia('gmaps','(min-width:1024px)',`<a href='https://goo.gl/maps/WEVAZopaE1GnTYbg9' target='_blank'rel='noopener' >Ver mapa </a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126910.79619578429!2d-75.596392!3d6.2686779999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290e4f870f69%3A0xf57f97b59ef52c39!2sEstadio%20de%20F%C3%BAtbol%20Atanasio%20Girardot!5e0!3m2!1ses!2sco!4v1665001119671!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDevicenInfo('user-device');
    webCam('webcam');
    getGeolocation('geolocation');
});

d.addEventListener('keydown',e=>{
    shortcuts(e);
    moveBall(e,'.ball','.stage');
    
});


darkTheme('.dark-theme-btn','dark-mode');
networkStatus();