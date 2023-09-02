<?php

function returnBack($error): \Illuminate\Http\JsonResponse
{
    return response()->json([
        'status' => 'error',
        'message' => $error->getMessage()
    ], $error->getCode());
}

function getAllSettings(): object
{
    $group = 'site.settings.';
    $data = (object)[
        "general" => (object)[
            "site_name" => setting($group . 'general.site_name'),
            "site_logo" => setting($group . 'general.site_logo'),
            "site_favicon" => setting($group . 'general.site_favicon'),
            "site_secondary_logo" => setting($group . 'general.site_secondary_logo'),
            "footer_detail" => setting($group . 'general.footer_detail'),
            "slogan" => setting($group . 'general.slogan')
        ],
        "contact" => (object)[
            'phone' => setting($group . 'contact_info.phone'),
            'mail' => setting($group . 'contact_info.mail'),
            'address' => setting($group . 'contact_info.address')
        ],
        "newsletter" => (object)[
            "title" => setting($group . 'newsletter.title'),
            "text" => setting($group . 'newsletter.text')
        ],
        "backlink" => (object)[
            "qrcode" => setting($group . 'backlink.qrcode'),
            "eshop" => setting($group . 'backlink.eshop'),
            "facebook" => setting($group . 'backlink.facebook'),
            "instagram" => setting($group . 'backlink.instagram'),
            "linkedin" => setting($group . 'backlink.linkedin'),
            "youtube" => setting($group . 'backlink.youtube')
        ]
    ];
    return $data;
}

function sliderInfo()
{
    $group = 'site.slider.';
    $data = (object)[
        "title" => setting($group . 'title'),
        "text" => setting($group . 'text'),
        "btn_text" => setting($group . 'btn_text'),
        "btn_link" => setting($group . 'btn_link'),
        "link" => setting($group . 'link'),
        "image_link" => setting($group . 'image_link'),
    ];
    return $data;
}

function aboutInfo()
{
    $group = 'site.about.';
    $data = (object)[
        "title" => setting($group . 'title'),
        "brief" => setting($group . 'brief'),
        "clients" => setting($group . 'clients'),
        "project" => setting($group . 'project'),
        "attributes" => setting($group . 'attributes')
    ];
    return $data;
}

function industryInfo()
{
    $group = 'site.';
    $data = setting($group . 'industry');
    return $data;
}

function technologyInfo()
{
    $group = 'site.';
    $data = setting($group . 'technology');
    return $data;
}

function storeGeneralData($generalSetting, $global, $request)
{
    $currentFile = $generalSetting->findSetting($global . 'general.site_logo');
    $secondaryFile = $generalSetting->findSetting($global . 'general.site_secondary_logo');
    $currentIcon = $generalSetting->findSetting($global . 'general.site_favicon');
    if ($request->hasFile("site_logo")) {
        $filename = time() . '-' . 'logo.' . fileInfo($request->site_logo)['extension'];
        $path = 'uploads/settings';
        if ($currentFile) {
            fileDelete($currentFile);
        }
        fileUpload($request->site_logo, $path, $filename);
        $site_logo = $path . '/' . $filename;
    }

    if ($request->hasFile("site_secondary_logo")) {
        $filename = time() . '-' . 'sec-logo.' . fileInfo($request->site_secondary_logo)['extension'];
        $path = 'uploads/settings';
        if ($secondaryFile) {
            fileDelete($secondaryFile);
        }
        fileUpload($request->site_secondary_logo, $path, $filename);
        $site_secondary_logo = $path . '/' . $filename;
    }

    if ($request->hasFile("site_favicon")) {
        $filename = time() . '-' . 'icon.' . fileInfo($request->site_favicon)['extension'];
        $path = 'uploads/settings';
        if ($currentIcon) {
            fileDelete($currentIcon);
        }
        fileUpload($request->site_favicon, $path, $filename);
        $site_favicon = $path . '/' . $filename;
    }
    $data = [
        "site_name" => $request->site_name,
        "slogan" => $request->slogan,
        "site_logo" => $request->hasFile("site_logo") ? $site_logo : $currentFile,
        "site_favicon" => $request->hasFile("site_favicon") ? $site_favicon : $currentIcon,
        "site_secondary_logo" => $request->hasFile("site_secondary_logo") ? $site_secondary_logo : $secondaryFile,
        "footer_detail" => $request->footer_detail,
    ];

    $savedData = setting([$global . "general" => $data]);
    return $savedData;
}

function storeContactInfoData($global, $request) {

    $data = [
        "phone" => $request->phone,
        "mail" => $request->mail,
        "address" => $request->address
    ];

    $savedData = setting([$global . "contact_info" => $data]);
    return $savedData;
}

function storeNewsletterData($global, $request)
{

    $data = [
        "title" => $request->title,
        "text" => $request->text
    ];
    $savedData = setting([$global . "newsletter" => $data]);
    return $savedData;
}

function storeBacklinkData($global, $request) {

    $data = [
        "qrcode" => $request->qrcode,
        "eshop" => $request->eshop,
        "facebook" => $request->facebook,
        "linkedin" => $request->linkedin,
        "youtube" => $request->youtube,
        "instagram" => $request->instagram
    ];
    return setting([$global . "backlink" => $data]);
}

function storeSliderData($global, $request)
{

    $currentFile = setting($global . 'slider.image_link');
    $imageLink = '';
    if ($request->hasFile("image_link")) {
        $filename = time() . '-' . 'slider.' . fileInfo($request->image_link)['extension'];
        $path = 'uploads/settings/slider';
        if ($currentFile) {
            fileDelete($currentFile);
        }
        fileUpload($request->image_link, $path, $filename);
        $imageLink = $path . '/' . $filename;
    }

    $data = [
        "title" => $request->title,
        "text" => $request->text,
        "link" => $request->link,
        "btn_text" => $request->btn_text,
        "btn_link" => $request->btn_link,
        "image_link" => $request->hasFile("image_link") ? $imageLink : $currentFile,
    ];
    return setting([$global . "slider" => $data]);
}

