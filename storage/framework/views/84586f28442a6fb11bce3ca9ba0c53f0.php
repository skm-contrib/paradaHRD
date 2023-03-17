<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300;500;700;900&display=swap" rel="stylesheet">


        <?php echo app('Illuminate\Foundation\Vite')('resources/css/app.css'); ?>
    </head>
    <body class="antialiased">
        <div id="app"></div>

        <?php echo app('Illuminate\Foundation\Vite')('resources/js/app.js'); ?>
    </body>
</html>
<?php /**PATH D:\Practice\paradaHRD\resources\views/app.blade.php ENDPATH**/ ?>