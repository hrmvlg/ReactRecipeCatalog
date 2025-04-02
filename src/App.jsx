import Header from './layout/Header.jsx'
import Footer from './layout/Footer';
import Home from './components/Home.jsx';
import Category from './components/Category';
import Meal from './components/Meal.jsx';
import { Route, Routes } from 'react-router-dom';
// import Breadcrumbs from './layout/Breadcrumbs.jsx';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/categories/:category' element={<Category />} />
        <Route path='/categories/:category/:mealId' element={<Meal />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
