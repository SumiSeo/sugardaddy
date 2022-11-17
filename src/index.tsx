import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./scss/main.scss";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

root.render(<App />);
