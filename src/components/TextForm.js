import React ,{useState} from 'react'


export default function (props) {
    
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert(" Converted to uppercase", "success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleLoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert(" Converted to lowercase","success");
    }

    const handleclearText=()=>{
        let newtext="";
        setText(newtext)
        props.showAlert(" Text cleared","success");
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert(" Text copied","success");
    }

    const handleExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert(" Extra spaces removed", "success");
    }

    const [text,setText]= useState("");
  return (
    <div className="container">
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-outline-primary mx-2 my-2"onClick={handleUpClick}>Convert to UpperCase</button>
        <button type="button" className="btn btn-outline-primary mx-2 my-2"onClick={handleLoClick}>Convert to LowerCase</button>
        <button type="button" className="btn btn-outline-primary mx-2 my-2"onClick={handleclearText}>Clear Text</button>
        <button type="button" className="btn btn-outline-primary mx-2 my-2"onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-outline-primary mx-2 my-2"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div> 
    <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts to read</p>
        <h3 className='container'>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
  </div>
  )
}
