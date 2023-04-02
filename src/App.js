import './App.css';
import Navbar from './Components/Navbar';
import Hero from "./Components/Hero"
import Card from './Components/Card';
import data from "./data"
function App() {
      const card = data.map((item,key) =>{
            return(
                  <Card
                        id = {item.id}
                        {...item}
                  />
            )
      })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='cards'>
            {card}      
      </div>
    </div>
  );
}

export default App;
