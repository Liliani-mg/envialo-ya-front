import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
   <Router>
      <AppRoutes/>
      <Footer/>
   </Router>
   
  )
}

export default App
