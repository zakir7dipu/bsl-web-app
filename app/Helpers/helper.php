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
            'address' => setting($group . 'contact_info.address'),
            'sub_text' => setting($group . 'contact_info.sub_text'),
            'title' => setting($group . 'contact_info.title'),
            'contact_sub_text' => setting($group . 'contact_info.contact_sub_text'),
            'testi_title' => setting($group . 'contact_info.testi_title'),
            'map' => setting($group . 'contact_info.map'),
            'whatsapp_number' => setting($group . 'contact_info.whatsapp_number'),
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

function serviceInfo()
{
    $group = 'site.';
    $data = setting($group . 'service');
    return $data;
}

function caseStudyInfo()
{
    $group = 'site.';
    $data = setting($group . 'case_study');
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

    setting([$global . ".general" => $data]);
    $data = setting($global);
    $data["type"] = $request->type;
}

function storeContactInfoData($global, $request)
{

    $data = [
        "phone" => $request->phone,
        "whatsapp_number" => $request->whatsapp_number,
        "mail" => $request->mail,
        "address" => $request->address,
        "sub_text" => $request->sub_text,
        "title" => $request->title,
        "contact_sub_text" => $request->contact_sub_text,
        "testi_title" => $request->testi_title,
        "map" => $request->map,
    ];

    setting([$global . ".contact_info" => $data]);
    $data = setting($global);
    $data["type"] = $request->type;
}

function storeNewsletterData($global, $request)
{

    $data = [
        "title" => $request->title,
        "text" => $request->text
    ];
    setting([$global . ".newsletter" => $data]);
    $data = setting($global);
    $data["type"] = $request->type;
}

function storeBacklinkData($global, $request)
{

    $data = [
        "qrcode" => $request->qrcode,
        "eshop" => $request->eshop,
        "facebook" => $request->facebook,
        "linkedin" => $request->linkedin,
        "youtube" => $request->youtube,
        "instagram" => $request->instagram
    ];
    setting([$global . ".backlink" => $data]);
    $data = setting($global);
    $data["type"] = $request->type;
    return $data;
}

function storeSliderData($global, $request)
{

    $currentFile = setting($global . '.slider.image_link');
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
    setting([$global . ".slider" => $data]);
    $data = setting($global . ".slider");
    $data["type"] = $request->type;
    return $data;
}

function storeTechnologyData($global, $request)
{
    $data = [
        "title" => $request->title,
        "sub_text" => $request->sub_text,
        "limit" => $request->limit,
    ];
    setting([$global . ".technology" => $data]);
    $data = setting($global . ".technology");
    $data["type"] = $request->type;
    return $data;
}

function storeIndustryData($global, $request)
{
    $data = [
        "title" => $request->title,
        "sub_text" => $request->sub_text,
        "limit" => $request->limit,
    ];
    setting([$global . ".industry" => $data]);
    $data = setting($global . ".industry");
    $data["type"] = $request->type;
    return $data;
}

function storeServiceData($global, $request)
{
    $data = [
        "title" => $request->title,
        "sub_text" => $request->sub_text,
        "limit" => $request->limit,
    ];
    setting([$global . ".service" => $data]);
    $data = setting($global . ".service");
    $data["type"] = $request->type;
    return $data;
}

function storeCaseStudyData($global, $request)
{
    $data = [
        "title" => $request->title,
        "sub_text" => $request->sub_text,
        "limit" => $request->limit,
    ];
    setting([$global . ".case_study" => $data]);
    $data = setting($global . ".case_study");
    $data["type"] = $request->type;
    return $data;
}

function storeAboutData($generalSetting, $global, $request)
{
    $data = setting($global . ".about");
    if (!$request->has("section")) {
        $data["title"] = $request->title;
        $data["brief"] = $request->brief;
        $data["clients"] = $request->clients;
        $data["project"] = $request->project;
    } else {
        $data = storeAttributeData($data, $request);
    }
    setting([$global . ".about" => $data]);

    $data = setting($global . ".about");
    $data["type"] = $request->type;
    return $data;
}

function storeAttributeData($data, $request)
{
    foreach ($data["attributes"] as $key => $item) {
        if (strtolower($item['title']) === strtolower($request->topic)) {
            $data["attributes"][$key]["title"] = $request->title;
            if ($request->hasFile("icon")) {
                $file = changeAttributeFile($item["icon"], $request->icon, "main");
                $data["attributes"][$key]["icon"] = $file;
            }
            if ($request->hasFile("hover_icon")) {
                $file = changeAttributeFile($item["hoverIcon"], $request->hover_icon, "hover");
                $data["attributes"][$key]["hoverIcon"] = $file;
            }
            $data["attributes"][$key]["brief"] = $request->brief;
        }
    }
    return $data;
}

function changeAttributeFile($currentFile, $newFile, $fileType) {
    $filename = time() . '-' . 'sections-'.$fileType."." . fileInfo($newFile)['extension'];
    $path = 'uploads/sections/images';
    if ($currentFile) {
        fileDelete($currentFile);
    }
    fileUpload($newFile, $path, $filename);
    $imageLink = $path . '/' . $filename;
    return $imageLink;
}

