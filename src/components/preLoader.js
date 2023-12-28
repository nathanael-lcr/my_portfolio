import React, { useEffect } from 'react'
import './preLoader.css'
import { preLoaderAnim } from '../animations';

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    }, []);

    return (
        <div className="preloader">
            <div className="text-containers">
                <span>Developer</span>
                <span>Student</span>
                <span>Designer</span>
            </div>
        </div>
    )
}

export default Preloader