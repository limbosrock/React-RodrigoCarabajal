import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">

        <BrowserRouter>
            <NavBar/>  

            <Routes>
                <Route path='/' element={ <ItemListContainer /> }/>
                <Route path='/category/:id' element={ <ItemListContainer/> }/>
                <Route path='/item/:id' element={ <ItemDetail/>}/>
            </Routes>

         </BrowserRouter>
            
            


        </div>
    );
}

export default App;
