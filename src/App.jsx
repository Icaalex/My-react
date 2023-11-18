import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Home } from './pages/Home';
import { Gallery } from './pages/gallery';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppRoutes></AppRoutes>
  );
}

export const myFunction = () => {
  return(
        document.write("holla")
  )
}

export default App;
