import useSWR from 'swr'
import api from '../services/api';

export function useFetch<Data = any>(url: string) {

  //armazena alguns parâmetros que retornam do useSRW, como a data e os erros
  const { data, error, mutate } = useSWR<Data>(url, async url => {
    const response = await api.get(url);
    //envia os dados obtidos da api
    return response.data;
  }, {
    onErrorRetry: (error) => {
      // Caso o erro seja 404, ele já retorna sem tentar novamente
      if (error.status === 404) return Response.error;
    }
  }
  )

  return { data, error, mutate }
}