import React from "react";

const Navbar = props =>{
    function getNavItems(){
        /*let items=[
            {href:"#",text:"Home",active:true},
            {href:"#",text:"Features"},
            {href:"#",text:"Price"},
            {href:"#",text:"Contact"}
        ]*/
        return props.items.map((items, index)=>{
            return (<a key={index} className={[items.active?"active nav-link text-light":"nav-link text-light"]} href={items.href}>{items.text}</a>)
        })
    }


    return(
        <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid ">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <div className="navbar-nav ">
            {getNavItems()}
        </div>
    </div>
  </div>
</nav>
    )

}

export default Navbar;