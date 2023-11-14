-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 14, 2023 at 10:23 AM
-- Server version: 8.0.35
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bizztoxi_v2_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `abouts`
--

CREATE TABLE `abouts` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `btn_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `btn_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `abouts`
--

INSERT INTO `abouts` (`id`, `title`, `description`, `image`, `btn_text`, `btn_url`, `slug`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Technology Solution Company in Bangladesh', '<p>We are Bizz Solutions PLC providing satisfiable software solutions for Web, PC and Mobile. Developing user friendly &amp; meaningful user interface and customer satisfaction is our main goal.</p><p><strong>OUR &nbsp;VISION</strong><br>To be the most contemporary technology solutions provider locally and globally.</p><p><strong>MISSION &nbsp; &nbsp;STATEMENT</strong><br>We provide innovative technological assessment, &nbsp;solutions &nbsp;&amp; services to ensure customer delight.</p><p><strong>OUR VALUES&nbsp;</strong><br>We\'re Innovative<br>We\'re Humane<br>We\'re Tech Savvy<br>We\'re Global</p><p>&nbsp;</p>', '/uploads/about/1696396156-about.jpg', 'Learn More', '/contact', 'technology-solution-company-in-bangladesh', NULL, 1, NULL, '2023-09-02 22:57:57', '2023-10-23 23:02:37');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image_link` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_order` int DEFAULT NULL,
  `tag` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_image_link` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `slug`, `description`, `image_link`, `short_order`, `tag`, `meta_title`, `meta_description`, `meta_keywords`, `meta_image_link`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'বন্ধ হচ্ছে ৩ ও ১৫ দিনের ইন্টারনেট ডেটা প্যাকেজ', 'bndh-hcche-3-oo-15-diner-intarnet-deta-pzakej', '<p><strong>নিজস্ব প্রতিবেদক:&nbsp;</strong>বর্তমানে মোবাইল অপারেটরদের ৯৫ ধরনের প্যাকেজ আছে। তাদেরকে প্যাকেজ সংখ্যা ৪০ এর মধ্যে সীমাবদ্ধ করার নির্দেশ দিয়েছে বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (বিটিআরসি)।</p><p>গত ৩ সেপ্টেম্বর মোবাইল অপারেটরদের ১৫ অক্টোবর থেকে ৩ ও ১৫ দিন মেয়াদি ইন্টারনেট ডেটা প্যাকেজ বন্ধের নির্দেশ দেয় বিটিআরসি। ১৫ অক্টোবর থেকে মোবাইল ব্যবহারকারীরা ৭ বা ৩০ দিন মেয়াদি ইন্টারনেট ডেটা প্যাকেজ কেনার সুযোগ পাবেন। অনির্দিষ্টকাল মেয়াদে ডেটা প্যাকেজ কেনার সুবিধাও থাকছে।</p><p>টেলিকমিউনিকেশন খাতের বিশেষজ্ঞ ও ভোক্তা অধিকার সংস্থার মতে, এর মাধ্যমে ভোক্তাদের পছন্দের স্বাধীনতা সীমিত করা হলো। এই উদ্যোগটি তৃণমূল, নিম্ন-আয়ের ও তরুণদের ওপর আর্থিক প্রভাব ফেলবে এবং এর কারণে টেলিকম পরিষেবা, বিশেষত ইন্টারনেটের ব্যবহার কমবে।</p><p>তবে বিটিআরসি বলছে, তারা মোবাইল ব্যবহারকারীদের ওপর জরিপ করে এই সিদ্ধান্তে পৌঁছেছে যে, গ্রাহকরাও অফার প্যাকেজ সীমিত করার পক্ষে। যদিও বিটিআরসির এই সিদ্ধান্তের বিরোধিতা করেছে মোবাইল অপারেটররা। তাদের মতে, বিটিআরসির জরিপে এমন ধরনের প্রশ্ন ছিল, যা উত্তরদাতাদের উত্তরকে প্রভাবিত করেছে।</p><p>গত ৩০ মে বিটিআরসির জরিপের ফলাফল প্রকাশ অনুষ্ঠানে বক্তব্য রাখা অনেক গ্রাহকও বলেন, তারা আরও প্যাকেজ চান, বিশেষ করে ওটিটি ব্যবহার ও শিক্ষার্থীদের জন্য।</p>', '/uploads/blogs/1694069839-blog.jpg', 1, 'Internetpack', 'বন্ধ হচ্ছে ৩ ও ১৫ দিনের ইন্টারনেট ডেটা প্যাকেজ', 'নিজস্ব প্রতিবেদক: বর্তমানে মোবাইল অপারেটরদের ৯৫ ধরনের প্যাকেজ আছে। তাদেরকে প্যাকেজ সংখ্যা ৪০ এর মধ্যে সীমাবদ্ধ করার নির্দেশ দিয়েছে বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (বিটিআরসি)।\r\n\r\nগত ৩ সেপ্টেম্বর মোবাইল অপারেটরদের ১৫ অক্টোবর থেকে ৩ ও ১৫ দিন মেয়াদি ইন্টারনেট ডেটা প্যাকেজ বন্ধের নির্দেশ দেয় বিটিআরসি। ১৫ অক্টোবর থেকে মোবাইল ব্যবহারকারীরা ৭ বা ৩০ দিন মেয়াদি ইন্টারনেট ডেটা প্যাকেজ কেনার সুযোগ পাবেন। অনির্দিষ্টকাল মেয়াদে ডেটা প্যাকেজ কেনার সুবিধাও থাকছে।\r\n\r\nটেলিকমিউনিকেশন খাতের বিশেষজ্ঞ ও ভোক্তা অধিকার সংস্থার মতে, এর মাধ্যমে ভোক্তাদের পছন্দের স্বাধীনতা সীমিত করা হলো। এই উদ্যোগটি তৃণমূল, নিম্ন-আয়ের ও তরুণদের ওপর আর্থিক প্রভাব ফেলবে এবং এর কারণে টেলিকম পরিষেবা, বিশেষত ইন্টারনেটের ব্যবহার কমবে।\r\n\r\nতবে বিটিআরসি বলছে, তারা মোবাইল ব্যবহারকারীদের ওপর জরিপ করে এই সিদ্ধান্তে পৌঁছেছে যে, গ্রাহকরাও অফার প্যাকেজ সীমিত করার পক্ষে। যদিও বিটিআরসির এই সিদ্ধান্তের বিরোধিতা করেছে মোবাইল অপারেটররা। তাদের মতে, বিটিআরসির জরিপে এমন ধরনের প্রশ্ন ছিল, যা উত্তরদাতাদের উত্তরকে প্রভাবিত করেছে।\r\n\r\nগত ৩০ মে বিটিআরসির জরিপের ফলাফল প্রকাশ অনুষ্ঠানে বক্তব্য রাখা অনেক গ্রাহকও বলেন, তারা আরও প্যাকেজ চান, বিশেষ করে ওটিটি ব্যবহার ও শিক্ষার্থীদের জন্য।', 'নিজস্ব প্রতিবেদক: বর্তমানে মোবাইল অপারেটরদের ৯৫ ধরনের প্যাকেজ আছে। তাদেরকে প্যাকেজ সংখ্যা ৪০ এর মধ্যে সীমাবদ্ধ করার নির্দেশ দিয়েছে বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (বিটিআরসি)।\r\n\r\nগত ৩ সেপ্টেম্বর মোবাইল অপারেটরদের ১৫ অক্টোবর থেকে ৩ ও ১৫ দিন মেয়াদি ইন্টারনেট ডেটা প্যাকেজ বন্ধের নির্দেশ দেয় বিটিআরসি। ১৫ অক্টোবর থেকে মোবাইল ব্যবহারকারীরা ৭ বা ৩০ দিন মেয়াদি ইন্টারনেট ডেটা প্যাকেজ কেনার সুযোগ পাবেন। অনির্দিষ্টকাল মেয়াদে ডেটা প্যাকেজ কেনার সুবিধাও থাকছে।\r\n\r\nটেলিকমিউনিকেশন খাতের বিশেষজ্ঞ ও ভোক্তা অধিকার সংস্থার মতে, এর মাধ্যমে ভোক্তাদের পছন্দের স্বাধীনতা সীমিত করা হলো। এই উদ্যোগটি তৃণমূল, নিম্ন-আয়ের ও তরুণদের ওপর আর্থিক প্রভাব ফেলবে এবং এর কারণে টেলিকম পরিষেবা, বিশেষত ইন্টারনেটের ব্যবহার কমবে।\r\n\r\nতবে বিটিআরসি বলছে, তারা মোবাইল ব্যবহারকারীদের ওপর জরিপ করে এই সিদ্ধান্তে পৌঁছেছে যে, গ্রাহকরাও অফার প্যাকেজ সীমিত করার পক্ষে। যদিও বিটিআরসির এই সিদ্ধান্তের বিরোধিতা করেছে মোবাইল অপারেটররা। তাদের মতে, বিটিআরসির জরিপে এমন ধরনের প্রশ্ন ছিল, যা উত্তরদাতাদের উত্তরকে প্রভাবিত করেছে।\r\n\r\nগত ৩০ মে বিটিআরসির জরিপের ফলাফল প্রকাশ অনুষ্ঠানে বক্তব্য রাখা অনেক গ্রাহকও বলেন, তারা আরও প্যাকেজ চান, বিশেষ করে ওটিটি ব্যবহার ও শিক্ষার্থীদের জন্য।', '/uploads/blogs/1694069839-blog.jpg', 1, 1, NULL, '2023-09-07 00:40:23', '2023-09-10 00:54:52'),
(2, 'আর্থিক খাতে বড় পরিবর্তন আনবে কৃত্রিম বুদ্ধিমত্তা', 'arthik-khate-br-pribrtn-anbe-krritrim-buddhimtta', '<p>বিজ নিউজ ডেস্ক: কৃত্রিম বুদ্ধিমত্তা (এআই) বর্তমানে সব খাতেই ছড়িয়ে পড়ছে। চিকিৎসা, শিক্ষা, প্রযুক্তি, ব্যবসায়িক কার্যকম ও শিল্পোৎপাদন সব ক্ষেত্রেই জেনারেটিভ এআইয়ের বিচরণ। সম্প্রতি আর্থিক খাতে জেনারেটিভ এআই সিস্টেমের ব্যবহার ও এর প্রভাব নিয়ে প্রতিবেদন প্রকাশ করেছে আন্তর্জাতিক মুদ্রা তহবিল (আইএমএফ)। বিটিসি পিয়ার্সের বরাতে টেকটাইমসের খবরে জেনারেটিভ এআই ব্যবহারে সুবিধার কথা স্বীকার করা হয়েছে। পাশাপাশি এর ব্যাপক ব্যবহার শুরুর আগে আর্থিক প্রতিষ্ঠানগুলোকে বিচক্ষণতা চর্চা ও ঝুঁকি মূল্যায়নের বিষয়ে জানানো হয়েছে। জেনারেটিভ এআইয়ের অন্যতম উদাহরণ হলো ওপেনএআইয়ে চ্যাটজিপিটি। যা টেক্সট, ইমেজ, অডিওসহ বিভিন্ন ফরম্যাটে কনটেন্ট তৈরি করতে পারে।<br>&nbsp;</p><p>আইএমএফের প্রতিবেদনে, আর্থিক পরিষেবা খাতে এআই ব্যবহারের মাধ্যমে কী ধরনের সফলতা বা সুবিধা পাওয়া সম্ভব এবং গ্রাহক অভিজ্ঞতায় কী রূপ পরিবর্তন আনবে সেসব বিষয়ে গুরুত্ব দেয়া হয়েছে। তবে প্রতিবেদনে তথ্যের গোপনীয়তা, পক্ষপাত, নির্ভুলতা, সাইবার নিরাপত্তা ও আর্থিক স্থিতিশীলতার সঙ্গে সম্পর্কিত উল্লেখযোগ্য ঝুঁকিগুলোর বিষয়ে সতর্কও করা হয়েছে। চ্যাটজিপিটির বিস্তার ও এর কার্যকারিতা বিশ্বের বিভিন্ন খাতে এআইয়ের ব্যবহার বাড়াতে উৎসাহ দিচ্ছে বলে জানিয়েছেন বিশ্লেষকরা। ক্যাপিটাল ওয়ান, জেপি মরগ্যান ও গোল্ডম্যান স্যাকসের মতো আর্থিক প্রতিষ্ঠানগুলোও এখন এ প্রযুক্তি ব্যবহার করছে।</p><p>প্রতিবেদনে আইএমএফ জানায়, স্বয়ংক্রিয়ভাবে নথি প্রক্রিয়া করা, বিস্তারিত গবেষণা, কাস্টমার চ্যাটবট ও পণ্যের উন্নয়নে আর্থিক খাতে দ্রুত এআইয়ের ব্যবহার শুরুর সম্ভাবনা রয়েছে। তবে উৎকর্ষের পাশাপাশি প্রযুক্তির পরিবর্তন ও এর ব্যবহার শুরুর আগে চূড়ান্ত সিদ্ধান্ত নেয়ার বিষয়ে সতর্কও করা হয়েছে। প্রতিবেদনে আর্থিক খাতে বেশকিছু ঝুঁকিপূর্ণ দিকের কথা উল্লেখ করা হয়েছে। এগুলো হলো তথ্যের সুরক্ষা, এমবেডেড বায়স, বিশ্বাসযোগ্যতা, পক্ষপাত, ব্যাখ্যা ও সাইবার নিরাপত্তা।</p><p>প্রতিবেদনে বলা হয়, জেনারেটিভ এআই আর্থিক খাতে এআই ব্যবহারের সিদ্ধান্তকে ত্বরান্বিত করবে। বৈশ্বিক বাজার ব্যবস্থায় ক্রমাগত চাপ সাম্প্রতিক বছরগুলোয় আর্থিক খাতে এআই ব্যবহারের প্রয়োজনীয়তা ও গ্রহণযোগ্যতা বাড়িয়েছে। এর পেছনে খরচ কমানো, অধিক মুনাফা বা প্রবৃদ্ধি, ক্লায়েন্ট ইন্টারফেসে পরিবর্তন, পূর্বাভাসে নিশ্চয়তা এবং ঝুঁকি ব্যবস্থাপনার বিষয় উল্লেখযোগ্য।</p><p>আর্থিক খাতে এআইয়ের ব্যবহার শুরুর আগে আইএমএফ বেশকিছু পরামর্শ দিয়েছে। এর মধ্যে এআই ব্যবহারের আগে পাইলট টেস্টিং ও ঝুঁকি ব্যবস্থাপনা পর্যালোচনা করতে হবে। দ্বিতীয় ধাপে বা পদক্ষেপ হিসেবে এআইনির্ভর সিদ্ধান্ত পর্যবেক্ষণে ও জবাবদিহিতার জন্য মানব নিয়ন্ত্রণ নিশ্চিত করতে হবে। সার্বিকভাবে ব্যবহারের আগে নিয়ন্ত্রক সংস্থার সঙ্গে সমন্বয় করতে হবে। সবশেষে ঝুঁকির বিষয়ে পুরোপুরি না জানা পর্যন্ত এআইয়ের ব্যবহার বন্ধে নীতিমালা করতে হবে।</p><p>প্রতিবেদনটি আর্থিক খাতে জেনারেটিভ এআই অন্তর্ভুক্ত করার সম্ভাব্য সুবিধা ও অসুবিধাগুলোর বিষয়ে বিস্তারিত জানিয়েছে। নতুন এ প্রযুক্তির ব্যবহার প্রতিশ্রুতিশীল হলেও আন্তর্জাতিক মুদ্রা তহবিলের প্রতিবেদনে এআইয়ের মাধ্যমে বড় ক্ষতি হওয়া থেকে সুরক্ষিত থাকতে নীতিমালা ও জবাবদিহিতার বিষয়ও বলা হয়েছে।</p><p>আর্থিক প্রতিষ্ঠানে সেভাবে এআইয়ের ব্যবহার শুরু হতে দেরি হলেও অন্য খাত এগিয়ে যাচ্ছে। এদিক থেকে মেটা নতুন এআই মডেল আনার ঘোষণা দিয়েছে, যা কম্পিউটারের কোড লিখতে সহায়তা করবে।&nbsp;</p><p>কোড লামা নাম দেয়া হয়েছে এটির। কোম্পানির তথ্যানুযায়ী, এটি বিনামূল্যে ব্যবহার করা যাবে। এআই মডেলটি কোনো মানুষের দেয়া টেক্সট প্রম্পট অনুযায়ী কোড লিখে দেবে। ব্লগপোস্টে আরো বলা হয়, কোড লিখে শেষ করার পাশাপাশি ডিবাগিংয়ের কাজেও এআই মডেলটি সহায়তা করবে।&nbsp;</p><p>গত বছর চ্যাটজিপিটি চালুর পর বিভিন্ন এন্টারপ্রাইজ ও ব্যবসাপ্রতিষ্ঠান জেনারেটিভ এআইয়ের বাজারে প্রবেশ করতে চাইছে। মূলত সক্ষমতা বাড়ানোর পাশাপাশি বিভিন্ন পরিষেবার বিকাশই তাদের মূল লক্ষ্য। ফেসবুক ও ইনস্টাগ্রামের মালিকানা প্রতিষ্ঠান মেটা চলতি বছর বেশকিছু এআই মডেল চালু করেছে। এর মধ্যে ওপেন সোর্স ল্যাঙ্গুয়েজ মডেল লামাও রয়েছে। প্রযুক্তিবিশারদদের মতে যা মাইক্রোসফটের অর্থায়নে পরিচালিত ওপেনএআই ও অ্যালফাবেটের গুগলের সঙ্গে প্রতিযোগিতা বাড়াবে।</p><p>যুক্তরাষ্ট্রের আরেক প্রযুক্তি জায়ান্ট মাইক্রোসফট পেইন্ট, ফটোজ ও ক্লিপিং টুল অ্যাপে কৃত্রিম বুদ্ধিমত্তার (এআই) সক্ষমতা যুক্ত করতে চাইছে। এসব অ্যাপে মাইক্রোসফট জেনারেটিভ এআই, অবজেক্ট আইডেন্টিফিকেশন ও অপটিক্যাল ক্যারেক্টার রিকগনিশন ফিচার যুক্ত করতে চাইছে।&nbsp;</p><p>উইন্ডোজ ব্যবহারকারীদের জন্য পেইন্ট সবচেয়ে পুরনো ছবি এডিটিং টুল। বিশ্লেষকদের মতে, এআইয়ের সুবিধা যুক্ত হলে ছবি তৈরি ও সম্পাদনায় ব্যবহারকারীরা ভালো সুবিধা পাবেন। উদাহরণস্বরূপ নির্দিষ্ট রঙ ব্যবহার করে ক্যানভাস তৈরির কমান্ড দেয়া যাবে। এছাড়া ছবিতে কোনো বস্তু যুক্ত করা বা টেক্সট প্রম্পটের মাধ্যমে ছবি তৈরি করা যাবে।</p>', '/uploads/blogs/1694069017-blog.jpg', 2, 'AI', 'আর্থিক খাতে বড় পরিবর্তন আনবে কৃত্রিম বুদ্ধিমত্তা', 'বিজ নিউজ ডেস্ক: কৃত্রিম বুদ্ধিমত্তা (এআই) বর্তমানে সব খাতেই ছড়িয়ে পড়ছে। চিকিৎসা, শিক্ষা, প্রযুক্তি, ব্যবসায়িক কার্যকম ও শিল্পোৎপাদন সব ক্ষেত্রেই জেনারেটিভ এআইয়ের বিচরণ। সম্প্রতি আর্থিক খাতে জেনারেটিভ এআই সিস্টেমের ব্যবহার ও এর প্রভাব নিয়ে প্রতিবেদন প্রকাশ করেছে আন্তর্জাতিক মুদ্রা তহবিল (আইএমএফ)। বিটিসি পিয়ার্সের বরাতে টেকটাইমসের খবরে জেনারেটিভ এআই ব্যবহারে সুবিধার কথা স্বীকার করা হয়েছে। পাশাপাশি এর ব্যাপক ব্যবহার শুরুর আগে আর্থিক প্রতিষ্ঠানগুলোকে বিচক্ষণতা চর্চা ও ঝুঁকি মূল্যায়নের বিষয়ে জানানো হয়েছে। জেনারেটিভ এআইয়ের অন্যতম উদাহরণ হলো ওপেনএআইয়ে চ্যাটজিপিটি। যা টেক্সট, ইমেজ, অডিওসহ বিভিন্ন ফরম্যাটে কনটেন্ট তৈরি করতে পারে।\r\n\r\nআইএমএফের প্রতিবেদনে, আর্থিক পরিষেবা খাতে এআই ব্যবহারের মাধ্যমে কী ধরনের সফলতা বা সুবিধা পাওয়া সম্ভব এবং গ্রাহক অভিজ্ঞতায় কী রূপ পরিবর্তন আনবে সেসব বিষয়ে গুরুত্ব দেয়া হয়েছে। তবে প্রতিবেদনে তথ্যের গোপনীয়তা, পক্ষপাত, নির্ভুলতা, সাইবার নিরাপত্তা ও আর্থিক স্থিতিশীলতার সঙ্গে সম্পর্কিত উল্লেখযোগ্য ঝুঁকিগুলোর বিষয়ে সতর্কও করা হয়েছে। চ্যাটজিপিটির বিস্তার ও এর কার্যকারিতা বিশ্বের বিভিন্ন খাতে এআইয়ের ব্যবহার বাড়াতে উৎসাহ দিচ্ছে বলে জানিয়েছেন বিশ্লেষকরা। ক্যাপিটাল ওয়ান, জেপি মরগ্যান ও গোল্ডম্যান স্যাকসের মতো আর্থিক প্রতিষ্ঠানগুলোও এখন এ প্রযুক্তি ব্যবহার করছে।\r\n\r\nপ্রতিবেদনে আইএমএফ জানায়, স্বয়ংক্রিয়ভাবে নথি প্রক্রিয়া করা, বিস্তারিত গবেষণা, কাস্টমার চ্যাটবট ও পণ্যের উন্নয়নে আর্থিক খাতে দ্রুত এআইয়ের ব্যবহার শুরুর সম্ভাবনা রয়েছে। তবে উৎকর্ষের পাশাপাশি প্রযুক্তির পরিবর্তন ও এর ব্যবহার শুরুর আগে চূড়ান্ত সিদ্ধান্ত নেয়ার বিষয়ে সতর্কও করা হয়েছে। প্রতিবেদনে আর্থিক খাতে বেশকিছু ঝুঁকিপূর্ণ দিকের কথা উল্লেখ করা হয়েছে। এগুলো হলো তথ্যের সুরক্ষা, এমবেডেড বায়স, বিশ্বাসযোগ্যতা, পক্ষপাত, ব্যাখ্যা ও সাইবার নিরাপত্তা।\r\n\r\nপ্রতিবেদনে বলা হয়, জেনারেটিভ এআই আর্থিক খাতে এআই ব্যবহারের সিদ্ধান্তকে ত্বরান্বিত করবে। বৈশ্বিক বাজার ব্যবস্থায় ক্রমাগত চাপ সাম্প্রতিক বছরগুলোয় আর্থিক খাতে এআই ব্যবহারের প্রয়োজনীয়তা ও গ্রহণযোগ্যতা বাড়িয়েছে। এর পেছনে খরচ কমানো, অধিক মুনাফা বা প্রবৃদ্ধি, ক্লায়েন্ট ইন্টারফেসে পরিবর্তন, পূর্বাভাসে নিশ্চয়তা এবং ঝুঁকি ব্যবস্থাপনার বিষয় উল্লেখযোগ্য।\r\n\r\nআর্থিক খাতে এআইয়ের ব্যবহার শুরুর আগে আইএমএফ বেশকিছু পরামর্শ দিয়েছে। এর মধ্যে এআই ব্যবহারের আগে পাইলট টেস্টিং ও ঝুঁকি ব্যবস্থাপনা পর্যালোচনা করতে হবে। দ্বিতীয় ধাপে বা পদক্ষেপ হিসেবে এআইনির্ভর সিদ্ধান্ত পর্যবেক্ষণে ও জবাবদিহিতার জন্য মানব নিয়ন্ত্রণ নিশ্চিত করতে হবে। সার্বিকভাবে ব্যবহারের আগে নিয়ন্ত্রক সংস্থার সঙ্গে সমন্বয় করতে হবে। সবশেষে ঝুঁকির বিষয়ে পুরোপুরি না জানা পর্যন্ত এআইয়ের ব্যবহার বন্ধে নীতিমালা করতে হবে।\r\n\r\nপ্রতিবেদনটি আর্থিক খাতে জেনারেটিভ এআই অন্তর্ভুক্ত করার সম্ভাব্য সুবিধা ও অসুবিধাগুলোর বিষয়ে বিস্তারিত জানিয়েছে। নতুন এ প্রযুক্তির ব্যবহার প্রতিশ্রুতিশীল হলেও আন্তর্জাতিক মুদ্রা তহবিলের প্রতিবেদনে এআইয়ের মাধ্যমে বড় ক্ষতি হওয়া থেকে সুরক্ষিত থাকতে নীতিমালা ও জবাবদিহিতার বিষয়ও বলা হয়েছে।\r\n\r\nআর্থিক প্রতিষ্ঠানে সেভাবে এআইয়ের ব্যবহার শুরু হতে দেরি হলেও অন্য খাত এগিয়ে যাচ্ছে। এদিক থেকে মেটা নতুন এআই মডেল আনার ঘোষণা দিয়েছে, যা কম্পিউটারের কোড লিখতে সহায়তা করবে। \r\n\r\nকোড লামা নাম দেয়া হয়েছে এটির। কোম্পানির তথ্যানুযায়ী, এটি বিনামূল্যে ব্যবহার করা যাবে। এআই মডেলটি কোনো মানুষের দেয়া টেক্সট প্রম্পট অনুযায়ী কোড লিখে দেবে। ব্লগপোস্টে আরো বলা হয়, কোড লিখে শেষ করার পাশাপাশি ডিবাগিংয়ের কাজেও এআই মডেলটি সহায়তা করবে। \r\n\r\nগত বছর চ্যাটজিপিটি চালুর পর বিভিন্ন এন্টারপ্রাইজ ও ব্যবসাপ্রতিষ্ঠান জেনারেটিভ এআইয়ের বাজারে প্রবেশ করতে চাইছে। মূলত সক্ষমতা বাড়ানোর পাশাপাশি বিভিন্ন পরিষেবার বিকাশই তাদের মূল লক্ষ্য। ফেসবুক ও ইনস্টাগ্রামের মালিকানা প্রতিষ্ঠান মেটা চলতি বছর বেশকিছু এআই মডেল চালু করেছে। এর মধ্যে ওপেন সোর্স ল্যাঙ্গুয়েজ মডেল লামাও রয়েছে। প্রযুক্তিবিশারদদের মতে যা মাইক্রোসফটের অর্থায়নে পরিচালিত ওপেনএআই ও অ্যালফাবেটের গুগলের সঙ্গে প্রতিযোগিতা বাড়াবে।\r\n\r\nযুক্তরাষ্ট্রের আরেক প্রযুক্তি জায়ান্ট মাইক্রোসফট পেইন্ট, ফটোজ ও ক্লিপিং টুল অ্যাপে কৃত্রিম বুদ্ধিমত্তার (এআই) সক্ষমতা যুক্ত করতে চাইছে। এসব অ্যাপে মাইক্রোসফট জেনারেটিভ এআই, অবজেক্ট আইডেন্টিফিকেশন ও অপটিক্যাল ক্যারেক্টার রিকগনিশন ফিচার যুক্ত করতে চাইছে। \r\n\r\nউইন্ডোজ ব্যবহারকারীদের জন্য পেইন্ট সবচেয়ে পুরনো ছবি এডিটিং টুল। বিশ্লেষকদের মতে, এআইয়ের সুবিধা যুক্ত হলে ছবি তৈরি ও সম্পাদনায় ব্যবহারকারীরা ভালো সুবিধা পাবেন। উদাহরণস্বরূপ নির্দিষ্ট রঙ ব্যবহার করে ক্যানভাস তৈরির কমান্ড দেয়া যাবে। এছাড়া ছবিতে কোনো বস্তু যুক্ত করা বা টেক্সট প্রম্পটের মাধ্যমে ছবি তৈরি করা যাবে।', 'আর্থিক খাতে বড় পরিবর্তন আনবে কৃত্রিম বুদ্ধিমত্তা', '/uploads/blogs/1694069017-blog.jpg', 1, 1, NULL, '2023-09-07 00:43:37', '2023-09-10 00:54:06'),
(3, 'ডাটা সেন্টারের জন্য ইন্টেলের নতুন চিপ সিয়েরা ফরেস্ট', 'data-sentarer-jnz-inteler-ntun-cip-siyera-frest', '<p>বিজ নিউজ ডেস্ক: ডাটা সেন্টারগুলোর কার্যক্ষমতা বাড়াতে বিভিন্ন কোম্পানি প্রতিনিয়ত চেষ্টা চালাচ্ছে। ইন্টেলও প্রযুক্তিগত উন্নয়নের পাশাপাশি নতুন চিপ তৈরি করছে। এর অংশ হিসেবে আগামী বছর নতুন চিপ উন্মোচনের ঘোষণা দেয় কোম্পানিটি। এটি বর্তমানের তুলনায় কম বিদ্যুৎ ব্যবহারে আরো বেশি কম্পিউটিং কার্যক্রম পরিচালনা করতে পারবে বলে দাবি ইন্টেলের। খবর রয়টার্স।<br>&nbsp;</p><p>সিলিকন ভ্যালির স্ট্যানফোর্ড বিশ্ববিদ্যালয়ে সেমিকন্ডাক্টর টেকনোলজি কনফারেন্স অনুষ্ঠিত হয়। সেখানে যুক্তরাষ্ট্রের এ প্রযুক্তি কোম্পানিটি জানায়, ডাটা সেন্টারগুলোয় বর্তমানে যে চিপ ব্যবহার করা হচ্ছে তার তুলনায় সিয়েরা ফরেস্ট প্রতি ওয়াটে ২৪০ শতাংশ বেশি কাজ করবে। প্রথমবারের মতো ইন্টেল এমন তথ্য প্রকাশ করল। ডাটা সেন্টারগুলো ইন্টারনেট ও অনলাইন পরিষেবা প্রদানে বিপুল বিদ্যুৎ ব্যবহার করে থাকে। বৈশ্বিক উষ্ণায়ন ও কার্বন নিঃসরণ রোধে প্রযুক্তি কোম্পানিগুলোর ওপর চাপ বাড়ছে। মূলত বিদ্যুৎ ব্যবহার কমানোর জন্য বিভিন্ন দেশ চাপ প্রয়োগ করছে। যে কারণে চিপ কোম্পানিগুলো বেশি কম্পিউটিং কার্যক্ষমতা নিশ্চিতে উন্নত চিপ তৈরিতে কাজ করছে।</p><p>চিপের বাজারে বর্তমানে এএমডির কাছে অবস্থান হারিয়েছে ইন্টেল। সম্প্রতি দেয়া বিবৃতি অনুযায়ী, আগামী বছর সিয়েরা ফরেস্ট চিপ বাজারে আসবে।</p>', '/uploads/blogs/1694069109-blog.jpg', 3, 'Data Center', 'ডাটা সেন্টারের জন্য ইন্টেলের নতুন চিপ সিয়েরা ফরেস্ট', 'বিজ নিউজ ডেস্ক: ডাটা সেন্টারগুলোর কার্যক্ষমতা বাড়াতে বিভিন্ন কোম্পানি প্রতিনিয়ত চেষ্টা চালাচ্ছে। ইন্টেলও প্রযুক্তিগত উন্নয়নের পাশাপাশি নতুন চিপ তৈরি করছে। এর অংশ হিসেবে আগামী বছর নতুন চিপ উন্মোচনের ঘোষণা দেয় কোম্পানিটি। এটি বর্তমানের তুলনায় কম বিদ্যুৎ ব্যবহারে আরো বেশি কম্পিউটিং কার্যক্রম পরিচালনা করতে পারবে বলে দাবি ইন্টেলের। খবর রয়টার্স।\r\n\r\nসিলিকন ভ্যালির স্ট্যানফোর্ড বিশ্ববিদ্যালয়ে সেমিকন্ডাক্টর টেকনোলজি কনফারেন্স অনুষ্ঠিত হয়। সেখানে যুক্তরাষ্ট্রের এ প্রযুক্তি কোম্পানিটি জানায়, ডাটা সেন্টারগুলোয় বর্তমানে যে চিপ ব্যবহার করা হচ্ছে তার তুলনায় সিয়েরা ফরেস্ট প্রতি ওয়াটে ২৪০ শতাংশ বেশি কাজ করবে। প্রথমবারের মতো ইন্টেল এমন তথ্য প্রকাশ করল। ডাটা সেন্টারগুলো ইন্টারনেট ও অনলাইন পরিষেবা প্রদানে বিপুল বিদ্যুৎ ব্যবহার করে থাকে। বৈশ্বিক উষ্ণায়ন ও কার্বন নিঃসরণ রোধে প্রযুক্তি কোম্পানিগুলোর ওপর চাপ বাড়ছে। মূলত বিদ্যুৎ ব্যবহার কমানোর জন্য বিভিন্ন দেশ চাপ প্রয়োগ করছে। যে কারণে চিপ কোম্পানিগুলো বেশি কম্পিউটিং কার্যক্ষমতা নিশ্চিতে উন্নত চিপ তৈরিতে কাজ করছে।\r\n\r\nচিপের বাজারে বর্তমানে এএমডির কাছে অবস্থান হারিয়েছে ইন্টেল। সম্প্রতি দেয়া বিবৃতি অনুযায়ী, আগামী বছর সিয়েরা ফরেস্ট চিপ বাজারে আসবে।', 'Data,center, intel, chip, forest', '/uploads/blogs/1694069109-blog.jpg', 1, 1, NULL, '2023-09-07 00:45:09', '2023-09-10 00:53:32');

-- --------------------------------------------------------

--
-- Table structure for table `case_studies`
--

CREATE TABLE `case_studies` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image_link` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `clients` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `complete_date` date DEFAULT NULL,
  `technologies` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `links` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `files` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `tags` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `case_studies`
--

INSERT INTO `case_studies` (`id`, `name`, `descriptions`, `image_link`, `clients`, `location`, `complete_date`, `technologies`, `links`, `files`, `tags`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'BPT', '<p>BPT is a simple application that contains a multi-dimensional user interface for different levels of the employee base.<br>• &nbsp; Infographic to review business growth<br>• &nbsp; Bird\'s &nbsp;eye view &nbsp;on each &nbsp;department\'s work &nbsp;status progress<br>• &nbsp; Follow up on key personnel &amp; departments<br>• &nbsp; Control and manage &nbsp;Inter-departmental conflicts<br>• &nbsp; Measure &nbsp;the success rate of each department<br>• &nbsp; Implement better &nbsp;Corporate &nbsp;Governance</p>', '/uploads/caseStudy/1695460868-case-study.png', 'SSG', 'Dhaka, Bangladesh', '2023-07-01', 'Vue JS, PHP Laravel', 'www.ssgbd.com', NULL, 'KRA, KPI, BPT', 1, 1, NULL, '2023-09-08 13:24:40', '2023-09-23 03:21:08'),
(2, 'SAP', '<p>SAP is the best business software that meets today\'s needs and allows for future growth without costly integration. SAP is recognized as a Leader across its portfolio.<br>• &nbsp; SAP license &nbsp;sales<br>• &nbsp; SAP training<br>• &nbsp; SAP operational support</p>', '/uploads/caseStudy/1695202204-case-study.png', 'SSG', 'Bangladesh', '2023-09-10', 'SAP S/4HANA®, B-One,', 'https://www.sap.com/', NULL, 'SAP, ERP, Automation, Invemtory, ACcounting', 1, 1, NULL, '2023-09-08 13:28:19', '2023-09-20 03:30:04'),
(3, 'HRIS', '<p>HR automation is the process of enhancing the efficiency of the HR department by freeing employees from tedious manual tasks and allowing them to focus on complex tasks like decision-making and strategy.<br>• &nbsp;Time tracking<br>• &nbsp;Attendance management<br>• &nbsp;Payroll management<br>• &nbsp;Reporting and analysis<br>• &nbsp;Performance evaluation</p>', '/uploads/caseStudy/1695460885-case-study.png', 'SSG', 'Dhaka, Bangladesh', '2023-09-20', 'ASP .Net, C#, C++, Flutter', NULL, NULL, 'HR, HR Management, HRIS', 1, 1, NULL, '2023-09-20 03:40:39', '2023-09-23 03:21:25'),
(4, 'BizzPack Accounting', '<p>Accounting software is an application that records and reports a business\'s financial transactions. Core modules of accounting software<br>• &nbsp;General Ledger<br>• &nbsp;Invoicing and accounting<br>• &nbsp;Inventory management<br>• &nbsp;Credit &nbsp;and cash flow management<br>• &nbsp;Banking<br>• &nbsp;Bank reconciliation<br>• &nbsp;Cost control and cost analysis<br>• &nbsp;Audit<br>• &nbsp;NBR guided &nbsp;VATsolution<br>• &nbsp;Business &nbsp;reporting</p>', '/uploads/caseStudy/1695204561-case-study.png', 'MBM', NULL, NULL, 'Laravel, PHP, JQiery', NULL, NULL, 'Accounting, Software', 1, 1, NULL, '2023-09-20 03:55:36', '2023-09-20 04:09:21'),
(5, 'Sales Pack', '<p>Sales Pack project will provide SKU wise business solution with real-time data.<br>• &nbsp;Real time &nbsp;order &nbsp;analysis, delivery analysis, wastage analysis etc<br>• &nbsp;Order placing,order managing,view cart, edit cart etc<br>• &nbsp;Order, &nbsp;delivery, order &nbsp;vs delivery, &nbsp;product wise, category wise, wastage report &nbsp;facilites<br>• &nbsp;Enable &nbsp;market &nbsp;analysis of order, &nbsp;delivery &nbsp;and FO activities<br>• &nbsp;Resolve &nbsp;the &nbsp;problem of manual collecting order from FO by sales team<br>• &nbsp;Ensure bridging of FO, Distributor and sales team<br>• &nbsp;Offer selection, offer calculation and cart management<br>• &nbsp;Delivery &nbsp;quantity updat, &nbsp;delivery confirmation etc&nbsp;</p>', '/uploads/caseStudy/1695206990-case-study.png', 'SSG', NULL, NULL, 'Laravel, PHP, JS', NULL, NULL, 'Sales, Software, Automation', 1, 1, NULL, '2023-09-20 03:57:54', '2023-09-20 04:49:50'),
(6, 'Tally', '<p>Tally automates accounting processes and focuses on growing your business, managing accounting, billing, inventory and other business needs.<br>• &nbsp;Invoicing &nbsp;and accounting<br>• &nbsp;Inventory &nbsp;management<br>• &nbsp;Credit and cash flow management<br>• &nbsp;Banking<br>• &nbsp;Cost control and cost analysis<br>• &nbsp;Business &nbsp;reporting<br>&nbsp;</p>', '/uploads/caseStudy/1695460903-case-study.png', 'SACO', NULL, NULL, 'Tally', NULL, NULL, 'Accounting, Software', 1, 1, NULL, '2023-09-20 04:06:02', '2023-09-23 03:21:43'),
(7, 'E-commerce', '<p>An e-commerce application is a software application that is specifically designed to support the creation of an ecommerce website or add functionality to it. You get the following benefits.<br>• &nbsp; Attract new customers with search<br>• &nbsp; Make money online<br>• &nbsp; Customer convenience<br>• &nbsp; Increase hours of operation to 24/7<br>• &nbsp; New market acquisitions<br>• &nbsp; Speedup business operations<br>• &nbsp; Reduce payroll<br>• &nbsp; Data sync with POS system<br>• &nbsp; Allow customers to share orders online<br>• &nbsp; Increase brand awareness</p>', '/uploads/caseStudy/1695460922-case-study.png', 'Ebazaar', NULL, NULL, 'Laravel, PHP, JS', NULL, NULL, 'e-commerce, online shop', 1, 1, NULL, '2023-09-20 04:14:03', '2023-09-23 03:22:02'),
(8, 'VAT Software', '<p>VAT Software by PHP, &nbsp;Symfony</p>', '/uploads/caseStudy/1695461171-case-study.png', 'Orion', NULL, NULL, 'PHP,  Symfony', NULL, NULL, 'PHP,  Symfony', 1, 1, NULL, '2023-09-20 04:22:51', '2023-09-23 03:26:11'),
(9, 'Network Infrastructure', '<p>Cobranet, Mikrotik</p>', '/uploads/caseStudy/1695464326-case-study.png', 'SSG', NULL, NULL, 'Kubernetes, Mikrotik', NULL, NULL, 'Cobranet, Mikrotik', 1, 1, NULL, '2023-09-20 04:24:22', '2023-09-23 04:19:49');

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `name`, `email`, `phone`, `subject`, `description`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Moksed ENT', 'supplier4@email.com', '0987654321', 'Greetings From The Larasoft', 'City centre 90/1, Level-25 Type-D2, Motijheel C/A, Dhaka-1000, Bangladesh.', NULL, '2023-09-09 23:20:02', '2023-09-09 23:20:02'),
(2, 'gmfaruk omar', 'gmfaruk2021@gmail.com', '0987654321', 'Welcome Mail From LaraSoft', 'Messages have been sent successfully. We will contact you very soonMessages have been sent successfully. We will contact you very soonMessages have been sent successfully. We will contact you very soonMessages have been sent successfully. We will contact you very soon', NULL, '2023-09-09 23:21:45', '2023-09-10 00:35:50'),
(3, 'Hyacinth Branch', 'xevawes@mailinator.com', '949-5877', 'Et amet ea qui veli', 'Dolore ea eveniet i', NULL, '2023-10-23 23:13:39', '2023-10-23 23:13:39'),
(4, 'Amir Khashru', 'akhasru71@gmail.com', '01871305074', 'Accounting', 'I want to take an accounting course.', NULL, '2023-10-31 03:38:42', '2023-10-31 03:38:42');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED DEFAULT NULL,
  `name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `video_id` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `price` double NOT NULL,
  `discount` double DEFAULT NULL,
  `class_count` int NOT NULL DEFAULT '0',
  `duration` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `class_per_week` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `class_duration` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `language` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `delivery_mode` enum('online','off_line') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'online',
  `course_type` enum('admission','going_on') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'going_on',
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `curriculum_text` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `published_at` timestamp NULL DEFAULT NULL,
  `created_by` bigint UNSIGNED NOT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `service_id`, `name`, `thumbnail`, `banner`, `description`, `video_id`, `price`, `discount`, `class_count`, `duration`, `class_per_week`, `class_duration`, `language`, `delivery_mode`, `course_type`, `start_date`, `end_date`, `curriculum_text`, `slug`, `published_at`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 5, 'Certificate Course on Analysis of Financial Statements & Implementation of Budgetary Control', '/uploads/thumbnail/1693985035-thumbnail.png', NULL, '<p>Analysis of Financial Statements &amp; Implementation of Budgetary Control (আর্থিকবিবৃতি বিশ্লেষণ এবং বাজেট ব্যবস্থাপনাবাস্তবায়ন)।</p><p>এই কোর্সটি অংশগ্রহণকারীদের ব্যবসার বর্তমান অবস্থান এবং ভবিষ্যতের সম্ভাবনাকেকার্যকরভাবে মূল্যায়ন করতে কোম্পানির আর্থিকবিবৃতি বিশ্লেষণ করার দক্ষতা প্রদানকরবে। এটি হতে পারেআপনার জন্যে অত্যন্ত প্রয়োজনীয় একটি কোর্স যেখানেকেস স্টাডি ব্যবহার করার মাধ্যমে অংশগ্রহণকারীদেরকেকোর্সের সময় অর্জিত ধারণাগুলিবাস্তব-জীবনের পরিস্থিতিতে প্রয়োগ করতে উৎসাহিত করাহবে।</p><p>⭕ আসনসীমিত। আপনার সিট বুক করতেনিচের লিঙ্কে ক্লিক করুন অথবা কলকরুন PH: 01755-597770</p><p><strong>Contents of This Training:</strong></p><p>1. Basics of Financial Statement Analysis;<br>2. Introduction of Budget &amp; Budgetary Control;<br>3. Detail practical Excel Format of Master Budget &amp; Annual Business Plan (ABP);<br>4. How to make Forecasted Income Statement, Balance Sheet;<br>5. Ratio &amp; Z-score Analysis of Forecasted Financial Statements;</p><p><strong>Who should participate the Course:</strong></p><p>1. CEO, COO, other CXOs/ Head of Departments of business organizations;<br>2. Finance and accounting &amp; business professionals;<br>3. Entrepreneurs (including owners of Startups);<br>4. Business owners and decision-makers;<br>5. People who are involved in preparing Budget for their own organizations;<br>6. Finance and accounting graduates<br>&nbsp;</p><p><strong>Resource Person:</strong></p><p>▪ Mr. Md. Shafiqul Alam LL.B, FCS, FCMA, FCA<br>Chairman, Bizz Solutions PLC<br>Managing Partner &amp; CEO<br>Shafiqul Alam &amp; Co., Chartered Accountants</p><p><strong>Course Details:</strong></p><p>- Course Fee: Tk. 10,000;<br>- Early Bird Offer: Tk. 4,000;<br>- No. of Session: 10 (Live: 6 &amp; Pre-Recorded: 4), 2 Hrs Each.<br>- Training Mode: Online (Zoom);</p><p><strong>বিজ&nbsp;সলিউশনস&nbsp;আয়োজিতকোর্সটিকেনকরবেনঃ</strong><br>➡ আপডেটেডকোর্স মডিউল।<br>➡ ইন্ডাস্ট্রিএক্সপার্ট ট্রেইনার ।<br>➡ ইন্টার্নশীপসুবিধা ও লাইফ টাইমগাইডলাইন ।<br>➡ জুমপ্লাটফর্ম এ অনলাইনের মাধ্যমেক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিংপ্রদান।<br>➡ রিয়েললাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।<br>➡ www.edubd.tv তে বিশেষ ছাড়েপ্রি-রেকর্ডেড কোর্স করার সুযোগ।<br>➡ বিজসলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রিজয়েন করার সুযোগ।<br>➡ এক্সপার্টরিসোর্স পারসন কর্তৃক ফ্রি মেন্টরিং ওক্যারিয়ার গাইড লাইনের সুযোগ।<br>&nbsp;</p><p>বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: 01755-597770 (Call/ WhatsApp)</p>', 'BamroKQLbrs', 10000, 4000, 20, 'Total 32 hrs.', '2 Days per week (Friday & Saturday).', '2 hours/Day (8:00 pm to 10:00 Pm)', 'Bangla, English', 'online', 'admission', '2023-09-01', '2023-10-01', '<p>Class 1: Basics of Financial Statement Analysis&nbsp;<br>● Importance and objectives of financial statement analysis.&nbsp;<br>● Understanding the key components of financial statements: Income Statement, Balance Sheet, and Cash Flow Statement.&nbsp;<br>● Analyzing financial ratios for assessment: liquidity, profitability, efficiency, and solvency ratios.&nbsp;<br>● Conducting trend analysis and interpreting common-size financial statements.</p><p>Class 2: Introduction to Budget &amp; Budgetary Control&nbsp;<br>● Overview of budgeting and its significance in financial planning and control.&nbsp;<br>● Different types of budgets: operating budget, capital budget, cash budget, etc.&nbsp;<br>● Step-by-step budgeting process, from data collection to finalizing the budget.&nbsp;<br>● Implementing budgetary control and its role in performance management.</p><p>Class 3: Practical Excel Format of Master Budget &amp; Annual Business Plan (ABP)&nbsp;<br>● Building an Excel-based master budget integrating various functional budgets.&nbsp;<br>● Creating detailed sales forecasts, production plans, and expense budgets.&nbsp;<br>● Developing an Annual Business Plan (ABP) aligned with organizational goals.&nbsp;<br>● Using Excel for financial modeling and scenario analysis.</p><p>Class 4: Forecasted Income Statement and Balance Sheet&nbsp;<br>● Understanding the importance of forecasting in financial planning.&nbsp;<br>● Forecasting sales, revenues, and expenses for the budgeted period.&nbsp;<br>● Estimating assets, liabilities, and equity to create the forecasted Balance Sheet.&nbsp;<br>● Analyzing the impact of forecasting on financial decision-making.</p><p>Class 5: Ratio &amp; Z-score Analysis of Forecasted Financial Statements&nbsp;<br>● Evaluating financial health through ratio analysis.&nbsp;<br>● Calculating and interpreting liquidity, profitability, and solvency ratios.&nbsp;<br>● Assessing credit risk using the Z-score model.&nbsp;<br>● Identifying potential areas for improvement based on ratio analysis.</p><p>Class 6: Management Information System (MIS) Format for Decision Making&nbsp;<br>● Understanding the role of MIS in management decision-making.&nbsp;<br>● Designing and developing MIS reports for financial analysis and control.&nbsp;<br>● Using MIS for monitoring budgetary performance and variance analysis.&nbsp;<br>● Leveraging technology for efficient MIS reporting.</p><p>Class 7: Financial Performance Evaluation and Variance Analysis&nbsp;<br>● Analyzing actual financial performance against budgets and forecasts.&nbsp;<br>● Identifying causes of budget variances and their implications.&nbsp;<br>● Developing corrective action plans based on variance analysis.&nbsp;<br>● Conducting sensitivity analysis to assess the impact of changing variables.</p><p>Class 8: Capital Budgeting and Investment Analysis&nbsp;<br>● Importance of capital budgeting in long-term decision-making.&nbsp;<br>● Evaluating investment opportunities using Net Present Value (NPV) and Internal Rate of Return (IRR).&nbsp;<br>● Understanding payback period and discounted payback period methods.&nbsp;<br>● Assessing risk in capital investment decisions.</p><p>Class 9: Integrated Financial Planning and Forecasting&nbsp;<br>● Integrating financial analysis, budgeting, and forecasting for effective planning.&nbsp;<br>● Aligning budgetary control and performance measurement with strategic objectives.&nbsp;<br>● Using rolling forecasts and continuous planning to adapt to changing business conditions.&nbsp;<br>● Case studies on integrating financial planning in real-world scenarios.</p><p>Class 10: Course Review and Practical Application&nbsp;<br>● Recap of key concepts and techniques covered in the course.&nbsp;<br>● Presenting a comprehensive financial analysis and budgeting plan.&nbsp;<br>● Hands-on exercises and simulations for practical application.&nbsp;<br>● Q&amp;A session to address any remaining doubts or inquiries. THE END!</p>', 'certificate-course-on-analysis-of-financial-statements-implementation-of-budgetary-control', '2023-09-05 18:00:00', 1, 1, NULL, '2023-09-06 01:23:55', '2023-11-08 21:50:40'),
(2, 4, 'Certificate Course on Business Application with IAS & IFRS', '/uploads/thumbnail/1699500419-thumbnail.png', '/uploads/banner/1699500419-banner.png', '<p>ইন্টারন্যাশনাল অ্যাকাউন্টিং স্ট্যান্ডার্ডস (IAS) হল প্রথম আন্তর্জাতিক অ্যাকাউন্টিং স্ট্যান্ডার্ড যার লক্ষ্য ছিল বিশ্বজুড়ে ব্যবসায়ের তুলনা করা সহজ করে তোলা, আর্থিক প্রতিবেদনের স্বচ্ছতা নিশ্চিত করা এবং আস্থা বাড়িয়ে বিশ্ব বাণিজ্য ও বিনিয়োগকে উৎসাহিত করা।</p><p>ইন্টারন্যাশনাল ফাইন্যান্সিয়াল রিপোটিং স্ট্যান্ডার্ডাস (IFRS) হচ্ছে বিশ্ব জুড়ে সর্বজনীন স্বীকৃত হিসাব বিজ্ঞানের ভাষা। IFRS প্রতিষ্ঠানের ফাইন্যান্সিয়াল স্টেটমেন্ট এর জন্য অ্যাকাউন্টিং নিয়মগুলির একটি সেট যা সারা বিশ্বে সামঞ্জস্যপূর্ণ, স্বচ্ছ এবং সহজে তুলনাযোগ্য রিপোর্ট করার উদ্দেশ্যে সেট করা করা হয়। IFRS আন্তর্জাতিক অ্যাকাউন্টিং স্ট্যান্ডার্ড বোর্ড (IASB) দ্বারা জারি করা হয়। IAS 2001 সালে IFRS দ্বারা প্রতিস্থাপিত হয়েছে এবং পরবর্তীকালে বিশ্বের বেশিরভাগ প্রধান আর্থিক বাজার দ্বারা গৃহীত হয়েছে।</p><p>বাংলাদেশের রেজিষ্ট্রেশন অফ জয়েন্ট স্টক কোম্পানিজ এন্ড ফার্ম (IFRS) তে প্রায় ১৮০,০০০ কোম্পানির রেজিষ্ট্রেশন রয়েছে। ২০১৫ সালে ফাইন্যান্সিয়াল রিপোটিং এক্ট এর মাধ্যমে সকল পাবলিক ইন্টারেস্ট প্রতিষ্ঠানে আইএফআরএস (IFRS) বাস্তবায়ন বাধ্যতামূলক করা হয়েছে। ছোট ও মাঝারি প্রতিষ্ঠান (SME) এর জন্য এবং অমুনাফাভোগী প্রতিষ্ঠান, এনজিও, সরকারি প্রতিষ্ঠান এর জন্যেও ভিন্ন ভিন্ন আইএফআরএস (IFRS) গাইডলাইন রয়েছে । এই ১৮০,০০০ কোম্পানির প্রতিটিতে কমপক্ষে ২০ জন করে ফাইন্যান্সিয়াল এবং একাউন্টিং অফিসার প্রয়োজন হলে ৩,৬০০,০০০ জন (IFRS) এ দক্ষ কর্মী প্রয়োজন। <a href=\"https://www.facebook.com/bizzsolutions?__cft__[0]=AZUnTW_I3Zi-TLeMdtdWMa0dl0gkLGGXVeKk2oIFKmoYvBSd8dd3L58H-zIn8Q23431WgFT_E3oeSuAGg_W-d5YJytFW5hSQz0wuKwrLPXPVDVgS_UZRiC8PehKpVpfWxby0WZiGn856B6giRI09JKP55jDgImBLDdRT_F9BbdoRuqGqoyENVJi14E9n2TKepGw&amp;__tn__=-]K-R\">Bizz Solutions PLC</a> এবং Bizz Career Ltd. - Accounts ও Finance সেক্টরে দক্ষ প্রফেশনালস হতে করণীয় বিষয়ক একটি কোর্স আয়োজন করতে যাচ্ছে।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/16/1f534.png\" alt=\"?\"> Course Details:</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Regular Course Fee: BDT. 16,000</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Early Bird Offer: BDT. 10,000 (For first 10 participants)</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Time: 8:30 PM - 10:30 PM</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> No. of Session: 20</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Training Mode: Online (Zoom)</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/16/1f535.png\" alt=\"?\"> Resource Person:</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> Md. Shafiqul Alam LL.B, FCS, FCMA, FCA</p><p>Chairman, Bizz Solutions PLC</p><p>Managing Partner &amp; CEO</p><p>Shafiqul Alam &amp; Co. Chartered Accountants</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> Md. Tareq Kamal FCA</p><p>Deputy General Manager (Finance)</p><p>Crown Cement</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4f/1.5/16/1f3e0.png\" alt=\"?\"> বিস্তারিত: <a href=\"https://www.facebook.com/bizzsolutions?__cft__[0]=AZUnTW_I3Zi-TLeMdtdWMa0dl0gkLGGXVeKk2oIFKmoYvBSd8dd3L58H-zIn8Q23431WgFT_E3oeSuAGg_W-d5YJytFW5hSQz0wuKwrLPXPVDVgS_UZRiC8PehKpVpfWxby0WZiGn856B6giRI09JKP55jDgImBLDdRT_F9BbdoRuqGqoyENVJi14E9n2TKepGw&amp;__tn__=-]K-R\">Bizz Solutions PLC</a>, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F65boFaTEs%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR1-SIoZAzXyXRs4qEDxw09vTu_YIJ_fR5EjxJSP_I5_4bogSDWCI1NGVAA\">01755-597770</a> (Call/ WhatsApp)</p>', NULL, 16000, 6000, 20, '40 Hours', 'Friday', '2 Hours', 'English & Bangla', 'online', 'admission', '2023-11-30', '2024-04-10', '<p><strong>COURSE TITLE: Business Application with IAS &amp; IFRS (1ST Part)&nbsp;</strong></p><p>The Business Application with International Accounting Standard (IAS) &amp; International Financial Reporting Standard (IFRS) subject is designed to provide participants with the opportunity to enhance their financial reporting skills by providing detailed understanding and knowledge of International Accounting Standard application. This includes:&nbsp;</p><p><strong>IAS&nbsp;</strong></p><p>• The framework for the preparation and Presentation of Financial Statements.&nbsp;</p><p>• IAS 1: Presentation of Financial Statements&nbsp;</p><p>• IAS 2: Inventories&nbsp;</p><p>• IAS 7: Statements of Cash Flows&nbsp;</p><p>• IAS 8: Accounting Policies, Changes in Accounting Estimate and Errors&nbsp;</p><p>• IAS 10: Events after the Reporting Period&nbsp;</p><p>• IAS 16: Property, Plant and Equipment&nbsp;</p><p>• IAS 19: Employee Benefits&nbsp;</p><p>• IAS 20: Accounting for Government Grants and Disclosure of Government Assistance&nbsp;</p><p>• IAS 23: Borrowing Costs&nbsp;</p><p>• IAS 24: Related Party Disclosures&nbsp;</p><p>• IAS 26: Accounting and Reporting by Retirement Benefit Plans&nbsp;</p><p>• IAS 33: Earnings per Share&nbsp;</p><p>• IAS 34: Interim Financial Reporting&nbsp;</p><p>• IAS 36: Impairments of Assets&nbsp;</p><p>• IAS 37: Provisions, Contingent Liabilities and Contingent Assets&nbsp;</p><p>• IAS 38: Intangible Assets&nbsp;</p><p>• IAS 40 Investment Property&nbsp;</p><p><strong>IFRS&nbsp;</strong></p><p>• IFRS 5: Non-current Assets Held for Sale and Discontinued Operations&nbsp;</p><p>• IFRS 15: Revenue from contracts with customers&nbsp;</p><p>• IFRS 16: Leases&nbsp;</p><p><strong>COURSE TITLE: Business Application with IAS &amp; IFRS – II (2nd Part)</strong>&nbsp;</p><p>The Business Application with International Accounting Standard (IAS) &amp; International Financial Reporting Standard (IFRS) subject is designed to provide participants with the opportunity to enhance their financial reporting skills by providing detailed understanding and knowledge of International Financial Reporting Standard application. This includes:&nbsp;</p><p><strong>IAS&nbsp;</strong></p><p>• IAS 12: Income Taxes&nbsp;</p><p>• IAS 21: The Effects of Changes in Foreign Exchange Rates&nbsp;</p><p>• IAS 27: Separate Financial Statements&nbsp;</p><p>• IAS 28: Investments in Associates and Joint Ventures&nbsp;</p><p>• IAS 32: Financial Instruments Presentation&nbsp;</p><p>• IAS 41: Agriculture&nbsp;</p><p><strong>IFRS&nbsp;</strong></p><p>• IFRS 1: First-time Adoption of International Financial Reporting Standards&nbsp;</p><p>• IFRS 2: Share-based Payment • IFRS 3: Business Combinations&nbsp;</p><p>• IFRS 4: Insurance Contracts&nbsp;</p><p>• IFRS 6: Exploration for and Evaluation of Mineral Resources&nbsp;</p><p>• IFRS 7: Financial Instruments: Disclosures&nbsp;</p><p>• IFRS 8: Operating Segments&nbsp;</p><p>• IFRS 9: Financial Instruments&nbsp;</p><p>• IFRS 10: Consolidated Financial Statements&nbsp;</p><p>• IFRS 11: Joint Arrangements&nbsp;</p><p>• IFRS 12: Disclosure of Interests in Other Entities&nbsp;</p><p>• IFRS 13: Fair Value Measurement&nbsp;</p><p>• IFRS 14: Regulatory Deferral Accounts</p>', 'certificate-course-on-business-application-with-ias-ifrs', '2023-09-05 18:00:00', 1, 1, NULL, '2023-09-06 01:27:46', '2023-11-08 21:26:59'),
(3, 4, 'Certificate Course on Advanced Excel Training', '/uploads/thumbnail/1699500261-thumbnail.png', '/uploads/banner/1699500261-banner.png', '<ol><li><strong>Advanced Excel Excel শিখে ক্যারিয়ারে নিজের অবস্থান উন্নত করার সময় এখনই !!! বিস্তারিত: 01755-597770</strong><br>আপনি কি স্প্রেডশীট, ফর্মুলা এবং ডেটা এনালাইসিস কাজের জন্য ঘন্টার পর ঘন্টা সময় ব্যয় করছেন ? আপনি কি আপনার Excel Skill বাড়ানোর মাধ্যমে একজন Excel Pro হতে চান? তাহলে এই কোর্সটি হতে পারে আপনার ক্যারিয়ারের সফলতার জন্য একটি উত্তম মাধ্যম । বলা হয়ে থাকে Microsoft Excel- এ কেউ Efficient থাকলে তার চাকরী পাওয়ার সম্ভাবনা থেকে শুরু করে ক্যারিয়ারের উন্নতি কয়েকগুণ বৃদ্ধি পেয়ে যায়।<br>একজন প্রফেশনাল অথবা উদ্যোক্তা তার দৈনন্দিন কাজে AI, ML এর মত উন্নত প্রযুক্তি ব্যবহারের পাশাপাশি Data Analysis, Financial Management, Project Management, Finance, Accountancy, Consultancy, Marketing এর বিভিন্ন কাজের তথ্য বিশ্লেষণ করে সঠিক রিপোর্ট তৈরিতে Excel গুরুত্বপূর্ণ ভূমিকা পালন করে । তাই Bizz Solutions PLC আয়োজন করতে যাচ্ছে Advanced Excel Training এর 17th Batch. Elevate Your Efforts with this Excel Training: Empowering Excellence !!!<br><br><strong>এই কোর্সে আপনি যা যা শিখবেন ???</strong><br>Proficiency in creating and using complex formulas and functions.<br>Ability to create dynamic and visually appealing charts, graphs, and dashboards.<br>Mastery of advanced data analysis techniques using tools like Pivot-Tables.<br>Competence in implementing data validation and protection measures to ensure data accuracy and security.<br>Advanced data modeling and analysis for making informed business decisions.<br>Efficient management and manipulation of large datasets for improved data handling.<br><br><strong>Course Details:</strong><br>কোর্স ফি: ৫,০০০ টাকা;<br>আর্লি বার্ড অফার: ৩,০০০ টাকা (প্রথম ১০ জনের জন্য);<br>ক্লাসের সময়: রাত ৮:৩০ টা থেকে ১০:৩০ টা;<br>সেশন সংখ্যা: ৬ টি (২ ঘণ্টা প্রতি সেশন);<br><br><strong>Resource Person:</strong><br>Mr. Mohammad Refaul Karim Chowdhury (FCA, FFA, FIPA, MCT)<br>DGM - Finance, Transcom Distribution Co. Ltd.<br>VAT Consultant &amp; Treasurer, Bangladesh VAT Bar Association<br>Microsoft Certified Trainer<br><br><strong>বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ</strong><br>আপডেটেড কোর্স মডিউল।<br>ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।<br>ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন ।<br>জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান।<br>রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।<br>Edubd.Tv তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।<br>বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।<br>এক্সপার্ট রির্সোস পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।<br><br><strong>বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: 01755-597770</strong></li></ol><p>&nbsp;</p>', NULL, 5000, 2000, 6, '12 Hours', 'Tuesday', '2 Hours', 'English & Bangla', 'online', 'admission', '2023-12-05', '2024-01-09', '<p><strong>Course Module of Advanced Excel</strong><br><br><strong>Session 1:</strong><br><strong>Topic 1: Introduction to Advanced Excel</strong><br>● Overview of Excel features and capabilities<br>● Understanding data organization and management<br>● Navigating the Excel interface efficiently<br>● Introduction to keyboard shortcuts and productivity tips<br><br><strong>Topic 2: Advanced Formulas and Functions</strong><br>● Working with logical functions (IF, AND, OR)<br>● Utilizing lookup functions (VLOOKUP, HLOOKUP, INDEX-MATCH)<br>● Implementing mathematical and statistical functions<br>● Exploring text manipulation functions<br>● Introduction to array formulas<br><br><strong>Session 2:</strong><br><strong>Topic 1: Advanced Data Manipulation</strong><br>● Using advanced filtering techniques (AutoFilter, Advanced Filter)<br>● Applying formulas across multiple sheets with 3D references<br>● Working with named ranges and range names<br>● Using data tables and scenarios for \"What-If\" analysis<br>● Introduction to Power Query for data transformation and cleansing<br><br><strong>Topic 2: Advanced Charting and Visualization</strong><br>● Creating dynamic charts using named ranges and formulas<br>● Customizing chart elements and formatting options<br>● Creating combination charts and dual-axis charts<br>● Building interactive dashboards with slicers and timelines<br>● Introduction to Sparklines for data visualization<br><br><strong>Session 3:</strong><br><strong>Topic 1: Advanced Data Analysis</strong><br>● Using advanced filters and criteria<br>● Performing advanced statistical analysis (correlation, regression)<br>● Analyzing data with the Analysis ToolPak add-in<br>● Using goal seek and solver for optimization problems<br>● Introduction to Power Pivot for data modeling and analysis<br><br><strong>Topic 2: Advanced Excel Tips and Tricks</strong><br>● Customizing the Excel ribbon and quick access toolbar<br>● Using conditional formulas and formatting for dynamic reports<br>● Working with data validation and drop-down lists<br>● Advanced data cleaning and manipulation techniques<br>● Time-saving shortcuts and productivity hacks<br><br><strong>Session 4:</strong><br><strong>Topic 1: Advanced PivotTable Techniques</strong><br>● Grouping and ungrouping data in PivotTables<br>● Creating calculated fields and items<br>● Using slicers and timelines for interactivity<br>● Utilizing PivotTable data analysis features<br>● Advanced PivotTable formatting and customization<br>Topic 2: Collaborating with Excel<br>● Sharing and protecting workbooks<br>● Tracking changes and comments<br>● Co-authoring and real-time collaboration<br>● Using data linking and consolidation<br>● Importing and exporting data from external sources<br><br><strong>Session 5 &amp; 6:</strong><br><strong>Topic 1: Data Analysis Tools</strong><br>● Sorting and filtering data effectively<br>● Using conditional formatting to highlight data<br>● Applying data validation rules<br>● Utilizing pivot tables for data analysis and reporting<br>● Creating and customizing charts to visualize data<br><br><strong>Topic 2: Advanced Data Validation and Conditional Formatting</strong><br>● Creating custom data validation rules<br>● Using formulas and validation lists<br>● Applying conditional formatting with formulas<br>● Icon sets and data bars for visual indicators<br>● Managing conditional formatting rules and priorities<br><br><strong>Topic 3: Advanced Excel Tips and Tricks II</strong><br>● Advanced data analysis with array formulas<br>● Using Goal Seek and Solver for complex problems<br>● Introduction to Excel add-ins for specialized tasks<br>● Working with external data connections<br>● Tips for optimizing and improving spreadsheet performance</p><p>&nbsp;</p>', 'certificate-course-on-advanced-excel-training', '2023-09-05 18:00:00', 1, 1, NULL, '2023-09-06 01:29:59', '2023-11-08 21:24:21'),
(4, 5, 'Certificate Course on VAT & Tax Management', '/uploads/thumbnail/1693985516-thumbnail.jpg', '/uploads/banner/1693985516-banner.jpg', '<p>Establish the right situation, cycles and controls to guarantee that Income Tax &amp; Value Added Tax on important exchanges are recorded and revealed precisely, as needed by the VAT guidelines. LCBS Dhaka has designed a suite of VAT &amp; TAX training course for all levels of employees in both corporate and government sectors. We aim to equip you with the knowledge and skills to embrace the many challenges of this new regime. Complete your VAT &amp; Tax online training course today!</p>', 'BamroKQLbrs', 10000, 6000, 10, '20 Hours', '2 Days per week (Friday & Saturday).', '2 hours/Day (8:00 pm to 10:00 Pm)', 'Bangla, English', 'online', 'going_on', '2023-07-01', '2023-08-29', '<p>This training nurtures learning of the graduates and professionals and develops professionalism in delivering accounting services independently and enhances their skill to tap the market opportunity. Moreover, it is intended for managers who are keen to learn about financial aspects under micro scrutiny and reduce the chances of wrong decisions. It will further provide smart tips to: Better Understanding of Income Tax Management Better understanding of accounting, Tax and VAT knowledge for your career Identify tax planning opportunities Learn new legal provisions related to income tax and VAT Create appropriate tax saving opportunities for proper business planning.</p>', 'certificate-course-on-vat-tax-management', '2023-09-05 18:00:00', 1, NULL, NULL, '2023-09-06 01:31:56', '2023-09-06 01:31:56'),
(5, 4, 'Certificate Course on Company Affairs and Secretarial Practices', '/uploads/thumbnail/1699500389-thumbnail.png', '/uploads/banner/1699500389-banner.png', '<p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\"> বর্তমান চ্যালেঞ্জিং বিশ্বে অন্যদের থেকে একধাপ এগিয়ে থাকার সবথেকে গুরুত্বপূর্ণ ও সহজ মাধ্যম হচ্ছে পেশাগত দক্ষতা বৃদ্ধি করা। যে কোন কোম্পনিতে কাজ করার জন্য কোম্পানি অ্যাফেয়ার্স এবং সেক্রেটারিয়াল প্র্যাকটিস এর বিষয়গুলো জানা অত্যন্ত জরুরি। তাই বিজ সলিউশনস পিএলসি আপনার প্রফেশনাল দক্ষতা বৃদ্ধিতে সহায়তা করতে অনলাইনে \"কোম্পানি অ্যাফেয়ার্স এবং সেক্রেটারিয়াল প্র্যাকটিস\" কোর্সটি আয়োজন করতে যাচ্ছে।<br><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1/16/1f535.png\" alt=\"🔵\"> Resource Person:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t34/1/16/1f518.png\" alt=\"🔘\"> Mr. Md. Shafiqul Alam LL.B, FCS, FCMA, FCA<br>Chairman, Bizz Solutions PLC<br>Managing Partner &amp; CEO<br>Shafiqul Alam &amp; Co. Chartered Accountants<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t34/1/16/1f518.png\" alt=\"🔘\"> Mr. Mominur Rahman, LLM, ITP, ACS<br>Lead Consultant<br>MM Rahman &amp; Associates<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1/16/1f534.png\" alt=\"🔴\"> Attractions of the Course<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Completion Certificate<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Materials<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Class Recordings<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7b/1/16/1f7e1.png\" alt=\"🟡\"> Course Details:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Regular Course Fee: BDT. 10,000<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Early Bird Offer: BDT. 5,000 (For first 10 participants)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Last Date of Admission: December 2, 2023<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Starting Date: Sunday, December 3, 2023<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Time: 08:30 PM (Every Sunday)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Total No. of Sessions: 10<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1/16/1f534.png\" alt=\"🔴\"> Book Your Seat: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fforms.gle%2FXv7pu3B1fJVrCkNH9%3Ffbclid%3DIwAR2YdLzmidPpUVvgX787-vRJeYP5jffRyr9Q6su89jyIYtG69bL__cITNpg&amp;h=AT2YQU1djGPQKWjAKJUMfU3JcMnkWplsb80z1cV9RxYwI2-SpMQEWgKAItOA6wauxwPZFxclKupxw4ySPul6SpEDsoqPqZhpoJPuoFvohY8XcAeQ4IrF8hpG8tC8xl7fl6eT&amp;__tn__=-UK*F&amp;c[0]=AT1dkrqgXSVfYFsGwiE1aqUi_hcOjjc4gt1-ujSo8pEVO_3K3rkowQ33EOstp5OynTu5NMmIuCMyw_gh7h7e-Ouk8g6ArqXkRE_i4sQtaxh6pHCcZ2jTbQlCQR_WdlDMwbl9oKrm27Xa5kJsExioNdpI8sGMSD8FaVlBPUKT0WmMGYh1jPByrAivYyLqKvXjWFHhli4Qa2m0\">https://forms.gle/Xv7pu3B1fJVrCkNH9</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\">বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> আপডেটেড কোর্স মডিউল।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Edubd.Tv তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> এক্সপার্ট রির্সোস পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> প্রশিক্ষকের সাথে প্রতিটি ব্যাচের জন্য ডেডিকেটেড হোয়াটস গ্রুপ।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/1f3e0.png\" alt=\"🏠\"> যোগাযোগে: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: 01755-597770</p>', NULL, 10000, 5000, 10, '20 Hour', 'Sunday', '2 Hours', 'English and Bangla', 'online', 'going_on', '2023-12-03', '2024-02-04', '<p>The Company Affairs and Secretarial Practices helps students to know particular code of conduct, policies &amp; conventions,<br>corporate laws that regulate a corporate type of business right from its formation up to winding up, all legal procedures<br>maintained in corporate matters and standard practices that a corporate secretary should. This Company Affairs and<br>Secretarial Practices subject includes:<br><br>• How to get Name Clearance, Certificate of Incorporation<br>• How to draft MOA and AOA<br>• Preparation of Form-IX &amp; XII, Schedule –X<br>• How to submit Annual Return<br>• How to get Trade License<br>• How to get investment approval from Bangladesh Investment Development Authority (BIDA)<br>• How to get IRC &amp; ERC<br>• How to write Agenda, Notice &amp; Resolutions<br>• Drafting different Agreement like MoU, NDA, Rent, Distributor, and Joint Venture etc.&nbsp;<br>• How to Liaison, compliance and update all documents, certificates, membership with RJSC, BOI CCIE and different Chambers of&nbsp;<br>Commerce and Industry&nbsp;<br>• How to play role of Custodian of core Original Business Documents<br>• Operational and documentation procedures of Export Import Business&nbsp;</p>', 'certificate-course-on-company-affairs-and-secretarial-practices', '2023-11-05 18:00:00', 1, 1, NULL, '2023-11-05 21:38:58', '2023-11-08 21:42:08'),
(6, 4, 'Certificate Course on SAP-FICO', '/uploads/thumbnail/1699868793-thumbnail.png', '/uploads/banner/1699868793-banner.png', '<p>স্বল্প খরচে বিশ্বমানের SAP (FICO Module) কোর্স করে ক্যারিয়ার গড়ার সুযোগ! Ph: 01755-597770<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\"> চতুর্থ শিল্প বিপ্লবের অগ্রযাত্রায় বিশ্বের বিভিন্ন উন্নত রাষ্ট্রগুলোর সাথে তাল মিলিয়ে বাংলাদেশর শিল্প-প্রতিষ্ঠানগুলোও এখন আগামীর অভাবনীয় সাফল্যের অগ্রযাত্রায় পা বাড়িয়েছে। বাংলাদেশের বৃহৎ প্রতিষ্ঠানগুলো খুব দ্রুত সময়ের মধ্যে প্রযুক্তিগত উন্নয়নের সঙ্গে খাপ খাওয়াতে নিতে প্রধান নিয়ামক হিসেবে SAP এর ব্যবহার শুরু করেছে। ’বিজ সলিউশনস পিএলসি’ গর্বিত SAP Licensing পার্টনার হিসাবে বর্তমান বাজারে SAP এর ব্যাপক দক্ষ জনবল এর ঘাটতি মেটাতে গুরুত্বপূর্ণ অবদান রেখে চলেছে। এরই ধারাবাহিকতায় Bizz Solutions PLC আবারো SAP (FICO Module) Certificate Course 20th Batch এর আয়োজন করছে।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png\" alt=\"👉\"> Apply Now: <a href=\"https://forms.gle/b5mdq8to52mtS8aV6?fbclid=IwAR1b0KXWpXwBuhcdaUIomH1sliQRnC2pIXTrgGD60d0hJZDwdINQWNiTrh4\">https://forms.gle/b5mdq8to52mtS8aV6</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1/16/1f534.png\" alt=\"🔴\"> Resource Person:<br>Mr. Md. Ashraful Alam<br><a href=\"https://l.facebook.com/l.php?u=http%3A%2F%2FM.Com%2F%3Ffbclid%3DIwAR05AnE75efcxnLQhsuiRBQxgzuqALbTShhmd3LS5UwOE_nX6qmrGOGnaro&amp;h=AT0Z6z8R6tmk569wkSvx0QdArCHn_w-__QWj7mN_haR_gJm1vrcDYPjZH9LLzcRuNw6jsFTC8XI_x3ocsZJArfX2sXo0K4IYniyQTsFVTaPKonWk27CkqNMa9rq7XOHi63mt&amp;__tn__=-UK*F&amp;c[0]=AT1PMBAOQ4-UFFp4QHZq_Hr-i0jx2oua1BcKGKbD9v0DIBcvoGX8lf4_qOMBhL5ulTWZiO89LJQzMuhjD-stFKHePCxPPl8yR935rxy8X_YHyQGEWMZYIpThEjzlpofaBHoowQ6Mw87q8odZnhIx2DLxgYKomuYCCINUj6mWERu6hX0qeYI-VDsPyUmAUwAVK4MOgikGXZjj\">M.Com</a>, CA (Part Qualified), ITP<br>Senior Consultant (SAP- FICO)<br>Bizz Solutions PLC<br>SAP Global Certified, Consultant &amp; Trainer<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7b/1/16/1f7e1.png\" alt=\"🟡\"> Attractions of the Course:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Licensing Server Access for All Participants<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Course Completion Certificates<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Course Materials &amp; Class Recording<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\"> Course Details:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Fee: BDT. 15,000/-<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Early Bird Offer: BDT. 10,000/- (For first 10 participants)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Last Date of Registration: November 16, 2023 (Thursday)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Starting Date: November 17, 2023 (Friday)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Durations: 15 Sessions (30 Hours)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Mode: Zoom Online<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\"> বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> আপডেটেড কোর্স মডিউল।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম ফ্রিল্যান্সিং গাইডলাইন ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> জুম প্লাটফর্ম এ অনলাইনে মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকডিং প্রদান।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> <a href=\"https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.edubd.tv%2F%3Ffbclid%3DIwAR3BnKWNRUuIaFjMfkVzJoLKrac69BXGOihP_nO9eCbckXpIYptH3R2PABo&amp;h=AT1HTRi3STzPlBR2AChtdyXfjmr2pElFJk5rvvmmbPoX3eqOUE-2v3H_-N9iulqhw5ReKR717-J1k8Vc_5o7w-PkJS48RvvKj9ZCXI_srneoBEZ14VRQJu-hLRf4LptHUzge&amp;__tn__=-UK*F&amp;c[0]=AT1PMBAOQ4-UFFp4QHZq_Hr-i0jx2oua1BcKGKbD9v0DIBcvoGX8lf4_qOMBhL5ulTWZiO89LJQzMuhjD-stFKHePCxPPl8yR935rxy8X_YHyQGEWMZYIpThEjzlpofaBHoowQ6Mw87q8odZnhIx2DLxgYKomuYCCINUj6mWERu6hX0qeYI-VDsPyUmAUwAVK4MOgikGXZjj\">www.edubd.tv</a> তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> এক্সপার্ট রিসোর্স পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/1f3e0.png\" alt=\"🏠\"> বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: 01755-597770</p>', NULL, 15000, 5000, 15, '30 Hours', 'Friday & Monday', '2 Hours', 'English and Bangla', 'online', 'going_on', '2023-11-17', '2024-02-09', '<figure class=\"table\"><table><tbody><tr><td>Session</td><td>Chapter/ &nbsp;Parts</td><td>Topics &nbsp;Covered</td></tr><tr><td>Session-01</td><td>Chapter&nbsp;1:&nbsp;Introduction to ERP</td><td>• &nbsp;What&nbsp;is &nbsp;ERP<br>•&nbsp; &nbsp;History &nbsp;of&nbsp;ERP&nbsp;systems</td></tr><tr><td><p>&nbsp;</p><p>Session-02</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>• &nbsp;Why&nbsp;do&nbsp;we&nbsp;need&nbsp;ERP&nbsp;software?<br>•&nbsp; &nbsp;ERP&nbsp;Advantages &nbsp;and&nbsp;Disadvantages<br>• &nbsp;Common &nbsp;ERP&nbsp;modules</td></tr><tr><td><p>&nbsp;</p><p>Session-03</p></td><td><p>&nbsp;</p><p>Chapter&nbsp;2:&nbsp;Overview &nbsp;of&nbsp;ERP</p></td><td>• &nbsp;Common &nbsp;ERP&nbsp;modules<br>• &nbsp;Why&nbsp;ERP<br>• &nbsp;Top&nbsp;ERP&nbsp;Vendors &nbsp;List<br>•&nbsp; &nbsp;ERP Software &nbsp;Packages</td></tr><tr><td><p>&nbsp;</p><p>Session-04</p></td><td><p>&nbsp;</p><p>Chapter&nbsp;3:&nbsp;Overview &nbsp;of&nbsp;ERP&nbsp;SAP&nbsp;software</p></td><td>• &nbsp;SAP&nbsp;History<br>• &nbsp;Products &nbsp;of&nbsp;SAP<br>• &nbsp;ERPSAP&nbsp;Software &nbsp;Overview<br>•&nbsp;What&nbsp;is &nbsp;ERP&nbsp;SAP&nbsp;Software?</td></tr><tr><td><p>&nbsp;</p><p>Session-05</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>• &nbsp;Versions &nbsp;of&nbsp;ERP &nbsp;SAP&nbsp;Software<br>• &nbsp;ERP&nbsp;SAP&nbsp;Client/Server &nbsp;Architecture</td></tr><tr><td><p>&nbsp;</p><p>Session-06</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>• &nbsp;Important&nbsp; &nbsp;&nbsp;modules&nbsp; &nbsp;of&nbsp;ERP&nbsp;SAP Software<br>• &nbsp;SAP&nbsp;Functional&nbsp; &nbsp;&nbsp;Modules<br>• &nbsp;SAP&nbsp;Technical &nbsp;Modules</td></tr><tr><td><p>&nbsp;</p><p>Session-07</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>•&nbsp;SAP&nbsp;Navigation<br>• &nbsp;SAP&nbsp;Business&nbsp; &nbsp;Process<br>•&nbsp;Concepts &nbsp;of&nbsp;all&nbsp;SAP&nbsp;Modules<br>• &nbsp;SAP&nbsp;Terminology&nbsp; &nbsp;andGlossaries</td></tr><tr><td>Session-08</td><td>Chapter&nbsp;4:&nbsp;General Ledger&nbsp;Accounting</td><td>•&nbsp; &nbsp;Create/edit/change&nbsp; &nbsp;&nbsp;GL<br>•&nbsp; &nbsp;Posting &nbsp;in &nbsp;Ledger&nbsp;accounts</td></tr></tbody></table></figure><figure class=\"table\"><table><tbody><tr><td><strong>Session</strong></td><td><strong>Chapter/&nbsp;Parts</strong></td><td><strong>Topics&nbsp;Covered</strong></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>•&nbsp; &nbsp;Reversing&nbsp;a&nbsp;posted&nbsp;Voucher</td></tr><tr><td><p>&nbsp;</p><p>Session-09</p></td><td><p>&nbsp;</p><p><strong>-DO-</strong></p></td><td>•&nbsp; &nbsp;Parking&nbsp;a&nbsp;Journal &nbsp;Voucher<br>•&nbsp; &nbsp;Editing &nbsp;a&nbsp;parked Voucher<br>•&nbsp; &nbsp;Posting&nbsp;a&nbsp;parked voucher<br>•&nbsp; &nbsp;Clearing &nbsp;General&nbsp;Ledger<br>•&nbsp; &nbsp;Reset&nbsp;Clearing&nbsp;Items<br>•&nbsp; &nbsp;Generating&nbsp;General&nbsp;ledger&nbsp;reports</td></tr><tr><td><p>&nbsp;</p><p>Session-10</p></td><td><p>&nbsp;</p><p><strong>Chapter&nbsp;5:&nbsp;Accounts Receivable</strong></p></td><td>•&nbsp; &nbsp;Posting&nbsp;a&nbsp;direct customer&nbsp;invoice<br>•&nbsp; &nbsp;Parking&nbsp;a&nbsp;direct customer&nbsp;invoice<br>•&nbsp; &nbsp;Posting&nbsp;a&nbsp;parked customer&nbsp;invoice<br>•&nbsp; &nbsp;Posting&nbsp;of&nbsp;credit &nbsp;note&nbsp;and&nbsp;debit &nbsp;note</td></tr><tr><td><p>&nbsp;</p><p>Session-11</p></td><td><p>&nbsp;</p><p><strong>-DO-</strong></p></td><td>•&nbsp;&nbsp; Advance&nbsp;payment&nbsp;from&nbsp;customer&nbsp;by cheque<br>•&nbsp; &nbsp;Clearing&nbsp;an advance&nbsp;payment&nbsp;from customer<br>•&nbsp;&nbsp; Posting&nbsp;incoming &nbsp;payment&nbsp;from customer&nbsp;through &nbsp;cash<br>•&nbsp; &nbsp;Posting&nbsp;incoming &nbsp;payment&nbsp;from customer&nbsp;through &nbsp;cheque/online<br>•&nbsp; &nbsp;Display&nbsp;customer&nbsp;line&nbsp;items</td></tr><tr><td><p>&nbsp;</p><p>Session-12</p></td><td><p>&nbsp;</p><p><strong>Chapter&nbsp;6:&nbsp;Accounts&nbsp;Payable</strong></p></td><td>•&nbsp; &nbsp;Create Purchase&nbsp;Requisition &nbsp;(PR)<br>•&nbsp; &nbsp;Create Purchase&nbsp;Order&nbsp;(PO)<br>•&nbsp; &nbsp;&nbsp;Prepare&nbsp;Goods&nbsp;Received&nbsp;Notes&nbsp;(GRN)</td></tr><tr><td><p>&nbsp;</p><p>Session-13</p></td><td><p>&nbsp;</p><p><strong>-DO-</strong></p></td><td>•&nbsp; &nbsp;Posting&nbsp;of&nbsp;invoice&nbsp;directly<br>•&nbsp; &nbsp;Reversal&nbsp;of&nbsp;post edinvoices<br>•&nbsp; &nbsp;Posting&nbsp;of&nbsp;Debit&nbsp;and&nbsp;Credit&nbsp;Memo<br>•&nbsp; &nbsp;Vendors&nbsp;Payment&nbsp;by&nbsp;cash</td></tr></tbody></table></figure><figure class=\"table\"><table><tbody><tr><td>Session</td><td>Chapter/ &nbsp;Parts</td><td>Topics &nbsp;Covered</td></tr><tr><td><p>&nbsp;</p><p>Session-14</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>•&nbsp; &nbsp;Payment &nbsp;of&nbsp;local &nbsp;vendors &nbsp;by cheque<br>•&nbsp; &nbsp;Advance &nbsp;payments &nbsp;request &nbsp;for&nbsp;vendors<br>•&nbsp; &nbsp;Advance &nbsp;payments &nbsp;to&nbsp;vendors<br>•&nbsp; &nbsp;Clearing&nbsp; &nbsp;advance &nbsp;payment &nbsp;to&nbsp;vendor<br>•&nbsp; &nbsp;Display&nbsp;vendor&nbsp;line&nbsp;items</td></tr><tr><td><p>&nbsp;</p><p>Session-15</p></td><td><p>&nbsp;</p><p>Chapter7: &nbsp;Cash and&nbsp;Bank&nbsp;Accounting</p></td><td>•&nbsp;&nbsp; Create &nbsp;house&nbsp;bank,&nbsp;Account &nbsp;ID&nbsp;against bank&nbsp;ledger<br>•&nbsp; &nbsp;Create &nbsp;a&nbsp;check&nbsp;lot<br>•&nbsp; &nbsp;Reversal&nbsp;of&nbsp;cheque&nbsp;payment<br>•&nbsp;&nbsp; Manual&nbsp;cheque&nbsp;assignment&nbsp;to&nbsp;cheque register</td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-16</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>-DO-</p></td><td>•&nbsp; &nbsp;View&nbsp;check&nbsp;register<br>•&nbsp; &nbsp;Posting&nbsp;in&nbsp;cash&nbsp;book<br>•&nbsp; &nbsp;Checking&nbsp;cash&nbsp;balance<br>•&nbsp;&nbsp; Reversing &nbsp;cash&nbsp;receipt &nbsp;and&nbsp;cash payment<br>•&nbsp; &nbsp;Parking&nbsp;and&nbsp;posting&nbsp;a&nbsp;cashbook&nbsp;entry</td></tr><tr><td><p>&nbsp;</p><p>Session-17</p></td><td><p>&nbsp;</p><p>Chapter&nbsp;8:&nbsp;Fixed Assets&nbsp;Accounting</p></td><td>•&nbsp; &nbsp;Creation&nbsp;of&nbsp;Assets<br>•&nbsp; &nbsp;Normal &nbsp;Fl&nbsp;acquisition &nbsp;with&nbsp;vendor<br>•&nbsp; &nbsp;Assets&nbsp;Acquisition &nbsp;through&nbsp;PO&nbsp;cycle</td></tr><tr><td><p>&nbsp;</p><p>Session-18</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>•&nbsp; &nbsp;Retirement&nbsp;of&nbsp;asset<br>•&nbsp; &nbsp;Assets&nbsp;Retirement&nbsp;by&nbsp;Scrapping<br>•&nbsp; &nbsp;Assets&nbsp;Retirement&nbsp;with&nbsp;revenue<br>•&nbsp; &nbsp;Transfer&nbsp;of&nbsp;assets&nbsp;within&nbsp;the&nbsp;company<br>•&nbsp; &nbsp;Depreciation &nbsp;Postings</td></tr><tr><td><p>&nbsp;</p><p>Session-19</p></td><td><p>&nbsp;</p><p>Chapter9: Controlling&nbsp;(CO) Module</p></td><td>•&nbsp;Overview&nbsp;of&nbsp;CO module<br>• &nbsp;CO&nbsp;Module&nbsp;Organization &nbsp;structure<br>• &nbsp;Create &nbsp;and&nbsp;Maintain&nbsp;&nbsp;Activity&nbsp;Type</td></tr></tbody></table></figure><figure class=\"table\"><table><tbody><tr><td>Session</td><td>Chapter/ &nbsp;Parts</td><td>Topics &nbsp;Covered</td></tr><tr><td><p>&nbsp;</p><p>Session-01</p></td><td><p>&nbsp;</p><p>Chapter&nbsp;1:&nbsp;Introduction&nbsp; &nbsp;to ERP</p></td><td>• &nbsp;What&nbsp;is &nbsp;ERP<br>•&nbsp; &nbsp;History &nbsp;of&nbsp;ERP&nbsp;systems</td></tr><tr><td><p>&nbsp;</p><p>Session-02</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>• &nbsp;Why&nbsp;do&nbsp;we&nbsp;need&nbsp;ERP&nbsp;software?<br>•&nbsp; &nbsp;ERP&nbsp;Advantages &nbsp;and&nbsp;Disadvantages<br>• &nbsp;Common &nbsp;ERP&nbsp;modules</td></tr><tr><td><p>&nbsp;</p><p>Session-03</p></td><td><p>&nbsp;</p><p>Chapter&nbsp;2:&nbsp;Overview &nbsp;of&nbsp;ERP</p></td><td>• &nbsp;Common &nbsp;ERP&nbsp;modules<br>• &nbsp;Why&nbsp;ERP<br>• &nbsp;Top&nbsp;ERP&nbsp;Vendors &nbsp;List<br>•&nbsp; &nbsp;ERP Software &nbsp;Packages</td></tr><tr><td><p>&nbsp;</p><p>Session-04</p></td><td><p>&nbsp;</p><p>Chapter&nbsp;3:&nbsp;Overview &nbsp;of&nbsp;ERP&nbsp;SAP&nbsp;software</p></td><td>• &nbsp;SAP&nbsp;History<br>• &nbsp;Products &nbsp;of&nbsp;SAP<br>• &nbsp;ERPSAP&nbsp;Software &nbsp;Overview<br>•&nbsp;What&nbsp;is &nbsp;ERP&nbsp;SAP&nbsp;Software?</td></tr><tr><td><p>&nbsp;</p><p>Session-05</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>• &nbsp;Versions &nbsp;of&nbsp;ERP &nbsp;SAP&nbsp;Software<br>• &nbsp;ERP&nbsp;SAP&nbsp;Client/Server &nbsp;Architecture</td></tr><tr><td><p>&nbsp;</p><p>Session-06</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>• &nbsp;Important&nbsp; &nbsp;&nbsp;modules&nbsp; &nbsp;of&nbsp;ERP&nbsp;SAP Software<br>• &nbsp;SAP&nbsp;Functional&nbsp; &nbsp;&nbsp;Modules<br>• &nbsp;SAP&nbsp;Technical &nbsp;Modules</td></tr><tr><td><p>&nbsp;</p><p>Session-07</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>•&nbsp;SAP&nbsp;Navigation<br>• &nbsp;SAP&nbsp;Business&nbsp; &nbsp;Process<br>•&nbsp;Concepts &nbsp;of&nbsp;all&nbsp;SAP&nbsp;Modules<br>• &nbsp;SAP&nbsp;Terminology&nbsp; &nbsp;andGlossaries</td></tr><tr><td>Session-08</td><td>Chapter&nbsp;4:&nbsp;General Ledger&nbsp;Accounting</td><td>•&nbsp; &nbsp;Create/edit/change&nbsp; &nbsp;&nbsp;GL<br>•&nbsp; &nbsp;Posting &nbsp;in &nbsp;Ledger&nbsp;accounts</td></tr></tbody></table></figure><figure class=\"table\"><table><tbody><tr><td><strong>Session</strong></td><td><strong>Chapter/&nbsp;Parts</strong></td><td><strong>Topics&nbsp;Covered</strong></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>•&nbsp; &nbsp;Reversing&nbsp;a&nbsp;posted&nbsp;Voucher</td></tr><tr><td><p>&nbsp;</p><p>Session-09</p></td><td><p>&nbsp;</p><p><strong>-DO-</strong></p></td><td>•&nbsp; &nbsp;Parking&nbsp;a&nbsp;Journal &nbsp;Voucher<br>•&nbsp; &nbsp;Editing &nbsp;a&nbsp;parked Voucher<br>•&nbsp; &nbsp;Posting&nbsp;a&nbsp;parked voucher<br>•&nbsp; &nbsp;Clearing &nbsp;General&nbsp;Ledger<br>•&nbsp; &nbsp;Reset&nbsp;Clearing&nbsp;Items<br>•&nbsp; &nbsp;Generating&nbsp;General&nbsp;ledger&nbsp;reports</td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Session-10</p></td><td><p>&nbsp;</p><p><strong>Chapter&nbsp;5:&nbsp;Accounts Receivable</strong></p></td><td>•&nbsp; &nbsp;Posting&nbsp;a&nbsp;directcustomer&nbsp;invoice<br>•&nbsp; &nbsp;Parking&nbsp;a&nbsp;direct customer&nbsp;invoice<br>•&nbsp; &nbsp;Posting&nbsp;a&nbsp;parkedcustomer&nbsp;invoice<br>•&nbsp; &nbsp;Posting&nbsp;of&nbsp;credit &nbsp;note&nbsp;and&nbsp;debit &nbsp;note</td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-11</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>-DO-</strong></p></td><td>•&nbsp;&nbsp; Advance&nbsp;payment&nbsp;from&nbsp;customer&nbsp;by cheque<br>•&nbsp; &nbsp;Clearing&nbsp;an advance&nbsp;payment&nbsp;from customer<br>•&nbsp;&nbsp; Posting&nbsp;incoming &nbsp;payment&nbsp;from customer&nbsp;through &nbsp;cash<br>•&nbsp; &nbsp;Posting&nbsp;incoming &nbsp;payment&nbsp;from customer&nbsp;through &nbsp;cheque/online<br>•&nbsp; &nbsp;Display&nbsp;customer&nbsp;line&nbsp;items</td></tr><tr><td><p>&nbsp;</p><p>Session-12</p></td><td><p>&nbsp;</p><p><strong>Chapter&nbsp;6:&nbsp;Accounts&nbsp;Payable</strong></p></td><td>•&nbsp; &nbsp;Create Purchase&nbsp;Requisition &nbsp;(PR)<br>•&nbsp; &nbsp;Create Purchase&nbsp;Order&nbsp;(PO)<br>•&nbsp; &nbsp;&nbsp;Prepare&nbsp;Goods&nbsp;Received&nbsp;Notes&nbsp;(GRN)</td></tr><tr><td><p>&nbsp;</p><p>Session-13</p></td><td><p>&nbsp;</p><p><strong>-DO-</strong></p></td><td>•&nbsp; &nbsp;Posting&nbsp;of&nbsp;invoice&nbsp;directly<br>•&nbsp; &nbsp;Reversal&nbsp;of&nbsp;post edinvoices<br>•&nbsp; &nbsp;Posting&nbsp;of&nbsp;Debit&nbsp;and&nbsp;Credit&nbsp;Memo<br>•&nbsp; &nbsp;Vendors&nbsp;Payment&nbsp;by&nbsp;cash</td></tr></tbody></table></figure><figure class=\"table\"><table><tbody><tr><td>Session</td><td>Chapter/ &nbsp;Parts</td><td>Topics &nbsp;Covered</td></tr><tr><td><p>&nbsp;</p><p>Session-14</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td>•&nbsp; &nbsp;Payment &nbsp;of&nbsp;local &nbsp;vendors &nbsp;by cheque<br>•&nbsp; &nbsp;Advance &nbsp;payments &nbsp;request &nbsp;for&nbsp;vendors<br>•&nbsp; &nbsp;Advance &nbsp;payments &nbsp;to&nbsp;vendor<br>•&nbsp; &nbsp;Clearing&nbsp; &nbsp;advance &nbsp;payment &nbsp;to&nbsp;vendor<br>•&nbsp; &nbsp;Display&nbsp;vendor&nbsp;line&nbsp;items</td></tr><tr><td><p>&nbsp;</p><p>Session-15</p></td><td><p>&nbsp;</p><p>Chapter7: &nbsp;Cash and&nbsp;Bank&nbsp;Accounting</p></td><td>•&nbsp;&nbsp; Create &nbsp;house&nbsp;bank,&nbsp;Account &nbsp;ID&nbsp;against bank&nbsp;ledger<br>•&nbsp; &nbsp;Create &nbsp;a&nbsp;check&nbsp;lot<br>•&nbsp; &nbsp;Reversal&nbsp;of&nbsp;cheque&nbsp;payment<br>•&nbsp;&nbsp; Manual&nbsp;cheque&nbsp;assignment&nbsp;to&nbsp;cheque register</td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Session-16</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>-DO-</p></td><td>•&nbsp; &nbsp;View&nbsp;check&nbsp;register<br>•&nbsp; &nbsp;Posting&nbsp;in&nbsp;cash&nbsp;book<br>•&nbsp; &nbsp;Checking&nbsp;cash&nbsp;balance<br>•&nbsp;&nbsp; Reversing &nbsp;cash&nbsp;receipt &nbsp;and&nbsp;cash payment<br>•&nbsp; &nbsp;Parking&nbsp;and&nbsp;posting&nbsp;a&nbsp;cashbook&nbsp;entry</td></tr><tr><td><p>&nbsp;</p><p>Session-17</p></td><td><p>&nbsp;</p><p>Chapter&nbsp;8:&nbsp;Fixed Assets&nbsp;Accounting</p></td><td>•&nbsp; &nbsp;Creation&nbsp;of&nbsp;Assets<br>•&nbsp; &nbsp;Normal &nbsp;Fl&nbsp;acquisition &nbsp;with&nbsp;vendor<br>•&nbsp; &nbsp;Assets&nbsp;Acquisition &nbsp;through&nbsp;PO&nbsp;cycle</td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Session-18</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>-DO-</p></td><td>•&nbsp; &nbsp;Retirement&nbsp;of&nbsp;asset<br>•&nbsp; &nbsp;Assets&nbsp;Retirement&nbsp;by&nbsp;Scrapping<br>•&nbsp; &nbsp;Assets&nbsp;Retirement&nbsp;with&nbsp;revenue<br>•&nbsp; &nbsp;Transfer&nbsp;of&nbsp;assets&nbsp;within&nbsp;the&nbsp;company<br>•&nbsp; &nbsp;Depreciation &nbsp;Postings</td></tr><tr><td><p>&nbsp;</p><p>Session-19</p></td><td><p>&nbsp;</p><p>Chapter9: Controlling&nbsp;(CO) Module</p></td><td>•&nbsp;Overview&nbsp;of&nbsp;CO module<br>• &nbsp;CO&nbsp;Module&nbsp;Organization &nbsp;structure<br>• &nbsp;Create &nbsp;and&nbsp;Maintain&nbsp;&nbsp;Activity&nbsp;Type</td></tr></tbody></table></figure><figure class=\"table\"><table><tbody><tr><td><strong>Session</strong></td><td><strong>Chapter/ &nbsp;Parts</strong></td><td><strong>Topics&nbsp;Covered</strong></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>• &nbsp;Maintain&nbsp;rate&nbsp;of&nbsp;Activity &nbsp;Type</td></tr></tbody></table></figure>', 'certificate-course-on-sap-fico', '2023-11-05 18:00:00', 1, 1, NULL, '2023-11-05 22:08:35', '2023-11-13 03:46:33');
INSERT INTO `courses` (`id`, `service_id`, `name`, `thumbnail`, `banner`, `description`, `video_id`, `price`, `discount`, `class_count`, `duration`, `class_per_week`, `class_duration`, `language`, `delivery_mode`, `course_type`, `start_date`, `end_date`, `curriculum_text`, `slug`, `published_at`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(7, 4, 'Business Data Analysis & Financial Forecasting', '/uploads/thumbnail/1699500354-thumbnail.png', '/uploads/banner/1699500354-banner.png', '<p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\"> Business Data Analysis এবং Financial Forecasting শিখে ক্যারিয়ার এক ধাপ এগিয়ে থাকুন! Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2FunzAl2K4G%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR2_Jwgmh-wwh1tM4WQVNFDmcAsx_PlCO3nQaSqHKB26xNOCJPrLtwi1tso\">01755-597770</a><br><br>ক্যারিয়ার অথবা ব্যবসায় জীবন, দুটোতেই অধিক সাকসেস আসবে যদি Business Data Analysis এবং Financial Forecasting সম্পর্কে সঠিক জ্ঞান থাকে। Data Analysis হলো কোম্পানি বা প্রতিষ্ঠানের Data ব্যবহার করে পর্যাপ্ত তথ্য নিয়ে সেই তথ্যের ভিত্তিতে গুরুত্বপূর্ণ সকল সিদ্ধান্ত নেয়া, যা একজন ব্যবসায়ের মালিক বা প্রফেশনাল হিসাবে ব্যবসা পরিচালনা করতে আগ্রহী করে।<br><br>আর Financial Forecasting বা আর্থিক পূর্বানুমান হলো একটি প্রতিষ্ঠান বা ব্যবসা সংস্থার আর্থিক স্থিতির ভবিষ্যতের পূর্বানুমান করা। এটি ব্যবসায়ের আগাম বছরে কতটুকু আয় ও ব্যয় হবে এবং ব্যবসায়ের আর্থিক পরিস্থিতি কী হতে পারে তা জানতে সাহায্য করে। আর্থিক পূর্বানুমানের মাধ্যমে আর্থিক বছরের Data Analysis করে বিভিন্ন ফ্যাক্টর এবং তথ্যের ভিত্তিতে একটি Financial Model তৈরি করা যায়। এই Model ব্যবসায়ের আয়, ব্যয়, লাভ, আবশ্যক বিনিয়োগ, আর্থিক স্থিতি, আর্থিক বাজারের পরিস্থিতি, সাপ্লাই চেইন, রাজনৈতিক ও অর্থনীতি শাসন, এবং অন্যান্য উপাদান ব্যবহার করে আসন্ন বছরে কী ঘটতে পারে তা পূর্বানুমান করবে। তাই Data Analysis ও Financial Forecasting এর কলা কৌশল জানতে জয়েন করুন <a href=\"https://www.facebook.com/bizzsolutions?__cft__[0]=AZUBnVluWFN_ZnAZi1eBJGezfPJJIl-l3pB4PVJhtQfBlBLJ91NGt5W28oMvfLmtzcqJEHq1nmhwNlgTq_O6z9zJOf-BpXmNd7oNajYtz26Ms6ZcJKfkH2b4SRL3jZ02Dye1gipY5Wq064vN3l9ZbIgpWou_ELVFvvriKlP-1T3F4KUOZEpxUgcaPNIHqIAvVkE&amp;__tn__=-]K*F\"><strong>Bizz Solutions PLC</strong></a> আয়জিত Certificate Course on Business Data Analysis &amp; Financial Forecasting.<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1/16/1f534.png\" alt=\"🔴\"> Book Your Seat: <a href=\"https://forms.gle/xEWupWKe5SA7Dhvw7?fbclid=IwAR1LZCVBJ068aWa0-c5GuhptyuUeUsmPF8CTK4PIpwuxKPsDbEX5aVBBP_Y\">https://forms.gle/xEWupWKe5SA7Dhvw7</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7b/1/16/1f7e1.png\" alt=\"🟡\">Who Can Attend:<br>Top Management, Managers, Assistant Managers and Executive of organization, Financial Analysts, Inventors in Capital Markets, Accountant, Entrepreneurs, Students and those who are interested in Business Data Analysis &amp; Forecasting.<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1/16/1f535.png\" alt=\"🔵\"> Resource Person:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t34/1/16/1f518.png\" alt=\"🔘\"> Mr. Md. Shafiqul Alam LL.B, FCS, FCMA, FCA<br>Managing Partner &amp; CEO<br>Shafiqul Alam &amp; Co. Chartered Accountants<br>Chairman, Bizz Solutions PLC<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t34/1/16/1f518.png\" alt=\"🔘\"> Mr. Mohammad Refaul Karim Chowdhury (FCA, FFA, FIPA, MCT)<br>DGM - Finance, Transcom Distribution Co. Ltd.<br>VAT Consultant &amp; Treasurer, Bangladesh VAT Bar Association<br>Microsoft Certified Trainer<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1/16/1f534.png\" alt=\"🔴\"> Attractions of the Course<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Completion Certificate;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Materials;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Class Recordings;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Raw Database File (Excel, PDF, PPT);<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7b/1/16/1f7e1.png\" alt=\"🟡\"> Course Details:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Regular Course Fee: BDT. 10,000;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Early Bird Offer: BDT. 5,000 (For first 10 participants);<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Last Date of Admission: December 4, 2023;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Starting Date: December 5, 2023;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Time: 08:30 PM (Every Tuesday);<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Total No. of Sessions: 10;<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\">বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> আপডেটেড কোর্স মডিউল।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Edubd.Tv তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> এক্সপার্ট রির্সোস পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> প্রশিক্ষকের সাথে প্রতিটি ব্যাচের জন্য ডেডিকেটেড হোয়াটস গ্রুপ।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/1f3e0.png\" alt=\"🏠\"> যোগাযোগে: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2FunzAl2K4G%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR1P00ipR661r1ZYsANgovHLGNAi4mvdvM297psaXYg2PJ6zl67tccciP2w\">01755-597770</a></p>', NULL, 10000, 5000, 10, '20 Hours', 'Tuesday', '2 Hours', 'English and Bangla', 'online', 'admission', '2023-12-05', '2024-02-06', '<p><strong>Business Data Analysis &amp; Financial Forecasting</strong><br><br><strong>Module 1: Advanced Excel Skills</strong><br>Session 1: Introduction to Advanced Excel<br>- Exploring Excel\'s Advanced Features<br>- Working with Complex Formulas<br>- Data Validation and Quality Control<br>Session 2: Advanced Data Analysis in Excel<br>- Advanced PivotTables and Pivot Charts<br>- Data Visualization Techniques<br>- Data Mining and Forecasting Tools in Excel<br>Session 3: Advanced Functions and Formulas<br>- Nested Functions and Array Formulas<br>- Logical Functions for Complex Analysis<br>- Text and Lookup Functions<br>Session 4: Data Cleaning and Transformation in Excel<br>- Handling Large Datasets<br>- Power Query and Data Cleaning Techniques<br>- Data Transformation and Consolidation<br>Session 5: Excel for Data Analysis<br>- Analyzing and Visualizing Data<br>- Advanced Data Analysis Tools in Excel<br><strong>Module 2: Understanding Financial Statements &amp; The Framework for Business</strong><br><strong>Analysis</strong><br>Session 6: Introduction to Financial Statements<br>- Overview of Income Statements, Balance Sheets, and Cash Flow Statements<br>- Importance of Financial Statements in Business Analysis<br>Session 7: Analyzing Financial Statements: Ratios and Trends<br>- Calculating and Interpreting Key Financial Ratios<br>- Identifying Trends in Financial Statements<br>Session 8: Business Analysis Framework<br>- SWOT Analysis and Competitive Positioning<br>- Industry Analysis and Market Dynamics<br><strong>Module 3: Financial Statement Analysis: Conventional Approach</strong><br>Session 9: Vertical and Horizontal Analysis<br>- Vertical and Horizontal Analysis of Financial Statements<br>- Identifying Strengths and Weaknesses<br>Session 10: Common-Size Statements and Ratio Analysis<br>- Common-Size Financial Statements<br>- Ratio Analysis for Performance Evaluation<br>Who Can Attend:<br>Top Management, Managers, Assistant Managers and Executive of organization, Financial<br>Analysts, Inventors in Capital Markets, Accountant, Entrepreneurs, Students and those who<br>are interested in Business Data Analysis &amp; Forecasting.<br>Session Details:<br>Number of Session: 10;<br>Session Mode: Online;<br>Attractions of the Course:<br>Course Completion Certificates;<br>Course Materials &amp; Class Recording;<br>Raw Database File (Excel, PDF, PPT);<br>&nbsp;</p>', 'business-data-analysis-financial-forecasting', '2023-11-06 18:00:00', 1, 1, NULL, '2023-11-06 21:18:32', '2023-11-08 21:25:54'),
(8, 4, '“ Income Tax & VAT Management” Based on New Income Tax Act -2023 and VAT & SD Act -2012”', '/uploads/thumbnail/1699500445-thumbnail.png', '/uploads/banner/1699500445-banner.png', '<p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t3e/1/16/1f50a.png\" alt=\"🔊\"> ট্যাক্স এবং ভ্যাট নিয়ে আপনার রয়েছে সম্যক ধারনা সে কথা আমরা বিশ্বাস করতেই পারি কিন্তু পুরোপুরি জ্ঞান বা পরিবর্তিত নতুন সব নিয়মনীতি জানার বিষয়ে আপনি কতটা সিরিয়াস সেটার উপরই নির্ভর করছে আপনার নির্ভুল কাজের মাধ্যমে সরকারের জাতীয় রাজস্ব আয় আদায়ের অংশীদার হবার। বিস্তারিতঃ <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2Fc0zf0uULh%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR1taUNsFZ6hAonZIWWIoOw3Z3Ln3X3pMarfkxS7zqLaEjNXpK05_JEJmE0\">01755-597770</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1/16/1f4e3.png\" alt=\"📣\"> ট্যাক্স এবং ভ্যাট নিয়ে আপনার সকল ভীতিকে না করার সময় এসেছে এখনি, যখন বাস্তব অভিজ্ঞতা সম্পূর্ণ বিজ্ঞ স্যারেরা আপনার অর্জিত ট্যাক্স এবং ভ্যাট সম্পর্কিত জ্ঞান এর ভিতকে আরও শক্তিশালী করতে শতভাগ পরিপূর্ণ একটি কারিকুলাম এর সমন্বয়ে সাজিয়েছে Professional Course on “ Income Tax &amp; VAT Management” Based on New Income Tax Act -2023 and VAT &amp; SD Act -2012” কোর্সটি। কোর্সটি আপনাকে দিবে ট্যাক্স এবং ভ্যাট এর গুরুত্বপূর্ণ, সাধারন, সমসাময়িক ও নতুন জ্ঞানের শক্ত ভিত। আপনি জেনে থাকবেন যে বাংলাদেশ সরকারের জাতীয় রাজস্ব আয়ের অধিকাংশ আসে আয়কর এবং মূল্য সংযোজন কর থেকে তাই করদাতার সংখ্যা বাড়ানোর পাশাপাশি করদাতা শনাক্তকরণ নম্বরধারীদের (টিআইএন) আয়কর রিটার্ন দাখিলে বাধ্যবাধকতা রাখা হয়েছে ২০২৩-২৪ অর্থবছরের বাজেটে। তাই আপনার ব্যক্তিগত এমনকি কোম্পানির আয়কর রিটার্ন দাখিল করতে আপনার ভূমিকা এখন অত্যাবশ্যকীয় হওয়া জরুরী। আর অত্যাবশ্যকীয় জরুরী সব বিষয়ে জানতে আজই যুক্ত হন আমাদের ইন্ডাস্ট্রি এক্সপার্টদের সাথে।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t20/1/16/2b07.png\" alt=\"⬇\"> আমরা আপনাকে তাই জানাতে চাই, শিখাতে চাই যা আপনার জন্য জরুরিঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1/16/31_20e3.png\" alt=\"1⃣\"> নতুন আয়কর আইন 2023 সম্পর্কে গভীর জ্ঞান; পূর্ববর্তী কর আইন থেকে পরিবর্তন এবং আপডেটগুলি বোঝা; ভাল বোঝার জন্য ব্যবহারিক কেস স্টাডি এবং বাস্তব-বিশ্বের উদাহরণ; আয়কর রিটার্ন ফাইলিং; ট্যাক্স কমপ্লায়েন্স এন্ড রিপোর্টিং; স্পেশাল প্রভিশনস এন্ড ইন্সেন্টিভস; ট্যাক্স ডিসপিউট; রিসোলিউশন এন্ড এপিল্স এবং অন্যান্য সবকিছুর বিস্তারিত।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t99/1/16/32_20e3.png\" alt=\"2⃣\"> মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন ২০১২ অনুসারে ভ্যাট নিবন্ধন; ভ্যাট আদায়; ভ্যাটের রিটার্ন সাবমিশন; কখন মূল্য সংযোজন কর বা ভ্যাট আদায় করতে হবে; কেন কমিশন এবং ব্যবসায়িক সম্পদের উপর কর আরোপ করা হয়; কোন ধরনের ব্যবসায়ে VAT নিবন্ধন করতে হবে এবং জরিমানা এড়াতে কি ধরনের পদক্ষেপ নেওয়া উচিত ইত্যাদি সকল বিষয়ে।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tb8/1/16/33_20e3.png\" alt=\"3⃣\"> এর পাশাপাশি NBR এর প্রজ্ঞাপন অনুযায়ী ব্যবসায়ের বাৎসরিক টার্নওভার ৫ কোটি টাকার উপরে হলেই ব্যবহার করতে হবে VAT Software, বর্তমান ব্যবসায়িদের চাহিদা অনুযায়ী, VAT এবং SD আইন ২০১২ এর সাথে ১০০% সামঞ্জস্য রেখে কিভাবে সম্পূর্ণভাবে অটোমেটেড, সুরক্ষিত এবং ঝামেলাবিহীন VAT Software ইমপ্লিমেন্ট করা যায় তার বিস্তারিত।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t25/1/16/1f393.png\" alt=\"🎓\"> Who Should Attend?<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Students pursuing commerce and finance;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Tax professionals and consultants;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Accountants and financial advisors;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Legal practitioners and corporate professionals;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Business owners and entrepreneurs;<br>এছারাও Accounts &amp; Finance Professionals; Supply Chain Professionals; Business Development Professionals; Students of ICAB; ICMAB &amp; ICSB; Business Graduates and more.<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1/16/1f535.png\" alt=\"🔵\"> Resource Person:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\">Mr. Iqtiar Uddin Md. Mamun, FCMA<br>Additional Commissioner of Taxes<br>National Board of Revenue (NBR)<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\">Mr. Md. Saifur Rahman, FCMA<br>(NBR Enlisted VAT Consultant)<br>Principal &amp; CEO<br>Saifur Enayet &amp; Associates<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Mr. Md. Shafiqul Alam LL.B, FCS, FCMA, FCA<br>Chairman, Bizz Solutions PLC<br>Managing Partner &amp; CEO<br>Shafiqul Alam &amp; Co. Chartered Accountants<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1/16/1f535.png\" alt=\"🔵\"> Course Details:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Regular Course Fee: BDT. 8,000<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Special Offer Fee: BDT. 4,000 (Before 5:00 PM on November 20, 2023)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Starting Date: November 26, 2023 (From 8:00 PM)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> No. of Session: 10<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Training Mode: Online (Zoom)<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1/16/1f534.png\" alt=\"🔴\"> Apply Now: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fforms.gle%2F8brodyuN8xRtx6o17%3Ffbclid%3DIwAR3rW5dPNNOka-35BrCv6U_LRgQCe6Mt9HwwvisG4KvNl_72VXbeRthQATM&amp;h=AT3DVLmhDNkTUFBdYNcD55tM7d-EL4z0Cd0thANWi6YxHxlU9ENHUDgXljXUsdntpqwGFuv6TjqPGxJ3Ak-8mce1_nfDJgX_3Nv159jjvqCzGQSKbxtQO2o87LvY2r_OM_ur&amp;__tn__=-UK*F&amp;c[0]=AT0G6kMiA_Wg3m7Z1Ennb9aTXCPGaOfxVjtPavzNmVzz1LgJf5VR6hRAHGV5V7rM_pc9_9T4lMIpriDC8a43nq-N945ZPxZPEM8DThJvmxdurB4NBzQJFIfDfSy0HtmvndyJrpC4J80yK4_XoNR88COoYi2hwruhA0Q5dENGHsKJj2nsDIZ5Skp4Q-vWQ1uMFEJG2UdBftmO\">https://forms.gle/8brodyuN8xRtx6o17</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tac/1/16/1f4cc.png\" alt=\"📌\"> বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> আপডেটেড কোর্স মডিউল;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> Edubd.Tv (An Online Educational Platform) তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> এক্সপার্ট রির্সোস পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> প্রশিক্ষকের সাথে প্রতিটি ব্যাচের জন্য ডেডিকেটেড হোয়াটস গ্রুপ;<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/1f3e0.png\" alt=\"🏠\"> বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D8801755597770%26text%3DLink%253A%250Ahttps%253A%252F%252Ffb.me%252Fc0zf0uULh%250A%250AI%2520saw%2520this%2520on%2520Facebook...%26app%3Dfacebook%26fbclid%3DIwAR1taUNsFZ6hAonZIWWIoOw3Z3Ln3X3pMarfkxS7zqLaEjNXpK05_JEJmE0&amp;h=AT2dcGJkK8H7gEMyrikvIbbwM7BkA6mZEqGGN2zy9YbNxHBjI0oWGCikTf1_Zq_2b-m4wvu_yvlBoatOs8VjGPdxjQ5_3OazMIxMQoykJexm0its3SYwvW5KjNUq1wcB7ASQDQ&amp;__tn__=-UK*F&amp;c[0]=AT0G6kMiA_Wg3m7Z1Ennb9aTXCPGaOfxVjtPavzNmVzz1LgJf5VR6hRAHGV5V7rM_pc9_9T4lMIpriDC8a43nq-N945ZPxZPEM8DThJvmxdurB4NBzQJFIfDfSy0HtmvndyJrpC4J80yK4_XoNR88COoYi2hwruhA0Q5dENGHsKJj2nsDIZ5Skp4Q-vWQ1uMFEJG2UdBftmO\">01755-597770</a></p>', NULL, 8000, 4000, 10, '20 Hours', 'Sunday', '2 Hours', 'English and Bangla', 'online', 'admission', '2023-11-26', '2024-01-28', '<p><strong>Course Contents/ Modules</strong><br>● VAT Registration process through online.<br>● Value for VAT &amp; SD Calculation.<br>● Basic Structure of NBR<br>● Structure of VAT Commissionerate.<br>● Brief Discussion on Indirect Tax.<br>● Different Types of Indirect Tax<br>● VAT &amp; SD Rate and its Imposition.&nbsp;<br>● Important Definitions of VAT Act.<br>● VAT Registration &amp; Re-registration.<br>● Central Registration &amp; Procedure.<br>● VAT at Import, Manufacturing, Service &amp; Trade point.<br>● VAT Liability &amp; Payment Procedure.<br>● VAT able Products &amp; Services.<br>● VAT Exemption.<br>● Stages of VAT &amp; When Payable?<br>● Advance Tax (AT)<br>● VAT on Export and Deemed Export.<br>● Case Study (VAT Calculation)&nbsp;<br>● Books of Accounts and Registers.<br>● VAT Invoice &amp; Similar Documents.<br>● Credit notes and Debit notes.<br>● Record keeping (All Mushak Register &amp; Forms).<br>● Input Output Coefficient<br>● VAT Deduction at Source (VDS).<br>● Services Under VAT Deduction.<br>● Rate of VAT Deduction at source.<br>● Deducting Authority and their responsibility.<br>● Procedure of deduction, deposit &amp; record keeping<br>● Input Tax Credit (VAT Rebate)<br>● Input Tax Credit Mechanism.<br>● Where Input Tax Credit Allowed or Not.:<br>● Role of Customs in Import &amp; Export.<br>● Import and Export Policy Order.<br>● Customs Assessment Procedure.<br>● Provisional, Final &amp; Re-assessment.<br>● Various Duty Rates at Import Stage.<br>● Calculation of Duty and Taxes.<br>● Classification of Goods (H.S Code)<br>● Significance of H.S Code.<br>● General Rules for Interpretation (GRI).<br>● Valuation of Goods (Import &amp; Export).<br>● WTO Valuation Rules<br>● Case Study (Duty Calculation)<br>● Increasing &amp; Decreasing Adjustment.<br>● VAT Return (Mushak - 9.1) Preparation.<br>● Full process of online VAT return submission.<br>● VAT Authority and responsibility.<br>● Irregularities and Noncompliance.<br>● Penalty for Irregularities and Noncompliance.<br>● Offences and Penalty under VAT Act.<br>● Trail and Punishment.<br>● Adjudication &amp; Appeal Procedure.<br>● Alternative Dispute Resolution (ADR).<br>● VAT Refund &amp; Procedure of Refund.<br>● Arrear VAT Realisation (VAT Demand)<br>Tax Application/ Management<br>Course Contents/ Modules<br>● A brief history of Income Tax Law<br>● Introduction to Income Tax Module&nbsp;<br>● Income tax application and process&nbsp;<br>● Income from Salary&nbsp;<br>● Income from House property&nbsp;<br>● Income from securities<br>● Income from Agriculture&nbsp;<br>● Income from Capital Gain&nbsp;<br>● Income from business &amp; profession<br>● Income from other sources<br>● Calculation of Income Tax<br>● Tax return and tax payment&nbsp;<br>● Tax opportunities (exemption, holidays and rebates)&nbsp;<br>● Set off and carry forward of loss, Advance payment of tax&nbsp;<br>● TDS&nbsp;<br>● Penalty, Assessment, Appeal, Tribunal and References<br>● TDS calculation on employee salaries using an example<br>● Show how to calculate average rate to deduct monthly TDS from salary<br>● Discuss how to consider the investment allowance for tax rebate<br>● How to adjust increment of the employee salary at anytime<br>● How to prepare salary certificate to provide employees for tax filing<br>● Discuss everything about withholding tax applicable as per tax law<br>● How you will deduct tax by applying TDS rates<br>● How to calculate TDS if the invoice amount is exclusive of tax and VAT<br>● Time limit for payment of TDS, consequences of failure to deduct collect, etc.<br>● Discuss tax filings to the circle related with tax deducted at source<br>● How to find out the eligibility of the advance income tax payment by the&nbsp;<br>taxpayer<br>● How to estimate tax advance income tax and find out the instalments tax&nbsp;<br>amount<br>● Show the penalty calculation for failure to meet the AIT ceiling<br>● Discuss 03 important definitions to calculate company tax<br>● Discuss fully income from business considered for taxable income calculation<br>● Discuss partly income from business included with taxable income of&nbsp;<br>company<br>● Unexplained investment/deemed to be income of company<br>● Allowable deductions or admissible expenses which are considered for&nbsp;<br>deductions from income<br>● Inadmissible expenses which are added with taxable income of the company<br>● Method of accounting for business to follow to prepare company financial&nbsp;<br>statements<br>● Income in certain cases which are also included with taxable income of the&nbsp;<br>company<br>● Set off and carry forward of business loss<br>● How a business can avail tax exemptions facilities<br>● Where the exemptions benefits are provided as per tax law<br>● What are the procedures to obtain the tax exemption facilities?<br>● Details discussion on method of recovery by TRO&nbsp;<br>● How a business can get double taxation relief<br>● When a company is entitled to get refund after tax assessment<br>● How a company can adjust refund against corporate tax liability<br>● How you will claim interest on delayed refund assessed by the tax authority<br>● Show taxable income calculation from a financial statement<br>● Show the impact of corporate tax for section 30B<br>● Show in details about minimum tax calculation<br>● What will be the minimum tax if company has disallowances under section 30<br>● What will be the minimum tax in case of a company enjoying tax exemptions&nbsp;<br>or reduced tax rate benefit<br>● How to prepare a company tax return from after company tax calculation<br>● What are the supporting documents shall be submitted with return form<br>● How to apply for the time extension for failure to submit the tax return within&nbsp;<br>due date<br>● Show the interest calculation for delay submission of corporate tax return</p>', 'income-tax-vat-management-based-on-new-income-tax-act-2023-and-vat-sd-act-2012', '2023-11-06 18:00:00', 1, 1, NULL, '2023-11-06 21:33:20', '2023-11-08 21:27:25'),
(9, 5, 'Business Intelligence with Power BI', '/uploads/thumbnail/1699500507-thumbnail.png', '/uploads/banner/1699500507-banner.png', '<p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/taa/1/16/1f310.png\" alt=\"🌐\">ক্যারিয়ারে উত্তরোত্তর সফলতার জন্য শিখুন 𝑫𝒂𝒕𝒂 𝑨𝒏𝒂𝒍𝒚𝒔𝒊𝒔 ও 𝑹𝒆𝒑𝒐𝒓𝒕𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 𝑷𝒐𝒘𝒆𝒓 𝑩𝑰. Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F6cteKuWMv%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR27V4J345G4pffq7pj4vDZVfXrBsG-sXP1-SL6adStqGkjSuOVeXqzJ1KM\">01755-597770</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tdc/1/16/1f4f6.png\" alt=\"📶\">𝑷𝒐𝒘𝒆𝒓 𝑩𝑰 হল 𝑴𝒊𝒄𝒓𝒐𝒔𝒐𝒇𝒕 𝑩𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝑰𝒏𝒕𝒆𝒍𝒍𝒊𝒈𝒆𝒏𝒄𝒆 এবং 𝑫𝒂𝒕𝒂 𝑨𝒏𝒂𝒍𝒚𝒔𝒊𝒔 এর অন্যতম টুল। এটি এমন একটি পাওয়ারফুল টুল যা ব্যবসায়ের যাবতীয় ডেটাকে ভিজ্যুয়ালি প্রেজেন্ট করতে এবং ব্যবসায়ের সফলতার লক্ষ্যে গুরুত্বপূর্ণ সিদ্ধান্ত গ্রহণে ভূমিকা রাখে । শত শত ডেটা নিয়ে একই সময়ে এক সাথে কিভাবে কাজ করা যায় তা 𝑷𝒐𝒘𝒆𝒓 𝑩𝑰 শিখলে জানতে পারবেন।<br><br>বিগত কয়েক বছরে চাকরির বাজারে লক্ষনীয় হারে 𝑷𝒐𝒘𝒆𝒓 𝑩𝑰 জানা দক্ষ লোকের চাহিদা বেড়েছে এবং এই চাহিদা ক্রমবর্ধমান হারে বাড়ছে। এছাড়া বর্তমানে 𝑷𝒐𝒘𝒆𝒓 𝑩𝑰 এ ফ্রিল্যান্সিং এর ও ব্যাপক চাহিদা রয়েছে। তাই Bizz Solutions PLC আয়োজন করতে যাচ্ছে 𝑪𝒆𝒓𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒆 𝑪𝒐𝒖𝒓𝒔𝒆 𝒐𝒏 𝑷𝒐𝒘𝒆𝒓 𝑩𝑰.<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png\" alt=\"👉\"> Apply Now: <a href=\"https://forms.gle/fmp6CrwfpCfVgzDj6?fbclid=IwAR2rtcXHQQOX1o_jQ_lducJrSNy_z5ACP0Z2QMJNWp_-KwalhYAW60Z1psA\">https://forms.gle/fmp6CrwfpCfVgzDj6</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t2/1/16/1f7e8.png\" alt=\"🟨\"> 𝑷𝒐𝒘𝒆𝒓 𝑩𝑰 শিখে ও ব্যবহার করে আপনি ক্যারিয়ারে যেসকল সুবিধাগুলো পাবেনঃ<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/2714.png\" alt=\"✔\"> ডেটা ভিজ্যুয়ালাইজেশন এবং রিপোর্টিংয়ের জন্য BI সরঞ্জামগুলি ব্যবহার করে ডেটা অ্যাক্সেস এবং একত্রিত করুতে পারবেন<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/2714.png\" alt=\"✔\"> কোম্পানির ডেটা গুলো নিয়ে লাইভ, রিয়েল-টাইম ডেটা মেট্রিক ড্যাশবোর্ড তৈরি করতে পারবেন।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/2714.png\" alt=\"✔\"> Power BI এর অনলাইন পোর্টালের সাহায্যে ডাটা সহজেই অন্যান্য টিম মেম্বারদের সাথে আদান প্রদান করতে পারবেন।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/2714.png\" alt=\"✔\"> ডাটা এনালিস্ট/ডাটা সায়েন্টিস্ট হিসেবে ক্যারিয়ার গড়ার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/2714.png\" alt=\"✔\"> ফ্রিল্যান্সিং সেক্টরে প্রবেশের দারুন সুযোগ। কর্পোরেট সেক্টরে এর ডিমান্ড দিন দিন প্রচুর বাড়ছে।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/2714.png\" alt=\"✔\"> পড়াশুনার পাশাপাশি পার্টটাইম ও রিমোট জবের সুযোগ দেশে বিদেশের বড় বড় মাল্টিন্যাশনাল কোম্পানি/ইন্ডাস্ট্রিতে কাজের সুযোগ।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t34/1/16/1f518.png\" alt=\"🔘\"> Course Details:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Course Fee: 8000 Tk<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Early bird Offer: 3000 Tk (For First 10 Participants)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Last Date of Admission: November 03, 2023<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Class Start: November 04, 2023&nbsp;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Class Time: 7.30PM<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Number of Session: 8 (1.5 Hours Each)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Class Mode: Zoom Online<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7d/1/16/1f7e3.png\" alt=\"🟣\"> Resource Person:<br><br>Mr. Md. Aksadur Rahman<br>Data Science Consultant at Socian<br>Adjunct Lecturer, UIU<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\"> বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> আপডেটেড কোর্স মডিউল।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Edubd.Tv তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> এক্সপার্ট রির্সোস পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> প্রশিক্ষকের সাথে প্রতিটি ব্যাচের জন্য ডেডিকেটেড হোয়াটস গ্রুপ।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/1f3e0.png\" alt=\"🏠\"> বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D8801755597770%26text%3DLink%253A%250Ahttps%253A%252F%252Ffb.me%252F6cteKuWMv%250A%250AI%2520saw%2520this%2520on%2520Facebook...%26app%3Dfacebook%26fbclid%3DIwAR3vQAz_id6ik2RlBUkl9grItiJNg0C3XUGq-uA1Ox-iBnuI5jz7cQruXBE&amp;h=AT2QkZL1OZw9Gohe4fv4JBGNVH-1sd4CYf0xI1a4U9wGEgZXNHbQnUaNmzId2uzxRdyDI5Dc-M4TBsR3_okmtXhZ0MqL-S2vRgAJoFBmQeo10XrCFNiLqtFgm8BpLrGx2XlDQQ&amp;__tn__=-UK*F&amp;c[0]=AT3WOD031bAxqPyhwTPSawKf4EAvJG-GXfOkOsXAblrB9DsTV4_KeMdZe-DtOI2pPV9Hkjw3iHzBu2ZxmwiaaPw6mTT9E_7fVw4l36ALc7yQlVoeLoPe02-TSIEh866BrTSnAc07PN53CKf43thvtZhw0pGVcVbzy9CUvTaaS8wmN_Avij5mefVq2xlKTqZzElgl35OqbrkT\">01755-597770</a>&nbsp;</p>', NULL, 8000, 5000, 8, '12', 'Saturday & Monday', '1.5 Hours', 'English and Bangla', 'online', 'admission', '2023-12-09', '2024-02-01', '<p><strong>Total Sessions-8 | Total Hours-12 | Session Hours-1.5</strong><br><br><strong>Topic 1 - Introduction &amp; installation</strong><br>• What is Power BI<br>• Why Power BI<br>• How Power BI Works<br>• How to Install Power BI<br><strong>Topic 2 - Text Functions in Power Query&nbsp;</strong><br>• Connecting to a database<br>• Text Merge<br>• Split and Trim<br>• Upper, Lower and Proper<br>• Add Suffix and Prefix<br>• Left, Right and Mid<br>• Extract Text with Delimiter<br><strong>Topic 3 - Date Functions in Power Query&nbsp;</strong><br>• Year, Quarter, Month, Day<br>• Difference between Dates, Earliest and Latest<br>• Name of Day and Name of Month<br>• Day of Week/Month/Year &amp; Week of Month/Year<br>• Extract Date from Date and Time<br>• Calculate Age in 2 button Clicks<br>• Which day of Year, Quarter, Month your Date of Birth is<br><strong>Topic 4 - Number Functions in Power Query&nbsp;</strong><br>• Add, Subtract, Divide, Multiply<br>• Percentage, Percent of, Modulo<br>• Rounding the numbers<br>• IsEven, IsOdd and Sign<br><strong>Topic 5 - Appending - Merging Files and Tables in Power BI</strong><br>• Append multiple CSV Files from a folder<br>• Append multiple Excel tables/Sheets from single file<br>• Understanding the joining<br>• Merge Tables/Sheets in Power Query (Power BI)<br>• Merge data having multiple matching columns or multiple Criteria in Power&nbsp;<br>Query (Power BI)<br><strong>Topic 6 - Column from Examples and Conditional Column in Power BI</strong><br>• Column from Examples on Splitting Text<br>• Column from Examples on Merging Text<br>• Column from Examples on Date Column<br>• Column from Examples on Alphanumeric Data<br>• Conditional Column on One Column<br>• Conditional Column on two columns<br>• Conditional Column Comparing two column values<br><strong>Topic 7 - Miscellaneous Topics in Power BI</strong><br>• Fill down and Fill up<br>• Grouping<br>• Transpose<br>• Unpivot<br>• Data Types in Power Query (Power BI)<br>• Replace Errors and Values<br>• Keep Rows and Remove Rows<br>• Add, Remove, Goto Columns<br><strong>Topic 8 - Understanding Data Models</strong><br>• Understanding Data relationships<br>• Creating relationships within tables<br>• Cardinality<br><strong>Topic 9 - Basic Charts in Power BI</strong><br>• Column Chart<br>• Stacked Column Chart<br>• Pie Chart<br>• Donut Chart<br>• Funnel Chart<br>• Ribbon Chart<br>• Include and Exclude<br>• Export data from Visual<br><strong>Topic 10 - Table and Matrix in Power BI</strong><br>• Creating a Simple Table<br>• Formatting in Table<br>• Conditional Formatting in Table<br>• Changing Aggregation in Table<br>• Creating a Matrix in Power BI<br>• Conditional Formatting in Matrix<br>• Automatic Hierarchy in Matrix<br>• Subtotal and Grand Total<br><strong>Topic 11 - Other Charts in Power BI Desktop</strong><br>• Line Chart<br>• Area Chart<br>• Line vs Column Chart<br>• Scatter Plot<br>• Waterfall Chart<br>• Tree Map<br>• Gauge Chart<br><strong>Topic 12 - Cards and Filters in Power BI</strong><br>• Number Card<br>• Text Card<br>• Date Card<br>• Multi-Row Card<br>• Filter on Visual<br>• Filter on Page<br><strong>Topic 13 - Slicers in Power BI</strong><br>• Slicer for Text<br>• Format Text Slicer<br>• Date Slicer<br>• Number Slicer<br><strong>Topic 14 - DAX Operations</strong><br>• What is DAX?<br>• What is Power Pivot?<br>• New Columns Using DAX<br>• New Column Vs New Measure<br>• IF Condition in DAX<br>• IF with multiple Condition in DAX<br>• IFERROR Condition in DAX<br>• Adding Table with DAX<br>• Adding columns with DAX<br><strong>Topic 15 - Power BI Service Introduction</strong><br>• Creating a Superstore Report<br>• Create an Account on Power BI Service<br>• Publish Report to Power BI Service Account<br>• Export (PPT, PDF, PBIX) Report and Share<br>• Comment, Share and Subscribe to a report<br>• Create a dashboard in Power BI Service<br>• Automatic Refresh - Data Gateway<br><strong>Topic 16 – Capstone Project - Data Visualization &amp; Analysis</strong></p>', 'business-intelligence-with-power-bi', '2023-11-07 18:00:00', 1, 1, NULL, '2023-11-07 21:43:30', '2023-11-08 21:28:27');
INSERT INTO `courses` (`id`, `service_id`, `name`, `thumbnail`, `banner`, `description`, `video_id`, `price`, `discount`, `class_count`, `duration`, `class_per_week`, `class_duration`, `language`, `delivery_mode`, `course_type`, `start_date`, `end_date`, `curriculum_text`, `slug`, `published_at`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(10, 5, 'Certificate Course on QuickBooks Online  & Xero for Freelancing', '/uploads/thumbnail/1699500612-thumbnail.png', '/uploads/banner/1699500612-banner.png', '<p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1/16/1f534.png\" alt=\"🔴\"> QuickBooks &amp; Xero একাউন্টিং সফটওয়্যার এ দক্ষ হয়ে ফ্রিল্যান্সিং করুন! Ph: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D8801755597770%26text%3DLink%253A%250Ahttps%253A%252F%252Ffb.me%252F40xx3V9R7%250A%250AI%2520saw%2520this%2520on%2520Facebook...%26app%3Dfacebook%26fbclid%3DIwAR3Wt8QrSmLGMh3wh4qmG7iijvA6cG-Q9D91oRAfr0bGvguYu3-Ees0mPNM&amp;h=AT2QkZL1OZw9Gohe4fv4JBGNVH-1sd4CYf0xI1a4U9wGEgZXNHbQnUaNmzId2uzxRdyDI5Dc-M4TBsR3_okmtXhZ0MqL-S2vRgAJoFBmQeo10XrCFNiLqtFgm8BpLrGx2XlDQQ&amp;__tn__=-UK*F&amp;c[0]=AT1Vh41jfxct9FjusEP7V9-U_CJXOgru59LUfl0E92LK8aczMhCbSuBHRsKJbn1i8VYeRVLMGQC-DLzDuCfZ90PjdSmti7jMctIxv9hGSNUakcZiykiYGi2OBGQCeBvCqS0TlmGO1h9QbLgm3zzSdvVv_ECFg3ERsxIv8NwsFz2z-hr58BS9KxcD9irLahfLmgd2E6rLj_IZ\">01755-597770</a><br><br>QuickBooks &amp; Xero হচ্ছে সারা পৃথিবীতে ক্ষুদ্র ও মাঝারি ব্যবসায় প্রতিষ্ঠানের জন্য জনপ্রিয় একাউন্টিং সফটওয়্যার এর মধ্যে অন্যতম। QuickBooks &amp; Xero সফটওয়্যারের কাজ জানার মাধ্যমে একাডেমিক/প্রফেশনাল শিক্ষা/ চাকরির পাশাপাশি Freelancing করে স্বাবলম্বী হওয়ার পাশাপাশি ক্যারিয়ারে নতুন মাত্রা যোগ করা সম্ভব। কারন বিভিন্ন প্রতিষ্ঠান ইতিমধ্যে QuickBooks &amp; Xero সফটওয়্যারের মাধ্যমে একাউন্টিং ডিপার্টমেন্ট এর সকল কার্যক্রম পরিচালিত হচ্ছে।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1/16/1f534.png\" alt=\"🔴\"> ভর্তি হতে রেজিস্ট্রেশন করুন: <a href=\"https://forms.gle/thAYtyvYheES9Hbu5?fbclid=IwAR1hslIpX7yZmVGneJyjSq1L3dG4q8QQc94gK9otGULIypJjpedOQFBiZZE\">https://forms.gle/thAYtyvYheES9Hbu5</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7b/1/16/1f7e1.png\" alt=\"🟡\"> Attractions of the Course:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> জব প্লেসমেন্ট / পার্ট টাইম ওয়ার্ক ফ্যাসিলিটি;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> ফ্রিল্যান্সিং গাইডলাইন;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> কোর্স ম্যাটেরিয়ালস এবং ক্লাস রেকর্ডিং;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> কোর্স কমপ্লিশন সার্টিফিকেট;<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\"> Course Details:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Fee: Tk. 10,000<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Early Bird Offer: Tk. 6,000 (For first 10 participants)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> Course Starting Date: Thursday, November 16, 2023<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> No. of Session: 16 (2 Hrs Each)<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\"> Resource Person:<br>Mr. Asaduzzaman<br>Top Rated Freelancer at Upwork<br>QuickBooks Online ProAdvisor &amp; XERO Expert<br>Deputy Manager, Financial Planning &amp; Analysis, Super Star Group<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1/16/1f7e2.png\" alt=\"🟢\"> বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> নিজস্ব BPO এজেন্সিতে টপ রেটেড ফ্রিল্যান্সারের তত্ত্বাবধানে ফুল টাইম কাজ করার সুযোগ;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> আপডেটেড কোর্স মডিউল;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> টপ রেটেড ফ্রিল্যান্সার কর্তৃক ক্লাস পরিচালনা;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম ফিল্যান্সিং/ ক্যারিয়ার গাইডলাইন;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> জুম প্লাটফর্ম এ অনলাইন মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকডিং প্রদান;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং;<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/1f3e0.png\" alt=\"🏠\"> বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F40xx3V9R7%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR0Kpc8C5mxJtFhwD4E4-x2AzMWNAIURjYx23yxMXtSoVB1SzLIjkPuK5ic\">01755-597770</a></p>', NULL, 10000, 4000, 16, '32', 'Thursday', '2 Hours', 'English and Bangla', 'online', 'admission', '2023-11-16', '2024-02-29', '<figure class=\"table\"><table><thead><tr><th>Session</th><th>Chapter/&nbsp;Parts</th><th>Topics&nbsp;Covered</th></tr></thead><tbody><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Session-1</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;1:&nbsp;Introducing QuickBooks</p></td><td><p>What&nbsp;is&nbsp;QuickBooks?</p><p>What&nbsp;are&nbsp;the&nbsp;Features&nbsp;of QuickBooks? What&nbsp;are&nbsp;the&nbsp;Uses of&nbsp;QuickBooks&nbsp;Online?</p><p>Learn&nbsp;about&nbsp;QuickBooks&nbsp;Center&nbsp;-&nbsp;What&nbsp;does&nbsp;it&nbsp;contains?</p><p>Learn&nbsp;about&nbsp;Client&nbsp;Switcher&nbsp;-&nbsp;How&nbsp;to&nbsp;switch multiple&nbsp;companies? Learn&nbsp;about Navigation&nbsp;Panel&nbsp;and&nbsp;Quick&nbsp;Create Options,&nbsp;learn&nbsp;about Search&nbsp;Icon&nbsp;and&nbsp;ways&nbsp;of&nbsp;using&nbsp;it,&nbsp;learn&nbsp;about&nbsp;Gear Icon&nbsp;to&nbsp;set&nbsp;up&nbsp;and</p><p>modify&nbsp;lists&nbsp;&amp;&nbsp;users</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-2</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;2: Using&nbsp;QuickBooks&nbsp;for&nbsp;the&nbsp;First&nbsp;Time</p></td><td><p>How&nbsp;to&nbsp;Manage&nbsp;QuickBooks&nbsp;Company&nbsp;Accounts? How&nbsp;to&nbsp;Manage&nbsp;Users?</p><p>How&nbsp;to&nbsp;Import&nbsp;Data&nbsp;QuickBooks?</p><p>How&nbsp;to&nbsp;Navigate&nbsp;QuickBooks&nbsp;Online? What&nbsp;are&nbsp;Custom Form&nbsp;Styles?</p><p>Learn&nbsp;about&nbsp;Customers&nbsp;Center,&nbsp;Learn&nbsp;about&nbsp;Supplier&nbsp;Center&nbsp;Learn&nbsp;about Employee&nbsp;Center</p><p>Learn&nbsp;about&nbsp;Transactions&nbsp;Tab&nbsp;-&nbsp;What&nbsp;does&nbsp;it&nbsp;contains?</p><p>What&nbsp;is&nbsp;a&nbsp;Chart of Accounts&nbsp;(GOA)? How&nbsp;to&nbsp;Delete/Inactivate&nbsp;Accounts? How&nbsp;to&nbsp;add&nbsp;Taxes?</p><p>Learn&nbsp;about Apps&nbsp;Center</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-3</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;3:&nbsp;Managing&nbsp;Sales&nbsp;&amp;&nbsp;Customers</p></td><td><p>How&nbsp;to&nbsp;work&nbsp;with&nbsp;Customer&nbsp;Center? What&nbsp;are&nbsp;the&nbsp;Sales&nbsp;Settings?</p><p>What&nbsp;are&nbsp;the&nbsp;Payment&nbsp;Settings?</p><p>Learn&nbsp;and&nbsp;Understand&nbsp;about&nbsp;Income&nbsp;Bar</p><p>How&nbsp;to&nbsp;Create&nbsp;a&nbsp;New&nbsp;Customer? How&nbsp;to&nbsp;Create&nbsp;an&nbsp;Estimate?</p><p>How&nbsp;to&nbsp;Convert&nbsp;an&nbsp;Estimate&nbsp;to&nbsp;an&nbsp;Invoice?</p><p>How&nbsp;to&nbsp;Set&nbsp;up&nbsp;a&nbsp;Recurring&nbsp;Sales&nbsp;Receipt&nbsp;with QuickBooks&nbsp;Payments? How&nbsp;to&nbsp;Create&nbsp;Invoices?</p><p>How&nbsp;to&nbsp;Send&nbsp;an&nbsp;Online&nbsp;Invoice with&nbsp;QuickBooks&nbsp;Payments?</p><p>What&nbsp;are&nbsp;the&nbsp;options&nbsp;to&nbsp;Create&nbsp;Credit Note?</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Session-4</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>-DO-</p></td><td><p>What&nbsp;are&nbsp;the&nbsp;ways to Create&nbsp;Sales&nbsp;Receipts? How&nbsp;to&nbsp;Create&nbsp;Delayed&nbsp;charges?</p><p>How&nbsp;to&nbsp;Receive&nbsp;a&nbsp;Payment?</p><p>How&nbsp;to&nbsp;Create&nbsp;Refund Receipts?</p><p>How&nbsp;to&nbsp;Deposit Undeposited&nbsp;Funds?</p><p>Learn&nbsp;the&nbsp;ways&nbsp;to&nbsp;Explore&nbsp;the Customer&nbsp;Center</p></td></tr></tbody></table></figure><figure class=\"table\"><table><thead><tr><th>Session</th><th>Chapter/&nbsp; &nbsp;Parts</th><th>Topics &nbsp;Covered</th></tr><tr><th>&nbsp;</th><th>&nbsp;</th><th>Learn&nbsp;the&nbsp;ways &nbsp;to&nbsp;Explore&nbsp;the&nbsp;Sales&nbsp;Center</th></tr></thead><tbody><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-5</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;4: &nbsp;Managing&nbsp; &nbsp;Suppliers &amp;&nbsp;Bills</p></td><td><p>&nbsp;</p><p>How&nbsp;to&nbsp;work with &nbsp;Supplier\'s &nbsp;Center? What&nbsp;are&nbsp;the&nbsp;Expense&nbsp;Settings?</p><p>Learn&nbsp;and&nbsp;Understanding&nbsp; &nbsp;the Supplier\'s &nbsp;Bar</p><p>How&nbsp;to&nbsp;Create New&nbsp;Suppliers? How&nbsp;to&nbsp;Create&nbsp;Purchase &nbsp;Orders? How&nbsp;to&nbsp;Create&nbsp;a&nbsp;Bill?</p><p>How&nbsp;to&nbsp;Create Expenses?</p><p>How&nbsp;to&nbsp;Create&nbsp;Cheque?</p><p>What&nbsp;are&nbsp;the&nbsp;ways&nbsp;to&nbsp;make &nbsp;Payments? What&nbsp;is&nbsp;Supplier &nbsp;Credit?</p><p>How&nbsp;to&nbsp;entera&nbsp;Credit&nbsp;Card Credit?&nbsp;Learn&nbsp;and&nbsp;Explore &nbsp;the&nbsp;Vendor &nbsp;Center &nbsp;Learn&nbsp;and&nbsp;Explore &nbsp;the&nbsp;Expense&nbsp;Center</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Session-6</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;5: Working &nbsp;with&nbsp;Transactions</p></td><td><p>How&nbsp;to&nbsp;proceed &nbsp;with &nbsp;Bank&nbsp;Deposit?</p><p>What&nbsp;are&nbsp;the&nbsp;process &nbsp;of&nbsp;Transfer &nbsp;Funds? How&nbsp;to&nbsp;Record a&nbsp;Journal &nbsp;Entry?</p><p>Learn&nbsp;to&nbsp;Create&nbsp;Customer &nbsp;Statements</p><p>Learn&nbsp;to&nbsp;do&nbsp;Inventory &nbsp;Quantity &nbsp;Adjustment</p><p>Learn&nbsp;to&nbsp;Get&nbsp;Bank Feeds</p></td></tr><tr><td><p>&nbsp;</p><p>Session-7</p></td><td><p>&nbsp;</p><p>-00-</p></td><td><p>Learn&nbsp;to&nbsp;Add&nbsp;Tax&nbsp;&amp;&nbsp;VAT</p><p>What&nbsp;is&nbsp;the&nbsp; process &nbsp;of Bank&nbsp;Reconciliation?</p><p>What&nbsp;are&nbsp;the&nbsp;Tools &nbsp;and how&nbsp;to&nbsp;Generate &nbsp;Payroll?&nbsp;Learn&nbsp;the&nbsp; uses&nbsp;of&nbsp;Registers</p><p>How&nbsp;to&nbsp;attach &nbsp;the&nbsp;Attachments?</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Session-8</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;6:&nbsp;Managing &nbsp;Payroll,&nbsp;Lists&nbsp;&amp;&nbsp;Tools</p></td><td><p>How&nbsp;to&nbsp;enlist &nbsp;Products &nbsp;&amp;&nbsp;Services &nbsp;into&nbsp;QuickBooks &nbsp;Online? How&nbsp;to&nbsp;Create&nbsp;a&nbsp;New&nbsp;Employee?</p><p>How&nbsp;to&nbsp;Create&nbsp;a&nbsp;Time &nbsp;Sheet?</p><p>How&nbsp;to&nbsp;Create&nbsp;a&nbsp;Billable &nbsp;Time &nbsp;Chart?</p><p>How&nbsp;to&nbsp;Attach &nbsp;Attachments&nbsp;to&nbsp;Setup &nbsp;Payroll?</p><p>How&nbsp;to&nbsp;Import &nbsp;Data&nbsp;to&nbsp;complete&nbsp; &nbsp;the Payroll &nbsp;Process?&nbsp;What&nbsp;is&nbsp;Audit &nbsp;Log&nbsp;and&nbsp;how&nbsp;does &nbsp;it operate?</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Session-9</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;7: Advanced &nbsp;Features</p></td><td><p>How&nbsp;to&nbsp;Manage &nbsp;Users?</p><p>How&nbsp;to&nbsp;process &nbsp;Write&nbsp;Off&nbsp;Invoices?</p><p>Learn&nbsp;about &nbsp;the steps &nbsp;of Close&nbsp;Books &nbsp;in&nbsp;QuickBooks &nbsp;Online?&nbsp;Learn&nbsp;about &nbsp;Locations &nbsp;&amp;&nbsp;Classes &nbsp;Category</p><p>What&nbsp;are&nbsp;different &nbsp;types &nbsp;of&nbsp;Troubleshooting&nbsp; &nbsp;&nbsp;Techniques?</p><p>How&nbsp;to&nbsp;do&nbsp;QuickBooks&nbsp; &nbsp;Clean&nbsp;Up&nbsp;&amp;&nbsp;Reviews?</p></td></tr><tr><td>&nbsp;</td><td>Chapter &nbsp;8:</td><td>How&nbsp;to&nbsp;generate &nbsp;Reports &nbsp;in&nbsp;QuickBooks&nbsp; &nbsp;Online?</td></tr></tbody></table></figure><figure class=\"table\"><table><thead><tr><th><strong>Session</strong></th><th><strong>Chapter/&nbsp;Parts</strong></th><th><strong>Topics&nbsp;Covered</strong></th></tr></thead><tbody><tr><td><p>&nbsp;</p><p>Session-10</p></td><td><p>&nbsp;</p><p>Reporting</p></td><td><p>Lean&nbsp;about &nbsp;Recommended&nbsp; &nbsp;reports What&nbsp;are&nbsp;Company &nbsp;Snapshots? How&nbsp;to&nbsp;Customize&nbsp; &nbsp;Reports?</p><p>How&nbsp;to&nbsp;Export &nbsp;Documents&nbsp; &nbsp;to Microsoft &nbsp;Excel&nbsp;from &nbsp;QuickBooks &nbsp;Online?</p><p>How&nbsp;to&nbsp;Print&nbsp;and Email&nbsp;Reports &nbsp;in&nbsp;QuickBooks &nbsp;Online?</p></td></tr><tr><td>&nbsp;</td><td><strong>XERO</strong></td><td>&nbsp;</td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-11</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter1:&nbsp;Introducing&nbsp;XERO</p></td><td><p>What&nbsp;is&nbsp;XERO?</p><p>What&nbsp;are&nbsp;the&nbsp;Features &nbsp;of&nbsp;XERO? What&nbsp;are&nbsp;the&nbsp;Uses of&nbsp;Xero?</p><p>Learn&nbsp;about &nbsp;Xero&nbsp;Center</p><p>What&nbsp;is&nbsp;CloudBased&nbsp;Accounting?</p><p>Learn&nbsp;about &nbsp;Logins,&nbsp;Access &nbsp;andPricing &nbsp;ofXero</p><p>Understand &nbsp;the&nbsp;functions&nbsp; &nbsp;my&nbsp;Xero</p><p>How&nbsp;to&nbsp;Access &nbsp;to&nbsp;my&nbsp;Xero?</p><p>How&nbsp;to&nbsp;Createa&nbsp;New&nbsp;Organization?</p><p>What&nbsp;are&nbsp;the&nbsp;steps &nbsp;to&nbsp;complete &nbsp;the&nbsp; Setup&nbsp; &nbsp;Guide?&nbsp;Learn&nbsp;about &nbsp;theXero&nbsp;Dashboard</p><p>Learn&nbsp;about &nbsp;theXero&nbsp;Menus, &nbsp;Icons&nbsp;&amp;&nbsp;Tabs</p><p>How&nbsp;to&nbsp;get &nbsp;Help&nbsp;&amp;&nbsp;Support &nbsp;from &nbsp;Xero? Get&nbsp;idea&nbsp;about &nbsp;Xero&nbsp;Notifications</p><p>How&nbsp;to&nbsp;Operate &nbsp;Xero&nbsp;Files?</p><p>How&nbsp;to&nbsp;Upload &nbsp;a&nbsp;File&nbsp;to&nbsp;the&nbsp; In&nbsp;box&nbsp;of&nbsp;Xero?&nbsp;How&nbsp;to&nbsp;Take&nbsp;a&nbsp;Photo &nbsp;through &nbsp;Xero?</p><p>How&nbsp;to&nbsp;Emaila&nbsp;File&nbsp;to&nbsp;the&nbsp;lnbox&nbsp; of&nbsp;Xero? How&nbsp;to&nbsp;Emaila&nbsp;File&nbsp;to&nbsp;the&nbsp;lnbox&nbsp; of&nbsp;Xero? How&nbsp;to&nbsp;Createa&nbsp;Folder?</p><p>How&nbsp;to&nbsp;Create a&nbsp;Transaction&nbsp; &nbsp;from &nbsp;Files&nbsp;of&nbsp;Xero?</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-12</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;2: XERO&nbsp;Setup</p></td><td><p>Learn&nbsp;about &nbsp;Organization&nbsp; &nbsp;Settings &nbsp;to&nbsp;setup&nbsp;a&nbsp;new&nbsp;company&nbsp;Learn&nbsp;about &nbsp;Financial &nbsp;Settings &nbsp;to&nbsp;setup&nbsp;a&nbsp;new&nbsp;company&nbsp;Learn&nbsp;about &nbsp;Tracking &nbsp;Categories</p><p>How&nbsp;to&nbsp;CreateTracking &nbsp;Categories?&nbsp;Process &nbsp;to&nbsp;Renamea&nbsp;Tracking &nbsp;Category</p><p>Process &nbsp;to&nbsp;Archive &nbsp;or&nbsp;Delete&nbsp;a&nbsp;Tracking &nbsp;Category</p><p>Process &nbsp;to&nbsp;Restore &nbsp;a&nbsp;Tracking &nbsp;Category</p><p>How&nbsp;to&nbsp;set&nbsp;Multi-Currencies?</p><p>How&nbsp;to&nbsp;Adda&nbsp;Currency&nbsp;to&nbsp;Xero? &nbsp;Process &nbsp;to&nbsp;View or&nbsp;Edit&nbsp;a&nbsp;Currency &nbsp;Learn&nbsp;about &nbsp;Tax&nbsp;Rates</p><p>How&nbsp;to&nbsp;Add&nbsp;a&nbsp;Tax&nbsp;Rate?</p></td></tr></tbody></table></figure><figure class=\"table\"><table><thead><tr><th>Session</th><th>Chapter/&nbsp; &nbsp;Parts</th><th>Topics &nbsp;Covered</th></tr></thead><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td><p>Learn&nbsp;about &nbsp;Email&nbsp;Settings</p><p>How&nbsp;to&nbsp;Create an&nbsp;Email &nbsp;Template &nbsp;in Xero? How&nbsp;to&nbsp;View or&nbsp;Edit&nbsp;an&nbsp;Email&nbsp;Template? How&nbsp;to&nbsp;Add&nbsp;an&nbsp;Email&nbsp;Address?</p><p>What&nbsp;is&nbsp;the&nbsp;way&nbsp;to&nbsp;Add&nbsp;a&nbsp;Custom &nbsp;Contact &nbsp;Link?&nbsp;Process &nbsp;to&nbsp;Send&nbsp;a&nbsp;Xero&nbsp;Network &nbsp;Invite &nbsp;(Xero&nbsp;to&nbsp;Xero)</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-13</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;3:&nbsp;Users</p></td><td><p>Learn&nbsp;about &nbsp;User&nbsp;Roles How&nbsp;to&nbsp;Add&nbsp;a&nbsp;User? How&nbsp;to&nbsp;Edit&nbsp;a&nbsp;User?</p><p>How&nbsp;to&nbsp;Remove a&nbsp;User? How&nbsp;to&nbsp;Invite &nbsp;Xero&nbsp;Support?</p><p>What&nbsp;is&nbsp;a&nbsp;Chart&nbsp;of&nbsp;Accounts&nbsp; &nbsp;(COA)?</p><p>What&nbsp;are&nbsp;Account&nbsp; &nbsp;Input &nbsp;Fields?</p><p>How&nbsp;to&nbsp;Import &nbsp;a&nbsp;Chart&nbsp;of&nbsp;Accounts&nbsp; &nbsp;in &nbsp;Xero?&nbsp;Process &nbsp;of&nbsp;Adding &nbsp;an Account</p><p>Process &nbsp;of&nbsp;Editing &nbsp;an&nbsp;Account &nbsp;Process &nbsp;of&nbsp;Deleting &nbsp;an&nbsp;Account&nbsp;Process &nbsp;of Archiving&nbsp; &nbsp;an&nbsp;Account&nbsp;Process &nbsp;of Restoring &nbsp;an&nbsp;Account</p><p>Process &nbsp;of&nbsp;Exporting&nbsp; &nbsp;a&nbsp;Chart of&nbsp;Accounts&nbsp; &nbsp;from &nbsp;Xero</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Session-14</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;4:&nbsp;Conversion&nbsp;Balances</p></td><td><p>What&nbsp;are&nbsp;Conversion &nbsp;Balances?</p><p>What&nbsp;is&nbsp;the&nbsp; Conversion &nbsp;Date&nbsp;and&nbsp;the&nbsp; importance&nbsp; &nbsp;&nbsp;of&nbsp;it&nbsp;in&nbsp;Xero? How&nbsp;to&nbsp;Set&nbsp;the&nbsp;Conversion &nbsp;Date?</p><p>Learn&nbsp;about &nbsp;the ways &nbsp;of&nbsp;entering &nbsp;Conversion &nbsp;Balances &nbsp;in&nbsp;Xero</p><p>Learn&nbsp;about &nbsp;the ways &nbsp;of&nbsp;entering &nbsp;Comparative&nbsp; &nbsp;Balances &nbsp;in&nbsp;Xero</p></td></tr></tbody></table></figure><figure class=\"table\"><table><thead><tr><th>Session</th><th>Chapter/&nbsp; &nbsp;Parts</th><th>Topics &nbsp;Covered</th></tr></thead><tbody><tr><td rowspan=\"2\">&nbsp;</td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;5: &nbsp;Bank Accounts</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>What&nbsp;is&nbsp;Bank&nbsp;Accounts&nbsp; &nbsp;&amp;&nbsp;Bank&nbsp;Feeds?&nbsp;Process &nbsp;of&nbsp;Adding &nbsp;a&nbsp;Bank Account&nbsp;Process &nbsp;of&nbsp;Adding &nbsp;a&nbsp;Credit &nbsp;Card</p><p>Process &nbsp;of Establishing&nbsp; &nbsp;Bank Account&nbsp;Feeds Process &nbsp;of Establishing&nbsp; &nbsp;&nbsp;Credit&nbsp;Card&nbsp;Feeds Process &nbsp;of&nbsp;Adding &nbsp;a PayPal&nbsp;Account</p><p>How&nbsp;to&nbsp;Establish &nbsp;PayPal &nbsp;Feeds? What&nbsp;are&nbsp;Account &nbsp;Transactions?</p><p>How&nbsp;to&nbsp;Create a&nbsp;Spend &nbsp;Money&nbsp;Transaction? How&nbsp;to&nbsp;Create&nbsp;a&nbsp;Receive &nbsp;Money &nbsp;Transaction? How&nbsp;to&nbsp;Create&nbsp;a&nbsp;Transfer &nbsp;Money&nbsp;Transaction? How&nbsp;to&nbsp;Archive &nbsp;a&nbsp;Bank Account?</p><p>How&nbsp;to&nbsp;Restore&nbsp;a&nbsp;Bank&nbsp;Account?</p><p>What&nbsp;are&nbsp;Bank&nbsp;Rules&nbsp;of&nbsp;Xero? How&nbsp;to&nbsp;Create&nbsp;a&nbsp;Bank&nbsp;Rule?&nbsp;Process &nbsp;of Editing &nbsp;a&nbsp;Bank&nbsp;Rule</p><p>How&nbsp;does &nbsp;Bank&nbsp;Statements&nbsp; &nbsp;get connect &nbsp;to Xero? How&nbsp;to&nbsp;Import &nbsp;a&nbsp;Bank&nbsp;Statement?</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;6:&nbsp;Contacts</p></td><td><p>Learn&nbsp;about &nbsp;Contacts &nbsp;of&nbsp;Xero</p><p>What&nbsp;are&nbsp;Contact &nbsp;Input &nbsp;Fields &nbsp;and&nbsp;how&nbsp;does &nbsp;it&nbsp;work?&nbsp;Process &nbsp;of Importing&nbsp; &nbsp;Contacts</p><p>Process &nbsp;of&nbsp;Creating &nbsp;a&nbsp;Contact &nbsp;Group</p><p>Process &nbsp;of&nbsp;Allocating&nbsp;a&nbsp;contact &nbsp;toa&nbsp;Contact &nbsp;Group</p><p>Process &nbsp;of Adding &nbsp;a&nbsp;Contact&nbsp;Process &nbsp;of&nbsp;Editing &nbsp;a&nbsp;Contact&nbsp;Process &nbsp;of&nbsp;Archiving&nbsp; &nbsp;a Contact&nbsp;Process &nbsp;of&nbsp;Restoring &nbsp;a&nbsp;Contact&nbsp;Process &nbsp;of Merging &nbsp;Contacts</p><p>Process &nbsp;of&nbsp;Exporting &nbsp;Contacts</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Session-15</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;7:&nbsp;Inventory</p></td><td><p>What&nbsp;is&nbsp;Inventory?</p><p>What&nbsp;are&nbsp;Inventory &nbsp;Input &nbsp;Fields&nbsp;and&nbsp;how&nbsp;does &nbsp;it work? Process &nbsp;of Creating &nbsp;an Inventory &nbsp;Item(Untracked)&nbsp;Process &nbsp;of&nbsp;Creating &nbsp;an&nbsp;Inventory &nbsp;Item &nbsp;(tracked)</p><p>Process &nbsp;of&nbsp;Editing &nbsp;an&nbsp;Inventory &nbsp;Item</p><p>What&nbsp;are&nbsp;Opening &nbsp;Balances &nbsp;(Tracked &nbsp;Items) &nbsp;of&nbsp;Inventory &nbsp;in Xero? How&nbsp;to&nbsp;Export &nbsp;Inventory &nbsp;Items?</p><p>How&nbsp;to&nbsp;Import &nbsp;Inventory &nbsp;Items?</p></td></tr></tbody></table></figure><figure class=\"table\"><table><thead><tr><th>Session</th><th>Chapter/&nbsp; &nbsp;Parts</th><th>Topics &nbsp;Covered</th></tr></thead><tbody><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-16</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;8:&nbsp;Invoicing&nbsp; &nbsp;- &nbsp;Sales</p></td><td><p>&nbsp;</p><p>How&nbsp;to&nbsp;process &nbsp;the&nbsp;Invoice &nbsp;Settings? Process &nbsp;to&nbsp;Adda&nbsp;Payment &nbsp;Service</p><p>What&nbsp;are&nbsp;Branding &nbsp;Theme &nbsp;Input &nbsp;Fields &nbsp;and&nbsp;how&nbsp;to&nbsp;operate &nbsp;with &nbsp;it?</p><p>How&nbsp;to&nbsp;Create&nbsp;a&nbsp;Branding &nbsp;Theme?</p><p>Process &nbsp;of&nbsp;Editing, &nbsp;Copying &nbsp;&amp;&nbsp;Deleting &nbsp;a Branding &nbsp;Theme</p><p>Get&nbsp;familiar &nbsp;with &nbsp;the&nbsp;Sales&nbsp;Dashboard</p><p>What&nbsp;are&nbsp;Invoice &nbsp;States?</p><p>What&nbsp;are&nbsp;Invoice &nbsp;Input &nbsp;Fields&nbsp;and&nbsp;How&nbsp;does it&nbsp;work? How&nbsp;to&nbsp;Create&nbsp;a&nbsp;New&nbsp;Invoice?</p><p>How&nbsp;to&nbsp;Attach &nbsp;Files&nbsp;to&nbsp;Invoices?</p><p>Process &nbsp;of&nbsp;Editing &nbsp;an Invoice&nbsp;Process &nbsp;of&nbsp;Copying &nbsp;an Invoice&nbsp;Process &nbsp;of&nbsp;Voiding &nbsp;an Invoice&nbsp;Process &nbsp;of&nbsp;Emailing &nbsp;an Invoice&nbsp;Process &nbsp;of&nbsp;Printing &nbsp;an&nbsp;Invoice.&nbsp;Process &nbsp;of&nbsp;Recording &nbsp;a&nbsp;Payment&nbsp;Process &nbsp;of Sending &nbsp;Receipts Process &nbsp;of&nbsp;Searching &nbsp;Invoices&nbsp;What&nbsp;is&nbsp;Repeating &nbsp;Invoices?</p><p>How&nbsp;to&nbsp;Create a&nbsp;Repeating &nbsp;Invoice? What&nbsp;are&nbsp;Credit &nbsp;Notes?</p><p>How&nbsp;to&nbsp;Create&nbsp;a&nbsp;Credit &nbsp;Note?</p><p>What&nbsp;are&nbsp;the&nbsp;ways&nbsp;to&nbsp;Import &nbsp;Invoices? &nbsp;Learn&nbsp;about &nbsp;Statements&nbsp; &nbsp;of&nbsp;an&nbsp;invoice How&nbsp;to&nbsp;Send a&nbsp;Statement?</p><p>What&nbsp;is&nbsp;the&nbsp; process &nbsp;to make &nbsp;Batch &nbsp;Deposits?</p></td></tr><tr><td rowspan=\"2\"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-17</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;9:&nbsp;Quotes</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>What&nbsp;are&nbsp;Quotes?</p><p>What&nbsp;are&nbsp;Quote&nbsp;Input &nbsp;Fields &nbsp;and&nbsp;how&nbsp;does &nbsp;it&nbsp;work? What&nbsp;does&nbsp;a&nbsp;Quote State?</p><p>Process&nbsp;of&nbsp;Creating&nbsp;Quote</p><p>Process&nbsp;of&nbsp;Sending,&nbsp;Printing&nbsp;and&nbsp;Deleting&nbsp;a&nbsp;Quote</p><p>Process&nbsp;of Accepting&nbsp;or&nbsp;Declining&nbsp;a&nbsp;Quote</p><p>Process&nbsp;of&nbsp;Copying Quotes</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;10:</p><p>Purchase</p></td><td><p>Get&nbsp;familiar&nbsp;with&nbsp;the&nbsp;Purchases&nbsp;Dashboard</p><p>What&nbsp;does&nbsp;a&nbsp;Bill&nbsp;State?</p><p>What&nbsp;are&nbsp;Bill&nbsp;Input&nbsp;Fields and&nbsp;how&nbsp;does&nbsp;it&nbsp;work?&nbsp;Process&nbsp;of&nbsp;Creating&nbsp;New&nbsp;Bill</p><p>Process&nbsp;of Attaching&nbsp;Files&nbsp;to&nbsp;Bills</p><p>Process&nbsp;of&nbsp;Editing&nbsp;a&nbsp;Bill</p></td></tr></tbody></table></figure><figure class=\"table\"><table><thead><tr><th>Session</th><th>Chapter/&nbsp; &nbsp;Parts</th><th>Topics &nbsp;Covered</th></tr></thead><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td><p>Process &nbsp;of&nbsp;Copying &nbsp;a Bill Process &nbsp;of Voiding &nbsp;a&nbsp;Bill Process &nbsp;of Importing&nbsp; &nbsp;Bills</p><p>Process &nbsp;of Recording &nbsp;a&nbsp;Payment</p><p>Process &nbsp;of Sending &nbsp;a Remittance What&nbsp;are&nbsp;the&nbsp;ways&nbsp;to&nbsp;Search &nbsp;Bills? What&nbsp;are&nbsp;Repeating &nbsp;Bills?</p><p>How&nbsp;to&nbsp;Create a&nbsp;Repeating &nbsp;Bill? What&nbsp;are&nbsp;Credit &nbsp;Notes?</p><p>How&nbsp;to&nbsp;Create a&nbsp;Credit &nbsp;Note?</p><p>What&nbsp;are&nbsp;Batch &nbsp;Payments? &nbsp;How&nbsp;to&nbsp;Create&nbsp;a&nbsp;Batch &nbsp;Payment?</p></td></tr><tr><td rowspan=\"2\"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-18</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;11:&nbsp;Purchase &nbsp;Order</p></td><td><p>What&nbsp;are&nbsp;Purchase &nbsp;Orders?</p><p>What&nbsp;does &nbsp;Purchase &nbsp;Order&nbsp;State?&nbsp;Process &nbsp;to&nbsp;Createa&nbsp;Purchase &nbsp;Order</p><p>Process &nbsp;of&nbsp;Editing &nbsp;or Deleting &nbsp;a&nbsp;Purchase &nbsp;Order Process &nbsp;of&nbsp;Sending &nbsp;or Printing &nbsp;a&nbsp;Purchase &nbsp;Order &nbsp;Process &nbsp;of&nbsp;Marking &nbsp;a&nbsp;Purchase &nbsp;Order&nbsp;as&nbsp;Billed</p><p>Process &nbsp;of&nbsp;Copying &nbsp;a Purchase &nbsp;Order</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;12:&nbsp;Expenses &nbsp;Claims</p></td><td><p>What&nbsp;are&nbsp;Expense &nbsp;Claims?</p><p>What&nbsp;are&nbsp;Expense &nbsp;Claim&nbsp;Input &nbsp;Fields &nbsp;and&nbsp;how&nbsp;does &nbsp;it&nbsp;work? What&nbsp;does&nbsp;an&nbsp;Expense&nbsp;Claim&nbsp;State?</p><p>Process &nbsp;of&nbsp;Creating &nbsp;an&nbsp;Expense &nbsp;Claim</p><p>Process &nbsp;of&nbsp;Editing &nbsp;and Viewing &nbsp;Expense &nbsp;Claims&nbsp;Process &nbsp;of&nbsp;Submitting&nbsp; &nbsp;an&nbsp;Expense &nbsp;Claim&nbsp;Process &nbsp;of&nbsp;Approving &nbsp;an Expense &nbsp;Claim</p><p>Process &nbsp;of&nbsp;Declining &nbsp;an&nbsp;Expense &nbsp;Claim</p><p>Process &nbsp;of&nbsp;Paying &nbsp;an&nbsp;Expense &nbsp;Claim</p><p>How&nbsp;to&nbsp;Search &nbsp;for&nbsp;Previous &nbsp;Claims?</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-19</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;13:&nbsp;Reconciliation</p></td><td><p>What&nbsp;is&nbsp;Reconciliation&nbsp; &nbsp;&nbsp;and the&nbsp;process &nbsp;to&nbsp;do&nbsp;it? Get&nbsp;to&nbsp;know&nbsp;about &nbsp;the&nbsp;Reconciliation&nbsp; &nbsp;Screen&nbsp;What&nbsp;is&nbsp;Cash Coding?</p><p>What&nbsp;does &nbsp;Bank Statement&nbsp; &nbsp;(Tab)&nbsp;contain?</p><p>What&nbsp;does&nbsp;Account &nbsp;Transactions&nbsp; &nbsp;&nbsp;(Tab)&nbsp;contain? What&nbsp;is&nbsp;Matching&nbsp; &nbsp;&nbsp;and how&nbsp;to&nbsp;do&nbsp;it?</p><p>What&nbsp;is&nbsp;Part Payments &nbsp;and how&nbsp;to&nbsp;do&nbsp;it? What&nbsp;are&nbsp;Minor &nbsp;Adjustments&nbsp; &nbsp;&nbsp;in&nbsp;Xero?&nbsp;What&nbsp;are&nbsp;Prepayments&nbsp; &nbsp;in Xero?</p><p>What&nbsp;are&nbsp;Overpayments?</p><p>Process &nbsp;of&nbsp;Creating &nbsp;Spend &nbsp;and&nbsp;Receive&nbsp;Transactions</p><p>What&nbsp;is&nbsp;Auto &nbsp;Suggestion&nbsp; &nbsp;and how&nbsp;does &nbsp;it&nbsp;work? How&nbsp;to&nbsp;Transfer &nbsp;between &nbsp;Bank&nbsp;Accounts?</p><p>What&nbsp;is&nbsp;Discuss &nbsp;Tab&nbsp;and&nbsp;how&nbsp;does &nbsp;it work?</p></td></tr></tbody></table></figure><figure class=\"table\"><table><thead><tr><th>Session</th><th>Chapter/&nbsp; &nbsp;Parts</th><th>Topics &nbsp;Covered</th></tr></thead><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>What&nbsp;are&nbsp;the&nbsp;process &nbsp;of&nbsp;Editing &nbsp;Transactions? How&nbsp;to&nbsp;generate &nbsp;Reconciliation&nbsp; &nbsp;&nbsp;Report?</td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session 20</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;14:&nbsp;Fixed&nbsp;Assets</p></td><td><p>What&nbsp;are&nbsp;Fixed&nbsp;Assets &nbsp;in Xero? What&nbsp;does &nbsp;Fixed&nbsp;Asset &nbsp;State?</p><p>What&nbsp;are&nbsp;Fixed&nbsp;Asset &nbsp;Input &nbsp;Fields &nbsp;and&nbsp;how&nbsp;does &nbsp;it&nbsp;work?</p><p>How&nbsp;to&nbsp;Set&nbsp;the&nbsp;Fixed Asset &nbsp;Start &nbsp;Date?&nbsp;Process &nbsp;of&nbsp;Creating &nbsp;a Fixed&nbsp;Asset&nbsp;Process &nbsp;of&nbsp;Importing&nbsp; &nbsp;Fixed&nbsp;Assets</p><p>What&nbsp;is&nbsp;Depreciation?</p><p>How&nbsp;to&nbsp;Run&nbsp;Depreciation&nbsp; &nbsp;in Xero?</p><p>How&nbsp;to&nbsp;operate &nbsp;Rolling &nbsp;Back&nbsp;Depreciation&nbsp; &nbsp;in Xero? What&nbsp;is&nbsp;Selling &nbsp;And&nbsp;Disposing &nbsp;of Assets?</p><p>Learn&nbsp;about &nbsp;Selling &nbsp;a&nbsp;Fixed&nbsp;Asset</p></td></tr><tr><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session21</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;15:&nbsp;Reports</p></td><td><p>What&nbsp;are&nbsp;Reports&nbsp; and&nbsp;how&nbsp;to&nbsp;operate &nbsp;them &nbsp;on&nbsp;Xero? What&nbsp;are the&nbsp;different&nbsp; &nbsp;Common &nbsp;Reporting &nbsp;Functions? &nbsp;Process &nbsp;of&nbsp;Adding &nbsp;a&nbsp;Summary &nbsp;to&nbsp;a&nbsp;Report</p><p>Process&nbsp; of&nbsp;Adding &nbsp;a&nbsp;Footnote &nbsp;to&nbsp;a&nbsp;Report What&nbsp;is the&nbsp;way&nbsp;to&nbsp;Save&nbsp;a&nbsp;Report&nbsp;(Draft)? What&nbsp;is&nbsp;the&nbsp;wayto&nbsp;Publish &nbsp;a&nbsp;Report?</p><p>How&nbsp;to&nbsp;Export&nbsp;a&nbsp;Report?</p><p>What&nbsp;are&nbsp;different&nbsp; &nbsp;Report &nbsp;Layout &nbsp;Options?&nbsp;Process &nbsp;of&nbsp;Creating &nbsp;aLayout</p><p>How&nbsp;to&nbsp;Apply &nbsp;a&nbsp;Layout &nbsp;in&nbsp;Report &nbsp;Layouts? How&nbsp;to&nbsp;Edit&nbsp;a&nbsp;Report &nbsp;Layout?</p><p>How&nbsp;to&nbsp;Delete a&nbsp;Report &nbsp;Layout? How&nbsp;to&nbsp;Create&nbsp;a&nbsp;Budget?</p><p>How&nbsp;to&nbsp;Import &nbsp;a&nbsp;Budget?</p><p>How&nbsp;to&nbsp;Exporter&nbsp;Budget?</p></td></tr><tr><td rowspan=\"2\"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session 22</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;16:&nbsp;Manage &nbsp;Payroll &nbsp;&amp;&nbsp;Create&nbsp; &nbsp;Payroll</p></td><td><p>&nbsp;</p><p>&nbsp;</p><p>Understanding&nbsp; &nbsp;Payroll</p><p>How&nbsp;to&nbsp;prepare &nbsp;payroll &nbsp;in&nbsp;Xero?</p><p>Steps&nbsp;to&nbsp;set&nbsp;up&nbsp;payroll &nbsp;basics &nbsp;and&nbsp;add&nbsp;employees</p><p>Steps&nbsp;to&nbsp;set&nbsp;up&nbsp;pay&nbsp;slips, leave&nbsp;and&nbsp;holidays</p><p>How&nbsp;to&nbsp;add&nbsp;payroll tracking? Steps&nbsp;to&nbsp;create&nbsp;a&nbsp;Draft&nbsp;Pay&nbsp;Run</p><p>Ways&nbsp;to&nbsp;adjust&nbsp;Employee\'s&nbsp;Pay&nbsp;items&nbsp;and&nbsp;post&nbsp;the&nbsp;Pay&nbsp;run</p><p>Learn&nbsp;about&nbsp;transferring&nbsp;funds&nbsp;to&nbsp;Employees&nbsp;Bank&nbsp;Accounts</p></td></tr><tr><td><p>&nbsp;</p><p>Chapter&nbsp;17: Activity &nbsp;Statement</p></td><td><p>What&nbsp;are&nbsp;Activity&nbsp;Statements?</p><p>How&nbsp;to&nbsp;Complete&nbsp;a&nbsp;Business&nbsp;Activity&nbsp;Statement&nbsp;(BAS)? How&nbsp;to&nbsp;Complete&nbsp;an&nbsp;Instalment&nbsp;Activity&nbsp;Statement&nbsp;(IAS)?</p></td></tr></tbody></table></figure><figure class=\"table\"><table><tbody><tr><td><strong>Session</strong></td><td><strong>Chapter/&nbsp;Parts</strong></td><td><strong>Topics&nbsp;Covered</strong></td></tr><tr><td>&nbsp;</td><td colspan=\"2\"><p>&nbsp;</p><p>Freelancing</p></td></tr><tr><td><p>&nbsp;</p><p>Session-23</p></td><td><p>&nbsp;</p><p>Chapter&nbsp;1:&nbsp;Introduction&nbsp;to&nbsp;Market&nbsp;place</p></td><td><p>Introducing&nbsp; &nbsp;Accounting&nbsp; &nbsp;based&nbsp;Freelancing &nbsp;Market &nbsp;Places</p><p>Introduction&nbsp; &nbsp;to&nbsp;Fiverr</p><p>Guideline&nbsp;to&nbsp;Fiverr&nbsp;Account&nbsp;Creation</p></td></tr><tr><td><p>&nbsp;</p><p>Session-24</p></td><td><p>&nbsp;</p><p>Chapter&nbsp;2:&nbsp;Fiverr</p></td><td><p>Fiverr&nbsp;GIG &nbsp;creation</p><p>Fiverr&nbsp;Bidding</p><p>Fverr&nbsp;Tips&nbsp;and&nbsp;Tricks</p></td></tr><tr><td><p>&nbsp;</p><p>Session-25</p></td><td><p>&nbsp;</p><p>Chapter&nbsp;3:&nbsp;Upwork</p></td><td><p>Introduction &nbsp;to&nbsp;Upwork</p><p>Guideline &nbsp;to Upwork&nbsp;Account &nbsp;Creation</p><p>Upwork Bidding</p></td></tr><tr><td><p>&nbsp;</p><p>Session-26</p></td><td><p>&nbsp;</p><p>-DO-</p></td><td><p>Upwork Cover&nbsp;Letter&nbsp;writing</p><p>Upwork&nbsp;Tips&nbsp;and Tricks</p></td></tr></tbody></table></figure>', 'certificate-course-on-quickbooks-online-xero-for-freelancing', '2023-11-07 18:00:00', 1, 1, NULL, '2023-11-07 22:01:59', '2023-11-08 21:30:12'),
(11, 5, 'The Art of Money Management', '/uploads/thumbnail/1699499117-thumbnail.jpg', NULL, '<p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tc3/1/16/1f50f.png\" alt=\"🔏\">সঠিক পদ্ধতিতে সঞ্চয় ও বিনিয়োগই হতে পারে সফলতার মূলমন্ত্র! Ph: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D8801755597770%26text%3DLink%253A%250Ahttps%253A%252F%252Ffb.me%252F3ELgR8tQo%250A%250AI%2520saw%2520this%2520on%2520Facebook...%26app%3Dfacebook%26fbclid%3DIwAR0zGlLix8X2Rn90bvhNoRFFht3D_gjaTsxhIFNjN6n8btUapUgesfevcLs&amp;h=AT2GaKwiqlO16yGsMewRFPVyV-4h8jw9_RvJwfJnMqhWrjMmQ4uT1HiPT9g-cFqchnADmxL8kOoKZdVEPKG-d0GUTtnXYoXLEbN-dpVxpR3DqVfdxa3smosArAhF5i623VIbtA&amp;__tn__=-UK*F\">01755-597770</a><br><br>কার্যকর এবং সঠিক নিয়মে সঞ্চয় ও বিনিয়োগের সুযোগ খুঁজে পেতে আপনার ব্যয়ের ওপর নজর রাখুন! কষ্টে অর্জিত অর্থ সঞ্চয়! অর্থ উপার্জন করা যেমন কষ্টের তেমনি তা সঞ্চয় করার প্রক্রিয়াও কম কষ্টের নয়! আর বিনিয়োগ; সে তো এক বুদ্ধির খেলা !!!<br><br>অর্থায়নের চারটি নীতি রয়েছে, সেগুলো হলো- আয়, সঞ্চয়, ব্যয় এবং বিনিয়োগ। অর্থায়নের এই মূল নীতিগুলি অনুসরণ করে আর্থিক লক্ষ্যে পৌঁছাতে, ঋণ থেকে বেরিয়ে আসতে এবং সঞ্চয় করার জন্য জানতে হবে কীভাবে বাজেট করতে হয়, কীভাবে আপনার খরচ ট্র্যাক করতে হয় এবং বাস্তবসম্মত সঞ্চয় লক্ষ্য নির্ধারণ।<br><br>এ সব বিষয় সম্পর্কে বিস্তারিত জানার পাশাপাশি সঠিক নিয়মে বিনিয়োগের অন্যান্য শর্ত আগ্রহীদের জানাতে বিশেষ্ একটি কোর্স এর আয়োজন করেছে বিজ সল্যুশন পিএলসি। 𝗧𝗵𝗲 𝗔𝗿𝘁 𝗼𝗳 𝗠𝗼𝗻𝗲𝘆 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁: 𝗬𝗼𝘂𝗿 𝗣𝗮𝘁𝗵 𝘁𝗼 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗙𝗿𝗲𝗲𝗱𝗼𝗺 নামের এই কোর্সটিতে ১৫ বছরের বাস্তব অভিজ্ঞতাসম্পন্ন একজন ফাইনান্সিয়ালিস্টের মাধ্যমে শিখতে পারবেন কীভাবে অর্থ পরিচালনা করা হয় এবং আর্থিকভাবে সাফল্য অর্জনের জন্য টিপস এবং ট্রিক্স।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png\" alt=\"👉\">Apply Now: <a href=\"https://forms.gle/vFzum783CajHEy9G8?fbclid=IwAR0Iz-LaUi6sbhDZawzEFTnq0zYBv_zHhzaH6cMZ0HnTCb7jg0tt_ngRgVM\">https://forms.gle/vFzum783CajHEy9G8</a></p>', NULL, 1500, 501, 1, '3', 'Friday', '3 Hours', 'English and Bangla', 'online', 'admission', '2023-12-27', '2023-12-27', '<p><strong>The Art of Money Management: Your Path to Financial Freedom</strong><br><br><strong>Course Introduction: </strong>Welcome to \"The Art of Money Management: Your Path<br>to Financial Freedom\" a comprehensive financial education course designed<br>to empower individuals with the knowledge and skills necessary to master the<br>art of managing their finances and achieve financial freedom. This course will<br>equip you with the tools to make informed financial decisions, build a solid<br>foundation for your financial future, and align your financial practices with your<br>personal values and beliefs.<br>Eligibility Criteria: This course is open to anyone interested in gaining financial<br>knowledge and improving their financial management skills. There are no<br>specific prerequisites, and participants from all backgrounds and levels of<br>financial expertise are welcome.<br>Learning Outcomes:<br>By the end of this course, participants will be able to:<br>❖ Understand the importance of personal finance planning.<br>❖ Set clear financial goals and priorities.<br>❖ Assess their current financial situation and make informed decisions.<br>❖ Create a personal financial roadmap for achieving their goals.<br>❖ Identify different sources of income and their management.<br>❖ Grasp the fundamentals of investing in various asset classes.<br><strong>Session 1: Financial Foundations and Income (1 hour)</strong><br>● Basics of personal finance planning, setting financial goals, and<br>assessing your financial situation.<br>● Income sources and basic expense management.<br>● Introduce a \"money-making formula\" and essential money management<br>techniques.<br><strong>Session 2: Building Wealth, Managing Debt, and Second Income (1 hour)</strong><br>● Pros and cons of credit cards and loans, plus debt management<br>strategies.<br>● Ideas for generating a second income.<br>● Investment basics, including stocks, bonds, and alternative investments.<br>● Building a diversified investment portfolio.<br><strong>Session 3: Financial Security, Taxes, and Ethical Considerations (1 hour)</strong><br>● Tax strategies, risk management, and the importance of insurance.<br>● Emergency funds and financial preparedness.<br>● Ethical and religious aspects of personal finance.<br>● Emphasize ethical financial practices and legal tax compliance.<br>&nbsp;</p>', 'the-art-of-money-management', '2023-11-08 18:00:00', 1, NULL, NULL, '2023-11-08 21:05:17', '2023-11-08 21:05:17');
INSERT INTO `courses` (`id`, `service_id`, `name`, `thumbnail`, `banner`, `description`, `video_id`, `price`, `discount`, `class_count`, `duration`, `class_per_week`, `class_duration`, `language`, `delivery_mode`, `course_type`, `start_date`, `end_date`, `curriculum_text`, `slug`, `published_at`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(12, 5, 'Certificate Course on Tally Prime ERP', '/uploads/thumbnail/1699869068-thumbnail.png', '/uploads/banner/1699869068-banner.png', '<p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t81/1/16/1f7e7.png\" alt=\"🟧\">TallyPrime হলো একটি উইন্ডোজ-ভিত্তিক এন্টারপ্রাইজ রিসোর্স প্ল্যানিং (ERP) সফটওয়্যার। TallyPrime এ অ্যাকাউন্টিং, ইনভেন্টরি ম্যানেজমেন্ট, অর্ডার ম্যানেজমেন্ট, ভ্যাট এবং ট্যাক্স, বেতন, ব্যাংকিং এবং ব্যবসার এই জাতীয় অনেক কিছু পরিচালনা করে থাকে। এটি ইনভয়েস রেকর্ড করা থেকে শুরু করে বিভিন্ন ম্যানেজমেন্ট রিপোর্ট তৈরি করা পর্যন্ত প্রতিদিনের সমস্ত প্রক্রিয়া সম্পন্ন করে থাকে। এটি পরিচালনা করা খুব সহজ এবং এর দামও খুব বেশি নয়। বিশ্বের 100 টিরও বেশি দেশে ১৮,০০,০০০ লক্ষ এর বেশি কাস্টমারদের দ্বারা ব্যবহৃত একটি বিশ্বস্ত ব্যবসায় সফটওয়্যার হল TallyPrime।<br><br>একাউন্টিং প্রফেশনালস ছাড়াও ACCA, CIMA, ICMA, ICAB, ICSB, BBA, BBS, Hons. in Accounting/ Management/ Finance এর ছাত্র-ছাত্রীরা এই কোর্সটি করতে পারেন। যারাই একাউন্টসে ক্যারিয়ারে গড়তে চান তাদের জন্য এই কোর্সটি অত্যাবশ্যক। TallyPrime সফটওয়্যারটি একাউন্টস এর বিভিন্ন কাজে ব্যবহার হয় তাই জুনিয়র এক্সিকিউটিভ থেকে শুরু করে টপ ম্যানেজমেন্টের ডিসিশন মেকিং লেভেল এর সবার জন্য এই কোর্সটি সহায়ক।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9b/1/16/1f6d1.png\" alt=\"🛑\">ভর্তি হতে রেজিস্ট্রেশন করুন:<br><a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fforms.gle%2FMFtbcxjWaoxQjAsb6%3Ffbclid%3DIwAR0j-rA4rtl0Fsp6iSI_8-9MP3l4g8ODWpzNr0VIh7oI4WVpS8jjCrREdLQ&amp;h=AT3VkJmLg4rloJkg1UGMtabOhf895ZfijziwtwU_xrbqqR1IQzi33gSdGnrKQN9vZRn16ys79DajBzlTny4aACvyvisgeb5AvaHYILBgSEBNm0ddzE5K-JI2v35epwWwOeeF&amp;__tn__=-UK*F&amp;c[0]=AT3Phtk8nqcfWsL7a8jOA_G05LZgaPRbPQY_33SUF2CRt-Yov8i8qqjgUbDn1evFzOKIB6p5gYKfKqEyGWplJBOPnl-npupSNaNHqzjUect3O_wjDp-WW-lyNCf-y6VO0Vy-PlRuC4PbatI4RZ0iuh6PpTTlKawvL6Bwnb_i4Au1n1vdNZDId4nqzITDXgg9eEIYjo4o__GR\">https://forms.gle/MFtbcxjWaoxQjAsb6</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1/16/1f536.png\" alt=\"🔶\">কোর্সটির মাধ্যমে যেসকল বিষয়ে দক্ষ হওয়া যাবে:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1/16/31_20e3.png\" alt=\"1⃣\"> বেসিক একাউন্টিং;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t99/1/16/32_20e3.png\" alt=\"2⃣\"> ইনভেন্টরী ম্যানেজমেন্ট;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tb8/1/16/33_20e3.png\" alt=\"3⃣\"> ব্যাংকিং লেনদেন;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td7/1/16/34_20e3.png\" alt=\"4⃣\"> ভ্যাট ও ট্যাক্স নিরুপন এবং এই খাতের হিসাব রাখা;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/35_20e3.png\" alt=\"5⃣\"> ষ্টক, এসেটস এবং ফিন্যান্সিয়াল রিপোর্ট তৈরি;<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t2/1/16/1f7e8.png\" alt=\"🟨\">Attractions of the Course<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> জব প্লেসমেন্ট / পার্ট টাইম ওয়ার্ক ফ্যাসিলিটি;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> লাইভ প্রাকটিস অন সফটওয়্যার;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> কোর্স ম্যাটেরিয়ালস এবং ক্লাস রেকর্ডিং;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1/16/27a1.png\" alt=\"➡\"> কোর্স কমপ্লিশন সার্টিফিকেট;<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1/16/1f535.png\" alt=\"🔵\">Course Details:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t8d/1/16/2611.png\" alt=\"☑\">কোর্স ফি: ৫,০০০ টাকা;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t8d/1/16/2611.png\" alt=\"☑\">আর্লি বার্ড অফার: ২,৫০০ টাকা (প্রথম ১০ জনের জন্য);<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t8d/1/16/2611.png\" alt=\"☑\">ভর্তির শেষ সময়: ৩০শে অক্টোবর, ২০২৩ (সোমবার)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t8d/1/16/2611.png\" alt=\"☑\">কোর্স শুরু: ৩১শে অক্টোবর, ২০২৩ (ক্লাস প্রতি মঙ্গলবার);<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t8d/1/16/2611.png\" alt=\"☑\">ক্লাসের সময়: রাত ৮.৩০ টা থেকে ১০.৩০ টা;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t8d/1/16/2611.png\" alt=\"☑\">সেশন সংখ্যা: ৬ টি (২ ঘণ্টা প্রতি সেশন);<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t0/1/16/1f7e6.png\" alt=\"🟦\">Resource Person:<br>Mr. Humayun Kobir, ACMA<br>Deputy Manager<br>Square Textiles Ltd.<br><br>Mr. Md. Shajahan Mia<br>Lead Consultant &amp; Trainer<br>Tally Prime ERP<br>Sr. Manager, BSSL<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t83/1/16/1f7e9.png\" alt=\"🟩\">বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> আপডেটেড কোর্স মডিউল;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/25aa.png\" alt=\"▪\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং;<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/1f3e0.png\" alt=\"🏠\"> বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F3ZnJFpcT5%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR3D0syDdeTEFj8CRsfluP0hclRL4-MfTj4rX0pU3BS09xqcAmGe-vpZ_mk\">01755-597770</a></p>', NULL, 5000, 2500, 6, '12', 'Tuesday', '2 Hours', 'English and Bangla', 'online', 'admission', '2023-12-26', '2024-01-29', '<figure class=\"table\"><table><thead><tr><th>Session</th><th>Chapter/ &nbsp;Parts</th><th>Topics&nbsp;Covered</th></tr></thead><tbody><tr><th><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-1</p></th><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;1:&nbsp;Fundamentals &nbsp;of</p><p>Accounting</p></td><td><p>•&nbsp; &nbsp;&nbsp;Introduction</p><p>•&nbsp; &nbsp;&nbsp;Accounting&nbsp;Terms</p><p>•&nbsp; &nbsp;&nbsp;Accounting&nbsp;Assumptions,</p><p>•&nbsp; &nbsp;&nbsp;Concepts&nbsp;and&nbsp;Principles</p><p>•&nbsp; &nbsp;&nbsp;Assumptions</p><p>•&nbsp; &nbsp;&nbsp;Concepts</p><p>•&nbsp; &nbsp;&nbsp;Principles</p><p>•&nbsp; &nbsp;&nbsp;Double&nbsp;Entry&nbsp;System of&nbsp;Accounting</p><p>•&nbsp; &nbsp;&nbsp;Types&nbsp;of&nbsp;Accounts</p><p>•&nbsp; &nbsp;&nbsp;Golden&nbsp;Rules of&nbsp;Accounting</p><p>•&nbsp; &nbsp;&nbsp;Source&nbsp;Documents&nbsp;for&nbsp;Accounting</p><p>•&nbsp; &nbsp;&nbsp;Key&nbsp;Takeaways</p><p>•&nbsp; &nbsp;&nbsp;Practice&nbsp;Exercises</p></td></tr><tr><th><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-2</p></th><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter &nbsp;2: &nbsp;Maintaining &nbsp;Chart of&nbsp;Accounts&nbsp;in&nbsp;Tally.ERP&nbsp;9</p></td><td><p>•&nbsp; &nbsp;Introduction</p><p>•&nbsp; &nbsp;Getting&nbsp;Started&nbsp;with Tally. ERP &nbsp;9</p><p>•&nbsp; &nbsp;Mouse&nbsp;and&nbsp;Keyboard&nbsp;Conventions</p><p>•&nbsp; &nbsp;Company&nbsp;Creation</p><p>•&nbsp; &nbsp; &nbsp;Shut&nbsp;a&nbsp;Company</p><p>•&nbsp; &nbsp;Select&nbsp;a&nbsp;Company</p><p>• &nbsp;Alter&nbsp;a&nbsp;Company</p><p>•&nbsp; &nbsp;Company&nbsp;Features&nbsp;and</p><p>•&nbsp; &nbsp;Configurations</p><p>•&nbsp; &nbsp;&nbsp;Company&nbsp;Features:&nbsp;F11</p><p>•&nbsp; &nbsp;Configuration:&nbsp;F12</p><p>•&nbsp; &nbsp;Chart&nbsp;of&nbsp;Accounts</p><p>•&nbsp; &nbsp;Ledger</p><p>•&nbsp; &nbsp;Group</p><p>•&nbsp; &nbsp;&nbsp;Ledger&nbsp;Creation</p><p>•&nbsp; &nbsp;Single&nbsp;LedgerCreation</p><p>•&nbsp; &nbsp;&nbsp;Multi&nbsp;LedgerCreation Altering&nbsp;and</p><p>•&nbsp; &nbsp;Display&nbsp;of&nbsp;Ledgers</p><p>•&nbsp; &nbsp;Ledger&nbsp;Alteration</p><p>•&nbsp; &nbsp;&nbsp;Single&nbsp;LedgerDisplay</p><p>•&nbsp; &nbsp;Multi&nbsp;Ledger&nbsp;Display</p><p>•&nbsp; &nbsp;&nbsp;Deleting&nbsp;Ledgers</p><p>•&nbsp; &nbsp;Group&nbsp;Creation</p><p>•&nbsp; &nbsp;Single&nbsp;Group&nbsp;Creation</p><p>•&nbsp; &nbsp;&nbsp;Multiple&nbsp;Group&nbsp;Creation</p><p>• &nbsp;Altering&nbsp;and&nbsp;Display&nbsp;of&nbsp;Groups</p><p>•&nbsp; &nbsp;Group&nbsp;Alteration</p><p>•&nbsp; &nbsp;&nbsp;Single&nbsp;Group&nbsp;Display</p><p>•&nbsp; &nbsp;Multi&nbsp;GrouoDisolav</p></td></tr></tbody></table></figure><figure class=\"table\"><table><tbody><tr><th>Session</th><td>Chapter/ &nbsp;Parts</td><td>Topics&nbsp;Covered</td></tr><tr><th>&nbsp;</th><td>&nbsp;</td><td><p>•&nbsp; &nbsp;&nbsp;Deleting&nbsp;Groups</p><p>•&nbsp; &nbsp;Key&nbsp;Takeaways</p><p>•&nbsp; &nbsp;&nbsp;Shortcut&nbsp;Keys</p><p>•&nbsp; &nbsp;Practice&nbsp;Exercises</p></td></tr><tr><th><p>&nbsp;</p><p>&nbsp;</p><p>Session-3</p></th><td><p>&nbsp;</p><p>&nbsp;</p><p>Chapter3: &nbsp;Fundamentals &nbsp;of</p><p>Inventory&nbsp;Management</p></td><td><p>•&nbsp; &nbsp; &nbsp;Introduction</p><p>•&nbsp; &nbsp; &nbsp;Inventory&nbsp;Management</p><p>•&nbsp; &nbsp;&nbsp;Terms&nbsp;Used in&nbsp;Inventory</p><p>•&nbsp; &nbsp; &nbsp;Management</p><p>•&nbsp; &nbsp; &nbsp;Inventory&nbsp;Valuation</p><p>•&nbsp; &nbsp; &nbsp;Different&nbsp;Types&nbsp;of Inventory</p><p>•&nbsp; &nbsp;&nbsp;Valuation</p><p>•&nbsp; &nbsp; &nbsp;Inventory&nbsp;Management&nbsp;in&nbsp;Tally. ERP</p><p>•&nbsp; &nbsp; &nbsp;9</p><p>•&nbsp; &nbsp; &nbsp;Conclusion</p><p>•&nbsp; &nbsp; &nbsp;Practice&nbsp;Exercise</p></td></tr><tr><th><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-4</p></th><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;4:&nbsp;Stock&nbsp;Keeping</p><p>Units</p></td><td><p>•&nbsp; &nbsp; &nbsp;Introduction</p><p>•&nbsp; &nbsp; &nbsp;Inventory&nbsp;Masters&nbsp;in&nbsp;Tally &nbsp;ERP9</p><p>•&nbsp; &nbsp; &nbsp;Creating Inventory&nbsp;Masters</p><p>•&nbsp; &nbsp; &nbsp;Creation of&nbsp;Stock&nbsp;Group</p><p>•&nbsp; &nbsp; &nbsp;Creation of&nbsp;Unit&nbsp;of&nbsp;Measure</p><p>•&nbsp; &nbsp; &nbsp;Creation of Stock&nbsp;Item</p><p>•&nbsp; &nbsp; &nbsp;Creation of Go down</p><p>•&nbsp; &nbsp; &nbsp;Defining&nbsp;of Stock&nbsp;Opening Balance&nbsp;in</p><p>Tally&nbsp;ERP&nbsp;9</p><p>•&nbsp; &nbsp; &nbsp;Key&nbsp;Takeaways</p><p>•&nbsp; &nbsp; &nbsp;Shortcut&nbsp;Keys</p><p>•&nbsp; &nbsp; &nbsp;Practice&nbsp;Exercises</p></td></tr><tr><th><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-5</p></th><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;5: &nbsp;Recording &nbsp;Day&nbsp;to</p><p>Day&nbsp;Transactions</p></td><td><p>•&nbsp; &nbsp; &nbsp;Introduction</p><p>•&nbsp; &nbsp; &nbsp;Business&nbsp;Transactions</p><p>•&nbsp; &nbsp; &nbsp;Source&nbsp;Document&nbsp;or&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Recording&nbsp;Transactions&nbsp;in&nbsp;Tally. ERP</p><p>9</p><p>•&nbsp; &nbsp;&nbsp;Accounting&nbsp;Vouchers</p><p>•&nbsp; &nbsp; &nbsp;Receipt&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Contra&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Payment&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Purchase&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Sales&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Debit&nbsp;Note&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Credit&nbsp;Note Voucher</p><p>•&nbsp; &nbsp;&nbsp;Journal&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Creation of&nbsp;New&nbsp;Voucher&nbsp;Type</p><p>•&nbsp; &nbsp;&nbsp;Automation&nbsp;of&nbsp;Invoices &nbsp;(Voucher</p><p>Classes)</p><p>•&nbsp; &nbsp; &nbsp;Non-Accounting&nbsp;Vouchers</p></td></tr></tbody></table></figure><figure class=\"table\"><table><tbody><tr><th>Session</th><td>Chapter/ &nbsp;Parts</td><td>Topics&nbsp;Covered</td></tr><tr><th>&nbsp;</th><td>&nbsp;</td><td><p>•&nbsp; &nbsp; &nbsp;Memorandum&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Optional&nbsp;Vouchers</p><p>•&nbsp; &nbsp; &nbsp;Reversing Journal</p><p>•&nbsp; &nbsp; &nbsp;Recording&nbsp;Provisional&nbsp;Entries</p><p>•&nbsp; &nbsp; &nbsp;Recording&nbsp;Inventory&nbsp;Vouchers</p><p>•&nbsp; &nbsp; &nbsp;Receipt&nbsp;&nbsp;Note&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Delivery&nbsp;Note&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Rejection&nbsp;in&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Rejection&nbsp;Out&nbsp;Voucher</p><p>•&nbsp; &nbsp; &nbsp;Stock&nbsp;Journal Voucher</p><p>•&nbsp; &nbsp; &nbsp;Physical&nbsp;Verification&nbsp;of Stocks</p><p>•&nbsp; &nbsp; &nbsp;Conclusion</p><p>•&nbsp; &nbsp; &nbsp;Key&nbsp;Takeaways</p><p>•&nbsp; &nbsp; &nbsp;Shortcut&nbsp;Keys</p><p>•&nbsp; &nbsp; &nbsp;Practice&nbsp;Exercises</p></td></tr><tr><th><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-6</p></th><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;6:&nbsp;Accounts Receivable&nbsp;and&nbsp;Payable Management</p></td><td><p>•&nbsp; &nbsp; &nbsp;Introduction</p><p>•&nbsp; &nbsp;&nbsp;Accounts&nbsp;Payable&nbsp;and&nbsp;Receivable</p><p>•&nbsp; &nbsp; &nbsp;Maintaining &nbsp;Bill-wise &nbsp;Details</p><p>•&nbsp; &nbsp;&nbsp;Activation&nbsp;of&nbsp;Maintaining&nbsp;Bill-wise</p><p>•&nbsp; &nbsp; &nbsp;Details&nbsp;Feature</p><p>•&nbsp; &nbsp; &nbsp;New&nbsp;Reference&nbsp;Against&nbsp;Reference</p><p>•&nbsp; &nbsp;&nbsp;Advance&nbsp;Reference</p><p>•&nbsp; &nbsp; &nbsp;On&nbsp;Account</p><p>•&nbsp; &nbsp; &nbsp;Credit&nbsp;Limit</p><p>•&nbsp; &nbsp;&nbsp;Activate&nbsp;Credit&nbsp;Limit</p><p>•&nbsp; &nbsp;&nbsp;Setting&nbsp;Credit Limits &nbsp;Exceeding</p><p>Credit&nbsp;Limits</p><p>•&nbsp; &nbsp; &nbsp;Exception&nbsp;to Credit&nbsp;Limits</p><p>•&nbsp; &nbsp; &nbsp;Payment&nbsp;Performance&nbsp;of&nbsp;Debtor</p><p>•&nbsp; &nbsp; &nbsp;Changing&nbsp;the&nbsp;Financial&nbsp;Year&nbsp;in</p><p>Tally. ERP &nbsp;9</p><p>•&nbsp; &nbsp; &nbsp;Conclusion</p><p>•&nbsp; &nbsp; &nbsp;Key&nbsp;Takeaways</p><p>•&nbsp; &nbsp; &nbsp;Shortcut&nbsp;Keys</p><p>•&nbsp; &nbsp; &nbsp;Practice&nbsp;Exercises</p></td></tr><tr><th><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session&nbsp;7</p></th><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;7: &nbsp;Banking</p></td><td><p>&nbsp;</p><p>•&nbsp; &nbsp; &nbsp;Introduction</p><p>•&nbsp; &nbsp; &nbsp;Banking&nbsp;Payments</p><p>•&nbsp; &nbsp; &nbsp;Setting&nbsp;up&nbsp;Banking&nbsp;Features</p><p>•&nbsp; &nbsp; &nbsp;Cheque&nbsp;Management</p><p>•&nbsp; &nbsp; &nbsp;Cheque&nbsp;Printing</p><p>•&nbsp; &nbsp; &nbsp;Single&nbsp;Cheque&nbsp;Printing</p><p>•&nbsp; &nbsp; &nbsp;Multi&nbsp;Cheque Prinlin</p><p>•&nbsp; &nbsp; &nbsp;Cheque&nbsp;Register</p><p>•&nbsp; &nbsp; &nbsp;Cancelled&nbsp;Cheque</p><p>•&nbsp; &nbsp; &nbsp;Blank&nbsp;Cheque</p></td></tr></tbody></table></figure><figure class=\"table\"><table><tbody><tr><th>Session</th><td>Chapter/ &nbsp;Parts</td><td>Topics&nbsp;Covered</td></tr><tr><th>&nbsp;</th><td>&nbsp;</td><td>&nbsp;</td></tr><tr><th><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-11</p></th><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Chapter&nbsp;9: &nbsp;MIS &nbsp;Reports</p></td><td><p>•&nbsp; &nbsp; &nbsp;Introduction</p><p>•&nbsp; &nbsp;&nbsp;Advantages&nbsp;of&nbsp;Management</p><p>•&nbsp; &nbsp; &nbsp;Information&nbsp;Systems</p><p>•&nbsp; &nbsp;&nbsp;Types&nbsp;of MIS &nbsp;Reports&nbsp;in&nbsp;Tally. ERP &nbsp;9</p><p>•&nbsp; &nbsp;&nbsp;MIS &nbsp;Reports&nbsp;in&nbsp;Tally.&nbsp;ERP&nbsp;9Trial</p><p>Balance</p><p>•&nbsp; &nbsp; &nbsp;Balance&nbsp;Sheet&nbsp;</p><p>•&nbsp; &nbsp; &nbsp;Profit&nbsp;and&nbsp;Loss&nbsp;Account</p><p>•&nbsp; &nbsp; &nbsp;Cash&nbsp;Flow Statement</p><p>•&nbsp; &nbsp; &nbsp;Funds&nbsp;Flow&nbsp;Statemen</p><p>•&nbsp; &nbsp; &nbsp;Ratio&nbsp;Analysis</p><p>•&nbsp; &nbsp; &nbsp;Books&nbsp;and&nbsp;Accounting&nbsp;Reports</p><p>•&nbsp; &nbsp; &nbsp;Day&nbsp;Book</p><p>•&nbsp; &nbsp; &nbsp;Receipts&nbsp;and&nbsp;Payments</p><p>•&nbsp; &nbsp; &nbsp;Purchase&nbsp;Register</p><p>•&nbsp; &nbsp; &nbsp;Sales&nbsp;Register</p><p>•&nbsp; &nbsp; &nbsp;Bills&nbsp;Receivable &nbsp;and Bills&nbsp;Payable</p><p>•&nbsp; &nbsp; &nbsp;Inventory&nbsp;Reports</p><p>•&nbsp; &nbsp; &nbsp;Stock&nbsp;Summary</p><p>•&nbsp; &nbsp; &nbsp;Stock&nbsp;Transfer</p><p>•&nbsp; &nbsp;&nbsp;Movement&nbsp;Analysis</p></td></tr><tr><th><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Session-12</p></th><td><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>-DO-</p></td><td><p>•&nbsp; &nbsp; &nbsp;Movement&nbsp;Analysis</p><p>•&nbsp; &nbsp;&nbsp;Ageing&nbsp;Analysis</p><p>•&nbsp; &nbsp; &nbsp;Key&nbsp;Takeaways</p><p>•&nbsp; &nbsp; &nbsp;Shortcut&nbsp;Key</p><p>•&nbsp; &nbsp; &nbsp;Precise&nbsp;Exercise</p><p>•&nbsp; &nbsp; &nbsp;Receipts&nbsp;and&nbsp;Payments</p><p>•&nbsp; &nbsp; &nbsp;Purchase&nbsp;Register</p><p>•&nbsp; &nbsp; &nbsp;Sales&nbsp;Register</p><p>•&nbsp; &nbsp; &nbsp;Bills&nbsp;Receivable &nbsp;and Bills&nbsp;Payable</p><p>•&nbsp; &nbsp; &nbsp;Inventory&nbsp;Reports</p><p>•&nbsp; &nbsp; &nbsp;Stock&nbsp;Summary</p><p>•&nbsp; &nbsp; &nbsp;Stock&nbsp;Transfer</p><p>•&nbsp; &nbsp; &nbsp;Movement&nbsp;Analysis</p><p>•&nbsp; &nbsp;&nbsp;Ageing&nbsp;Analysis</p><p>•&nbsp; &nbsp; &nbsp;Key&nbsp;Takeaways</p><p>•&nbsp; &nbsp; &nbsp;Shortcut&nbsp;Keys</p><p>•&nbsp; &nbsp; &nbsp;Practice&nbsp;Exercises</p></td></tr></tbody></table></figure>', 'certificate-course-on-tally-prime-erp', '2023-11-08 18:00:00', 1, 1, NULL, '2023-11-08 21:16:56', '2023-11-13 03:51:08'),
(13, 5, 'Certificate course on Practical Accounting & Finance Integration of IAS, IFRS & AI', '/uploads/thumbnail/1699868767-thumbnail.png', '/uploads/banner/1699868767-banner.png', '<p>🈺প্রতিনিয়ত সকল পেশাতেই আসছে কিছু না কিছু পরিবর্তন। Accounts &amp; Finance সেক্টরে দক্ষ ও Tech-Savvy পেশাজীবিদের চাহিদাও দিন দিন বৃদ্ধি পাচ্ছে, যেখানে একজন প্রফেশনাল-একাউন্টেন্ট ডাটা রেকর্ডিং-এর পাশাপাশি ফাইনেন্সিয়াল স্টেটমেন্ট প্রিপারেশন ও এনালাইসিস, ইনভেস্টমেন্ট এনালাইসিস, ট্রেজারি ম্যানেজমেন্ট, IAS &amp; IFRS এর যথার্থ ব্যবহার, ফরেন এক্সচেঞ্জ ম্যানেজমেন্ট, L/C ম্যানেজমেন্ট এবং 𝑨𝒓𝒕𝒊𝒇𝒊𝒄𝒊𝒂𝒍 𝑰𝒏𝒕𝒆𝒍𝒍𝒊𝒈𝒆𝒏𝒄𝒆 (𝑨𝑰) সর্বোত্তম ব্যবহারের উপর দক্ষতা থাকা জরুরী। Bizz Solutions PLC গত ৬ বছর যাবত এ সেক্টরে দক্ষ প্রফেশনাল তৈরিতে কাজ করছে । তারই অংশ হিসাবে শুরু করতে যাচ্ছে 𝑪𝒆𝒓𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒆 𝑪𝒐𝒖𝒓𝒔𝒆 𝒐𝒏 𝑷𝒓𝒂𝒄𝒕𝒊𝒄𝒂𝒍 𝑨𝒄𝒄𝒐𝒖𝒏𝒕𝒊𝒏𝒈 &amp; 𝑭𝒊𝒏𝒂𝒏𝒄𝒆 𝑰𝒏𝒕𝒆𝒈𝒓𝒂𝒕𝒊𝒐𝒏 𝒐𝒇 𝑰𝑨𝑺, 𝑰𝑭𝑹𝑺 &amp; 𝑨𝑰.</p><p>🔔 Apply Now: https://forms.gle/Zjr8bCANBihtscof7</p><p>🟢 Attractions of the Course:<br>🔸 Course Completion Certificates;<br>🔸 Course Materials &amp; Class Recording;</p><p>🟣 Course Details:<br>🔸 Course Fee: Tk. 10,000;<br>🔸 Early Bird Offer: Tk. 4,000 (First 10 Participants);<br>🔸 No. of Session: 10;<br>🔸 Class Mode: Zoom Online;</p><p>🔴 Resource Person:<br>Mr. Md. Shafiqul Alam LL.B, FCS, FCMA, FCA<br>Managing Partner &amp; CEO,<br>Shafiqul Alam &amp; Co., Chartered Accountants<br>Chairman, Bizz Solutions PLC.</p><p>🔵 বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br>▪ আপডেটেড কোর্স মডিউল।<br>▪ ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।<br>▪ ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন ।<br>▪ জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান।<br>▪ রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।<br>▪ Edubd.Tv তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।<br>▪ বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।<br>▪ এক্সপার্ট রির্সোস পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।<br>▪ প্রশিক্ষকের সাথে প্রতিটি ব্যাচের জন্য ডেডিকেটেড হোয়াটস গ্রুপ।</p><p>🏠 বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: 01755-597770</p>', NULL, 10000, 6000, 10, '20', 'Friday', '2 Hours', 'English and Bangla', 'online', 'admission', '2024-01-05', '2024-03-08', '<p><strong>Cash Controlling</strong><br>● Chart of Account creation<br>● Budgeting<br>● Profit realization<br>● Financial Statement<br>● Cash book maintenance<br>● Bank Reconciliation<br><strong>Advance Level Documentation</strong><br>● Budget and Variances analysis.<br>● Calculation of Depreciation<br>● Reconciliation Journal<br><strong>Management Requirements</strong><br>● MIS report prepared on the basis of Management requirement.<br>● Accounts formulation on real practice.<br>● Financial Statement Preparation of MFG<br>● Subsidiary Ledgers and Special Journals<br>● Cash Internal Controls<br><strong>Course Coverage Area</strong><br>1. Monthly Working Budget Prepare: (H/O Administrative Expenses &amp; Project<br>Overhead, Marketing &amp; Selling Expanse, Financial Expenses, Monthly Construction<br>Working Plan Project Wise, Monthly Land Procurement)<br>2. Fund Management (Cash &amp; Bank) - Order, Calculation, Bill Updating Through<br>Software<br>3. Subsidiary Ledgers and Special Journals<br>4. Cash Internal Controls (Cash Receipts and Cash Disbursements)<br>5. Bank and Cash Reconciliation<br>6. Supplier &amp; Sub-Contractor Ledger Reconciliation<br>7. Weekly Reports Finance &amp; Projects (If Any)<br>8. Coordinate between Management, Supplier &amp; Contractor<br>9. Chart of Account, (simple description of Ledger)<br>10. Income statement, P&amp;L, Financial Statement.<br><strong>Software Skill:</strong><br>1. Tally.ERP9</p>', 'certificate-course-on-practical-accounting-finance-integration-of-ias-ifrs-ai', '2023-11-08 18:00:00', 1, 1, NULL, '2023-11-08 21:36:17', '2023-11-13 03:46:07'),
(14, 5, 'Certificate Course on Essential English Communication for Workplace', '/uploads/thumbnail/1699847762-thumbnail.jpg', NULL, '<p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t39/1/16/1f4e2.png\" alt=\"📢\"> নিজেকে স্মার্ট ভাবছেন<img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tec/1/16/2049.png\" alt=\"⁉\"> Ph: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D8801755597770%26text%3DLink%253A%250Ahttps%253A%252F%252Ffb.me%252F50MvunlaS%250A%250AI%2520saw%2520this%2520on%2520Facebook...%26app%3Dfacebook%26fbclid%3DIwAR2-N2qH52LZTWvxTiYhKiOGp31j-4RejJzzgGBbS9l7u8sefQXnr0KorMg&amp;h=AT2hpb_FOfbQfObE7k15tC4MOqJudjY0DHIv0WzpWlvVE7WMA2Io4UI7y_DTIDQreldGZSTbJNXJ441uj1fOdx3anM28J97pZcfN-sb8_E9FwiS1Eqa-fPnNYseQqryFf2-lWw&amp;__tn__=-UK*F&amp;c[0]=AT3Yrhe2ajkrCNQwO0-l2pGaZaKh5VDwAOcksJCuyji2GDvZc1_cnLCzbVuQMkwMJNXDH7HY7vQ20T1hjY8lDfysGo3lr_shHt_U_krF7XJ_kF1Y_-wUxS0d7vd5pQ-RIJeSGEDA7hKwY3_QKULPNOMhGMONLviHr3w3JfPSCcfD9UVGVpzmnyF3nXZektSNEHBRurmotoHY\">01755-597770</a><br><br>জ্বী! তাহলে অবশ্যই আপনি স্মার্ট। কারন আপনার আত্মবিশ্বাসই আপনার স্মার্টনেস। আর কর্পোরেট বা বিজনেস ওয়ার্ল্ডে আপনাকে স্মার্ট হতে আত্মবিশ্বাসের পাশাপাশি দরকার দক্ষ ইংলিশ কমিউনিকেশন।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t30/1/16/1f514.png\" alt=\"🔔\">আপনার কোম্পানি কি বিশ্বের ব্যবসায়িক ভাষায় ব্যবসা করার জন্য পুরোপুরি প্রস্তুত<img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/2753.png\" alt=\"❓\"><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t30/1/16/1f514.png\" alt=\"🔔\">আপনার কোম্পানির এমপ্লয়িরা কি ব্যবসায়িক ভাষা ইংরেজিতে দক্ষ<img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/2753.png\" alt=\"❓\"><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t30/1/16/1f514.png\" alt=\"🔔\">একজন কর্পোরেট প্রফেশনালস হয়ে উপরের প্রশ্নের উত্তর আপনার জানা আছে কি<img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1/16/2753.png\" alt=\"❓\"><br><br>চিন্তা নেই; কর্পোরেট বা বিজনেস ওয়ার্ল্ডের দরকারি সব ইংলিশ কমিউনিকেশন্স শিখার এই সুযোগে আপনিও ইংরেজিতে দক্ষ হয়ে কর্পোরেট বা বিজনেস প্রফেশনালস ওয়ার্ল্ডে নিজের জায়গা শক্ত করুন। বিজ সল্যুশনস পিএলসি আয়োজিত এই কোর্সে থাকছে আন্তর্জাতিক মানের দক্ষতা সম্পূর্ণ ইংরেজি কোর্স ইনস্ট্রাক্টর।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t51/1/16/1f449.png\" alt=\"👉\">Apply Now: <a href=\"https://forms.gle/6LeuTsz3SckW1gsB6?fbclid=IwAR3XtAbI1b235rFICdFXnruStIAVdYCVjYrMJO3JqwTQScqOlp6Bo1DpeiM\">https://forms.gle/6LeuTsz3SckW1gsB6</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7f/1/16/1f7e5.png\" alt=\"🟥\"> Course Details:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Course Fee: 5000 Tk<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Early bird Offer: 2000 Tk (For First 10 Participants)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Last Date of Admission: October 12, 2023<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Class Start: October 13, 2023 (Every Friday &amp; Saturday)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Class Time: 09.00pm (Zoom Online)<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Number of Session: 10 (2 Hours Each)<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/te/1/16/1f6bb.png\" alt=\"🚻\"> Resource Person:<br>Mr. Zayed Mahmud<br>MBA, Australia<br>IELTS Band Score 8.5<br><br>Ms. Meghdeepa Chowdhury<br>MSc, Sweden<br>IELTS Band Score 8<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t2/1/16/1f7e8.png\" alt=\"🟨\"> বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> আপডেটেড কোর্স মডিউল।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Edubd.Tv তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> এক্সপার্ট রির্সোস পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> প্রশিক্ষকের সাথে প্রতিটি ব্যাচের জন্য ডেডিকেটেড হোয়াটস গ্রুপ।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/1f3e0.png\" alt=\"🏠\"> বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F50MvunlaS%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR0ucFUxpAhE1T03v918QSFYQHhzYokXLcBmw36y-Vt3-RJ9EGk3fQiWBOg\">01755-597770</a></p>', NULL, 5000, 3000, 10, '20 Hours', 'Friday and Saturday', '2 Hours', 'English and Bangla', 'online', 'admission', '2023-12-31', '2024-03-31', '<p><strong>1.Introduction with &nbsp;Grammar Review:</strong><br>1. Welcome speech and introducing each other.<br>2. Grammar review (Tense, Subject-verb agreement,&nbsp;<br>Simple, complex, compound, Phrase &amp; Clause,&nbsp;<br>variation of complex sentences and so on)<br><strong>2. Introduction to the Speaking Module</strong><br>1. Raise awareness of the format of the Speaking in a&nbsp;<br>corporate world.<br>2. Help students develop their lexical resource for&nbsp;<br>typical daily official language.<br>Mr. Zayed Mahmud<br><strong>3. Speaking Band Descriptor</strong><br>Detailed description of the band descriptor for the&nbsp;<br>IELTS (Since the IELTS is standard worldwide, it is&nbsp;<br>important to understand the standard for office&nbsp;<br>personnel)<br><strong>4. Speaking AID</strong><br>1. Identifying the use of linking words and phrases in&nbsp;<br>context.<br>2. Identifying the function of linking words and&nbsp;<br>phrases.<br>3. Practicing Speaking questions, and giving&nbsp;<br>extended answers.<br><strong>5. Speaking with Speaking CUE Card</strong><br>Topic-wise Vocabulary, Linkers for&nbsp;<br>writing/speaking.<br>1. Spot the mistake.<br>2. Brainstorming tenses.<br>3. Using discourse markers to extend responses.<br><strong>6. Drill Regarding the Speaking Fluency</strong><br>1. Re-tell a lecture<br>2. Picture description<br>3. Story completion<br>4. Summary of a lecture<br><strong>7. Effective Communication in the Business and it’s Necessity</strong><br>1. Explore the critical role of effective&nbsp;<br>communication in the business world.<br>2. Develop robust networking strategies to enhance&nbsp;<br>professional relationships.<br>3. Engage in interactive in-person and virtual group&nbsp;<br>discussions and networking exercises to practice&nbsp;<br>newly acquired skills.<br><strong>8. Mastering Negotiation Skills</strong><br>1. Delve into advanced strategies for achieving&nbsp;<br>success in negotiations.<br>2. Participate in dynamic role-play exercises,&nbsp;<br>simulating negotiation scenarios via Zoom or inperson.<br>3. Learn the art of effective communication during&nbsp;<br>negotiations.<br>4. Engage in group discussions and receive&nbsp;<br>constructive feedback on negotiation techniques.<br><strong>9. Telephoning and Guest Entertainment</strong><br>1. Learn essential telephone etiquette and strategies&nbsp;<br>for effective telephoning.<br>2. Gain proficiency in handling challenging phone&nbsp;<br>conversations.<br>3. Participate in engaging role-play exercises&nbsp;<br>involving mock phone calls and guest entertainment&nbsp;<br>scenarios, adaptable to Zoom or in-person formats.<br>4. Explore effective voicemail and email&nbsp;<br>communication strategies through practical exercises&nbsp;<br>and discussions.<br><strong>10. International Meetings and Presentations</strong><br>1. Develop a deep understanding of cross-cultural&nbsp;<br>communication considerations.<br>Learn to navigate language barriers and bridge&nbsp;<br>cultural differences.<br>2. Engage in practical exercises simulating&nbsp;<br>international meetings and presentations, adaptable to&nbsp;<br>Zoom or in-person formats.<br>Master the art of building rapport with international&nbsp;<br>colleagues.<br>3. Participate in group discussions, receive feedback,&nbsp;<br>and wrap up the course with a focus on international&nbsp;<br>communication proficiency.</p>', 'certificate-course-on-essential-english-communication-for-workplace', '2023-11-12 18:00:00', 1, NULL, NULL, '2023-11-12 21:56:02', '2023-11-12 21:56:02'),
(15, 5, 'Certificate Course on Personal & Corporate TAX Return', '/uploads/thumbnail/1699869414-thumbnail.png', '/uploads/banner/1699869414-banner.png', '<p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t39/1/16/1f4e2.png\" alt=\"📢\">স্মার্ট বাংলাদেশে ট্যাক্স রিটার্ন হয় যখন অনলাইনে তখন ফাইল তৈরির কাজটা শিখে নেয়াই শ্রেয়! PH: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F1HxPRZi2q%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR0vZIiGou8mOCyY7M_DCWxRs8M4aYKzr-M0SirePjcU9NaiNBYSr045LIc\">01755-597770</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t3e/1/16/1f50a.png\" alt=\"🔊\">বাংলাদেশ সরকারের জাতীয় রাজস্ব আয়ের অধিকাংশ আসে আয়কর এবং মূল্য সংযোজন কর থেকে তাই করদাতার সংখ্যা বাড়ানোর পাশাপাশি করদাতা শনাক্তকরণ নম্বরধারীদের (টিআইএন) আয়কর রিটার্ন দাখিলে বাধ্যবাধকতা রাখা হয়েছে ২০২২-২৩ অর্থবছরের বাজেটে। ব্যক্তিগত ও কোম্পানির আয়কর রিটার্ন দাখিল করতে জানতে হবে \'Income Tax Return Filing\' এর বিস্তারিত।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t95/1/16/1f508.png\" alt=\"🔈\">এখন থেকে স্বল্প সময় ও শ্রম বিনিয়োগে ট্যাক্স ফাইল তৈরির কাজটা সহজেই আয়ত্তে আনুন আমাদের অভিজ্ঞ এক্সপার্টদের সাথে। নিজের অথবা কোম্পানির ট্যাক্স ফাইল তৈরি হবে এবার আপনার মাধ্যমে এবং সম্পূর্ণ ট্যাক্স ফাইল নিজেই তৈরি করে সাবমিট করতে পারবেন অনলাইনে। দীর্ঘ ১৫/ ২০ বছরেরও বেশি সময় ধরে ট্যাক্স ফাইল পুরন করার বাস্তব অভিজ্ঞতা সম্পূর্ণ এক্সপার্টগন হাতে কলমে ট্যাক্স ফাইল পুরন করার পদ্ধতি শিখাবে। তাই ট্যাক্স ফাইল তৈরি করুন আপনার মত করে, আর সাবমিট করুন অনলাইনে। এখনই জয়েন করুন বিজ সলিউশনস কর্তৃক আয়োজিত Personal &amp; Corporate Tax Return (How to Fill the Return Form) কোর্সে ।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7f/1/16/1f7e5.png\" alt=\"🟥\">Apply Now: <a href=\"https://forms.gle/S9ZLN35mCyhy3qHr8?fbclid=IwAR2NG5384ISMLSk0TILuuRq7mlnwwsvSbCcAMPlCdqOPVuKzhBtRxgCMaoo\">https://forms.gle/S9ZLN35mCyhy3qHr8</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1/16/1f536.png\" alt=\"🔶\"> Attractions of the Course<br>- Excel Files for Practice<br>- Course Completion Certificates<br>- Course Materials &amp; Class Recording<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t83/1/16/1f7e9.png\" alt=\"🟩\">Course Details:<br>- Course Fee: Tk. 5,000<br>- Early Bird Offer: Tk. 2,500 (For first 10 participants)<br>- Course Starting Date: Thursday, October 26, 2023<br>- Day: Three Days (Thursday, Friday &amp; Saturday) In a Week<br>- Time: 08:00 PM - 10:00 PM<br>- Course Mode: Zoom Online<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tab/1/16/1f7ea.png\" alt=\"🟪\">বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\">আপডেটেড কোর্স মডিউল।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\">ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\">ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\">জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\">রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\">Edubd.Tv তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\">বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\">এক্সপার্ট রির্সোস পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\">প্রশিক্ষকের সাথে প্রতিটি ব্যাচের জন্য ডেডিকেটেড হোয়াটস গ্রুপ।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/1f3e0.png\" alt=\"🏠\">বিস্তারিত: <a href=\"https://web.facebook.com/bizzsolutions?__cft__[0]=AZXRuqVLGskSSL0B_JfdpdMVrBoxCWViHnRovzXq2r1ypLDQQxgbap7A0z0J31H1pyEkhOX4_l_wGes2A_EUJnFemJHu8Df2ID25BrqXsjk0f_o_xi5fkVgwck5_HH2GFfLsuejmxV6CdXVqwYiAc5yBu-iF3NB3I60if9GgffPBRb_MsbsPT9K5PkBtzl5Db-E&amp;__tn__=-]K*F\"><strong>Bizz Solutions PLC</strong></a>, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F1HxPRZi2q%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR2L6e1QRuPAIQXW7gxH3Y0U19FjT5oDeJQJHlm0bfoftzEgj08SZWmGP3A\">01755-597770</a></p>', NULL, 5000, 2500, 6, '12', 'Thursday, Friday & Saturday', '2 Hours', 'English and Bangla', 'online', 'admission', '2023-12-31', '2024-03-30', '<p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t2/1/16/1f7e8.png\" alt=\"🟨\">এই কোর্সটি শেষ করার পর আপনি-<br>- নিজের আয়কর রিটার্ন নিজে দাখিল করতে পারবেন;<br>- কোম্পানির আয়কর রিটার্ন নিজে দাখিল করতে পারবেন।</p>', 'certificate-course-on-personal-corporate-tax-return', '2023-11-12 18:00:00', 1, 1, NULL, '2023-11-12 22:04:34', '2023-11-13 03:56:54'),
(16, 5, 'Certificate Course on Global Supply Chain Strategy and Operations', '/uploads/thumbnail/1699932941-thumbnail.jpg', NULL, '<p>চতুর্থ শিল্প বিপ্লবের যুগে Supply Chain প্রসেস এক্সপার্ট হয়ে ক্যারিয়ারে এগিয়ে থাকুন !! বিস্তারিতঃ <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F1yzS1BiNI%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR19GZ9_71bZ_NDU9avZtx-PSxtiwh5R_jzgWRAaFK1sX-T9lSNBCAbcKv4\">01755-597770</a><br><br>বাংলাদেশ সহ সারা বিশ্বে সরকারি ও বেসরকারি প্রতিষ্ঠান এবং ইন্ডাস্ট্রি গুলোতে লেগেছে শিল্প বিপ্লবের ছোঁয়া। সেজন্য বাংলাদেশের গুরুত্বপূর্ণ সেক্টর গার্মেন্টস থেকে শুরু করে টেক ইন্ডাস্ট্রি সহ সকল ক্ষেত্রে এখন সাপ্লাই চেইন ম্যানেজমেন্ট এর প্রয়োজনীয়তা বেড়ে যাওয়ায় এই সেক্টরে ক্যরিয়ার গড়তে ইচ্ছুক একজন সাপ্লাই চেইন এক্সপার্ট এর চাহিদা দেশীয় ও বহুজাতিক প্রতিষ্ঠানগুলোতে দ্রুত গতিতে বেড়েই চলছে। তাই Bizz Solutions PLC আয়োজন করতে যাচ্ছে Certificate Course on Global Supply Chain Strategy and Operations.<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1/16/1f534.png\" alt=\"🔴\"> Appy Now: <a href=\"https://forms.gle/nYnQR9Ap5Ya2B16N7?fbclid=IwAR27qAssv-BlAdBGdQ5AlTNORlXIbsYcOOjNHJoqFrV0vQyw3nxo3RWMc1U\">https://forms.gle/nYnQR9Ap5Ya2B16N7</a><br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/te/1/16/26ab.png\" alt=\"⚫\"> এই কোর্সে আপনি যা যা শিখবেন ??<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Enhance supply chain skills.<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\">Optimize operations and reduce costs.<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Network with industry experts.<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Stay updated on trends and tech.<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Make strategic decisions confidently.<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Navigate international markets effectively.<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Mitigate risks for a resilient supply chain.<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Implement sustainable practices.<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Earn a prestigious certification.<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/16/1f538.png\" alt=\"🔸\"> Increase career opportunities.<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t7d/1/16/1f7e3.png\" alt=\"🟣\"> Resource Person:<br>MOHAMMED ABDUL AWAL ‍SCM<br>General Manager &amp; Head of Integrated Logistics Solutions<br>STEP ONE GROUP<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tfa/1/16/1f7e0.png\" alt=\"🟠\"> Course Details:<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1/16/1f539.png\" alt=\"🔹\"> কোর্স ফি: ১০,০০০ টাকা;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1/16/1f539.png\" alt=\"🔹\"> আর্লি বার্ড অফার: ৪,০০০ টাকা (প্রথম ১০ জনের জন্য);<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1/16/1f539.png\" alt=\"🔹\"> ভর্তির শেষ সময়: ১৭ই আগস্ট, ২০২৩<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1/16/1f539.png\" alt=\"🔹\"> কোর্স শুরু: ১৮ই সেপ্টেম্বর, ২০২৩ (ক্লাস প্রতি শুক্রবার ও মঙ্গলবার);<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1/16/1f539.png\" alt=\"🔹\"> ক্লাসের সময়: রাত ৮:০০ টা থেকে ১০:০০ টা;<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1/16/1f539.png\" alt=\"🔹\"> সেশন সংখ্যা: ১০ টি (২ ঘণ্টা প্রতি সেশন);<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tac/1/16/1f4cc.png\" alt=\"📌\"> বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> আপডেটেড কোর্স মডিউল।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> Edubd.Tv তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।<br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1/16/2705.png\" alt=\"✅\"> এক্সপার্ট রির্সোস পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।<br><br><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1/16/1f4ac.png\" alt=\"💬\"> বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D8801755597770%26text%3DLink%253A%250Ahttps%253A%252F%252Ffb.me%252F1yzS1BiNI%250A%250AI%2520saw%2520this%2520on%2520Facebook...%26app%3Dfacebook%26fbclid%3DIwAR2ulbkQt-XkLvB0iwvewGy6TdTBQsqOkT2bh9UBIYDpe1IvOf4iERDlXec&amp;h=AT1tuYYcnVRGc6mWVy7ZB-G1WR_CAwr_V3zVpHljSe5xo1N5rlKG3-q0_vAd3JNwdzdFrGG4yaP0_IPMPZFMLIkwH32w2aNrH13dkoYMtmljhIhgzYLEGBCextKfmZFu4dKfZg&amp;__tn__=-UK*F\">01755-597770</a> (Call/ WhatsApp)&nbsp;</p>', NULL, 10000, 6000, 10, '20 Hours', 'Friday & Tuesday', '2 Hours', 'English and Bangla', 'online', 'admission', '2023-12-31', '2024-03-31', '<p><strong>1: Fundamentals of Supply Chain Management and the Era of Network Competition&nbsp;</strong><br>● Introduction to Supply Chain Management (SCM)&nbsp;<br>● Key components of a supply chain&nbsp;<br>● Supply Chain and Customer value<br>● Supply chain and Competitive strategy&nbsp;<br>● Overview of Supply Chain and Logistics processes and activities Session&nbsp;<br><strong>2: Operations Management&nbsp;</strong><br>● Managing the complexity in the supply chain<br>● Operations strategy and its alignment with business goals&nbsp;<br>● Process analysis and improvement techniques&nbsp;<br>● Lean and Six Sigma principles in supply chain operations&nbsp;<br>● Quality management in operations Session&nbsp;<br><strong>3: Planning for Demand and Inventory – matching Demand and Supply&nbsp;</strong><br>● Importance of demand forecasting in SCM&nbsp;<br>● Forecasting methods and techniques&nbsp;<br>● Inventory management and its significance&nbsp;<br>● Inventory control models (EOQ, Safety Stock, etc.)&nbsp;<br>● Managing demand variability and safety stock optimization Session&nbsp;<br><strong>4: Sourcing Strategy and Procurement Management&nbsp;</strong><br>● Role of procurement in supply chain performance&nbsp;<br>● Supplier selection and evaluation&nbsp;<br>● Contract management and negotiations&nbsp;<br>● Supplier relationship management (SRM)&nbsp;<br>● Ethical and sustainable procurement practices Session&nbsp;<br><strong>5: Supply Networks Management – the synchronous supply chain</strong><br>● Understanding supply networks and their complexities&nbsp;<br>● Designing and optimizing supply chain networks&nbsp;<br>Certificate Course on Global Supply Chain Strategy and Operations<br>No. of Session: 10 Session<br>● Distribution strategies and channel management&nbsp;<br>● Collaborative planning, forecasting, and replenishment (CPFR)&nbsp;<br>● Managing supply chain disruptions and risks Session&nbsp;<br><strong>6: Green Logistics and Transport Management&nbsp;</strong><br>● Introduction to green logistics and sustainable supply chains&nbsp;<br>● Environmental impacts of transportation&nbsp;<br>● Strategies for reducing carbon footprint in logistics&nbsp;<br>● Alternative transportation modes (rail, sea, air) and their benefits&nbsp;<br>● Green initiatives and certifications in logistics Session<br><strong>7: Warehousing and Distribution Management&nbsp;</strong><br>● Role of warehousing in the supply chain&nbsp;<br>● Warehouse design and layout optimization&nbsp;<br>● Order fulfilment and distribution processes&nbsp;<br>● Cross-docking and order picking strategies&nbsp;<br>● Warehouse technology and automation Session&nbsp;<br><strong>8: Global Supply Chain Management – managing risks and achieving resilience&nbsp;</strong><br>● Challenges and opportunities in managing global supply chains&nbsp;<br>● Cross-cultural considerations in international SCM&nbsp;<br>● Global sourcing and supplier risk assessment&nbsp;<br>● Managing customs, tariffs, and trade regulations&nbsp;<br>● Collaborative logistics in global supply chains Session&nbsp;<br><strong>9: Supply Chain Analytics and Measuring Supply Chain Cost and Performance&nbsp;</strong><br>● Importance of data analytics in SCM decision-making&nbsp;<br>● Key performance indicators (KPIs) for supply chain performance&nbsp;<br>● Using technology for supply chain visibility and traceability&nbsp;<br>● Demand-driven supply chain management&nbsp;<br>● Continuous improvement and best practices Session<br>10: The Supply Chain of tomorrow - Innovations and Emerging trends&nbsp;<br>● Emerging technologies in SCM (IoT, blockchain, AI, etc.)&nbsp;<br>● Industry 4.0 and its impact on supply chains&nbsp;<br>● Sustainable supply chain initiatives and circular economy&nbsp;<br>● Anticipating future supply chain challenges and opportunities&nbsp;<br>● Creating a roadmap for continuous learning and improvement in SCM</p>', 'certificate-course-on-global-supply-chain-strategy-and-operations', '2023-11-13 18:00:00', 1, NULL, NULL, '2023-11-13 21:35:41', '2023-11-13 21:35:41');

-- --------------------------------------------------------

--
-- Table structure for table `course_reviews`
--

CREATE TABLE `course_reviews` (
  `id` bigint UNSIGNED NOT NULL,
  `course_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `published_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `curriculum`
--

CREATE TABLE `curriculum` (
  `id` bigint UNSIGNED NOT NULL,
  `course_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `curriculum`
--

INSERT INTO `curriculum` (`id`, `course_id`, `name`, `description`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'VAT Management', '<p><strong>Module-01</strong></p><p>&nbsp;Foundation A short history of VAT in Bangladesh Future Prospect of VAT Career How to be prepared for the VAT career How to acquire the required skills to be a VAT professional? How to use the course materials properly?</p><p><strong>Module-02</strong></p><p>&nbsp;VAT Knowledge What is VAT? Meaning of VAT to the Consumers &amp; Business What is VAT CYCLE? How to work VAT Cycle Different VAT rates and features of Standard rate How to determine the VAT rate for any product and service?&nbsp;</p><p><strong>Module-03&nbsp;</strong></p><p>VAT Registration When is VAT Registration mandatory? Online VAT Registration procedure Documents to be attached for registration Awareness when filling up the VAT registration form What have to do after taking VAT registration</p><p><strong>Module-04&nbsp;</strong></p><p>VAT Practice &amp; Compliance VAT Books of Accounts VAT Documentation &amp; VAT Invoice VAT challan require to the business Required activities of VAT to the Business VAT Rebate Mechanism, Eligibility, Adjustment procedure&nbsp;</p><p><strong>Module-05&nbsp;</strong></p><p>Input-Output Coefficient HS Code Bill of Entry When to file input-output coefficient Input-Output Coefficient details Preparation of input-output coefficient&nbsp;</p><p><strong>Module-06&nbsp;</strong></p><p>VDS VDS Mechanism Laws &amp; Rules regarding VDS When to deduct VAT at source When VDS is not applicable Submission of VDS to govt exchequer Penalty where failure to VDS Preparation of TR Challan</p><p><strong>Module-07</strong></p><p>&nbsp;VAT Return Online and Manual VAT Return VAT Return Subform AT Adjustment Penalty and fine</p>', '2023-09-06 04:31:07', '2023-09-06 04:30:01', '2023-09-06 04:31:07'),
(2, 1, 'Analysis of Financial Statements & Implementation of Budgetary Control (আর্থিক বিবৃতি বিশ্লেষণ এবং বাজেট ব্যবস্থাপনা বাস্তবায়ন)।', '<p><strong>Class 1:</strong> Basics of Financial Statement Analysis ● Importance and objectives of financial statement analysis. ● Understanding the key components of financial statements: Income Statement, Balance Sheet, and Cash Flow Statement. ● Analyzing financial ratios for assessment: liquidity, profitability, efficiency, and solvency ratios. ● Conducting trend analysis and interpreting common-size financial statements.&nbsp;</p><p><strong>Class 2:</strong> Introduction to Budget &amp; Budgetary Control ● Overview of budgeting and its significance in financial planning and control. ● Different types of budgets: operating budget, capital budget, cash budget, etc. ● Step-by-step budgeting process, from data collection to finalizing the budget. ● Implementing budgetary control and its role in performance management.&nbsp;</p><p><strong>Class 3:</strong> Practical Excel Format of Master Budget &amp; Annual Business Plan (ABP) ● Building an Excel-based master budget integrating various functional budgets. ● Creating detailed sales forecasts, production plans, and expense budgets. ● Developing an Annual Business Plan (ABP) aligned with organizational goals. ● Using Excel for financial modeling and scenario analysis.&nbsp;</p><p><strong>Class 4:</strong> Forecasted Income Statement and Balance Sheet ● Understanding the importance of forecasting in financial planning. ● Forecasting sales, revenues, and expenses for the budgeted period. ● Estimating assets, liabilities, and equity to create the forecasted Balance Sheet. ● Analyzing the impact of forecasting on financial decision-making.&nbsp;</p><p><strong>Class 5:</strong> Ratio &amp; Z-score Analysis of Forecasted Financial Statements ● Evaluating financial health through ratio analysis. ● Calculating and interpreting liquidity, profitability, and solvency ratios. ● Assessing credit risk using the Z-score model. ● Identifying potential areas for improvement based on ratio analysis.&nbsp;</p><p><strong>Class 6:</strong> Management Information System (MIS) Format for Decision Making ● Understanding the role of MIS in management decision-making. ● Designing and developing MIS reports for financial analysis and control. ● Using MIS for monitoring budgetary performance and variance analysis. ● Leveraging technology for efficient MIS reporting.&nbsp;</p><p><strong>Class 7:</strong> Financial Performance Evaluation and Variance Analysis ● Analyzing actual financial performance against budgets and forecasts. ● Identifying causes of budget variances and their implications. ● Developing corrective action plans based on variance analysis. ● Conducting sensitivity analysis to assess the impact of changing variables.&nbsp;</p><p><strong>Class 8: </strong>Capital Budgeting and Investment Analysis ● Importance of capital budgeting in long-term decision-making. ● Evaluating investment opportunities using Net Present Value (NPV) and Internal Rate of Return (IRR). ● Understanding payback period and discounted payback period methods. ● Assessing risk in capital investment decisions.&nbsp;</p><p><strong>Class 9:</strong> Integrated Financial Planning and Forecasting ● Integrating financial analysis, budgeting, and forecasting for effective planning. ● Aligning budgetary control and performance measurement with strategic objectives. ● Using rolling forecasts and continuous planning to adapt to changing business conditions. ● Case studies on integrating financial planning in real-world scenarios.&nbsp;</p><p><strong>Class 10:</strong> Course Review and Practical Application ● Recap of key concepts and techniques covered in the course. ● Presenting a comprehensive financial analysis and budgeting plan. ● Hands-on exercises and simulations for practical application. ● Q&amp;A session to address any remaining doubts or inquiries. THE END!</p>', NULL, '2023-09-06 04:30:59', '2023-09-06 04:30:59'),
(3, 4, 'VAT Management', '<p><strong>Module-01</strong></p><p>&nbsp;Foundation A short history of VAT in Bangladesh Future Prospect of VAT Career How to be prepared for the VAT career How to acquire the required skills to be a VAT professional? How to use the course materials properly?</p><p><strong>Module-02</strong></p><p>&nbsp;VAT Knowledge What is VAT? Meaning of VAT to the Consumers &amp; Business What is VAT CYCLE? How to work VAT Cycle Different VAT rates and features of Standard rate How to determine the VAT rate for any product and service?&nbsp;</p><p><strong>Module-03&nbsp;</strong></p><p>VAT Registration When is VAT Registration mandatory? Online VAT Registration procedure Documents to be attached for registration Awareness when filling up the VAT registration form What have to do after taking VAT registration</p><p><strong>Module-04&nbsp;</strong></p><p>VAT Practice &amp; Compliance VAT Books of Accounts VAT Documentation &amp; VAT Invoice VAT challan require to the business Required activities of VAT to the Business VAT Rebate Mechanism, Eligibility, Adjustment procedure&nbsp;</p><p><strong>Module-05&nbsp;</strong></p><p>Input-Output Coefficient HS Code Bill of Entry When to file input-output coefficient Input-Output Coefficient details Preparation of input-output coefficient&nbsp;</p><p><strong>Module-06&nbsp;</strong></p><p>VDS VDS Mechanism Laws &amp; Rules regarding VDS When to deduct VAT at source When VDS is not applicable Submission of VDS to govt exchequer Penalty where failure to VDS Preparation of TR Challan</p><p><strong>Module-07</strong></p><p>&nbsp;VAT Return Online and Manual VAT Return VAT Return Subform AT Adjustment Penalty and fine</p>', NULL, '2023-09-06 04:32:14', '2023-09-06 04:32:14'),
(4, 4, 'Income Tax Management', '<p><strong>Module-01&nbsp;</strong></p><p>Tax management in Bangladesh Difference between direct tax and indirect tax Income Tax Authorities Difference between income year and assessment year Tax Rate for Individual &amp; Company&nbsp;</p><p><strong>Module-02&nbsp;</strong></p><p>Tax calculation from different heads of Income Heads of Income Calculation of income under various heads of income&nbsp;</p><p><strong>Module-03&nbsp;</strong></p><p>Introduction to Individual income tax When return submission is mandatory When to submit income tax return Where to raise income tax return Investment tax rebate mechanism Allowable investment&nbsp;</p><p><strong>Module-04&nbsp;</strong></p><p>Preparation of Individual Tax return file Preparation of income tax based on actual scenario Awareness when preparing the tax return&nbsp;</p><p><strong>Module-05</strong></p><p>Introduction to Corporate tax Introduction to Corporate tax Understanding of Audited Financial Statement Preparation of the income tax return for a company Company tax assessment</p>', '2023-09-06 21:38:51', '2023-09-06 04:32:30', '2023-09-06 21:38:51'),
(5, 4, 'Income Tax Management', '<p><strong>Module-01&nbsp;</strong></p><p>Tax management in Bangladesh Difference between direct tax and indirect tax Income Tax Authorities Difference between income year and assessment year Tax Rate for Individual &amp; Company&nbsp;</p><p><strong>Module-02&nbsp;</strong></p><p>Tax calculation from different heads of Income Heads of Income Calculation of income under various heads of income&nbsp;</p><p><strong>Module-03&nbsp;</strong></p><p>Introduction to Individual income tax When return submission is mandatory When to submit income tax return Where to raise income tax return Investment tax rebate mechanism Allowable investment&nbsp;</p><p><strong>Module-04&nbsp;</strong></p><p>Preparation of Individual Tax return file Preparation of income tax based on actual scenario Awareness when preparing the tax return&nbsp;</p><p><strong>Module-05</strong></p><p>Introduction to Corporate tax Introduction to Corporate tax Understanding of Audited Financial Statement Preparation of the income tax return for a company Company tax assessment</p><p>&nbsp;</p>', NULL, '2023-09-06 21:35:40', '2023-09-06 21:38:45'),
(6, 1, 'Test', '<p>Test 2</p>', '2023-10-23 23:09:50', '2023-10-23 23:09:43', '2023-10-23 23:09:50');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` bigint UNSIGNED NOT NULL,
  `question` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `answers` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `industries`
--

CREATE TABLE `industries` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_by` int DEFAULT NULL,
  `image_link` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `industries`
--

INSERT INTO `industries` (`id`, `name`, `slug`, `order_by`, `image_link`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Software', '84616c4a5ac3786f', 1, '/uploads/industries/1693630795-industry.png', NULL, '2023-09-01 22:59:55', '2023-09-01 23:01:49'),
(2, 'Fintech', '833b351d8794b89a', 2, '/uploads/industries/1693630818-industry.png', NULL, '2023-09-01 23:00:18', '2023-09-01 23:00:18'),
(3, 'Health Care', '4a6ae2cdfb926f47', 3, '/uploads/industries/1693630855-industry.png', NULL, '2023-09-01 23:00:55', '2023-09-01 23:00:55'),
(4, 'Data Mining', '4a5ee303a8cb1de5', 4, '/uploads/industries/1693630868-industry.png', NULL, '2023-09-01 23:01:08', '2023-09-01 23:01:08'),
(5, 'Education', '12c0cac9f709699e', 5, '/uploads/industries/1698132886-industry.png', NULL, '2023-09-01 23:01:20', '2023-10-24 01:34:46'),
(6, 'SME Business', '8bb7fa8caeca514e', 6, '/uploads/industries/1698132962-industry.png', NULL, '2023-10-24 01:36:02', '2023-10-24 01:36:02'),
(7, 'RMG Sector', '9e62c733e5dce342', 7, '/uploads/industries/1698132981-industry.png', NULL, '2023-10-24 01:36:21', '2023-10-24 01:36:21'),
(8, 'AGRO', '8d16640683c27053', 8, '/uploads/industries/1698133005-industry.png', NULL, '2023-10-24 01:36:45', '2023-10-24 01:36:45'),
(9, 'Startup', '94cb6157e46589f1', 8, '/uploads/industries/1698133033-industry.png', NULL, '2023-10-24 01:37:13', '2023-10-24 01:37:13'),
(10, 'Enterprise ERP', '83482d91a4dbf103', 9, '/uploads/industries/1698133310-industry.png', NULL, '2023-10-24 01:41:50', '2023-10-24 01:41:50'),
(11, 'Career', 'b9ca41aa381ea06b', 11, '/uploads/industries/1698133394-industry.png', NULL, '2023-10-24 01:43:14', '2023-10-24 01:43:14'),
(12, 'Training', 'd4243c911363565f', 12, '/uploads/industries/1698133415-industry.png', NULL, '2023-10-24 01:43:35', '2023-11-05 22:58:38');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_08_23_042853_create_permission_tables', 1),
(6, '2023_08_27_044622_create_abouts_table', 2),
(7, '2023_08_27_044758_create_our_managements_table', 2),
(8, '2023_08_27_044806_create_our_teams_table', 2),
(9, '2023_08_27_044827_create_case_studies_table', 2),
(10, '2023_08_27_044912_create_blogs_table', 2),
(11, '2023_08_27_044926_create_testimonials_table', 2),
(12, '2023_08_27_044941_create_our_clients_table', 2),
(13, '2023_08_27_044957_create_services_table', 2),
(14, '2023_08_27_045008_create_products_table', 2),
(15, '2023_08_27_045113_create_courses_table', 3),
(16, '2023_08_27_045130_create_curriculum_table', 3),
(17, '2023_08_27_045155_create_course_reviews_table', 3),
(18, '2023_08_27_045213_create_subscribers_table', 3),
(19, '2023_08_27_045235_create_contact_messages_table', 3),
(20, '2023_08_27_065919_create_faqs_table', 4),
(21, '2017_08_24_000000_create_settings_table', 5),
(22, '2023_08_28_043553_add_abouts_column_users_table', 6),
(23, '2023_08_31_044246_create_technology_table', 7),
(24, '2023_08_31_044425_create_industries_table', 7),
(25, '2023_09_04_040740_add_slug_in_our_teams_table', 8),
(26, '2023_09_04_090654_create_partner_table', 9),
(27, '2023_09_04_095644_add_meta_columns_in_services_table', 10),
(28, '2023_09_07_102613_create_pages_table', 11),
(29, '2023_09_10_064752_add_tag_column_in_blogs_table', 12),
(30, '2023_09_12_041307_add_icons_in_services_table', 13),
(31, '2023_10_31_061557_create_schedules_table', 14);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `our_clients`
--

CREATE TABLE `our_clients` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `index_of` int NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image_link` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `our_clients`
--

INSERT INTO `our_clients` (`id`, `name`, `index_of`, `description`, `image_link`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Client-1', 1, 'Client-1', '/uploads/clients/1698140983-client.png', 1, 1, NULL, '2023-09-04 00:28:14', '2023-10-24 03:49:43'),
(2, 'Client-2', 2, NULL, '/uploads/clients/1698141014-client.png', 1, 1, NULL, '2023-09-04 00:32:04', '2023-10-24 03:50:14'),
(3, 'Client-3', 3, NULL, '/uploads/clients/1698141022-client.png', 1, 1, NULL, '2023-09-04 00:32:27', '2023-10-24 03:50:22'),
(4, 'Client-4', 4, NULL, '/uploads/clients/1698141031-client.png', 1, 1, NULL, '2023-10-24 01:10:43', '2023-10-24 03:50:31'),
(5, 'Client-5', 5, NULL, '/uploads/clients/1698141040-client.png', 1, 1, NULL, '2023-10-24 01:10:57', '2023-10-24 03:50:40'),
(6, 'Client-6', 6, NULL, '/uploads/clients/1698141047-client.png', 1, 1, NULL, '2023-10-24 01:11:15', '2023-10-24 03:50:47'),
(7, 'Client-7', 7, NULL, '/uploads/clients/1698141059-client.png', 1, 1, NULL, '2023-10-24 01:11:31', '2023-10-24 03:50:59'),
(8, 'Client-8', 8, NULL, '/uploads/clients/1698141078-client.png', 1, 1, NULL, '2023-10-24 01:11:44', '2023-10-24 03:51:18'),
(9, 'Client-9', 9, NULL, '/uploads/clients/1698141095-client.png', 1, 1, NULL, '2023-10-24 01:11:54', '2023-10-24 03:51:35'),
(10, 'Client-10', 10, NULL, '/uploads/clients/1698141115-client.png', 1, 1, NULL, '2023-10-24 01:13:26', '2023-10-24 03:51:55'),
(11, 'Client-11', 11, NULL, '/uploads/clients/1698141126-client.png', 1, 1, NULL, '2023-10-24 01:13:37', '2023-10-24 03:52:06'),
(12, 'Client-12', 13, NULL, '/uploads/clients/1698141138-client.png', 1, 1, NULL, '2023-10-24 01:14:00', '2023-10-24 03:52:18'),
(13, 'Client-14', 14, NULL, '/uploads/clients/1698141160-client.png', 1, 1, NULL, '2023-10-24 01:14:20', '2023-10-24 03:52:40'),
(14, 'Client-13', 1, NULL, '/uploads/clients/1698140991-client.png', 1, 1, NULL, '2023-10-24 01:14:46', '2023-10-24 03:49:51'),
(15, 'Client-15', 15, NULL, '/uploads/clients/1698141180-client.png', 1, NULL, NULL, '2023-10-24 03:53:00', '2023-10-24 03:53:00'),
(16, 'Client-16', 16, NULL, '/uploads/clients/1698141191-client.png', 1, NULL, NULL, '2023-10-24 03:53:11', '2023-10-24 03:53:11'),
(17, 'Kallol Group of Companies', 1, NULL, '/uploads/clients/1698728980-client.png', 1, NULL, NULL, '2023-10-30 23:09:40', '2023-10-30 23:09:40');

-- --------------------------------------------------------

--
-- Table structure for table `our_managements`
--

CREATE TABLE `our_managements` (
  `id` bigint UNSIGNED NOT NULL,
  `index_of` int NOT NULL,
  `type` enum('management','hod') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `headshot` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `biography` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `about` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkedin` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `our_managements`
--

INSERT INTO `our_managements` (`id`, `index_of`, `type`, `name`, `designation`, `company`, `headshot`, `biography`, `about`, `linkedin`, `facebook`, `website`, `youtube`, `twitter`, `slug`, `avatar`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'management', 'Mohammed Ibrahim', 'MD & CEO', 'BIzz Solutions PLC', 'N/A', 'Total Experience 35+ years', 'Mohammed Ibrahim is as a successful entrepreneur with a spend of more than 35+ years Presently he is the Honorable Managing Director and CEO of Bizz Solutions Ltd. and Chairman of Super Star Group. His entrepreneurship career is full of diversity including Electrical & Electronics Business, Accessories Business, Engineering Business, Renewable Energy Business, real estate, etc. He has a track record of Innovation in his Businesses resulting in success which sometimes seemed to many as much different than a usual course of Operation. But, over time it proved to be genuine and became a new standard.', '#', '#', '#', '#', '#', 'b7a0fff36d353e00', '/uploads/management/1694427958-avatar.png', 1, 1, NULL, '2023-09-03 04:53:40', '2023-09-19 01:02:09'),
(2, 3, 'management', 'Md. Shafiqul Alam', 'CHAIRMAN', 'BIzz Solutions PLC', NULL, 'Total Experience 20+ years', 'Md. Shafiqul Alam LLB, FCS, FCMA, FCA is an accomplished finance Professional with over 20+ years of experience in different industries in senior positions. Presently he is the Honorable Director of Bizz Solutions Ltd. and before that he was Group Chief Financial Officer (GCFO) and Company Secretary of Super Star Group, the leading electrical and electronics manufacturing company in the country.', NULL, NULL, NULL, NULL, NULL, 'f913290c0e8c3d52', '/uploads/management/1693799976-avatar.png', 1, 1, NULL, '2023-09-03 21:59:36', '2023-09-19 01:03:32'),
(3, 2, 'management', 'Mohammad Harun Ar Rashid', 'DIRECTOR', 'Bizz Solutions PLC', NULL, 'Total Experience 21+ years', 'Mohammad Harun Ar Rashid is another successful entrepreneur with more than 21+ years of contributing to the Energy sector of Bangladesh and developing and strengthening the electrical and electronics industry by offering innovative ideas, products, and services. Presently he is the Honorable Director of Bizz Solutions Ltd. and Managing Director of Super Star Group.', NULL, NULL, NULL, NULL, NULL, 'd8f90319772e395e', '/uploads/management/1694427947-avatar.png', 1, 1, NULL, '2023-09-11 04:25:47', '2023-09-19 00:14:17');

-- --------------------------------------------------------

--
-- Table structure for table `our_teams`
--

CREATE TABLE `our_teams` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `our_teams`
--

INSERT INTO `our_teams` (`id`, `slug`, `name`, `designation`, `phone`, `email`, `linkedin`, `twitter`, `website`, `avatar`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'e3ba4c2028c29363', 'Md. Harun Ar Rashid', 'Business Development', '01713378787', 'mdharun.bcl@gmail.com', NULL, NULL, 'bizzsol.com.bd', '/uploads/teams/1699503552-avatar.jpg', 1, 1, NULL, '2023-09-03 22:58:21', '2023-11-08 22:19:12'),
(2, '0ef8cbd18a6080a3', 'Zakir Hossain', 'Sr. Executive', '0170000000', 'zakir7dipu@gmail.com', NULL, NULL, NULL, '/uploads/teams/1693803698-avatar.png', 1, NULL, '2023-10-04 03:31:57', '2023-09-03 23:01:38', '2023-10-04 03:31:57'),
(3, '54c1c012f820b154', 'Md. Shajedul Islam', 'Business Development', '01755693531', 'shajedul.bsl@gmail.com', NULL, NULL, 'bizzsol.com.bd', '/uploads/teams/1699503308-avatar.jpg', 1, NULL, NULL, '2023-11-08 22:15:08', '2023-11-08 22:15:08'),
(4, '9cb4c1c8ec90996f', 'Md. Baizid Islam', 'Business Development', '01755597770', 'bizzcareer.baizid@gmail.com', NULL, NULL, NULL, '/uploads/teams/1699503367-avatar.jpg', 1, NULL, NULL, '2023-11-08 22:16:07', '2023-11-08 22:16:07'),
(5, 'f8e09f4d310f22cf', 'Sajjad Dewan', 'Business Development', '01713997611', 'sajjadbcl31@gmail.com', NULL, NULL, 'bizzsol.com.bd', '/uploads/teams/1699503467-avatar.jpg', 1, NULL, NULL, '2023-11-08 22:17:47', '2023-11-08 22:17:47'),
(6, '2510387f8973b2cd', 'Md. Arifur Rahman', 'Business Development', '01730085961', 'arifur.bsl25@gmail.com', NULL, NULL, 'bizzsol.com.bd', '/uploads/teams/1699503656-avatar.png', 1, NULL, NULL, '2023-11-08 22:20:56', '2023-11-08 22:20:56'),
(7, '864b45ae15ed8692', 'Md. Majharul Islam', 'Business Development', '01842943285', 'majharul.bsl@gmail.com', NULL, NULL, 'bizzsol.com.bd', '/uploads/teams/1699503762-avatar.jpg', 1, NULL, NULL, '2023-11-08 22:22:42', '2023-11-08 22:22:42'),
(8, '10aefe6accb7710e', 'Zakir Hossain', 'Business Development', '01764470022', 'zakir@bizzsol.com.bd', NULL, NULL, 'bizzsol.com.bd', '/uploads/teams/1699503858-avatar.jpg', 1, NULL, NULL, '2023-11-08 22:24:18', '2023-11-08 22:24:18'),
(9, '270e24714fac8974', 'Md. Omar Farook', 'Business Development', '01822252198', 'md.farook@ssgbd.com', NULL, NULL, 'bizzsol.com.bd', '/uploads/teams/1699503995-avatar.png', 1, NULL, NULL, '2023-11-08 22:26:35', '2023-11-08 22:26:35'),
(10, '3f64f1e0bea98a23', 'Anowar Ullah', 'Business Development', '01313476504', 'anwar.ullah@ssgbd.com', NULL, NULL, 'bizzsol.com.bd', '/uploads/teams/1699504128-avatar.jpg', 1, NULL, NULL, '2023-11-08 22:28:48', '2023-11-08 22:28:48');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image_link` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `title`, `slug`, `description`, `image_link`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Terms And Conditions', 'terms-and-conditions', '<p><strong>Cookies Policy</strong></p><ol><li>What are cookies?<br>A cookie is a small informatic file stored by a website in a User´s computer or mobile device, which allows the User´s identification in future access, recording its actions and preferences, in order to improve the User´s navigation experience. The cookies do not identify the individual User, but only the computer or mobile device used.<ol><li>What kind of Cookies do we use?<br>We identify below the kind of Cookies installed in the website with different purposes and controlled by different entities:<br>a) Strictly necessary Cookies and Functionality Cookies:<br>These are cookies installed to enable or optimize the functionalities offered by the website and to improve the User´s navigation experience.</li></ol></li></ol><p>b) Analytic Cookies:<br>These are cookies installed by tools managed by third parties (Google Analytics, Google TagManager, etc.) to monitor the quality of the User’s navigation experience on the website.</p><p>The Analytic third-party cookies are controlled by outsider entities, which means we cannot guarantee that the list of Cookies is unchanged.</p><p><strong>Applicable Law</strong><br>The contract established herein between the “Company” and the User is ruled by the Bangladeshi Law.</p><p><strong>Privacy and Data Protection</strong><br>“Company” assures the confidentiality of all data provided by the Users. For more<br>information, please read our Privacy Note.</p>', '/uploads/page/1694944417-page.jpg', 1, 1, NULL, '2023-09-09 03:20:22', '2023-09-17 03:55:03'),
(2, 'Privacy Policy', 'privacy-policy', '<p><strong>PERSONAL INFORMATION WE COLLECT</strong><br>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically collected information as “Device Information.”</p><ul><li><strong>We collect Device Information using the following technologies:</strong><br>– “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.<br>– “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.<br>– “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</li><li>&nbsp;</li></ul><p>Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as “Order Information.”<br>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p><p><strong>HOW DO WE USE YOUR PERSONAL INFORMATION?</strong><br>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p><p>Additionally, we use this Order Information to Communicate with you and Screen our orders for potential risk or fraud.</p><p><strong>SHARING YOUR PERSONAL INFORMATION</strong><br>We share your Personal Information with third parties to help us use your Personal Information, as described above.<br><br>We use Google Analytics to help us understand how our customers use the Site–you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.<br>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p><p><strong>DATA SECURITY</strong><br>Safeguards will be maintained to protect personal information against unauthorized access, alteration, destruction, use or disclosure and against accidental loss. Any personal information that you submit to our website is held with the strictest confidence. Brusco uses and implements industry standards for the security and protection of information collected from its users. Once your personal information comes into Bizz Solutions PLC, we will take all reasonable steps to protect that information as described.</p><p><strong>CREDIT CARD SECURITY</strong><br>We work hard to provide a safe and convenient online shopping experience. That means we safeguard the integrity of our customers’ credit card information. We use Secure Sockets Layer (SSL) technology and other secure encryption methods to protect the security of your credit card information as it is transmitted to us.</p><p><strong>EMAIL MARKETING</strong><br>By subscribing to the newsletter, your email address will be used for our own advertising purposes until you unsubscribe from the newsletter. You can unsubscribe at any time by clicking on the “Unsubscribe” link at the end of a newsletter.</p><p><strong>BEHAVIOURAL ADVERTISING</strong><br>No information collected is used for personal advertisement.</p><p><strong>DO NOT TRACK</strong><br>Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</p><p><strong>YOUR RIGHTS</strong><br>If you are a European resident, GDPR grants you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.<br>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p><p><strong>DATA RETENTION</strong><br>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this in</p><p><strong>CHANGES</strong><br>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.<br><br><strong>CONTACT US</strong><br>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href=\"mailto:info@bizzsol.com.bd\">info@bizzsol.com.bd</a> or by mail using the details provided below:</p><p>City centre 90/1, Level-25 Type-D2, Motijheel C/A, Dhaka-1000, Bangladesh.</p>', '/uploads/page/1694944393-page.jpg', 1, 1, NULL, '2023-09-09 03:21:38', '2023-09-17 03:53:13');

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `index_of` int NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image_link` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `name`, `index_of`, `description`, `image_link`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'SAP', 1, 'SAP Patner', '/uploads/partner/1698140865-client.png', 1, 1, NULL, '2023-09-04 03:25:08', '2023-10-24 03:47:45'),
(2, 'SSG', 7, 'SSG', '/uploads/partner/1698140940-client.png', 1, 1, NULL, '2023-09-04 03:28:09', '2023-10-24 03:49:00'),
(3, 'BCL', 3, 'BCL', '/uploads/partner/1698140889-client.png', 1, 1, NULL, '2023-09-04 03:28:31', '2023-10-24 03:48:09'),
(4, 'CFO', 6, 'CFO', '/uploads/partner/1698140929-client.png', 1, 1, NULL, '2023-09-04 03:28:51', '2023-10-24 03:48:49'),
(5, 'QB', 4, NULL, '/uploads/partner/1698140911-client.png', 1, 1, NULL, '2023-10-24 01:07:58', '2023-10-24 03:48:31'),
(6, 'Tally', 2, NULL, '/uploads/partner/1698140872-client.png', 1, 1, NULL, '2023-10-24 01:08:15', '2023-10-24 03:47:52'),
(7, 'Xero', 5, NULL, '/uploads/partner/1699328534-client.png', 1, 1, NULL, '2023-10-24 01:08:27', '2023-11-06 21:42:14');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED DEFAULT NULL,
  `title` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `brief` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image_link` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint UNSIGNED NOT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `service_id`, `title`, `brief`, `description`, `image_link`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'Business Planning Tracking (BPT)', '<p>MBM ERP Data</p>', '<ul><li><strong>Key Features</strong><br><br>Goal Setting</li><li>Task and Project Management</li><li>KPI Monitoring</li><li>Collaboration</li><li>Progress Tracking</li><li>Data Visualization</li><li>Alerts and Notifications</li><li>Risk Management</li><li>Integration</li><li>Customization</li></ul>', '/uploads/products/1695465745-product.png', 1, 1, NULL, '2023-09-05 03:56:05', '2023-09-23 04:42:25'),
(2, 1, 'Bizz Pack', '<p>Bizz Solutions</p>', '<ul><li><strong>BIZZ PACK - A Complete ERP for RMG/ FMCG</strong><br><br><strong>Accounts &amp; Finance Module</strong></li><li><strong>Purchase Module</strong></li><li><strong>Sales Module</strong></li><li><strong>Project Management Module</strong></li><li><strong>Industrial Engineering Module</strong></li></ul>', '/uploads/products/1695465649-product.png', 1, 1, NULL, '2023-09-05 03:57:56', '2023-09-23 04:41:23'),
(3, 1, 'Vat Software', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', '/uploads/products/1695465464-product.png', 1, 1, NULL, '2023-09-11 03:20:48', '2023-09-23 04:37:44'),
(4, 1, 'HRIS Software', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', '/uploads/products/1695465497-product.png', 1, 1, NULL, '2023-09-11 03:21:42', '2023-09-23 04:38:17'),
(5, 1, 'Sales Pack', '<p>Sales pack software solutions, also known as sales automation software, are tools designed to automate and optimize various aspects of the sales process. These solutions aim to increase efficiency, reduce manual tasks, and improve the overall productivity of sales teams.</p>', '<ul><li><strong>Key Features</strong><br><br>Customer Relationship Management (CRM) Software</li><li>Sales Enablement Software</li><li>Lead Generation and Prospecting Tools</li><li>Sales Analytics and Reporting Software</li><li>Sales Forecasting Software</li><li>E-Commerce and Online Sales Platforms</li><li>Quoting and Proposal Software</li><li>Sales Communication and Collaboration Tools</li><li>Sales Automation Software</li><li>Lead Management</li><li>Email Automation</li><li>Task Automation</li><li>Pipeline Management</li><li>Analytics and Reporting</li><li>Workflow Automation</li><li>Integration with Communication Channels</li><li>Document Management</li><li>Personalization</li><li>Personalization</li></ul>', '/uploads/products/1695465868-product.png', 1, 1, NULL, '2023-09-11 03:22:35', '2023-09-23 04:44:28'),
(6, 1, 'TallyPrime', '<p><strong>TallyPrime</strong></p>', '<p><strong>TallyPrime</strong></p>', '/uploads/products/1695465914-product.png', 1, NULL, NULL, '2023-09-23 04:45:14', '2023-09-23 04:45:14'),
(7, 2, 'SSG Web Portal', '<p>SSG Web Portal</p>', '<p>SSG Web Portal</p>', '/uploads/products/1696405576-product.jpg', 1, 1, NULL, '2023-09-23 04:46:54', '2023-10-04 01:46:16'),
(8, 2, 'SSG Global', '<p>SSG Global</p>', '<p>SSG Global</p>', '/uploads/products/1696405594-product.jpg', 1, 1, NULL, '2023-09-23 04:49:33', '2023-10-04 01:46:34'),
(9, 2, 'Ebazaar Ecommerce', '<p>Ebazaar Ecommerce&nbsp;</p>', '<p>Ebazaar Ecommerce</p>', '/uploads/products/1696405633-product.jpg', 1, NULL, NULL, '2023-10-04 01:47:13', '2023-10-04 01:47:13'),
(10, 2, 'Job Portal', '<p>Bizz Career Ltd</p>', '<p>Bizz Career Ltd</p>', '/uploads/products/1696405692-product.jpg', 1, NULL, NULL, '2023-10-04 01:48:12', '2023-10-04 01:48:12'),
(11, 2, 'Ctti', '<p>Ctti</p>', '<p>Ctti</p>', '/uploads/products/1696405715-product.jpg', 1, NULL, NULL, '2023-10-04 01:48:35', '2023-10-04 01:48:35'),
(12, 2, 'SACO', '<p>SACO</p>', '<p>SACO</p>', '/uploads/products/1696405743-product.jpg', 1, NULL, NULL, '2023-10-04 01:49:03', '2023-10-04 01:49:03'),
(13, 2, 'CFO EDU BD', '<p>CFO EDU BD</p>', '<p>CFO EDU BD</p>', '/uploads/products/1696405823-product.jpg', 1, NULL, NULL, '2023-10-04 01:50:23', '2023-10-04 01:50:23'),
(14, 2, 'CFO ORG', '<p>CFO ORG</p>', '<p>CFO ORG</p>', '/uploads/products/1696405850-product.jpg', 1, NULL, NULL, '2023-10-04 01:50:50', '2023-10-04 01:50:50'),
(15, 2, 'EDU BD TV', '<p>EDU BD TV</p>', '<p>EDU BD TV</p>', '/uploads/products/1696405871-product.jpg', 1, NULL, NULL, '2023-10-04 01:51:11', '2023-10-04 01:51:11'),
(16, 2, 'CAFS EDU ORG', '<p>CAFS EDU ORG</p>', '<p>CAFS EDU ORG</p>', '/uploads/products/1696405899-product.jpg', 1, NULL, NULL, '2023-10-04 01:51:39', '2023-10-04 01:51:39');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `schedules`
--

INSERT INTO `schedules` (`id`, `name`, `email`, `phone`, `company_name`, `description`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Md. Harun Ar Rashid', 'harun.rashid@bizzsol.com.bd', '+8801777717445', 'Bizz Solutions PLC', 'N/A', NULL, '2023-10-31 23:44:01', '2023-10-31 23:44:01'),
(2, 'Moksed ENT', 'supplier4@email.com', '0987654321', 'tharlarasoft', 'qqq', NULL, '2023-11-08 23:41:26', '2023-11-08 23:41:26');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint UNSIGNED NOT NULL,
  `parent_id` bigint UNSIGNED DEFAULT NULL,
  `title` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `brief` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image_link` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('product','training','content') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'content',
  `meta_title` varchar(264) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keywords` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_image_link` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `icons` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint UNSIGNED NOT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `parent_id`, `title`, `slug`, `brief`, `description`, `image_link`, `type`, `meta_title`, `meta_keywords`, `meta_description`, `meta_image_link`, `icons`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Software Solutions', 'software-solutions', NULL, '<p>N/A</p>', '/uploads/services/1695206880-service.png', 'product', 'Software Development', 'Software Development, Web, Bizz', 'Software Development Details', '/uploads/services/1695206880-service.png', '/uploads/services/1695206880-icons.png', 1, 1, NULL, '2023-09-05 00:37:17', '2023-11-02 01:16:40'),
(2, NULL, 'Web Development', 'web-development', '<p>Web Development</p>', '<p>Web Development</p>', '/uploads/services/1695206894-service.png', 'product', 'Web Development', 'Web Development, Development', 'Web Development', '/uploads/services/1695206894-service.png', '/uploads/services/1695206894-icons.png', 1, 1, NULL, '2023-09-05 00:41:26', '2023-09-20 04:48:14'),
(3, NULL, 'Training', 'training', NULL, '<p>Training</p>', '/uploads/services/1695206908-service.png', 'training', 'Training', 'Training', 'Training', '/uploads/services/1695206908-service.png', '/uploads/services/1695206908-icons.png', 1, 1, NULL, '2023-09-05 01:05:20', '2023-09-20 04:48:28'),
(4, 3, 'Admission Ongoing', 'admission-ongoing', '<p>Admission</p>', '<p>The useRef can maintain a reference to the form element\'s dom. Since the useRef directly accesses the real dom, it is not advised to use useRef to do any direct dom manipulations. However, in our case, we only read from the dom, therefore, no performance impact is anticipated.</p>', '/uploads/services/1693897555-service.png', 'training', 'Admission', 'Admission', 'Admission', '/uploads/services/1693897555-service.png', '/uploads/services/1694492866-icons.png', 1, 1, NULL, '2023-09-05 01:05:55', '2023-09-11 22:27:46'),
(5, 3, 'Ongoing Courses', 'ongoing-courses', '<p>Ongoing</p>', '<p>Ongoing</p>', '/uploads/services/1693897594-service.png', 'training', 'Ongoing', 'Ongoing', 'Ongoing', '/uploads/services/1693897594-service.png', '/uploads/services/1696404356-icons.png', 1, 1, NULL, '2023-09-05 01:06:34', '2023-10-04 01:25:56'),
(6, NULL, 'Content & Services', 'content-services', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', '<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', '/uploads/services/1693897649-service.jpg', 'content', 'Content & Services', 'Content & Services', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '/uploads/services/1693897649-service.jpg', NULL, 1, 1, '2023-09-20 04:47:40', '2023-09-05 01:07:29', '2023-09-20 04:47:40');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int UNSIGNED NOT NULL,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `email`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'md.farook@ssbd.com', NULL, NULL, NULL, '2023-09-09 23:28:11', '2023-09-09 23:28:11'),
(3, 'wyme@mailinator.com', NULL, NULL, NULL, '2023-10-23 23:14:00', '2023-10-23 23:14:00');

-- --------------------------------------------------------

--
-- Table structure for table `technology`
--

CREATE TABLE `technology` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_by` int DEFAULT NULL,
  `image_link` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `technology`
--

INSERT INTO `technology` (`id`, `name`, `slug`, `order_by`, `image_link`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Java VM', '1f8bebd5e1e7470f', 1, '/uploads/technology/1693473203-tech.png', NULL, '2023-08-31 03:04:35', '2023-08-31 03:13:23'),
(2, 'Node Js', '1f44b68baa99aa7c', 2, '/uploads/technology/1693473194-tech.png', NULL, '2023-08-31 03:06:27', '2023-08-31 03:13:14'),
(3, 'Dynamo DB', '698c84b259e24ab2', 3, '/uploads/technology/1693473588-tech.png', NULL, '2023-08-31 03:06:45', '2023-08-31 03:19:48'),
(7, 'AWS', '2e3510606709f1ed', 4, '/uploads/technology/1695200609-tech.png', NULL, '2023-09-20 03:03:29', '2023-09-20 03:03:29'),
(8, 'Apache Strom', 'cd640576822bd6cc', 5, '/uploads/technology/1695200628-tech.png', NULL, '2023-09-20 03:03:48', '2023-09-20 03:03:48'),
(9, 'Docker', '27ce978f62310776', 6, '/uploads/technology/1695200639-tech.png', NULL, '2023-09-20 03:03:59', '2023-09-20 03:04:50'),
(10, 'TensorFLow', '08b5c8f35b51aa83', 7, '/uploads/technology/1695200668-tech.png', NULL, '2023-09-20 03:04:28', '2023-09-20 03:04:58'),
(11, 'Oracal', '1e14647941427292', 9, '/uploads/technology/1695200747-tech.png', NULL, '2023-09-20 03:05:47', '2023-09-20 03:05:47'),
(12, 'jMeter', '5c9dd9d0d2f9a963', 10, '/uploads/technology/1695200766-tech.png', NULL, '2023-09-20 03:06:06', '2023-09-20 03:06:06'),
(13, 'mongo DB', '807f2a6e2c6216c3', 11, '/uploads/technology/1695200779-tech.png', NULL, '2023-09-20 03:06:19', '2023-09-20 03:06:19'),
(14, 'MysQL', '34cb38748e6b3d79', 12, '/uploads/technology/1695200797-tech.png', NULL, '2023-09-20 03:06:37', '2023-09-20 03:06:37'),
(15, 'Neu4g', '35a59b6f90b81397', 13, '/uploads/technology/1695200820-tech.png', NULL, '2023-09-20 03:07:00', '2023-09-20 03:07:00'),
(16, 'Spark', '970235f7eb4169f2', 14, '/uploads/technology/1695200839-tech.png', NULL, '2023-09-20 03:07:19', '2023-09-20 03:07:19'),
(17, 'Python', '5e7ee43c957dd487', 15, '/uploads/technology/1695200885-tech.png', NULL, '2023-09-20 03:08:05', '2023-09-20 03:08:05'),
(18, 'Firebase', 'c5a6856a7e6aa676', 16, '/uploads/technology/1695200896-tech.png', NULL, '2023-09-20 03:08:16', '2023-09-20 03:08:16'),
(19, 'Kibana', '28f8131c5d551780', 17, '/uploads/technology/1695200925-tech.png', NULL, '2023-09-20 03:08:45', '2023-09-20 03:08:45'),
(20, 'Cloudara', '8579b9ad92cbcfdf', 18, '/uploads/technology/1695200943-tech.png', NULL, '2023-09-20 03:09:03', '2023-09-20 03:09:03'),
(21, 'Aws Redshift', 'c07af8bd5dcb5ecb', 19, '/uploads/technology/1695200971-tech.png', NULL, '2023-09-20 03:09:31', '2023-09-20 03:09:31');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image_link` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `designation`, `description`, `image_link`, `created_by`, `updated_by`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Jhon Dew', 'CEO Of Bricks', '<p>This is very good company. I want to work with them more in future.&nbsp;</p>', '/uploads/testimonial/1694238621-case-study.jpg', 1, 1, NULL, '2023-09-08 23:50:21', '2023-09-08 23:57:24'),
(2, 'Felendo', 'Web Developer', '<p>Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.Nanotechnology immersion along the information highway.</p>', '/uploads/testimonial/1694238954-case-study.jpg', 1, 1, NULL, '2023-09-08 23:55:54', '2023-09-10 23:21:17'),
(3, 'Mariye Khan', 'CEO, Brick Consulting', '<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.&nbsp;</p>', '/uploads/testimonial/1694239005-case-study.jpg', 1, NULL, NULL, '2023-09-08 23:56:45', '2023-09-08 23:56:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `abouts` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `avatar`, `abouts`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Bizz Solutions PLC', 'admin@bizzsol.com.bd', '01713378787', 'uploads/users/1699502048-avatar.png', 'Bizz Solutions is a leader in IT Services & Solutions, IT training, Software Development, Customize software development, Database Management, Accounting & Assurance, Tax, Head Hunting, Transaction and Advisory services. The insights and quality services we deliver help build trust and confidence. We develop outstanding leaders who team to deliver on our potentials to all of our stakeholders. \r\nWe are a diverse team of consultants and industry professionals with a global mindset and a collaborative culture. We work hard to understand our clients\' concerns and are driven in the pursuit of making their businesses work better.', NULL, '$2y$10$CHjud55AXmX/IS7zgrTNeuqQoknSCJJTJblJei3.fRou6BBkiQpPu', NULL, '2023-08-26 03:44:56', '2023-11-08 21:56:39'),
(2, 'Super Admin', 'md.farook@ssgbd.com', '01822252198', 'uploads/users/1699507586-avatar.webp', 'Hi there, it\'s me.', NULL, '$2y$10$CHjud55AXmX/IS7zgrTNeuqQoknSCJJTJblJei3.fRou6BBkiQpPu', NULL, '2023-11-09 05:23:20', '2023-11-08 23:26:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abouts`
--
ALTER TABLE `abouts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `abouts_slug_unique` (`slug`),
  ADD KEY `abouts_created_by_foreign` (`created_by`),
  ADD KEY `abouts_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blogs_slug_unique` (`slug`),
  ADD KEY `blogs_created_by_foreign` (`created_by`),
  ADD KEY `blogs_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `case_studies`
--
ALTER TABLE `case_studies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `case_studies_created_by_foreign` (`created_by`),
  ADD KEY `case_studies_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `courses_slug_unique` (`slug`),
  ADD KEY `courses_service_id_foreign` (`service_id`),
  ADD KEY `courses_created_by_foreign` (`created_by`),
  ADD KEY `courses_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `course_reviews`
--
ALTER TABLE `course_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_reviews_course_id_foreign` (`course_id`);

--
-- Indexes for table `curriculum`
--
ALTER TABLE `curriculum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curriculum_course_id_foreign` (`course_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `industries`
--
ALTER TABLE `industries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `our_clients`
--
ALTER TABLE `our_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `our_clients_created_by_foreign` (`created_by`),
  ADD KEY `our_clients_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `our_managements`
--
ALTER TABLE `our_managements`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `our_managements_slug_unique` (`slug`),
  ADD KEY `our_managements_created_by_foreign` (`created_by`),
  ADD KEY `our_managements_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `our_teams`
--
ALTER TABLE `our_teams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `our_teams_created_by_foreign` (`created_by`),
  ADD KEY `our_teams_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pages_created_by_foreign` (`created_by`),
  ADD KEY `pages_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`),
  ADD KEY `partners_created_by_foreign` (`created_by`),
  ADD KEY `partners_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_service_id_foreign` (`service_id`),
  ADD KEY `products_created_by_foreign` (`created_by`),
  ADD KEY `products_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_created_by_foreign` (`created_by`),
  ADD KEY `services_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `settings_key_index` (`key`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscribers_created_by_foreign` (`created_by`),
  ADD KEY `subscribers_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `technology`
--
ALTER TABLE `technology`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `testimonials_created_by_foreign` (`created_by`),
  ADD KEY `testimonials_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `abouts`
--
ALTER TABLE `abouts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `case_studies`
--
ALTER TABLE `case_studies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `course_reviews`
--
ALTER TABLE `course_reviews`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `curriculum`
--
ALTER TABLE `curriculum`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `industries`
--
ALTER TABLE `industries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `our_clients`
--
ALTER TABLE `our_clients`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `our_managements`
--
ALTER TABLE `our_managements`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `our_teams`
--
ALTER TABLE `our_teams`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `technology`
--
ALTER TABLE `technology`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `abouts`
--
ALTER TABLE `abouts`
  ADD CONSTRAINT `abouts_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `abouts_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `blogs_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `case_studies`
--
ALTER TABLE `case_studies`
  ADD CONSTRAINT `case_studies_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `case_studies_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `courses_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `courses_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `course_reviews`
--
ALTER TABLE `course_reviews`
  ADD CONSTRAINT `course_reviews_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `curriculum`
--
ALTER TABLE `curriculum`
  ADD CONSTRAINT `curriculum_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `our_clients`
--
ALTER TABLE `our_clients`
  ADD CONSTRAINT `our_clients_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `our_clients_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `our_managements`
--
ALTER TABLE `our_managements`
  ADD CONSTRAINT `our_managements_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `our_managements_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `our_teams`
--
ALTER TABLE `our_teams`
  ADD CONSTRAINT `our_teams_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `our_teams_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `pages`
--
ALTER TABLE `pages`
  ADD CONSTRAINT `pages_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `pages_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `partners`
--
ALTER TABLE `partners`
  ADD CONSTRAINT `partners_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `partners_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `products_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `products_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `services_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD CONSTRAINT `subscribers_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `subscribers_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD CONSTRAINT `testimonials_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `testimonials_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
