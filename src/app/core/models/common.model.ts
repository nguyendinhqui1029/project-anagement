export interface CommonOption<T=string,K=unknown> {
  label: string;
  value: T;
  record: K;
}

export interface ApiResponse<T=unknown> {
  statusCode: number;
  statusText?: string;
  data: T;
}