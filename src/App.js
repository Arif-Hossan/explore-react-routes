import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Friends from './Components/Friends/Friends';
import Main from './layouts/Main';

function App() {

  const route = createBrowserRouter([
    {
      path:'',
      element:<Main></Main>,
      children:[
        {
          path:'',
          element:<Home></Home>,
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'/services',
          element :<Services></Services>,
        },
        {
          path:'/friends',
          loader:async () =>{
            return await fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>
        }
      ]
    },
    {
        path:'*',
        element:<div>Sorry, Not Found</div>
    }
  ])

  return (
    <div className="App">
        <RouterProvider router={route} ></RouterProvider>
    </div>
  );
}

export default App;
