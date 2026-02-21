import { baseApi } from './baseApi';
import type { DashboardData } from './types';

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDashboard: builder.query<DashboardData, void>({
      query: () => {
        return 'imdb/top250-movies';
      },
    }),
  }),
});

export const { useGetDashboardQuery } = dashboardApi;
