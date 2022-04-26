import './App.css';
import Homescreen from './components/Homescreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Root';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function App() {
  return (
    <Root>
     <Homescreen/>
   </Root>
  );
}

export default App;
