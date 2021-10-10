import NavBar from "./components/Navbar";
import { ItemListContainer } from  './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'


function App() {
  return (
    <>
    
    <BrowserRouter>

        <NavBar logo="Proyecto Profe"/>
        
        <Switch>
          <Route exact path="/">
              <ItemListContainer />
          </Route>

          <Route exact path="/productos/:categoryId">
              <ItemListContainer />
          </Route>

          <Route exact path="/detail/:itemId">
              <ItemDetailContainer />
          </Route>

          <Route exact path="/contacto">
              <h1>Contacto</h1>
          </Route>

          <Route exact path="/cart">
            {/* TODO: hacer vista carrito */}
            <h1>Carrito</h1>
          </Route>

          <Route path="*">
              <Redirect to="/"/>
          </Route>
          {/* <Route path="*">
              <h2>404... no encontrado</h2>
          </Route> */}
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
