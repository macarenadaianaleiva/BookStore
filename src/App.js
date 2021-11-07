import NavBar from "./components/Navbar";
import { ItemListContainer } from  './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen';
import { UIProvider } from './context/UIContext';
import { Checkout } from './components/Checkout';



function App() {
  return (
    <>
    
    <UIProvider>
        <CartProvider>

    <BrowserRouter>

        <NavBar logo="E-Books"/>
        
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
          <CartScreen/>
            
            <h1>Carrito</h1>
          </Route>

          <Route exact path="/checkout">
                <Checkout/>
              </Route>

          <Route path="*">
              <Redirect to="/"/>
          </Route>
          
        </Switch>

      </BrowserRouter>

      </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;
