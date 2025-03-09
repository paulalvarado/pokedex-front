import axios from 'axios';

const api = axios.create({
  baseURL: 'https://3000-idx-pokedex-api-1741150169707.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev/',
});

export const login = async (email: string, password: string) => {
  return api.post('/api/users/login', { email, password });
};

export const register = async (firstname: string, lastname: string, email: string, password: string) => {
  return api.post('/api/users/register', { firstname, lastname, email, password });
};
