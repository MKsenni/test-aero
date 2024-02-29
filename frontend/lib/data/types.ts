export type PlanRes = {
  id: number;
  project_title: string;
  rooms: number;
  studio: boolean;
  price: string;
  old_price: string;
  square: string;
  release_dates: string;
  floor: string;
  image: string;
};

export type PlansRes = {
  data: PlanRes[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};

export enum RoomsType {
  ST = 'Ст',
  ONE = '1к',
  TWO = '2к',
  THREE = '3к',
  FOUR = '4к',
}

export type ProjectRes = {
  id: number;
  title: string;
  is_active: boolean;
  disabled: boolean;
};

export type RoomsRes = {
  number: number;
  is_active: boolean;
  disabled: boolean;
};

export interface PricesRes {
  min_range: number;
  max_range: number;
  min: number;
  max: number;
}

export interface SquaresRes extends PricesRes {}

export type ProjectsRes = {
  data: {
    projects: ProjectRes[];
    rooms: RoomsRes[];
    price: PricesRes;
    square: SquaresRes;
  };
};
