import React from 'react'

// Create a Filter component by refactoring the <select> element out of the ShoppingList component. 
// Changing the selection in the dropdown should still change which items are displayed in the shopping list.
// You will need to pass a callback function as a prop called onCategoryChange to the Filter component in order 
// for the test to pass.

export default function Filter({onCategoryChange}) {
  return (
    <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
  )
}
