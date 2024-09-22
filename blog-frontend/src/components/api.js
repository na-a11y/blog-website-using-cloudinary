import axios from 'axios';

// Create an instance of Axios
const api = axios.create({
  baseURL: 'https://blog-website-using-cloudinary.vercel.app', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});