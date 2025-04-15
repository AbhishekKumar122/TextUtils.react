import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [text, setText] = useState("Enable DarkMode");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#021526";  // Dark mode background color
      document.body.style.color = "white";  // Dark mode text color
      setText("Enable LightMode");
      showAlert(" Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#F7F9F2";  // Light mode background color
      document.body.style.color = "#021526";  // Light mode text color
      setText("Enable DarkMode");
      showAlert(" Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      {/* Navbar will be present on every page */}
      <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} text={text} />
      <Alert alert={alert} />

      {/* Main content area */}
      <div className="container my-3">
        <Routes>
          {/* Default route for home page */}
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Boost Your Productivity – Text Conversion Made Simple"
                mode={mode}
              />
            }
          />
          {/* About page route */}
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
