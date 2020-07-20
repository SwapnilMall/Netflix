import axios from 'axios';
import requests from './request';

// base url to make requests to the move database

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
});

// instance.get('/foo-bar');

//https://api.themoviedb.org/3/foo-bar

export default instance;
