import { useQuery } from '@tanstack/react-query';
import { getPlants, getPlant } from '../api/plants';

export function usePlants(params) {
  return useQuery({
    queryKey: ['plants', params],
    queryFn: () => getPlants(params),
  });
}

export function usePlant(id) {
  return useQuery({
    queryKey: ['plant', id],
    queryFn: () => getPlant(id),
    enabled: !!id,
  });
}
