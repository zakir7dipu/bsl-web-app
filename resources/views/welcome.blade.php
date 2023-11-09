<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 40px;
            left: 40px;
            background-color: #25d366;
            color: #FFF;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 2px 2px 3px #999;
            z-index: 100;
        }

        .my-float {
            margin-top: 16px;
        }
    </style>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
<body>
<div id="app"></div>

{{--<a href="https://api.whatsapp.com/send?phone=01755597770&text=Hi, I want to know more about Bizz Solutions. Can you help me, please?"--}}
{{--   class="float" target="_blank"> <i class="fa fa-whatsapp my-float"></i></a>--}}

{{--<div id="fb-root"></div>--}}

{{--<!-- Your Chat plugin code -->--}}
{{--<div id="fb-customer-chat" class="fb-customerchat">--}}
{{--</div>--}}

{{--<script>--}}
{{--    var chatbox = document.getElementById('fb-customer-chat');--}}
{{--    chatbox.setAttribute("page_id", "906654342836337");--}}
{{--    chatbox.setAttribute("attribution", "biz_inbox");--}}
{{--</script>--}}

{{--<!-- Your SDK code -->--}}
{{--<script>--}}
{{--    window.fbAsyncInit = function () {--}}
{{--        FB.init({--}}
{{--            xfbml: true,--}}
{{--            version: 'v18.0'--}}
{{--        });--}}
{{--    };--}}

{{--    (function (d, s, id) {--}}
{{--        var js, fjs = d.getElementsByTagName(s)[0];--}}
{{--        if (d.getElementById(id)) return;--}}
{{--        js = d.createElement(s);--}}
{{--        js.id = id;--}}
{{--        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';--}}
{{--        fjs.parentNode.insertBefore(js, fjs);--}}
{{--    }(document, 'script', 'facebook-jssdk'));--}}
{{--</script>--}}
</body>
</html>
