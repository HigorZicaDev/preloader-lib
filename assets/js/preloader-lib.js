(function(global) {

    "use strict";

    // Definir a biblioteca
    var PreloaderLib = {};

    // Função para adicionar CSS ao documento
    function addStyles(css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.head.appendChild(style);
    }

    // Função para criar o preloader no DOM
    function createPreloader() {
        var preloader = document.createElement('div');
        preloader.id = 'preloader';
        preloader.innerHTML = '<div id="loader"></div>';
        document.body.appendChild(preloader);
    }

    // Função para inicializar o preloader
    PreloaderLib.init = function(options) {
        var settings = Object.assign({
            preloaderSelector: "#preloader",
            loadingClass: "loading",
            delay: 700,
            fadeOutSpeed: 600 // em milissegundos
        }, options);

        var css = `
            #preloader {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #ffffff;
                z-index: 800;
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: opacity ${settings.fadeOutSpeed}ms;
            }
            #loader {
                width: 100px;
                height: 10px;
                background: #dedede;
                position: relative;
                overflow: hidden;
            }
            #loader::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 0;
                background: #39b54a;
                animation: loading 2s linear infinite;
            }
            @keyframes loading {
                0% { width: 0; }
                100% { width: 100%; }
            }
            body.loading {
                overflow: hidden;
            }
            body.loading > *:not(#preloader) {
                display: none;
            }
        `;

        addStyles(css);

        if (!document.querySelector(settings.preloaderSelector)) {
            createPreloader();
        }

        var doc = document.documentElement;
        doc.setAttribute('data-useragent', navigator.userAgent);

        var ssPreloader = function() {
            window.addEventListener('load', function() {
                // Forçar a posição de rolagem para o topo ao atualizar a página
                window.scrollTo(0, 0);

                // Ocultar o preloader após um atraso
                setTimeout(function() {
                    var preloader = document.querySelector(settings.preloaderSelector);
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