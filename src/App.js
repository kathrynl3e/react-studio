import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
// defined each bakery item as "item", which consists of name, description, price, and image
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */
// forEach loop builds an array for each item with all of the name value keys

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  // cart is essentially a dict of items and their prices 

  // cart is our defined state variable (what we want to update), consisting of a dict of items mapped to total price 
  // setCart is the setter function that will change the cart state
  // blank dict and 0 total price for initial state

  // why put useState in brackets? 
  // "Use state variables to keep track of what’s in the shopping cart"
  const [cart, setCart] = useState({prods: {}, total: 0});

  // function to update the cart. need to update both prods and total
  // "Use callback functions to update the state"
  const updateCart = (index) => {
    const bakeryItem = bakeryData[index];
    const itemName = bakeryItem.name;
    const updatedProds = cart.prods;

    // update cart prods
    // if the item is already there, just multiply it 
    // if not, add it for the first time
    if (updatedProds[itemName]) {
      updatedProds[itemName]+=1;
    }
    else {
      updatedProds[itemName]=1;
    }

    // update total price of items in cart following addition
    const updatedTotal = cart.total + bakeryItem.price; 

    // set the cart now with the new values
    setCart({prods: updatedProds, total: updatedTotal});
    console.log(cart.total);
  }

  return (
    <div className="App flex">
      <main className="flex flex-col w-2/3 p-8 gap-8">
        <h1>Kathy's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            // bakeryData is the entire array we called "map" on
            // item is the current item in the array (the json file)
            // index is the array index of the current item 

            //for each item, we want to make a BakeryItem component for it 
            
            <BakeryItem item={item} updateCart={updateCart} index={index}>
            </BakeryItem>
          ))}
      </div>
      </main>
      <aside className="flex flex-col p-8">
        <h2>My Cart</h2>
          {/* TODO: render a list of items in the cart */}
          {/* build list of prods */}
          {/* Object.keys() is method that will return just the keys of an object (cart products) as an array*/}
          {/* map will iterate thru resulting array with the function of finding how many of a product and returning array of item name and number of items*/}
          {Object.keys(cart.prods).map((itemName) => (<p>{cart.prods[itemName]}x {itemName}s</p>))}

          {/* show total price, fixed to 2 decimal places*/}
          <p>Total: ${cart.total.toFixed(2)}</p>
      </aside>
    </div>
  );
}

export default App;
