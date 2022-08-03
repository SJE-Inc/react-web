import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
// import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {


  return (
    <Router>
      <Home />
      {/* <MessengerCustomerChat
        pageId="102430202572038"
        appId="925574071736483"
      /> */}
    </Router>
  );
}

export default App;
