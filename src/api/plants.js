import { api } from './client';

export function getPlants({ page = 1, q = '' } = {}) {
  return api('/species-list', { page, q });
}

export function getPlant(id) {
  return api(`/species/details/${id}`);
}
