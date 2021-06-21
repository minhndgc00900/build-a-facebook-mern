import React from 'react'
import { usePageContext } from '../../../index.jsx'

function ProductImage () {
  const { products } = usePageContext()

  console.log(3210, products)
  return (
        <div>
            Hello there image
        </div>
  )
}

export default ProductImage
