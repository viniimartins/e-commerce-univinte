import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import type { IProduct } from '@/app/(app)/types'
import { api } from '@/service/api'
import type { QueryKeyProps } from '@/types/queryKeyProps'

type Product = Pick<IProduct, 'id'>

interface Params {
  product: Product
}

async function remove({ product }: Params) {
  const { data } = await api.delete(`/wishlist/${product.id}`)

  return data
}

export function useRemoveFromWishlist({ queryKey }: QueryKeyProps) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['remove-from-wishlist'],
    mutationFn: remove,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      toast.success('Produto removido da lista de desejos')
    },
    onError: () => {
      toast.error('Erro ao remover o produto da lista de desejos')
    },
  })
}
