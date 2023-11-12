import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Home } from './pages/Home';
import { Gallery } from './pages/gallery';
import { Port} from './bin/Home-page' ;

function App() {
  return (
    <div className="App">
      < Home/>
     {/* <Port/>  */}
      {/* <Gallery />  */}
    </div>
  );
}

export const myFunction = () => {
  return(
        document.write("holla")
  )
}

export default App;
