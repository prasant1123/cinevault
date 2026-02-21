import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://imdb236.p.rapidapi.com/api/',
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json');
      headers.set(
        'x-rapidapi-key',
        'e7f72ac242mshe69620b9e2d77eap14b77ejsn5d6868b2aecb',
      );
      headers.set('x-rapidapi-host', 'imdb236.p.rapidapi.com');

      return headers;
    },
  }),
  endpoints: () => ({}),
});
