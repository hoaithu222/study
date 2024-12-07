import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function GoBack() {
    const navigate = useNavigate();
    console.log(navigate);
    const handleClick = (e) => {
        navigate(-1);
    }

    return (

        <div>
            <button onClick={handleClick}>Trở lại</button>
        </div>
    )
}
