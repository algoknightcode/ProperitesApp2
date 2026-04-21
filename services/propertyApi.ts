import api from './api';

export const propertyApi = {
  getProperties: (filters?: any) => api.get('/properties', { params: filters }),
  getPropertyById: (id: string) => api.get(`/properties/${id}`),
  searchProperties: (query: string) => api.get('/properties/search', { params: { q: query } }),
  getSavedProperties: () => api.get('/properties/saved'),
};

export default propertyApi;
