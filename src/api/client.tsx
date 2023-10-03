import {  SandwichPayload } from "../components/enumFaces/enumFaces";


export const postPayload = async (payload: SandwichPayload) => {
    const url = 'https://training.nerdbord.io/api/v1/panini-creator/order';
    const headers = {
      'Authorization': 'secret_token',
      'Content-Type': 'application/json'
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return await response.json();
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
    }
  };
  