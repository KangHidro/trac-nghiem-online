export class PagedResults<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  pageable: Pageable;
  last: boolean;
  first: boolean;
  sort: Sort;
  size: number;
  number: number;
  numberOfElements: number;
  empty: boolean;
}

export class Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
  sort: Sort;
}

export class Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
