import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSeoData, saveSeoData} from "../../../../featurs/SEOSlice/SEOSlice.js";
import {errorMessage} from "../../../../lib/helper.js";
import Preloader from "../../../components/Preloader/Index.jsx";

function HomeSeo() {
    const {isLoading, seo} = useSelector(state => state.SeoReducer);

    const dispatch = useDispatch()

    const [robots, setRobots] = useState("");
    const [author, setAuthor] = useState("");
    const [keywords, setKeywords] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [url, setUrl] = useState("");

    const requestHomeHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append("page", 'home');

        if (author) {
            formData.append("author", author);
        }

        if (!keywords) {
            errorMessage("keywords is required.")
        } else {
            formData.append("keywords", keywords);
        }

        if (!description) {
            errorMessage("description is required.")
        } else {
            formData.append("description", description);
        }

        if (!robots) {
            errorMessage("Description is required.")
        } else {
            formData.append("robots", robots);
        }

        if (type) {
            formData.append("type", type);
        }

        if (url) {
            formData.append("url", url);
        }

        if (keywords && description) {
            dispatch(saveSeoData(formData))
        }
    }

    useEffect(() => {
        if (seo) {
            setRobots(seo?.robots)
            setAuthor(seo?.twitter_creator)
            setKeywords(seo?.keywords)
            setDescription(seo?.description)
            setType(seo?.og_type)
            setUrl(seo?.canonical)
        }
    }, [seo])

    useEffect(() => {
        dispatch(fetchSeoData('home'))
    }, []);

    if (!isLoading) {
        return (
            <div className="col-lg-6 col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Home Page SEO</h4>
                    </div>
                    <div className="card-body">
                        <form className="form-profile" onSubmit={requestHomeHandler}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Author</label>
                                        <input
                                            className="form-control"
                                            value={author}
                                            onChange={e => setAuthor(e.target.value)}
                                            placeholder="Site author"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Page Type</label>
                                        <input
                                            className="form-control"
                                            value={type}
                                            onChange={e => setType(e.target.value)}
                                            placeholder="Page type"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Page URL</label>
                                        <input
                                            className="form-control"
                                            value={url}
                                            onChange={e => setUrl(e.target.value)}
                                            placeholder="Page url"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Is Robots</label>
                                        <select className="form-control" name="robots" value={robots}
                                                onChange={e => setRobots(e.target.value)}>
                                            <option value="allow">Allow</option>
                                            <option value="link_only">Link Only</option>
                                            <option value="deny">Deny</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Meta Keywords</label>
                                        <textarea
                                            className="form-control"
                                            name="textarea"
                                            id="textarea" cols="30"
                                            rows="3"
                                            placeholder="Meta keywords"
                                            value={keywords}
                                            onChange={e => setKeywords(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea
                                            className="form-control"
                                            name="textarea"
                                            id="textarea" cols="30"
                                            rows="3"
                                            placeholder="Meta description"
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-primary px-3 float-right"
                                                type={"submit"}>Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Preloader/>
    }

}

export default HomeSeo;
