import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import {useSelector} from "react-redux";
import {useInternalLink} from "../lib/helper.js";

function HeaderMeta({title = '', robots = "", keywords = "", description = '', name = '', type = 'article', url = '/'}) {
    const {generalSetting} = useSelector(state => state.generalSettings);
    const [siteName, setSiteName] = useState("Bizz Solution Plc")
    const [siteFavicon, setSiteFavicon] = useState("");

    useEffect(()=>{
        setSiteName(`${generalSetting?.site_name} | ${title}`)
        setSiteFavicon(`/${generalSetting?.site_favicon}`)
    },[generalSetting])
    return (
        <Helmet>
            <title>{siteName}</title>
            <meta name="robots" content={robots}/>
            <meta name='keywords' content={keywords}/>
            <meta name='description' content={description}/>
            <meta property="og:type" content={type}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta name="twitter:creator" content={name}/>
            <meta name="twitter:card" content={type}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <link rel="canonical" href={url}/>
            <link rel="icon" type="image/png" href={useInternalLink(siteFavicon)}/>
        </Helmet>
    )
}

export default HeaderMeta;
