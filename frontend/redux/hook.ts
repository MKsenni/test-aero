import { AppDispatch, RootState } from '@/pages/api/store';
import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { filterApi } from '../pages/api/filterApi';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useGetProjectsQuery = filterApi.endpoints.getProjects.useQuery;
export const useGetPlansQuery = filterApi.endpoints.getPlans.useQuery;
export const useGetProjectQuery = filterApi.endpoints.getProject.useQuery;

export const useQueryStateResult = filterApi.endpoints.getPlans.useQueryState;
