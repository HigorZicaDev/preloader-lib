# Preloader-lib.js

Objetivo do projeto era criar um loader simples e super eficiente que pudesse ser iniciado apenas com uma declaração Javascript e o Import do CDN.

## Se esse projeto for útil pra você de alguma forma deixe uma ⭐ 

## Instalação

Não existe instalação você apenas precisa importar o CDN no seu arquivo HTML e Inicializar a biblioteca de pre-loader e adicionar a class="loading" ao element body do sua página.

```bash
    <script src="https://cdn.jsdelivr.net/gh/username/preloader-lib/preloader.js"></script>
    <script>
        // Inicializar a biblioteca de preloader
        PreloaderLib.init();
    </script>
```

## Exemplo de uso index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Component Loading Progress Bar</title>
</head>
<body class="loading">

    <div>
        <h1>Home Page</h1>
    </div>

    <script src="https://cdn.jsdelivr.net/gh/HigorZicaDev/preloader-lib/assets/js/preloader.js"></script>
    <script>
        // Inicializar a biblioteca de preloader
        PreloaderLib.init();
    </script>
</body>
</html>
```

