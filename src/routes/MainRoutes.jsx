import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navar"


export const MainRoutes = () => {
  return (
    <Routes>

        <Route path="/*" element={ <Navbar /> } />
        
    </Routes>
  )
}
