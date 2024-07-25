/* eslint-disable prettier/prettier */
import axios from 'axios';
const API_URL = 'https://partners-staging.safegold.com/v1';
const headers = {
  Authorization: 'Bearer 038bb7f7dbbb92ef41d56fdd88030f1c',
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const getBuyPrice = async () => {
  try {
    const response = await axios.get(`${API_URL}/buy-price`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching buy price:', error);
    throw error;
  }
};

export const getSellPrice = async () => {
  try {
    const response = await axios.get(`${API_URL}/sell-price`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching sell price:', error);
    throw error;
  }
};
