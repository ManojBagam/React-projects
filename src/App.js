/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import WeatherApp from './pages/weather_app'
import GalleryApp from './pages/Gallery_App'
import Covid19 from './pages/Covid19'
import QuizApp from './pages/Quiz'
import TodoList from './pages/Todo_List'
import Emoji from './pages/Emoji'




const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/weather_app" element={<WeatherApp/>}/>
        <Route path="/gallery_app" element={<GalleryApp/>} />
        <Route path='/QuizApp' element={<QuizApp/>} />
        <Route path="/TodoList" element={<TodoList/>} />
        <Route path='/Emoji' element={<Emoji/>} />
        <Route path="/Covid19" element={<Covid19/>} />
     </Routes>
     {/* <Home /> */}
     {/* <Footer /> */}
      </Router>
      <Footer /> 
    </div>
  )
}

export default App