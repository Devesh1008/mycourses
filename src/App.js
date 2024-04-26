import { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Header from "./components/Header";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    console.log(type);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    
  }

  

  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode Has been Enabled" , "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Has been Enabled" , "success");
    }
  }

  return (
    <>
      <Header logo="Devesh" mode={mode} toggleMode={toggleMode}/>
      <Alert  alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter the text Here" />
      </div>

      {/* <About title="About Us"/> */}
    </>
  );
}

export default App;
