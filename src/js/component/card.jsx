import React from 'react'

const Card=(props)=>{
    return(
        <div className="card mt-2" style={{width: "18rem"}}>
        <img src={props.img.src} className="card-img-top" alt={props.img.alt || "Image"} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.button.href} className="btn btn-primary">{props.button.text}</a>
        </div>
        </div>
    )
}

export default Card