import React from "react";
import React,{useState} from "react";
import "./style.css";
import AllList from "./allList";
import NewList from "./newList";
import ProcessingList from "./processingList";
import FinishedList from "./finishedList"


export default function App() {
 
const[allprint,setAllPrint]=useState(false)
const[newprint,setNewPrint]=useState(false)
const[processingprint,setProcessingPrint]=useState(false)
const[finishedprint,setFinishedPrint]=useState(false)
function allbutton(){ 
 
    setAllPrint(true)
}
function newbutton(){
  setNewPrint(true)
}

function processingbutton(){
  setProcessingPrint(true)
}
function finishedbutton(){
  setFinishedPrint(true)
}
  return (
  <div className="App">
  

    <button onClick={allbutton}>all</button>
      {  allprint?
        (<AllList/>)
        :""
      }
     <button onClick={newbutton}>new</button>
      {  newprint?
        (<NewList/>)
        :""
      }
     <button onClick={processingbutton}>processing</button>
      {  processingprint?
        (<ProcessingList/>)
        :""
      }
      <button onClick={finishedbutton}>finished</button>
      {  finishedprint?
        (<FinishedList/>)
        :""
      } 
  </div>
  );
}
