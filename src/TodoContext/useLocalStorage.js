import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          try {
            const parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          } catch (parseError) {
            console.warn(`Error parsing ${itemName} from localStorage. Resetting to initialValue.`, parseError);
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            setItem(initialValue);
          }
        }
      } catch (storageError) {
        console.error(`Error accessing localStorage for ${itemName}.`, storageError);
        setError(true);
      }
      setLoading(false);
    }, 1000);
  }, []);

  function modifyItem(newItem) {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (storageError) {
      console.error(`Error saving ${itemName} to localStorage.`, storageError);
      setError(true);
    }
  }

  return { item, modifyItem, loading, error };
}

export { useLocalStorage };
