
import './App.css'
import Header from './Componets/Header'
import Notes from './Componets/Notes'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <div className='main'>
      <ToastContainer/>
      <Header/>
     <Notes/>

      
    </div>
       
    </>
  )
}

export default App
