import React from "react";

export default function About(props) {
 
  const mystyle = {
    color: props.mode === "dark" ? "white" : "#021526",
    backgroundColor: props.mode === "dark" ? "#021526" : "white",
    border: props.mode === "dark" ? "1px solid white" : "none",
  };

  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About TextUtils</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              style={mystyle}
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is TextUtils?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> is a simple yet powerful web application
              that helps you manipulate your text efficiently. You can convert text
              to uppercase or lowercase, remove extra spaces, copy text, and more.
              It's perfect for students, developers, writers, and anyone who works
              with text.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={mystyle}
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Why use TextUtils?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils offers a fast and easy way to process your text. Whether
              you're cleaning up data, preparing code snippets, or formatting content
              for presentations or documentation, TextUtils has got you covered.
              It's responsive, browser-friendly, and lightweight.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              style={mystyle}
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Features and Future Scope
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Convert text to UPPERCASE or lowercase</li>
                <li>Remove extra spaces</li>
                <li>Copy text to clipboard</li>
                <li>Preview and count words and characters</li>
              </ul>
              <p>
                <strong>Future plans:</strong> Adding features like spell checking,
                text-to-speech, theme customization, and PDF export.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
