import React from "react";

const Card = props => {
    function getCardInfo() {
        return props.items.map(items => {
            return (
                <div className="card" style={{ width: '10rem;' }}>
                    <img src={items.src} className="card-img-top" alt={items.alt}></img>
                    <div className="card-body">
                        <h5 className={"card-title"}>{items.title}</h5>
                        <p className={"card-text"}>{items.text}</p>
                        <a href={items.href} className="btn btn-primary">{items.boton}</a>
                    </div>
                    )
        })
    }

    /*function getCardImg() {
        /*let imagen=[
            {href:"#",text:"Home",active:true},
            {href:"#",text:"Features"},
            {href:"#",text:"Price"},
            {href:"#",text:"Contact"}
        ]
        return props.items.map(items => {
            return (<img src={items.src} className="card-img-top" alt={items.alt}></img>)
        })
    }

    function getCardTitle(){
        return props.items.map(items => {
            return (<h5 className={"card-title"}>{items.title}</h5>)
        })
        //<p className={"card-text"}>{items.text}</p><a href={items.href} className="btn btn-primary">{items.boton}</a></div>
    }

    function getCardText(){
        return props.items.map(items => {
            return (<p className={"card-text"}>{items.text}</p>)
        })
        //<p className={"card-text"}>{items.text}</p><a href={items.href} className="btn btn-primary">{items.boton}</a></div>
    }

    function getCardBoton(){
        return props.items.map(items => {
            return (<a href={items.href} className="btn btn-primary">{items.boton}</a>)
        })
        //<p className={"card-text"}>{items.text}</p><a href={items.href} className="btn btn-primary">{items.boton}</a></div>
    }*/

    




                    return (
                    <div className="card-group">
                        {getCardInfo()}
                    </div>

                    )
}

                    export default Card;