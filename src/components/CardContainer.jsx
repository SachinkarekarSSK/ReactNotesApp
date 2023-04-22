import React from "react";

const CardContainer = (props) => {

    const bgcolor = props.color ? '#E5BEEC' : '#917FB3'
    const text = props.color ? '#2A2F4F' : '#2A2F4F' 
    return (
        <>
        
        <div className="card mx-3 my-3" style={{width: "19rem"}}>
            <div className={`card-body rounded `}
            style={{backgroundColor:bgcolor   , color:text}}>
                <h5 className="card-title"> Note {props.noteIndex+1} </h5>
                <h3 className="card-text">{props.noteTitle}</h3>
                <p className="card-text">{props.note}</p>
                <p className="card-text">{props.time}</p>
                    <a className="btn btn-danger"  onClick={()=>{
                        props.deletefunc(props.id)
                    }}><i class="fas fa-trash-alt fa-lg"></i></a>
             </div>
        </div>
        </>
    )
}

export default CardContainer
