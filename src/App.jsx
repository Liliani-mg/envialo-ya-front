import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {

  return (
   <Router>
      {/* <NavBar/> */}
      <AppRoutes/>
      {/* <Footer/> */}
   </Router>
   
  )
}

export default App
