-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 24, 2023 at 08:48 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bsl_web_db`
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
(3, 'Hyacinth Branch', 'xevawes@mailinator.com', '949-5877', 'Et amet ea qui veli', 'Dolore ea eveniet i', NULL, '2023-10-23 23:13:39', '2023-10-23 23:13:39');

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
(1, 4, 'Analysis of Financial Statements & Implementation of Budgetary Control', '/uploads/thumbnail/1693985035-thumbnail.png', NULL, '<p><strong>Analysis of Financial Statements &amp; Implementation of Budgetary Control (আর্থিক বিবৃতি বিশ্লেষণ এবং বাজেট ব্যবস্থাপনা বাস্তবায়ন)।</strong></p><p>এই কোর্সটি অংশগ্রহণকারীদের ব্যবসার বর্তমান অবস্থান এবং ভবিষ্যতের সম্ভাবনাকে কার্যকরভাবে মূল্যায়ন করতে কোম্পানির আর্থিক বিবৃতি বিশ্লেষণ করার দক্ষতা প্রদান করবে। এটি হতে পারে আপনার জন্যে অত্যন্ত প্রয়োজনীয় একটি কোর্স যেখানে কেস স্টাডি ব্যবহার করার মাধ্যমে অংশগ্রহণকারীদেরকে কোর্সের সময় অর্জিত ধারণাগুলি বাস্তব-জীবনের পরিস্থিতিতে প্রয়োগ করতে উৎসাহিত করা হবে।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tc0/1.5/16/2b55.png\" alt=\"⭕\"> পরবর্তী ব্যাচ আগস্ট ১১, ২০২৩ তারিখ থেকে শুরু হবে। আসন সীমিত। আপনার সিট বুক করতে নিচের লিঙ্কে ক্লিক করুন অথবা কল করুন PH: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D8801755597770%26text%3DLink%253A%250Ahttps%253A%252F%252Ffb.me%252F34REpOuNz%250A%250AI%2520saw%2520this%2520on%2520Facebook...%26app%3Dfacebook%26fbclid%3DIwAR2Fbe7fBMBjhBGb7WdArOy7vzbnBmuGwWnzvKlY_Olff_j0-faEd6NdDog&amp;h=AT0E_rKTv1aqw5dSMkE4h7wyizKBuu2PWoCM-VdsxIl8XG5jYtpO33xmHRtiqGJ4V8xfbG7BkKs1Wr20aCilF8cO5PgM4cCr9aikFwZRBfTFtJ_Mh94UVHlfXlovy0_F7IDY-g&amp;__tn__=-UK-R&amp;c[0]=AT3LuqEGHYA6kttV9wFat2g6FAaRs-RcB4zqNtKIxTc458OhzPWMguRZpujrk-NBN1_m-8jDhZQzfDNzKc4dIibTJDC1LzMO_I8O8lZWwugvO5iHLIEFWOAPQTathvLu6KKLd4dTCZm24ZKYjUigpuAAZVDu7Qtr15Ksw5R0kVsqY8X4-wOus7bJ0GC0XkmEW5cSZmvbxWlCvjFuWJNXwbJg\">01755-597770</a></p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t55/1.5/16/1f7e2.png\" alt=\"?\"> Apply Now: <a href=\"https://forms.gle/QWSV5uwpHHCvu69x9?fbclid=IwAR2CpsNVuXM48hslW-NkAOaEOL6Seo0zykeWdig-PVfNQ6V0X7FUNxpFEsk\">https://forms.gle/QWSV5uwpHHCvu69x9</a></p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td6/1.5/16/1f7e3.png\" alt=\"?\"> Contents of This Training:</p><p>1. Basics of Financial Statement Analysis;</p><p>2. Introduction of Budget &amp; Budgetary Control;</p><p>3. Detail practical Excel Format of Master Budget &amp; Annual Business Plan (ABP);</p><p>4. How to make Forecasted Income Statement, Balance Sheet;</p><p>5. Ratio &amp; Z-score Analysis of Forecasted Financial Statements;</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t14/1.5/16/1f4a0.png\" alt=\"?\"> Who should participate the Course:</p><p>1. CEO, COO, other CXOs/ Head of Departments of business organizations;</p><p>2. Finance and accounting &amp; business professionals;</p><p>3. Entrepreneurs (including owners of Startups);</p><p>4. Business owners and decision-makers;</p><p>5. People who are involved in preparing Budget for their own organizations;</p><p>6. Finance and accounting graduates;</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/16/1f535.png\" alt=\"?\"> Resource Person:</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Mr. Md. <a href=\"https://www.facebook.com/md.shafiqul.alam?__cft__[0]=AZVYCbZVfXxz9RLjBcZTPIpVQVUyEn_jucAqFLRBFrCQt6TaJ3Rogwqj8rEFZkZdSpyCQoshT0WP0Jcl2FsocWolKwftWJTggwbiNd3Qx6VIGArccILSJZ56Xbr7wint9KN1QQsTq6KPoY6qdLYv5MYf4fKoKmIZY68N7DiM-kDuGL6l1G0ue-yKRIHyxmqukGc&amp;__tn__=-]K-R\">Shafiqul Alam</a> LL.B, FCS, FCMA, FCA</p><p>Chairman, <a href=\"https://www.facebook.com/bizzsolutions?__cft__[0]=AZVYCbZVfXxz9RLjBcZTPIpVQVUyEn_jucAqFLRBFrCQt6TaJ3Rogwqj8rEFZkZdSpyCQoshT0WP0Jcl2FsocWolKwftWJTggwbiNd3Qx6VIGArccILSJZ56Xbr7wint9KN1QQsTq6KPoY6qdLYv5MYf4fKoKmIZY68N7DiM-kDuGL6l1G0ue-yKRIHyxmqukGc&amp;__tn__=-]K-R\">Bizz Solutions PLC</a></p><p>Managing Partner &amp; CEO</p><p><a href=\"https://www.facebook.com/SACO.CAFirm?__cft__[0]=AZVYCbZVfXxz9RLjBcZTPIpVQVUyEn_jucAqFLRBFrCQt6TaJ3Rogwqj8rEFZkZdSpyCQoshT0WP0Jcl2FsocWolKwftWJTggwbiNd3Qx6VIGArccILSJZ56Xbr7wint9KN1QQsTq6KPoY6qdLYv5MYf4fKoKmIZY68N7DiM-kDuGL6l1G0ue-yKRIHyxmqukGc&amp;__tn__=-]K-R\">Shafiqul Alam &amp; Co., Chartered Accountants</a></p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/16/1f534.png\" alt=\"?\"> Course Details:</p><p>- Course Fee: Tk. 10,000;</p><p>- Early Bird Offer: Tk. 4,000;</p><p>- Last Date of Admission: Thursday, August 10, 2023;</p><p>- Course Starting Date: Friday, August 11, 2023;</p><p>- No. of Session: 10 (Live: 6 &amp; Pre-Recorded: 4), 2 Hrs Each.</p><p>- Training Mode: Online (Zoom);</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t5/1.5/16/1f4cc.png\" alt=\"?\"> বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t25/1.5/16/27a1.png\" alt=\"➡\"> আপডেটেড কোর্স মডিউল।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t25/1.5/16/27a1.png\" alt=\"➡\"> ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t25/1.5/16/27a1.png\" alt=\"➡\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন ।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t25/1.5/16/27a1.png\" alt=\"➡\"> জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t25/1.5/16/27a1.png\" alt=\"➡\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t25/1.5/16/27a1.png\" alt=\"➡\"> <a href=\"https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.edubd.tv%2F%3Ffbclid%3DIwAR3MTnHdbBPphDp29I53h6HE5VnnILFbsctrhV1cQhNlDBcaUPaVTojiRMg&amp;h=AT2DSCa5yHkzGKvqwDCa1WoDXNsO8nBnE5hGsi3ZWD6Nppqi0xaf_SFcjrfyATVwPRLAUj3IsWQrXHObxe5dD5R6eqAv8vo36uk4NxtGxFvdBL4o1icAoeLXgV3lhEAxVlnT&amp;__tn__=-UK-R&amp;c[0]=AT3LuqEGHYA6kttV9wFat2g6FAaRs-RcB4zqNtKIxTc458OhzPWMguRZpujrk-NBN1_m-8jDhZQzfDNzKc4dIibTJDC1LzMO_I8O8lZWwugvO5iHLIEFWOAPQTathvLu6KKLd4dTCZm24ZKYjUigpuAAZVDu7Qtr15Ksw5R0kVsqY8X4-wOus7bJ0GC0XkmEW5cSZmvbxWlCvjFuWJNXwbJg\">www.edubd.tv</a> তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t25/1.5/16/27a1.png\" alt=\"➡\"> বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t25/1.5/16/27a1.png\" alt=\"➡\"> এক্সপার্ট রিসোর্স পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4f/1.5/16/1f3e0.png\" alt=\"?\">বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F34REpOuNz%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR1Oq6fRM86e4382vmR7WNolG9iEsLuuZ7kkOix_O9FdSfVTaBcob2KRZIk\">01755-597770</a> (Call/ WhatsApp)</p>', 'BamroKQLbrs', 10000, 4000, 20, 'Total 32 hrs.', '2 Days per week (Friday & Saturday).', '2 hours/Day (8:00 pm to 10:00 Pm)', 'Bangla, English', 'online', 'admission', '2023-09-01', '2023-10-01', '<p><strong>Class 1:</strong> Basics of Financial Statement Analysis ● Importance and objectives of financial statement analysis. ● Understanding the key components of financial statements: Income Statement, Balance Sheet, and Cash Flow Statement. ● Analyzing financial ratios for assessment: liquidity, profitability, efficiency, and solvency ratios. ● Conducting trend analysis and interpreting common-size financial statements.&nbsp;</p><p><strong>Class 2:</strong> Introduction to Budget &amp; Budgetary Control ● Overview of budgeting and its significance in financial planning and control. ● Different types of budgets: operating budget, capital budget, cash budget, etc. ● Step-by-step budgeting process, from data collection to finalizing the budget. ● Implementing budgetary control and its role in performance management.&nbsp;</p><p><strong>Class 3:</strong> Practical Excel Format of Master Budget &amp; Annual Business Plan (ABP) ● Building an Excel-based master budget integrating various functional budgets. ● Creating detailed sales forecasts, production plans, and expense budgets. ● Developing an Annual Business Plan (ABP) aligned with organizational goals. ● Using Excel for financial modeling and scenario analysis.&nbsp;</p><p><strong>Class 4:</strong> Forecasted Income Statement and Balance Sheet ● Understanding the importance of forecasting in financial planning. ● Forecasting sales, revenues, and expenses for the budgeted period. ● Estimating assets, liabilities, and equity to create the forecasted Balance Sheet. ● Analyzing the impact of forecasting on financial decision-making.&nbsp;</p><p><strong>Class 5:</strong> Ratio &amp; Z-score Analysis of Forecasted Financial Statements ● Evaluating financial health through ratio analysis. ● Calculating and interpreting liquidity, profitability, and solvency ratios. ● Assessing credit risk using the Z-score model. ● Identifying potential areas for improvement based on ratio analysis.&nbsp;</p><p><strong>Class 6:</strong> Management Information System (MIS) Format for Decision Making ● Understanding the role of MIS in management decision-making. ● Designing and developing MIS reports for financial analysis and control. ● Using MIS for monitoring budgetary performance and variance analysis. ● Leveraging technology for efficient MIS reporting.&nbsp;</p><p><strong>Class 7:</strong> Financial Performance Evaluation and Variance Analysis ● Analyzing actual financial performance against budgets and forecasts. ● Identifying causes of budget variances and their implications. ● Developing corrective action plans based on variance analysis. ● Conducting sensitivity analysis to assess the impact of changing variables.&nbsp;</p><p><strong>Class 8: </strong>Capital Budgeting and Investment Analysis ● Importance of capital budgeting in long-term decision-making. ● Evaluating investment opportunities using Net Present Value (NPV) and Internal Rate of Return (IRR). ● Understanding payback period and discounted payback period methods. ● Assessing risk in capital investment decisions.&nbsp;</p><p><strong>Class 9:</strong> Integrated Financial Planning and Forecasting ● Integrating financial analysis, budgeting, and forecasting for effective planning. ● Aligning budgetary control and performance measurement with strategic objectives. ● Using rolling forecasts and continuous planning to adapt to changing business conditions. ● Case studies on integrating financial planning in real-world scenarios.&nbsp;</p><p><strong>Class 10:</strong> Course Review and Practical Application ● Recap of key concepts and techniques covered in the course. ● Presenting a comprehensive financial analysis and budgeting plan. ● Hands-on exercises and simulations for practical application. ● Q&amp;A session to address any remaining doubts or inquiries. THE END!</p>', 'analysis-of-financial-statements-implementation-of-budgetary-control', '2023-09-05 18:00:00', 1, 1, NULL, '2023-09-06 01:23:55', '2023-09-06 02:55:37'),
(2, 4, 'Certificate Course on Business Application with IAS & IFRS', '/uploads/thumbnail/1693985266-thumbnail.png', NULL, '<p>ইন্টারন্যাশনাল অ্যাকাউন্টিং স্ট্যান্ডার্ডস (IAS) হল প্রথম আন্তর্জাতিক অ্যাকাউন্টিং স্ট্যান্ডার্ড যার লক্ষ্য ছিল বিশ্বজুড়ে ব্যবসায়ের তুলনা করা সহজ করে তোলা, আর্থিক প্রতিবেদনের স্বচ্ছতা নিশ্চিত করা এবং আস্থা বাড়িয়ে বিশ্ব বাণিজ্য ও বিনিয়োগকে উৎসাহিত করা।</p><p>ইন্টারন্যাশনাল ফাইন্যান্সিয়াল রিপোটিং স্ট্যান্ডার্ডাস (IFRS) হচ্ছে বিশ্ব জুড়ে সর্বজনীন স্বীকৃত হিসাব বিজ্ঞানের ভাষা। IFRS প্রতিষ্ঠানের ফাইন্যান্সিয়াল স্টেটমেন্ট এর জন্য অ্যাকাউন্টিং নিয়মগুলির একটি সেট যা সারা বিশ্বে সামঞ্জস্যপূর্ণ, স্বচ্ছ এবং সহজে তুলনাযোগ্য রিপোর্ট করার উদ্দেশ্যে সেট করা করা হয়। IFRS আন্তর্জাতিক অ্যাকাউন্টিং স্ট্যান্ডার্ড বোর্ড (IASB) দ্বারা জারি করা হয়। IAS 2001 সালে IFRS দ্বারা প্রতিস্থাপিত হয়েছে এবং পরবর্তীকালে বিশ্বের বেশিরভাগ প্রধান আর্থিক বাজার দ্বারা গৃহীত হয়েছে।</p><p>বাংলাদেশের রেজিষ্ট্রেশন অফ জয়েন্ট স্টক কোম্পানিজ এন্ড ফার্ম (IFRS) তে প্রায় ১৮০,০০০ কোম্পানির রেজিষ্ট্রেশন রয়েছে। ২০১৫ সালে ফাইন্যান্সিয়াল রিপোটিং এক্ট এর মাধ্যমে সকল পাবলিক ইন্টারেস্ট প্রতিষ্ঠানে আইএফআরএস (IFRS) বাস্তবায়ন বাধ্যতামূলক করা হয়েছে। ছোট ও মাঝারি প্রতিষ্ঠান (SME) এর জন্য এবং অমুনাফাভোগী প্রতিষ্ঠান, এনজিও, সরকারি প্রতিষ্ঠান এর জন্যেও ভিন্ন ভিন্ন আইএফআরএস (IFRS) গাইডলাইন রয়েছে । এই ১৮০,০০০ কোম্পানির প্রতিটিতে কমপক্ষে ২০ জন করে ফাইন্যান্সিয়াল এবং একাউন্টিং অফিসার প্রয়োজন হলে ৩,৬০০,০০০ জন (IFRS) এ দক্ষ কর্মী প্রয়োজন। <a href=\"https://www.facebook.com/bizzsolutions?__cft__[0]=AZUnTW_I3Zi-TLeMdtdWMa0dl0gkLGGXVeKk2oIFKmoYvBSd8dd3L58H-zIn8Q23431WgFT_E3oeSuAGg_W-d5YJytFW5hSQz0wuKwrLPXPVDVgS_UZRiC8PehKpVpfWxby0WZiGn856B6giRI09JKP55jDgImBLDdRT_F9BbdoRuqGqoyENVJi14E9n2TKepGw&amp;__tn__=-]K-R\">Bizz Solutions PLC</a> এবং Bizz Career Ltd. - Accounts ও Finance সেক্টরে দক্ষ প্রফেশনালস হতে করণীয় বিষয়ক একটি কোর্স আয়োজন করতে যাচ্ছে।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/16/1f534.png\" alt=\"?\"> Course Details:</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Regular Course Fee: BDT. 16,000</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Early Bird Offer: BDT. 10,000 (For first 10 participants)</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Last Date of Admission: Thursday, August 31, 2023</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Course Starting Date: Friday, September 1, 2023</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Time: 8:30 PM - 10:30 PM</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> No. of Session: 20</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/16/25aa.png\" alt=\"▪\"> Training Mode: Online (Zoom)</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/16/1f535.png\" alt=\"?\"> Resource Person:</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> Md. Shafiqul Alam LL.B, FCS, FCMA, FCA</p><p>Chairman, Bizz Solutions PLC</p><p>Managing Partner &amp; CEO</p><p>Shafiqul Alam &amp; Co. Chartered Accountants</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> Md. Tareq Kamal FCA</p><p>Deputy General Manager (Finance)</p><p>Crown Cement</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/16/1f534.png\" alt=\"?\"> Apply Now: <a href=\"https://forms.gle/ZVXW3XJKh1E7KmGz7?fbclid=IwAR3ZSxxdmJEXhpxMQbmk4Y0-Wk1ksrsnOLLB2Mz5e6kvWfdiCmKr3qbDNOw\">https://forms.gle/ZVXW3XJKh1E7KmGz7</a></p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4f/1.5/16/1f3e0.png\" alt=\"?\"> বিস্তারিত: <a href=\"https://www.facebook.com/bizzsolutions?__cft__[0]=AZUnTW_I3Zi-TLeMdtdWMa0dl0gkLGGXVeKk2oIFKmoYvBSd8dd3L58H-zIn8Q23431WgFT_E3oeSuAGg_W-d5YJytFW5hSQz0wuKwrLPXPVDVgS_UZRiC8PehKpVpfWxby0WZiGn856B6giRI09JKP55jDgImBLDdRT_F9BbdoRuqGqoyENVJi14E9n2TKepGw&amp;__tn__=-]K-R\">Bizz Solutions PLC</a>, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F65boFaTEs%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR1-SIoZAzXyXRs4qEDxw09vTu_YIJ_fR5EjxJSP_I5_4bogSDWCI1NGVAA\">01755-597770</a> (Call/ WhatsApp)</p>', NULL, 16000, 10000, 20, '40 Hours', 'Friday', '2 Hours', 'English & Bangla', 'online', 'admission', '2023-08-08', '2023-09-09', '<p><strong>COURSE TITLE: Business Application with IAS &amp; IFRS (1ST Part)&nbsp;</strong></p><p>The Business Application with International Accounting Standard (IAS) &amp; International Financial Reporting Standard (IFRS) subject is designed to provide participants with the opportunity to enhance their financial reporting skills by providing detailed understanding and knowledge of International Accounting Standard application. This includes:&nbsp;</p><p><strong>IAS&nbsp;</strong></p><p>• The framework for the preparation and Presentation of Financial Statements.&nbsp;</p><p>• IAS 1: Presentation of Financial Statements&nbsp;</p><p>• IAS 2: Inventories&nbsp;</p><p>• IAS 7: Statements of Cash Flows&nbsp;</p><p>• IAS 8: Accounting Policies, Changes in Accounting Estimate and Errors&nbsp;</p><p>• IAS 10: Events after the Reporting Period&nbsp;</p><p>• IAS 16: Property, Plant and Equipment&nbsp;</p><p>• IAS 19: Employee Benefits&nbsp;</p><p>• IAS 20: Accounting for Government Grants and Disclosure of Government Assistance&nbsp;</p><p>• IAS 23: Borrowing Costs&nbsp;</p><p>• IAS 24: Related Party Disclosures&nbsp;</p><p>• IAS 26: Accounting and Reporting by Retirement Benefit Plans&nbsp;</p><p>• IAS 33: Earnings per Share&nbsp;</p><p>• IAS 34: Interim Financial Reporting&nbsp;</p><p>• IAS 36: Impairments of Assets&nbsp;</p><p>• IAS 37: Provisions, Contingent Liabilities and Contingent Assets&nbsp;</p><p>• IAS 38: Intangible Assets&nbsp;</p><p>• IAS 40 Investment Property&nbsp;</p><p><strong>IFRS&nbsp;</strong></p><p>• IFRS 5: Non-current Assets Held for Sale and Discontinued Operations&nbsp;</p><p>• IFRS 15: Revenue from contracts with customers&nbsp;</p><p>• IFRS 16: Leases&nbsp;</p><p><strong>COURSE TITLE: Business Application with IAS &amp; IFRS – II (2nd Part)</strong>&nbsp;</p><p>The Business Application with International Accounting Standard (IAS) &amp; International Financial Reporting Standard (IFRS) subject is designed to provide participants with the opportunity to enhance their financial reporting skills by providing detailed understanding and knowledge of International Financial Reporting Standard application. This includes:&nbsp;</p><p><strong>IAS&nbsp;</strong></p><p>• IAS 12: Income Taxes&nbsp;</p><p>• IAS 21: The Effects of Changes in Foreign Exchange Rates&nbsp;</p><p>• IAS 27: Separate Financial Statements&nbsp;</p><p>• IAS 28: Investments in Associates and Joint Ventures&nbsp;</p><p>• IAS 32: Financial Instruments Presentation&nbsp;</p><p>• IAS 41: Agriculture&nbsp;</p><p><strong>IFRS&nbsp;</strong></p><p>• IFRS 1: First-time Adoption of International Financial Reporting Standards&nbsp;</p><p>• IFRS 2: Share-based Payment • IFRS 3: Business Combinations&nbsp;</p><p>• IFRS 4: Insurance Contracts&nbsp;</p><p>• IFRS 6: Exploration for and Evaluation of Mineral Resources&nbsp;</p><p>• IFRS 7: Financial Instruments: Disclosures&nbsp;</p><p>• IFRS 8: Operating Segments&nbsp;</p><p>• IFRS 9: Financial Instruments&nbsp;</p><p>• IFRS 10: Consolidated Financial Statements&nbsp;</p><p>• IFRS 11: Joint Arrangements&nbsp;</p><p>• IFRS 12: Disclosure of Interests in Other Entities&nbsp;</p><p>• IFRS 13: Fair Value Measurement&nbsp;</p><p>• IFRS 14: Regulatory Deferral Accounts</p>', 'certificate-course-on-business-application-with-ias-ifrs', '2023-09-05 18:00:00', 1, NULL, NULL, '2023-09-06 01:27:46', '2023-09-06 01:27:46'),
(3, 4, 'Certificate Course on Advanced Excel Training', '/uploads/thumbnail/1693985399-thumbnail.png', NULL, '<p>Excel শিখে ক্যারিয়ারে নিজের অবস্থান ‍উন্নত করার সময় এখনই !!! বিস্তারিত: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D8801755597770%26text%3DLink%253A%250Ahttps%253A%252F%252Ffb.me%252F1hitumR1d%250A%250AI%2520saw%2520this%2520on%2520Facebook...%26app%3Dfacebook%26fbclid%3DIwAR17NohXDBKnGii2g5VRpOgbXkbPlKFdXMLsuHNfT-5nUSNdDEtm43pyy0k&amp;h=AT2vJ3GDY-JDdgeKlwHO5Lylj6PvogG1xgfOzLlYW18sRpj8o_Q35Mt48itC77ho-iakutKgL_FXPKML52H8xlS2YFVWd28elIfFD2ss9ARLgO87NhGJu31rUYjHodoL-wnCsA&amp;__tn__=-UK-R&amp;c[0]=AT1H_3UbHyf_vJhmFkhxHKzPISOri9naBqk74PWSV1kGdYFtgkMsVILKwWtBUEAoErqcLkkaftduUSFd95GeNiIz8a_7Ur-_D47Ow-sRVrSyJknULXCmjQ7suHTjkTbHBKs6wz9lASk6fYDBjQ0nMPvM9RjqwbqygNtBbNIkLiRtIFSa3_IFDDnGDHs365cCZNI_Lwom3Cwb\">01755-597770</a></p><p>আপনি কি স্প্রেডশীট, ফর্মুলা এবং ডেটা এনালাইসিস কাজের জন্য ঘন্টার পর ঘন্টা সময় ব্যয় করছেন ? আপনি কি আপনার Excel Skill বাড়ানোর মাধ্যমে একজন Excel Pro হতে চান? তাহলে এই কোর্সটি হতে পারে আপনার ক্যারিয়ারের সফলতার জন্য একটি উত্তম মাধ্যম । বলা হয়ে থাকে Microsoft Excel- এ কেউ Efficient থাকলে তার চাকরী পাওয়ার সম্ভাবনা থেকে শুরু করে ক্যারিয়ারের উন্নতি কয়েকগুণ বৃদ্ধি পেয়ে যায়।</p><p>একজন প্রফেশনাল অথবা উদ্যোক্তা তার দৈনন্দিন কাজে AI, ML এর মত উন্নত প্রযুক্তি ব্যবহারের পাশাপাশি Data Analysis, Financial Management, Project Management, Finance, Accountancy, Consultancy, Marketing এর বিভিন্ন কাজের তথ্য বিশ্লেষণ করে সঠিক রিপোর্ট তৈরিতে Excel গুরুত্বপূর্ণ ভূমিকা পালন করে । তাই <a href=\"https://www.facebook.com/bizzsolutions?__cft__[0]=AZVs3XW38GwFeidZ2xLEvp31NAzw7sibMdLf09XNOlEk8_efoFNamnOEr_wgbQ1tLzVxUaSyYrYd0716IRIlnjHVduVAJu2QHM3wVwF2jkF8UFcuoQbGv7gLbvoasYz9F_TlIn3icvecfkLLSuE7hcIVyvHp2pvqBUuea6mQ61RCLUm5mVmudeGlfgEMlTwXXyE&amp;__tn__=-]K-R\">Bizz Solutions PLC</a> আয়োজন করতে যাচ্ছে Advanced Excel Training এর 17th Batch. Elevate Your Efforts with this Excel Training: Empowering Excellence !!!</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t55/1.5/16/1f7e2.png\" alt=\"?\"> এই কোর্সে আপনি যা যা শিখবেন ???</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/16/2705.png\" alt=\"✅\"> Proficiency in creating and using complex formulas and functions.</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/16/2705.png\" alt=\"✅\"> Ability to create dynamic and visually appealing charts, graphs, and dashboards.</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/16/2705.png\" alt=\"✅\"> Mastery of advanced data analysis techniques using tools like Pivot-Tables.</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/16/2705.png\" alt=\"✅\"> Competence in implementing data validation and protection measures to ensure data accuracy and security.</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/16/2705.png\" alt=\"✅\"> Advanced data modeling and analysis for making informed business decisions.</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/16/2705.png\" alt=\"✅\"> Efficient management and manipulation of large datasets for improved data handling.</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/16/1f535.png\" alt=\"?\"> Course Details:</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/16/1f539.png\" alt=\"?\"> কোর্স ফি: ৫,০০০ টাকা;</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/16/1f539.png\" alt=\"?\"> আর্লি বার্ড অফার: ৩,০০০ টাকা (প্রথম ১০ জনের জন্য);</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/16/1f539.png\" alt=\"?\"> ভর্তির শেষ সময়: ৩১শে আগস্ট, ২০২৩</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/16/1f539.png\" alt=\"?\"> কোর্স শুরু: ৫ই সেপ্টেম্বর, ২০২৩ (ক্লাস প্রতি মঙ্গলবার);</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/16/1f539.png\" alt=\"?\"> ক্লাসের সময়: রাত ৮:৩০ টা থেকে ১০:৩০ টা;</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/16/1f539.png\" alt=\"?\"> সেশন সংখ্যা: ৬ টি (২ ঘণ্টা প্রতি সেশন);</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t5/1.5/16/1f4cc.png\" alt=\"?\"> Apply Now: <a href=\"https://l.facebook.com/l.php?u=https%3A%2F%2Fforms.gle%2FnzYHFfAGPXmat5paA%3Ffbclid%3DIwAR1DCNe_Zy9gL64qvBqikNw7OJuvKOnWOIBTl2iBFgyQrZN3QgcRo5e-P-U&amp;h=AT35Q9-kRvllcoVjDr32y6zaWvHLqYRfvd-af85hK9yr7QPZWI-Mju1ey7peDftbGCBn8K-moLOKyOXrtArEkry5glkHUb54pcjqKEaJ8BZyPCr5YSVqH9od010LiqgS-tNc&amp;__tn__=-UK-R&amp;c[0]=AT1H_3UbHyf_vJhmFkhxHKzPISOri9naBqk74PWSV1kGdYFtgkMsVILKwWtBUEAoErqcLkkaftduUSFd95GeNiIz8a_7Ur-_D47Ow-sRVrSyJknULXCmjQ7suHTjkTbHBKs6wz9lASk6fYDBjQ0nMPvM9RjqwbqygNtBbNIkLiRtIFSa3_IFDDnGDHs365cCZNI_Lwom3Cwb\">https://forms.gle/nzYHFfAGPXmat5paA</a></p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t95/1.5/16/26ab.png\" alt=\"⚫\"> Resource Person:</p><p>Mr. Mohammad Refaul Karim Chowdhury (FCA, FFA, FIPA, MCT)</p><p>DGM - Finance, Transcom Distribution Co. Ltd.</p><p>VAT Consultant &amp; Treasurer, Bangladesh VAT Bar Association</p><p>Microsoft Certified Trainer</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t53/1.5/16/1f7e0.png\" alt=\"?\"> বিজ সলিউশনস আয়োজিত কোর্সটি কেন করবেনঃ</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> আপডেটেড কোর্স মডিউল।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> ইন্ডাস্ট্রি এক্সপার্ট ট্রেইনার ।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> ইন্টার্নশীপ সুবিধা ও লাইফ টাইম গাইডলাইন ।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> জুম প্লাটফর্ম এ অনলাইনের মাধ্যমে ক্লাসের ব্যবস্থা ও ক্লাস রেকর্ডিং প্রদান।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> রিয়েল লাইফ / হ্যান্ডস অন ওয়ার্কশপ/ট্রেনিং।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> Edubd.Tv তে বিশেষ ছাড়ে প্রি-রেকর্ডেড কোর্স করার সুযোগ।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> বিজ সলিউশনস কর্তৃক আয়োজিত বিভিন্ন সেমিনার ও ওয়ার্কশপে ফ্রি জয়েন করার সুযোগ।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/16/1f538.png\" alt=\"?\"> এক্সপার্ট রির্সোস পারসন কর্তৃক ফ্রি মেন্টরিং ও ক্যারিয়ার গাইড লাইনের সুযোগ।</p><p><img src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/16/1f4ac.png\" alt=\"?\"> বিস্তারিত: Bizz Solutions PLC, City Center 90/1, Level-25 Lift - 26, Motijheel C/A, Dhaka-1000, Ph: <a href=\"https://api.whatsapp.com/send?phone=8801755597770&amp;text=Link%3A%0Ahttps%3A%2F%2Ffb.me%2F1hitumR1d%0A%0AI%20saw%20this%20on%20Facebook...&amp;app=facebook&amp;fbclid=IwAR0jA9FYDa10Bl0kk8eM-lod4cdw8AwsNR4WgfZwBiHp5AArrcU-aHmAEcw\">01755-597770</a></p>', NULL, 5000, 3000, 6, '12 Hours', 'Tuesday', '2 Hours', 'English & Bangla', 'online', 'admission', '2023-08-01', '2023-09-08', '<p><strong>Course Module of Advanced Excel</strong></p><p>&nbsp;</p><p><strong>Session 1:</strong></p><p><strong>Topic 1: Introduction to Advanced Excel</strong></p><p>● Overview of Excel features and capabilities</p><p>● Understanding data organization and management</p><p>● Navigating the Excel interface efficiently</p><p>● Introduction to keyboard shortcuts and productivity tips</p><p><strong>Topic 2: Advanced Formulas and Functions</strong></p><p>● Working with logical functions (IF, AND, OR)</p><p>● Utilizing lookup functions (VLOOKUP, HLOOKUP, INDEX-MATCH)</p><p>● Implementing mathematical and statistical functions</p><p>● Exploring text manipulation functions</p><p>● Introduction to array formulas</p><p><strong>Session 2:</strong></p><p><strong>Topic 1: Advanced Data Manipulation</strong></p><p>● Using advanced filtering techniques (AutoFilter, Advanced Filter)</p><p>● Applying formulas across multiple sheets with 3D references</p><p>● Working with named ranges and range names</p><p>● Using data tables and scenarios for \"What-If\" analysis</p><p>● Introduction to Power Query for data transformation and cleansing</p><p><strong>Topic 2: Advanced Charting and Visualization</strong></p><p>● Creating dynamic charts using named ranges and formulas</p><p>● Customizing chart elements and formatting options</p><p>● Creating combination charts and dual-axis charts</p><p>● Building interactive dashboards with slicers and timelines</p><p>● Introduction to Sparklines for data visualization</p><p><strong>Session 3:</strong></p><p><strong>Topic 1: Advanced Data Analysis</strong></p><p>● Using advanced filters and criteria</p><p>● Performing advanced statistical analysis (correlation, regression)</p><p>● Analyzing data with the Analysis ToolPak add-in</p><p>● Using goal seek and solver for optimization problems</p><p>● Introduction to Power Pivot for data modeling and analysis</p><p><strong>Topic 2: Advanced Excel Tips and Tricks</strong></p><p>● Customizing the Excel ribbon and quick access toolbar</p><p>● Using conditional formulas and formatting for dynamic reports</p><p>● Working with data validation and drop-down lists</p><p>● Advanced data cleaning and manipulation techniques</p><p>● Time-saving shortcuts and productivity hacks</p><p><strong>Session 4:</strong></p><p><strong>Topic 1: Advanced PivotTable Techniques</strong></p><p>● Grouping and ungrouping data in PivotTables</p><p>● Creating calculated fields and items</p><p>● Using slicers and timelines for interactivity</p><p>● Utilizing PivotTable data analysis features</p><p>● Advanced PivotTable formatting and customization</p><p><strong>Topic 2: Collaborating with Excel</strong></p><p>● Sharing and protecting workbooks</p><p>● Tracking changes and comments</p><p>● Co-authoring and real-time collaboration</p><p>● Using data linking and consolidation</p><p>● Importing and exporting data from external sources</p><p><strong>Session 5 &amp; 6:</strong></p><p><strong>Topic 1: Data Analysis Tools</strong></p><p>● Sorting and filtering data effectively</p><p>● Using conditional formatting to highlight data</p><p>● Applying data validation rules</p><p>● Utilizing pivot tables for data analysis and reporting</p><p>● Creating and customizing charts to visualize data</p><p><strong>Topic 2: Advanced Data Validation and Conditional Formatting</strong></p><p>● Creating custom data validation rules</p><p>● Using formulas and validation lists</p><p>● Applying conditional formatting with formulas</p><p>● Icon sets and data bars for visual indicators</p><p>● Managing conditional formatting rules and priorities</p><p><strong>Topic 3: Advanced Excel Tips and Tricks II</strong></p><p>● Advanced data analysis with array formulas</p><p>● Using Goal Seek and Solver for complex problems</p><p>● Introduction to Excel add-ins for specialized tasks</p><p>● Working with external data connections</p><p>● Tips for optimizing and improving spreadsheet performance</p>', 'certificate-course-on-advanced-excel-training', '2023-09-05 18:00:00', 1, NULL, NULL, '2023-09-06 01:29:59', '2023-09-06 01:29:59'),
(4, 5, 'Certificate Course on VAT & Tax Management', '/uploads/thumbnail/1693985516-thumbnail.jpg', '/uploads/banner/1693985516-banner.jpg', '<p>Establish the right situation, cycles and controls to guarantee that Income Tax &amp; Value Added Tax on important exchanges are recorded and revealed precisely, as needed by the VAT guidelines. LCBS Dhaka has designed a suite of VAT &amp; TAX training course for all levels of employees in both corporate and government sectors. We aim to equip you with the knowledge and skills to embrace the many challenges of this new regime. Complete your VAT &amp; Tax online training course today!</p>', 'BamroKQLbrs', 10000, 6000, 10, '20 Hours', '2 Days per week (Friday & Saturday).', '2 hours/Day (8:00 pm to 10:00 Pm)', 'Bangla, English', 'online', 'going_on', '2023-07-01', '2023-08-29', '<p>This training nurtures learning of the graduates and professionals and develops professionalism in delivering accounting services independently and enhances their skill to tap the market opportunity. Moreover, it is intended for managers who are keen to learn about financial aspects under micro scrutiny and reduce the chances of wrong decisions. It will further provide smart tips to: Better Understanding of Income Tax Management Better understanding of accounting, Tax and VAT knowledge for your career Identify tax planning opportunities Learn new legal provisions related to income tax and VAT Create appropriate tax saving opportunities for proper business planning.</p>', 'certificate-course-on-vat-tax-management', '2023-09-05 18:00:00', 1, NULL, NULL, '2023-09-06 01:31:56', '2023-09-06 01:31:56');

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
(12, 'Training', 'd4243c911363565f', 12, '/uploads/industries/1698133415-industry.png', NULL, '2023-10-24 01:43:35', '2023-10-24 01:43:35');

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
(30, '2023_09_12_041307_add_icons_in_services_table', 13);

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
(1, 'Client-1', 1, 'Client-1', '/uploads/clients/1698131403-client.png', 1, 1, NULL, '2023-09-04 00:28:14', '2023-10-24 01:10:03'),
(2, 'Client-2', 2, NULL, '/uploads/clients/1698131413-client.png', 1, 1, NULL, '2023-09-04 00:32:04', '2023-10-24 01:10:13'),
(3, 'Client-3', 3, NULL, '/uploads/clients/1698131426-client.png', 1, 1, NULL, '2023-09-04 00:32:27', '2023-10-24 01:10:26'),
(4, 'Client-4', 4, NULL, '/uploads/clients/1698131443-client.png', 1, NULL, NULL, '2023-10-24 01:10:43', '2023-10-24 01:10:43'),
(5, 'Client-5', 5, NULL, '/uploads/clients/1698131457-client.png', 1, NULL, NULL, '2023-10-24 01:10:57', '2023-10-24 01:10:57'),
(6, 'Client-6', 6, NULL, '/uploads/clients/1698131475-client.png', 1, NULL, NULL, '2023-10-24 01:11:15', '2023-10-24 01:11:15'),
(7, 'Client-7', 7, NULL, '/uploads/clients/1698131491-client.png', 1, NULL, NULL, '2023-10-24 01:11:31', '2023-10-24 01:11:31'),
(8, 'Client-8', 8, NULL, '/uploads/clients/1698131504-client.png', 1, NULL, NULL, '2023-10-24 01:11:44', '2023-10-24 01:11:44'),
(9, 'Client-9', 9, NULL, '/uploads/clients/1698131514-client.png', 1, NULL, NULL, '2023-10-24 01:11:54', '2023-10-24 01:11:54'),
(10, 'Client-10', 10, NULL, '/uploads/clients/1698131606-client.png', 1, NULL, NULL, '2023-10-24 01:13:26', '2023-10-24 01:13:26'),
(11, 'Client-11', 11, NULL, '/uploads/clients/1698131617-client.png', 1, NULL, NULL, '2023-10-24 01:13:37', '2023-10-24 01:13:37'),
(12, 'Client-12', 13, NULL, '/uploads/clients/1698131640-client.png', 1, 1, NULL, '2023-10-24 01:14:00', '2023-10-24 01:15:01'),
(13, 'Client-14', 14, NULL, '/uploads/clients/1698131660-client.png', 1, NULL, NULL, '2023-10-24 01:14:20', '2023-10-24 01:14:20'),
(14, 'Client-13', 1, NULL, '/uploads/clients/1698131686-client.png', 1, 1, NULL, '2023-10-24 01:14:46', '2023-10-24 01:19:23');

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
(1, 'e3ba4c2028c29363', 'Md Omar Farook', 'Sr. Executive', '01822252198', 'md.farook@ssgbd.com', '/gmfaruk2021', '/gmfaruk2021', '/gmfaruk2021', '/uploads/teams/1694428005-avatar.png', 1, 1, NULL, '2023-09-03 22:58:21', '2023-09-11 04:26:45'),
(2, '0ef8cbd18a6080a3', 'Zakir Hossain', 'Sr. Executive', '0170000000', 'zakir7dipu@gmail.com', NULL, NULL, NULL, '/uploads/teams/1693803698-avatar.png', 1, NULL, '2023-10-04 03:31:57', '2023-09-03 23:01:38', '2023-10-04 03:31:57');

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
(1, 'SAP', 1, 'SAP Patner', '/uploads/partner/1698131202-client.png', 1, 1, NULL, '2023-09-04 03:25:08', '2023-10-24 01:06:42'),
(2, 'SSG', 7, 'SSG', '/uploads/partner/1698131213-client.png', 1, 1, NULL, '2023-09-04 03:28:09', '2023-10-24 01:06:53'),
(3, 'BCL', 3, 'BCL', '/uploads/partner/1698131236-client.png', 1, 1, NULL, '2023-09-04 03:28:31', '2023-10-24 01:07:16'),
(4, 'CFO', 6, 'CFO', '/uploads/partner/1698131260-client.png', 1, 1, NULL, '2023-09-04 03:28:51', '2023-10-24 01:07:40'),
(5, 'QB', 4, NULL, '/uploads/partner/1698131278-client.png', 1, NULL, NULL, '2023-10-24 01:07:58', '2023-10-24 01:07:58'),
(6, 'Tally', 2, NULL, '/uploads/partner/1698131295-client.png', 1, NULL, NULL, '2023-10-24 01:08:15', '2023-10-24 01:08:15'),
(7, 'Xero', 5, NULL, '/uploads/partner/1698131307-client.png', 1, NULL, NULL, '2023-10-24 01:08:27', '2023-10-24 01:08:27');

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
(1, NULL, 'Software Development', 'software-development', NULL, '<p>N/A</p>', '/uploads/services/1695206880-service.png', 'product', 'Software Development', 'Software Development, Web, Bizz', 'Software Development Details', '/uploads/services/1695206880-service.png', '/uploads/services/1695206880-icons.png', 1, 1, NULL, '2023-09-05 00:37:17', '2023-09-20 04:48:00'),
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
(1, 'Omar Farook Hridoy', 'admin@bizzsol.com.bd', '01822252198', 'uploads/users/1693283015-avatar.jpg', 'Hi, I\'m Omar Farook, has been the industry standard dummy text ever since the 2017', NULL, '$2y$10$IkZ6cTYPcNQnZpLTZ.XD6u3NCRjoqlajR5k4GuhlJt9.q.lHmm7Dy', NULL, '2023-08-26 03:44:56', '2023-08-28 22:23:35');

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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `our_clients`
--
ALTER TABLE `our_clients`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `our_managements`
--
ALTER TABLE `our_managements`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `our_teams`
--
ALTER TABLE `our_teams`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
