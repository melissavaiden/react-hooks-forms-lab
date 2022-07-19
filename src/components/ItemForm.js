import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('Produce')

  function handleCategoryChange(e) {
    setNewCategory(e.target.value)
  }

  function handleNameChange(e) {
    setNewName(e.target.value)

  }

  function handleSubmit(event) {
    const newItem = {
      id: uuid(),
      name: newName,
      category: newCategory,
    };
    onItemFormSubmit(event, newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={handleNameChange} name="name"/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
