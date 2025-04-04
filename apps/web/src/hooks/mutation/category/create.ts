import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { queryClient } from '@/lib/react-query'
import { api } from '@/service/api'
import type { QueryKeyProps } from '@/types/queryKeyProps'

interface Category {
  name: string
}

interface Params {
  category: Category
}

async function post({ category }: Params) {
  const { data } = await api.post('/category', category)

  return data
}

export function useCreateCategory({ queryKey }: QueryKeyProps) {
  return useMutation({
    mutationKey: ['create-category'],
    mutationFn: post,
    onSuccess: () => {
      toast.success('Categoria criada com sucesso')
      queryClient.invalidateQueries({ queryKey })
    },
    onError: () => {
      toast.error('Erro ao criar a categoria')
    },
  })
}
