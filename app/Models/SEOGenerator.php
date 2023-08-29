<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SEOGenerator extends Model
{
//    use HasFactory;

    public $page;
    public $robots;
    public $author;
    public $keywords;
    public $description;
    public $type;
    public $url;

    public function __construct($page, $robots, $author, $keywords, $description, $type, $url)
    {
        $this->page = $page;
        $this->robots = $robots;
        $this->author = $author;
        $this->keywords = $keywords;
        $this->description = $description;
        $this->type = $type;
        $this->url = $url;
    }

    public function findSeo($page)
    {
        $group = 'seo.' . $this->page . ".";
        return setting($group . 'meta');
    }

    public function saveSeo()
    {
        $is_robots = match ($this->robots) {
            "allow" => "index, follow",
            "link_only" => "noindex, follow",
            "denay" => "noindex, nofollow",
            default => "index, follow",
        };
        $seo = [
            "keywords" => $this->keywords,
            "robots" => $is_robots,
            "description" => $this->description,
            "og_type" => $this->type,
            "og_title" => $this->page,
            "og_description" => $this->description,
            "twitter_creator" => $this->author,
            "twitter_card" => $this->type,
            "twitter_title" => $this->page,
            "twitter_description" => $this->description,
            "canonical" => $this->url
        ];
        $group = 'seo.' . $this->page . ".";
        setting([$group . 'meta' => $seo]);
        return setting($group . 'meta');
//        $jsonData = json_encode($seo);
//        setting([$group . 'site_logo' => $logo]);
    }
}
