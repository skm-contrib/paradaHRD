<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Парада відділ кадрів</title>

        <link rel="icon" type="image/png" href="/pvkicon.png">


        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300;500;700;900&display=swap" rel="stylesheet">


        @vite('resources/css/app.css')
    </head>
    <body class="antialiased">
        <div id="app"></div>
            <script type="module" src="http://localhost:5173/@vite/client"></script>
            <script type="module" src="http://localhost:5173/main.js"></script>
        @vite('resources/js/app.js')
    </body>
</html>
