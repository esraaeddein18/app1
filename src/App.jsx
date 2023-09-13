
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './component/Layout/Layout';
import HOME from './component/HOME/HOME';
import ABOUT from './component/ABOUT/ABOUT';
import CONTACT from './component/CONTACT/CONTACT';
import Notfound from './component/Notfound/Notfound';
import PORTFOLIO from './component/PORTFOLIO/PORTFOLIO';


export default function App() {
  const routers =createHashRouter([
    {path:'/',element:<Layout/>,children:[
    {path:'HOME',element:<HOME/>},
    {path:'PORTFOLIO',element:<PORTFOLIO/>},
    {path:'ABOUT',element:<ABOUT/>},
    {path:'CONTACT',element:<CONTACT/>},
    {path:'*',element:<Notfound/>},
  ]}
])
  return (
    <>

        <RouterProvider router={routers}/>
    </>

  )
}
