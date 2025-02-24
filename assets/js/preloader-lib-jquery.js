(function(global, $) {

    "use strict";

    // Definir a biblioteca
    var PreloaderLib = {};

    // Função para inicializar o preloader
    PreloaderLib.init = function(options) {
        var settings = $.extend({
            preloaderSelector: "#preloader",
            loadingClass: "loading",
            delay: 500,
            fadeOutSpeed: 'slow'
        }, options);

        var $WIN = $(window);
        var doc = document.documentElement;
        doc.setAttribute('data-useragent', navigator.userAgent);

        var ssPreloader = function() {
            $WIN.on('load', function() {
                $('html, body').animate({ scrollTop: 0 }, 'normal');
                $(settings.preloaderSelector).delay(settings.delay).fadeOut(settings.fadeOutSpeed, function() {
                    $('body').removeClass(settings.loadingClass);
                });
            });
        };

        ssPreloader();
    };

    // Expor a biblioteca para o escopo global
    global.PreloaderLib = PreloaderLib;

})(this, jQuery);