import './App.css';
import Contents from './Components/Contents';
import {BrowserRouter} from 'react-router-dom'
import ContextProvider from './Components/Context/ContextProvider';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
    <Contents/>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
