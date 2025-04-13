export type FetchParams = {
  token: string;
  page?: number;
  pageSize?: number;
};

export type TokenPayload = {
  id: string;
  email: string;
  role: 'TEACHER' | 'STUDENT';
}