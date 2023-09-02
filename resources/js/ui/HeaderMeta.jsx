import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import {useDispatch, useSelector} from "react-redux";
import {useInternalLink} from "../lib/helper.js";
import {fetchSeoData} from "../featurs/SEOSlice/SEOSlice.js";

function HeaderMeta({title, page}) {
    const {generalSetting} = useSelector(state => state.generalSettings);
    const [siteName, setSiteName] = useState("Bizz Solution Plc")
    const [siteFavicon, setSiteFavicon] = useState("");
    const {isLoading, seo} = useSelector(state => state.SeoReducer)
    const {
        canonical,
        description,
        keywords,
        og_description,
        og_title,
        og_type,
        robots,
        twitter_card,
        twitter_creator,
        twitter_description,
        twitter_title
    } = seo
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchSeoData(page))
    },[dispatch])

    useEffect(()=>{
        setSiteName(`${generalSetting?.general?.site_name} | ${title}`)
        setSiteFavicon(`/${generalSetting?.general?.site_favicon}`)
    },[generalSetting])
    return (
        <Helmet>
            <title>{siteName}</title>
            <meta name="robots" content={robots || "noindex, nofollow"}/>
            <meta name='keywords' content={keywords || ""}/>
            <meta name='description' content={description || ""}/>
            <meta property="og:type" content={og_type || ""}/>
            <meta property="og:title" content={og_title || ""}/>
            <meta property="og:description" content={og_description || ""}/>
            <meta name="twitter:creator" content={twitter_creator || ""}/>
            <meta name="twitter:card" content={twitter_card || ""}/>
            <meta name="twitter:title" content={twitter_title || ""}/>
            <meta name="twitter:description" content={twitter_description || ""}/>
            <link rel="canonical" href={canonical || ""}/>
            <link rel="icon" type="image/png" href={useInternalLink(siteFavicon)}/>
        </Helmet>
    )
}

export default HeaderMeta;
