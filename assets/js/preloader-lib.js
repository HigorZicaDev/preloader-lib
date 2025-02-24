(function(global) {

    "use strict";

    // Definir a biblioteca
    var PreloaderLib = {};

    // Função para inicializar o preloader
    PreloaderLib.init = function(options) {
        var settings = Object.assign({
            preloaderSelector: "#preloader",
            loadingClass: "loading",
            delay: 700,
            fadeOutSpeed: 600 // em milissegundos
        }, options);

        var doc = document.documentElement;
        doc.setAttribute('data-useragent', navigator.userAgent);

        var ssPreloader = function() {
            window.addEventListener('load', function() {
                // Forçar a posição de rolagem para o topo ao atualizar a página
                window.scrollTo(0, 0);

                // Ocultar o preloader após um atraso
                setTimeout(function() {
                    var preloader = document.querySelector(settings.preloaderSelector);
                    preloader.style.transition = `opacity ${settings.fadeOutSpeed}ms`;
                    preloader.style.opacity = '0';

                    preloader.addEventListener('transitionend', function() {
                        preloader.style.display = 'none';
                        document.body.classList.remove(settings.loadingClass);
                    });
                }, settings.delay);
            });
        };

        ssPreloader();
    };

    // Expor a biblioteca para o escopo global
    global.PreloaderLib = PreloaderLib;

})(this);