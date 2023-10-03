import {createRoot} from "react-dom/client"
import App from "./components/app"




const App = () => {
    return (
    <div className="container"> 
    <Header message="Naming Contests"/> 

    
    
    </div>;

    );    
};
// entry point for react 
const container = document.getElementById("app")
const root= createRoot(container)

root.render (<App/>)