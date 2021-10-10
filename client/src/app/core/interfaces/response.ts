export interface Response<T> {
  links: {
    previous?: string;
    self?: string;
    next?: string;
  };
  data: T;
}
