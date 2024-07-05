import React from 'react'
import "./cards.css"
const Card = ({data}) => {
    return <>
    
            <div className='container'>
                <h3>{data.name}</h3>
                <p>{data.descr}</p>
                <button>{data.link1}</button>
                <button>{data.link2}</button>
                <button>{data.link3}</button>
                <p>{data.intrest}</p>
            </div>

    </>
}

export default Card