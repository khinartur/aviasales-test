import { ApiResponse, axiosRequest, EApiEndpoints } from '@/api';
import { Ticket } from '@/interfaces/Ticket';

export interface TicketsResponseClient {
  tickets: Ticket[];
  stop: boolean;
}

export interface TicketsRequestParams {
  searchId: string;
}

export async function tickets(
  params: TicketsRequestParams,
): Promise<ApiResponse<TicketsResponseClient>> {
  return axiosRequest<TicketsResponseClient>({
    method: 'GET',
    endpoint: EApiEndpoints.TICKETS,
    params: { ...params },
  });
}
