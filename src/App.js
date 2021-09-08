import './App.css';
import './normalize.css';

import Navigation from './Components/Navigation';
import Billboard from './Components/Billboard';
import Titles from './Components/Titles';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Billboard />
      <Titles />
      <Footer />
    </div>
  );
}

export default App;
