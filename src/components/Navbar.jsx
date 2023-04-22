import React from 'react'

const Navbar = (props)=>{

    const color = props.color ? '#2A2F4F' : '#E5BEEC'
    const text = props.color ? '#E5BEEC' : '#2A2F4F'
  

    return(
        <nav className={`navbar navbar-expand-lg navbar-dark ${props.color? ' text-white': ' text-dark'}` } 
            style={{ backgroundColor:color, color:text}}  >
            <div className="container-fluid">
                <a className={`navbar-brand ${props.color? 'text-light': 'text-dark'}`} href="#">{"< SSK /> ~ Notes"}</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className={`navbar-toggler-icon text-dark ${props.color ? 'bg-dark ' : 'bg-white '}`}></span> */}
                    <i className={`fas fa-bars `} style={{color:text}}></i>
                </button>

 


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link active ${props.color? ' text-light': 'text-dark'}`} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active ${props.color ? ' text-light' : 'text-dark'}`} aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active ${props.color ? ' text-light' : 'text-dark'}`} aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex justify-content-center" role="search">
                        <div className="form-check form-switch item-center">
                            <input className="form-check-input" onClick={props.modeChange} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label ${props.color? 'text-light ': 'text-dark '}`} htmlFor="flexSwitchCheckDefault">{`${props.color? 'Disable Dark Mode':'Enable Dark Mode'}`}</label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar