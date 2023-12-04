import React, { useState } from 'react'

export default function Usest(props) {
  let [a, b] = useState("")
  let handleUpcase = () => {
    console.log("click to hua ");
    let newcaps = a.toUpperCase();
    b(newcaps);
    props.showAlert(" Converted to Uppercase","success")
  }

  let handleLocase = () => {
    console.log(" clicked");
    let newcaps = a.toLowerCase();
    b(newcaps);
    props.showAlert(" Converted to Lowercase","success")
  }

  let handlecleartext = () => {
    console.log(" clicked");
    let newcaps = "";
    b(newcaps);
    props.showAlert(" Text is cleared","success")
  }
  
  let handlecopytext = () => {
    console.log(" copy text");
    let newcaps=document.getElementById("demo");
    props.showAlert(" Text is copied","success")

    newcaps.select();
    navigator.clipboard.writeText(newcaps.value);
  }
  let handllerRemovespace=()=>{
    console.log("removed space");
    let newcaps=a.split(/[ ]+/);
    b(newcaps.join(" "))
    props.showAlert(" Space is removed","success")

  }

  let changehonevala = (event) => {
    console.log("change hua to shai");
    b(event.target.value);
  }
  

  return (
    <>
      <div className="container bg-secondary  text-dark bg-opacity-10">
        <h2 className='Container'>  This is a heading </h2>
        <div className='container mb-3'>
          <textarea className="form-control" id="demo" rows="8" value={a} onChange={changehonevala} > </textarea>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpcase}   > Change to Upper case </button>
          <button className="btn btn-primary my-2" onClick={handleLocase}> Change to lower case</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handlecleartext}> Clear Text</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handlecopytext}> Copy Text</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handllerRemovespace}> Remove space</button>
          
        </div>
      </div>
      <div className='container my-3 border border-primary w-75 bg-info text-dark' >
        <h2 >This is a summary</h2>
        <p>{a.split(/\s/).length} word and {a.length} characters</p>
        <p>{0.008* a.split(" ").length} minutes to read</p>
</div>
    </>
  )
}
