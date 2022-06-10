import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onDarkModeClick = (values)=>{
    console.log(values)
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <Header onDarkModeClick={onDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;


/*
App
├── Header
└── ShoppingList
    ├── Filter
    ├── Item
    ├── Item
    └── Item
1. Create a Header component by refactoring the <header> element out of the App component. Clicking on the <button> 
    inside of the Header component should still toggle dark mode on and off.
2. You will need to pass a callback function as a prop called onDarkModeClick to the Header component in order for the test to pass.


*/
