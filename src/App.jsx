import './App.css'
import Header from './Components/Headers/Header';
import ItemDetailContainer from './Components/Main/ItemDetailContainer';
import ItemListContainer from './Components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
    <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/productos/:category' element={<ItemListContainer/>}/>
        </Routes>

    </BrowserRouter>
      </div>
  );
}

export default App;
