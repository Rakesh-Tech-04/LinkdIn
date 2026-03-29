import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { UserContextProvider } from './utils/userContext'
function App() {

  return (
    <UserContextProvider>
      <Outlet />
      <ToastContainer />
    </UserContextProvider>
  )
}

export default App
