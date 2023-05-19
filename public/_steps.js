/*
React Router
1. install react router using command npm i react-router-dom
2.create a router using createBrowserRouter
3.Add a router provider and pass router (route ) props
4.create some router inside the route
ex:
     const route = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
            children :([
                {
                    path:'/About',
                    element :<Contact/>
                }
            ])
        },
        {
            path:'contact',
            element : <Contact/>
        }
     ]);
     <RouterProvide router={route}></RouterProvide>
*/