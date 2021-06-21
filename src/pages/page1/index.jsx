import React, {
  createContext,
  useContext,
  useState
} from 'react'
import ProductDetail from './product-detail'

const PageContext = createContext()

function Page1 () {
  const [products, setProducts] = useState(['shirt', 'top', 'jean'])

  const onHandleProduct = param => {
    setProducts(param)
  }

  return (
        <PageContext.Provider value={{
          onHandleProduct,
          products
        }}>
            <div>
                <ProductDetail />
            </div>
        </PageContext.Provider>
  )
}

const usePageContext = () => useContext(PageContext)

export { Page1, usePageContext }
