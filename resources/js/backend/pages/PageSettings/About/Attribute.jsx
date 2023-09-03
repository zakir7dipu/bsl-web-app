import React, {useState} from 'react';
import {ucFirst} from "../../../../lib/helper.js";

function Attribute({info, handler}) {
    const {title, bg, icon, hoverIcon, brief} = info
    const [inputTitle, setTitle] = useState(title || "")
    const [inputIcon, setIcon] = useState(icon || "")
    const [inputHoverIcon, setHoverIcon] = useState(hoverIcon || "")
    const [inputBrief, setBrief] = useState(brief || "")

    const handleInputChange = (event) => {
        const { name, value, files } = event.target;
        console.log({ [name]: value });

        if (name.includes('title')){
            setTitle(value)
        } else if (name.includes('icon')){
            setIcon(files[0])
        } else if (name.includes('secondary_icon')){
            setHoverIcon(files[0])
        } else if (name.includes('brief')){
            setBrief(value)
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <h4>{ucFirst(title || "")}</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Attribute Title
                    </label>
                    <input
                        className="form-control"
                        value={inputTitle}
                        placeholder="Project count"
                        type="text"
                        name={`${title.replaceAll(" ", "_")}_title`}
                        onChange={e=>handleInputChange(e)}
                    />
                </div>
                <div className="form-group mt-2">
                    <label>Attribute Icon
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        name={`${title.replaceAll(" ", "_")}_icon`}
                        onChange={e=>handleInputChange(e)}
                    />

                </div>
                <div className="form-group mt-2">
                    <label>Attribute Secondary Icon
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        name={`${title.replaceAll(" ", "_")}_secondary_icon`}
                        onChange={e=>handleInputChange(e)}
                    />

                </div>
                <div className="form-group mt-2">
                    <label>Attribute Brief
                    </label>
                    <textarea
                        className="form-control"
                        name={`${title.replaceAll(" ", "_")}_brief`}
                        id="textarea" cols="30"
                        rows="3"
                        placeholder="Brief"
                        value={inputBrief}
                        onChange={e=>handleInputChange(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Attribute;
