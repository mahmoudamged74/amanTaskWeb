import './App.css';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Offers from './components/Offers/Offers';
import PriceList from './components/PriceList/PriceList';
import Products from './components/Products/Products';
import Home from './pages/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


let router = createBrowserRouter([
  {path:"", element:<Layout/>,children:[
    {index:true ,element:<Home/> },
    {path:"priceList" ,element:<PriceList/> },
    {path:"offers" ,element:<Offers/> },
    {path:"products" ,element:<Products/> },
    
    {path:"*" , element:<NotFound/>},
  ]}
])

function App() {
  return (
    <div>
  <RouterProvider router={router}/>
  </div>
  );
}

export default App;
