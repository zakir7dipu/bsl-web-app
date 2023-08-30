<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SEOGenerator extends Model
{
    public function findSeo($page)
    {
        $group = 'seo.' . $page . ".";
        return setting($group . 'meta');
    }

    public function saveSeo($page, $robots, $author, $keywords, $description, $type, $url)
    {
        $is_robots = match ($robots) {
            "allow" => "index, follow",
            "link_only" => "noindex, follow",
            "deny" => "noindex, nofollow",
            default => "index, follow",
        };
        $seo = [
            "keywords" => $keywords,
            "robots" => $is_robots,
            "description" => $description,
            "og_type" => $type,
            "og_title" => $page,
            "og_description" => $description,
            "twitter_creator" => $author,
            "twitter_card" => $type,
            "twitter_title" => $page,
            "twitter_description" => $description,
            "canonical" => $url
        ];
        $group = 'seo.' . $page . ".";
        setting([$group . 'meta' => $seo]);
        return setting($group . 'meta');
    }
}
