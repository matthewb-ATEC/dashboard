import Dashboard from './components/Dashboard'
import ErrorPage from './components/ErrorPage'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Define routes using createBrowserRouter
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
])

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return <RouterProvider router={router} />
}

export default App
