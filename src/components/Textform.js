import React, { useState } from 'react'

export default function Textform(props) {

   

    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handelLpClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const underscore = () => {
        let newText = text.split(" ").join("_");
        setText(newText);
    }

    const handelOnChange = (e) => {
        setText(e.target.value);
        
    }

    const [text, setText] = useState("Enter Text Hare");

    return (
        <>
            <div className="container mb-3">
                <h2 className='mb-3'>Enter the text Here</h2>
                <textarea className="form-control mb-3" value={text} onChange={handelOnChange} id="mybox" rows={8} />
                <button type="button" onClick={handelUpClick} className="btn btn-primary mr-2">Convert to Uppercase</button>
                <button type="button" onClick={handelLpClick} className="btn btn-primary mr-2">Convert to Lowercase</button>
                <button type="button" onClick={underscore} className="btn btn-primary mr-2">Add Underscore</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <h2>Previw</h2>
                <p>{text.split(" ").join("_")}</p>
            </div>
        </>
    )
}
