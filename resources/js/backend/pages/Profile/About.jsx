import React, {useEffect, useState} from 'react';
import {editUserData, getAuthUser} from "../../../featurs/AuthAction/AuthSlice.js";
import {useDispatch, useSelector} from "react-redux";

import FileInput from "../../components/inputFile/Index.jsx";
import {warningMessage} from "../../../lib/helper.js";

function About() {

    const {isAuthLoading, user, token, isAccess, errorMessage} = useSelector(state => state.authUser);
    const dispatch = useDispatch()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [abouts, setAbouts] = useState("");
    const [avatar, setAvatar] = useState("");
    const [avatarLink, setAvatarLink] = useState("");

    const inputFileHandler = (file) => {
        setAvatar(file[0])
        setAvatarLink(file[0])
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!name) {
            warningMessage("Name is required.")
        } else {
            formData.append("name", name);
        }

        if (!email) {
            warningMessage("email is required.")
        } else {
            formData.append("email", email);
        }

        if (!phone) {
            warningMessage("phone is required.")
        } else {
            formData.append("phone", phone);
        }

        if (abouts) {
            formData.append("abouts", abouts);
        }
        if (avatar) {
            formData.append("avatar", avatar);
        }

        if (name && email && phone) {
            dispatch(editUserData(formData))
        }
    }

    const resetHandler = () => {
        setName(user?.name)
        setEmail(user?.email)
        setPhone(user?.phone)
        setAbouts(user?.abouts)
    }

    useEffect(() => {
        if (user) {
            setName(user?.name)
            setEmail(user?.email)
            setPhone(user?.phone)
            setAbouts(user?.abouts)
        }
    }, [user])

    useEffect(() => {
        dispatch(getAuthUser())
    }, [])

    return (
        <div className="card">
            <div className="card-header">
                <h4>Update Information</h4>
            </div>
            <div className="card-body">
                <form className="form-profile" onSubmit={requestHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" value={name}
                                       onChange={(e) => {
                                           setName(e.target.value)
                                       }} placeholder="name" type="text"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" name="email" placeholder="email" type="email"
                                       value={email}
                                       onChange={(e) => {
                                           setEmail(e.target.value)
                                       }}/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Phone</label>
                                <input className="form-control" name="phone" placeholder="phone" type="text"
                                       value={phone}
                                       onChange={(e) => {
                                           setPhone(e.target.value)
                                       }}/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <FileInput
                                    label={"Avatar"}
                                    file={avatar}
                                    id={"avatar"}
                                    handler={inputFileHandler}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="form-group">
                        <label>About</label>
                        <textarea className="form-control" name="textarea" id="textarea" cols="30" rows="2"
                                  placeholder="About" value={abouts}
                                  onChange={(e) => {
                                      setAbouts(e.target.value)
                                  }}></textarea>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-primary px-3" type={"submit"}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default About;
