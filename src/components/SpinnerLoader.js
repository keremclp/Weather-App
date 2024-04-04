    import React, { useState, useEffect } from "react";
    import Spinner from "../spinner-animated.svg";
    export default function SpinnerLoader() {
    const [showImg, setShowImg] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setShowImg(false);
        },3000);
    }, []);
    return (
        <>
            <div>
                {showImg && <img src={Spinner} alt="spinner" />}
            </div>
        </>
        );
    }
