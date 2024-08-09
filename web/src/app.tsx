import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { Routes } from './routes'

export function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  )
}
