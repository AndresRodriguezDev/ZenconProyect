import {Navigate, Route, Routes} from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { MainRoutes } from "../routes/MainRoutes"



export const AppRouter = () => {

     //IMPLEMENTACION DE AUTENTICACION

    // if( status === 'checking') {
    //   return <CheckingAuth />
    // 
    //const authStatus = 'authenticated'


  return (
            <Routes>

                
                    
                     <Route path="/*" element={ <MainRoutes /> } />
                     <Route path="/auth/*" element={ <AuthRoutes />  } />

                

                    {/* cualquier otra ruta que el user intente ir lleva al login */}
                <Route path="/*" element={ <Navigate to='/auth/login'  />  } />


            </Routes>
  )
}