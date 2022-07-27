import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
import { useEffect, useState } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)


  }, [])

  // componentDidMount() {
  //   setLoading(false);
  // }

  return (
    <>
      {
        loading ?
          <div id="loader">
            <PacmanLoader color={'#01bf71'}
              loading={loading}
              // cssOverride={override} 
              size={60} />
          </div>

          :

          <Router>
            <Home />
          </Router>
      }

    </>

  );
}

export default App;
