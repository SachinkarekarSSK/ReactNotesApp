import React, { useState } from "react";
import './App.css'
import Navbar from "../src/components/Navbar";
import InputComp from "./components/InputComp";
import CardContainer from "./components/CardContainer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  'use strict'
  const [noteObj, setnoteObj] = useState({
    myTitle: '',
    myNote: '',
  })

  const [arr, setarr] = useState([])

  // const [titleval, settitleval] = useState('')
  // const [noteval, setnoteval] = useState('')

  let currentTime = new Date().toLocaleTimeString()

  const getInput = (event) => {
    let { name, value } = event.target



    setnoteObj((oldObj) => {
      return {
        ...oldObj,
        [name]: value,
        Time: currentTime
      }
    })

  }

  const addnewNote = () => {

    if (noteObj.myNote != '') {

      setarr((oldarr) => {
        return [...oldarr, noteObj]
      })
    }
    setnoteObj({
      myTitle: '',
      myNote: '',
    })

  }


  const onClickDelete = (id) => {
    setarr((oldarr) => {
      return oldarr.filter((item, index) => {
        return index !== id
      })
    })
  }

  const [color, setcolor] = useState(false)
  const modeChange = () => {
    console.log('clicked on dark mode');
    
    
    if (!color) {
      setcolor(true)
      console.log('clicked -> true', color);
      document.body.style.background = '#2A2F4F'

      

    } else {
      setcolor(false)
      console.log('clicked -> false', color);
      document.body.style.background = '#FDE2F3'
    }

  }

  const bgcolor = color ? '#2A2F4F' : '#FDE2F3'
  

  return (
    <>
      <div style={{ background: bgcolor, height:'100vh'}}>

        <Navbar modeChange={modeChange} color={color} />
        <InputComp titlevalue={noteObj.myTitle} notevalue={noteObj.myNote} getInput={getInput} addNote={addnewNote} color={color} />

        <div className="container d-flex flex-wrap ">

          {arr.map((item, index) => {
            return <CardContainer
              key={index}
              id={index}
              noteIndex={index}
              noteTitle={item.myTitle}
              note={item.myNote}
              time={item.Time}
              deletefunc={onClickDelete}
              color={color}
            />
          })}
        </div >
    </div >
    </>
  )
}

export default App