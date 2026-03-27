import { post, get } from './api';

export const authService = {
  login: (email, password) =>
    post('/auth/login', { email, password }),

  signup: (email, password, name) =>
    post('/auth/signup', { email, password, name }),

  logout: () => {
    localStorage.removeItem('authToken');
  },

  getCurrentUser: () =>
    get('/auth/me'),

  setAuthToken: (token) => {
    localStorage.setItem('authToken', token);
  },

  getAuthToken: () =>
    localStorage.getItem('authToken'),

  isAuthenticated: () =>
    !!localStorage.getItem('authToken'),
};
