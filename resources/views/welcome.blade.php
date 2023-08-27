<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{getAllSettings()->general->site_name}}</title>
    <link rel="shortcut icon" href="{{asset(getAllSettings()->general->site_favicon)}}"/>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
<body>
<div id="app"></div>
</body>
</html>
