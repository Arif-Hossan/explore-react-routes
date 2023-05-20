import logo from "./logo.svg";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Friends from "./Components/Friends/Friends";
import Main from "./layouts/Main";
import SingleFriend from "./Components/SingleFriend/SingleFriend";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <Main></Main>,
      children: [
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>,
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <SingleFriend></SingleFriend>,
        },
        {
          path: "posts",
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/posts`);
          },
          element: <Posts></Posts>,
        },
        {
          path: "post/:postId",
          loader: async ({params}) =>{
            return fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>,
        },
      ],
    },
    {
      path: "*",
      element: <div>Sorry, Not Found</div>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
