import useSWR from 'swr'
import api from '../services/api';

export function useFetch<Data = any>(url: string) {
  const { data, error, mutate } = useSWR<Data>(url, async url => {
    const response = await api.get(url);

    return response.data;
  }, {
    onErrorRetry: (error) => {
      // Never retry on 404.
      if (error.status === 404) return Response.error;
    }
  }
  )

  return { data, error, mutate }
}