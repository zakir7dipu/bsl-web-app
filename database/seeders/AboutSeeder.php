<?php

namespace Database\Seeders;

use App\Models\Abouts;
use Illuminate\Database\Seeder;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Abouts::create([
            'title' => 'Technology Solution Company in BD',
            'description' => 'We are Bizz Solutions PLC providing satisfiable software solution for Web, PC and Mobile. Developing user friendly & meaningful user interface and customer satisfaction is our main goal.',
            'btn_text' => "Learn More",
            'btn_url' => '#',
            'slug' => 'abouts',
        ]);
    }
}
