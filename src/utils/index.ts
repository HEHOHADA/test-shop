import { FilterType, ProductCategoryType } from 'types'

type QueryParamsType = {
  from?: number | string
  to?: number | string
  category?: ProductCategoryType
  title?: string
}

export function convertQueryParamsToData(queryParams: string): Partial<FilterType> {
  const onlyQuery = queryParams.slice(1)
  return Object
    .fromEntries(onlyQuery.split('&')
                          .map(query => query
                            .split('='))) as QueryParamsType
}
