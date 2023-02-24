import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'
const router = createBrowserRouter([
  {
    element: <Wrapper></Wrapper>,
    path: '/',
    children: [
      {
        path: 'home',
        element: <h1>home</h1>,
      },
      {
        path: 'about',
        element: <h1>about</h1>,
      },
      {
        path: 'courses',
        element: <h1>courses</h1>,
      },
      {
        path: 'pages',
        element: <h1>pages</h1>,
      },
      {
        path: 'blog',
        element: <h1>blog</h1>,
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
