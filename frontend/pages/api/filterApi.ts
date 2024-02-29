import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PlansRes, ProjectsRes } from '../../lib/data/types';
import { baseUrl } from '../../lib/data/constants';
import { HYDRATE } from 'next-redux-wrapper';

export const filterApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  extractRehydrationInfo(action, { reducerPath }) {
    console.log('HYDRATE', action.payload);
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (build) => ({
    getProjects: build.query<ProjectsRes, number>({
      query: (page: number) => `/filters?page=${page}`,
    }),
    getPlans: build.query<PlansRes, number>({
      query: (page: number) => `/flats?page=${page}&per_page=9`,
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetPlansQuery,
  util: { getRunningQueriesThunk },
} = filterApi;
