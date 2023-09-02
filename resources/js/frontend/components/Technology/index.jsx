import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllIndustries} from "../../../featurs/Industries/IndustriesSlice.js";
import {fetchTechnologySettings} from "../../../featurs/Settings/SettingsSlice.js";
import {fetchAllTechnology} from "../../../featurs/Technology/TechnologySlice.js";
import Item from "./Item.jsx";
import {uid} from "../../../lib/helper.js";

function Index(props) {
    const {technology} = useSelector(state => state.generalSettings)
    const {isLoading, technologies} = useSelector(state => state.technologyReducer)
    console.log(technologies)
    const {title, sub_text, limit} = technology
    const dispatch = useDispatch()

    useEffect(()=>{
        if(Object.keys(technology).length) {
            dispatch(fetchAllTechnology(limit))
        }
    },[technology, limit])

    useEffect(() => {
        dispatch(fetchTechnologySettings())
    }, [dispatch])
    return (
        <div className="rs-technology gray-color pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-45">
                    <span className="sub-text gold-color">{sub_text}</span>
                    <h2 className="title title2" style={{float: "none"}}>{title}</h2>
                </div>
                <div className="row">
                    {isLoading && ""}
                    {technologies && technologies.map(item=><Item
                        info={item}
                        key={uid()}
                    />)}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/2.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/3.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/4.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/5.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/6.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/7.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/8.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/9.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/10.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/11.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/12.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/13.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/14.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/15.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/16.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/17.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-2 col-md-4 col-sm-4 col-6">*/}
                    {/*        <div className="technology-item">*/}
                    {/*            <a href="#">*/}
                    {/*                <div className="logo-img">*/}
                    {/*                    <img src="assets/images/technology/style2/18.png" alt="">*/}
                    {/*                </div>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                </div>
            </div>
        </div>
    );
}

export default Index;
