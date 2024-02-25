import './App.css'
import {NavLinks} from "./widgets/NavLinks/ui/NavLinks.tsx";
import {AppRouter} from "./app/providers";


function App() {

  return (
    <>
        <NavLinks />
        <AppRouter />
    </>
  )
}

export default App
