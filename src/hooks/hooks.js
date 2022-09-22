import { useState } from 'react';
import axios from 'axios';



const useCardFlipState = (initialState = true) => {
    const [state, setState] = useState(initialState);

    const toggleState = () =>{
        setState(state => !state)
    }
    return [state, toggleState];
}


// const useAxios = (url) => {
//     const [responses, setResponses] = useState(null)

//     const addResponse = async () => {
//       const response = await axios.get(`${url}`);
//       setResponses(data => [...data, response.data])
//     }

//     return [responses, addResponse];
//   }

  function useAxios(keyInLS, baseUrl) {
    const [responses, setResponses] = useLocalStorage(keyInLS);
  
    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
      const response = await axios.get(`${baseUrl}${restOfUrl}`);
      setResponses(data => [...data, formatter(response.data)]);
    };
  
    const clearResponses = () => setResponses([]);
  
    return [responses, addResponseData, clearResponses];
  }
  
  function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
  }
  

export default { useCardFlipState, useAxios, useLocalStorage };