import './App.css';
import Header from './components/Header';
import CarouselOclock from './components/CorouselOclock';
import Products from './components/Products';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselOclock/>
      <Dashboard/>
      <Products/>
     
    </div>
  );
}

export default App;
