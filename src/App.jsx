import Header from './layout/Header.jsx'
import Footer from './layout/Footer';
import Home from './components/Home.jsx';
import Category from './components/Category';
import Meal from './components/Meal.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();
  const pathname = window.location.pathname;

  useEffect(() => {
    if (pathname === '/ReactRecipeCatalog/') {
      navigate('/categories/');
    }
  }, [navigate, pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/categories/' element={<Home />} />
        <Route path='/categories/:category' element={<Category />} />
        <Route path='/categories/:category/:mealId' element={<Meal />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
