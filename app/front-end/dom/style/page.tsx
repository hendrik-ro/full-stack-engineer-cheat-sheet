import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function StyleMethods() {
  return (
    <div id="style-methods">
      <h1>Style Methods</h1>
      <ManipulationStyle />
    </div>
  );
}

function ManipulationStyle() {
  return (
    <div id="manipulation.style">
      <h2>Style</h2>
      <p>
        The <code>style</code> property allows you to change the style of an
        element.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`let firstElement = document.getElementsByClassName('users')[0];
firstElement.style.backgroundColor = 'red';`}</SyntaxHighlighter>
      <p>Or chain the property with a selector:</p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.getElementsByClassName('users')[0].style.backgroundColor = 'red';`}</SyntaxHighlighter>
    </div>
  );
}
