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
      <Products/>
      <Dashboard/>
     
    </div>
  );
}

export default App;
