import { useContext, useState, createContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);;


const CartContextProvider = ({children})  => {
  
    const [cart, setCart] = useState([])

    const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

    const addItem = (item, quantity) => {
      if (isInCart(item.id)) {
      setCart(
          cart.map((product) => {
          return product.id === item.id
              ? { ...product, quantity: product.quantity + quantity }
              : product;
          })
      );
      } else {
      setCart([...cart, { ...item, quantity }]);
          }
    };


    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
      };
    
      const totalProducts = () =>
        cart.reduce(
          (acumulador, productoActual) => acumulador + productoActual.quantity,
          0
        );
    
      const clearCart = () => setCart([]);
    
     
      const removeProduct = (id) =>
        setCart(cart.filter((product) => product.id !== id));
    
      return (
        <CartContext.Provider
          value={{
            clearCart,
            isInCart,
            removeProduct,
            addItem,
            totalPrice,
            totalProducts,
            cart,
          }}
        >
          {children}
        </CartContext.Provider>
    )
    
}

export default CartContextProvider
 

