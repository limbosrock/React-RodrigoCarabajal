import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart';


function App() {
    return (
        <div className="App">
        
        <BrowserRouter>
        <CartContextProvider>
            <NavBar/>  
                <Routes>
                    <Route path='/' element={ <ItemListContainer /> }/>
                    <Route path='/category/:id' element={ <ItemListContainer/> }/>
                    <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
                    <Route path={"/cart"} element={<Cart/>} />

                </Routes>
        </CartContextProvider>
        </BrowserRouter>
        
        </div>
    );
}

export default App;
