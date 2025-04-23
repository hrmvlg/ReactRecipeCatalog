import Header from './layout/Header.jsx'
import Footer from './layout/Footer';
import Home from './components/Home.jsx';
import Category from './components/Category';
import Meal from './components/Meal.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='categories' element={<Home />} />
        <Route path='categories/:category' element={<Category />} />
        <Route path='categories/:category/:mealId' element={<Meal />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
