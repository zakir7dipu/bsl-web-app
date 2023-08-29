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
        "link" => setting($group . 'link'),
    ];
    return $data;
}

function aboutInfo()
{
    $group = 'site.about.';
    $data = (object)[
        "title" => setting($group . 'title'),
        "clients" => setting($group . 'clients'),
        "project" => setting($group . 'project'),
        "attributes" => (object)[
            "high-quality" => (object)[
                "bg" => setting($group . 'attributes.high-quality.bg'),
                "icon" => setting($group . 'attributes.high-quality.icon'),
                "hoverIcon" => setting($group . 'attributes.high-quality.hoverIcon'),
                "brief" => setting($group . 'attributes.high-quality.brief'),
            ],
            "full-stack-teams" => (object)[
                "bg" => setting($group . 'attributes.full-stack-teams.bg'),
                "icon" => setting($group . 'attributes.full-stack-teams.icon'),
                "hoverIcon" => setting($group . 'attributes.full-stack-teams.hoverIcon'),
                "brief" => setting($group . 'attributes.full-stack-teams.brief'),
            ],
            "agile-approach" => (object)[
                "bg" => setting($group . 'attributes.agile-approach.bg'),
                "icon" => setting($group . 'attributes.agile-approach.icon'),
                "hoverIcon" => setting($group . 'attributes.agile-approach.hoverIcon'),
                "brief" => setting($group . 'attributes.agile-approach.brief'),
            ],
            "high-quality-code" => (object)[
                "bg" => setting($group . 'attributes.high-quality-code.bg'),
                "icon" => setting($group . 'attributes.high-quality-code.icon'),
                "hoverIcon" => setting($group . 'attributes.high-quality-code.hoverIcon'),
                "brief" => setting($group . 'attributes.high-quality-code.brief'),
            ],
        ],
    ];
    return $data;
}

function storeGeneralData($generalSetting, $global, $request)
{
    $currentFile = $generalSetting->findSetting($global . 'general.site_logo');
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

function storeNewsletterData($generalSetting, $global, $request) {
    $global = $global."newsletter.";
    $data = [
        "title" => $request->title,
        "text" => $request->text
    ];
    $savedData = $generalSetting->saveSetting($global, $data);
    return $savedData;
}

function storeBacklinkData($generalSetting, $global, $request) {
    $global = $global."backlink.";
    $data = [
        "qrcode" => $request->qrcode,
        "eshop" => $request->eshop,
        "facebook" => $request->facebook,
        "linkedin" => $request->linkedin,
        "youtube" => $request->youtube,
        "instagram" => $request->instagram
    ];
    $savedData = $generalSetting->saveSetting($global, $data);
    return $savedData;
}

