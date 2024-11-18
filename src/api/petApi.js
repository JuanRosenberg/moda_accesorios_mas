// src/api/petApi.js
import axios from 'axios';
// Reemplaza esta URL con la de tu API real
const API_URL = 'https://fakestoreapi.com/products';

export const fetchPetProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};