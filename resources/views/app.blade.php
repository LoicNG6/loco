<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>NGUESSIE Loïc</title>
    <link rel="stylesheet" href="{{ asset('css/app.scss') }}">
</head>

<body class="antialiased">
    <div id="app">
        <v-app>
            <app />
        </v-app>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>

</body>

</html>