interface ProductProps {
  id: number
  name: string
  description: string
  price: number
}

interface ProductContentListProps {
  products: ProductProps[]
}

export function ProductListContent({ products }: ProductContentListProps) {
  return (
    <table className="min-w-full divide-y divide-customGray ">
      <thead className="bg-customDark">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Cod. Produto
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Nome
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Preço
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
        </tr>
      </thead>
      <tbody className="bg-customDarker divide-y divide-customGray">
        {products.map((product, index) => (
          <tr
            key={product.id}
            className={index % 2 === 0 ? 'bg-customDark' : 'bg-customDarker'}
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-200">
              {product.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-200">
              {product.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-200">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400">
              <a href={`/products/${product.id}`} className="hover:underline">
                Ver Detalhes
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
