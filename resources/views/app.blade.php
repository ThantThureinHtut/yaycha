<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
         <meta name="description" content="A minimalist social blogging platform for text-only posts and meaningful discussions.">
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmYWNjMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1yYWJiaXQtaWNvbiBsdWNpZGUtcmFiYml0Ij48cGF0aCBkPSJNMTMgMTZhMyAzIDAgMCAxIDIuMjQgNSIvPjxwYXRoIGQ9Ik0xOCAxMmguMDEiLz48cGF0aCBkPSJNMTggMjFoLThhNCA0IDAgMCAxLTQtNCA3IDcgMCAwIDEgNy03aC4yTDkuNiA2LjRhMSAxIDAgMSAxIDIuOC0yLjhMMTUuOCA3aC4yYzMuMyAwIDYgMi43IDYgNnYxYTIgMiAwIDAgMS0yIDJoLTFhMyAzIDAgMCAwLTMgMyIvPjxwYXRoIGQ9Ik0yMCA4LjU0VjRhMiAyIDAgMSAwLTQgMHYzIi8+PHBhdGggZD0iTTcuNjEyIDEyLjUyNGEzIDMgMCAxIDAtMS42IDQuMyIvPjwvc3ZnPg==" type="image/png">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
