import { useState } from 'react';
function useLocalStorage(itemName, initialValue){
    let parseItems;
    if (!localStorage.getItem(itemName)) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    } else {
      parseItems = JSON.parse(localStorage.getItem(itemName));
    }
  
    const [item, setItem] = useState(parseItems);
  
    function modifyItem(newItem){
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    }
    return [item, modifyItem]
  };

  export { useLocalStorage };