import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export function render() {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}
