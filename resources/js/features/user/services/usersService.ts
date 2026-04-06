import axios from 'axios';
import type { User } from '../types/userTypes';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const usersService = {
  all: async () => {
    await sleep(2000)
    const res = await api.get('/users');
    return res.data as User[];
  },

  create: async () => {
  },

  update: async () => {
  },

  delete: async () => {
  },

  tinhTong: () => {

  }
};