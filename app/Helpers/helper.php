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

