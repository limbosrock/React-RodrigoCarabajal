import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemCount from './components/ItemCount';

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <NavBar/>
            
            <Routes>
 

                <Route path='/' element={ <ItemListContainer /> }/>
                
                <Route path='/category/:id' element={ <ItemListContainer/> }/>
                <Route path='/item/:id' element={ <ItemListContainer/> }/>

            
                <Route path='/' element={<ItemCount/>}/>



            </Routes>

            </BrowserRouter>
            
            


        </div>
    );
}

export default App;
