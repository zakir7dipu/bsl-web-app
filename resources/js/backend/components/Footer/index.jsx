import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function Index(props) {
    const [currentYear, setCurrentYear] = useState("")
    useEffect(()=>{
        let date = new Date()
        let year = date.getFullYear()
        setCurrentYear(year);
    },[])
    return (
        <div className="footer">
            <div className="copyright">
                <p>Copyright &copy; Designed & Developed by <Link
                    to="/">Bizz Solutions Plc</Link> {currentYear}</p>
            </div>
        </div>
    );
}

export default Index;
