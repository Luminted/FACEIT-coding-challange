export interface IRequest {
  endpoint: string;
  config?: RequestInit;
}

export const request = async <T>({
  endpoint,
  config
}: IRequest): Promise<T> => {
  const result = await fetch(endpoint, config);

  if (!result.ok) {
    throw new Error();
  }

  return result.json();
};
