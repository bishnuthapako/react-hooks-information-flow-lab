import React, {useState} from 'react'

export default function Header({onDarkModeClick}) {


    return (
        <div onClick={onDarkModeClick} className="header" style={{backgroundColor: "#fff"}}></div>
    )
}
