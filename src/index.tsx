import {createRoot} from "react-dom/client"
const App = () => {
    return <div> Hello</div>;
    
};
// entry point for react 
const container = document.getElementById("app")
const root= createRoot(container)

root.render (<App/>)