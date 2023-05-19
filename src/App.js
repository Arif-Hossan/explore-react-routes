import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';

function App() {
  const route = createBrowserRouter([
    {
      path:'/',
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
  ])
  return (
    <div className="App">
        <RouterProvider router={route} ></RouterProvider>
    </div>
  );
}

export default App;
