export type ProductCategoryType = 'men clothing' | 'jewelery' | 'electronics' | 'women clothing'

export type ProductType = {
  id: number
  title: string
  price: number
  description: string
  category: ProductCategoryType
  image: string
}

export type FilterType = {
  title?: string
  category: ProductCategoryType | null
  price?: { from: number, to: number }
}

export type BoxType = {
  direction?: 'row' | 'column'
}
