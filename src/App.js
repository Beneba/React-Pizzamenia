import Navbar from './component/NavBar/Navbar'
import Carousel from './component/Carousel/Carousel';
import AboutPizza from  './component/AboutPizza/AboutPizza'
import PizzaTypes from './component/PizzaTypes/PizzaTypes'
import Footer from './component/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <AboutPizza />
      <PizzaTypes />
      <Footer />
    </div>
  );
}

export default App;
