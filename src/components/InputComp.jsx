import React from 'react'

const InputComp = (props) => {

    const color = props.color ? '#E5BEEC' : '#2A2F4F'
    const text = props.color ? '#2A2F4F' : '#E5BEEC' 

    return (
                <div className={`container rounded  m-auto   p-4 m-4 mt-5 ${props.color? 'text-dark': 'text-light'}`} 
                style={{backgroundColor: color, color:text}}>

                <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Title</label>
                <input type="text" value={props.titlevalue} className="form-control" name='myTitle'  onChange={props.getInput}  placeholder="Add Title" />
                </div>
                <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Add note</label>
                <input type="text" value={props.notevalue} className="form-control" name='myNote' onChange={props.getInput} id="note" placeholder="Add Note" />
                </div>
                <a href="#" onClick={props.addNote}  className={`btn   `}
                style={{backgroundColor: text, color:color}} id="addnote">Add note</a>
            </div>




    )
}

export default InputComp