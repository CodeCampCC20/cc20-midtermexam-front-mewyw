import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";
import { Slide } from "react-toastify";


function App() {
  return (
    <>
    <ToastContainer 
    auto={1500} 
    position="bottom-right" 
    transition={Slide}/>

    <AppRouter />
    </>
  )
}

export default App