import { ApiResponse, axiosRequest, EApiEndpoints } from '@/api';

export interface SearchResponseClient {
  searchId: string;
}

export async function search(): Promise<ApiResponse<SearchResponseClient>> {
  return axiosRequest<SearchResponseClient>({
    method: 'GET',
    endpoint: EApiEndpoints.SEARCH,
  });
}
