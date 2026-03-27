import { get, post, put, del } from './api';

export const treeService = {
  getAllTrees: (filters = {}) => {
    const params = new URLSearchParams(filters);
    return get(`/trees?${params.toString()}`);
  },

  getTreeById: (id) =>
    get(`/trees/${id}`),

  getUserTrees: () =>
    get('/trees/my-trees'),

  createTree: (treeData) =>
    post('/trees', treeData),

  updateTree: (id, treeData) =>
    put(`/trees/${id}`, treeData),

  deleteTree: (id) =>
    del(`/trees/${id}`),

  plantTree: (id) =>
    post(`/trees/${id}/plant`, {}),

  searchTrees: (query) =>
    get(`/trees/search?q=${query}`),
};
