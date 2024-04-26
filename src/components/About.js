import React, { useState } from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
        backgroundColor: "black",
        color: "white"
    })
    
    const [btnTxt, setBtnTxt] = useState("dark");

    const toggleStyle = () => {
        if(myStyle.color === "white"){
            setMyStyle({
                backgroundColor: "white",
                color: "black"
            })
            setBtnTxt ("Light");
        }
        else{
            setMyStyle({
                backgroundColor: "black",
                color: "white"
            })
            setBtnTxt ("Dark");
        }
    }

  return (
    <>
      <div className="container my-3 py-4" style={myStyle}>
        <h1 className='mb-3'>About Us</h1>
        <div className="accordion" id="accordionExample" >
          <div className="card">
            <div className="card-header" id="headingOne" style={myStyle}>
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Collapsible Group Item #1
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body" style={myStyle}>
                Some placeholder content for the first accordion panel. This
                panel is shown by default, thanks to the <code>.show</code>{" "}
                class.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo" style={myStyle}>
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Collapsible Group Item #2
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body" style={myStyle}>
                Some placeholder content for the second accordion panel. This
                panel is hidden by default.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree" style={myStyle}>
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Collapsible Group Item #3
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body" style={myStyle}>
                And lastly, the placeholder content for the third and final
                accordion panel. This panel is hidden by default.
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={toggleStyle}  className="btn btn-primary mt-3">Enable {btnTxt} Mode</button>
      </div>
    </>
  );
}
