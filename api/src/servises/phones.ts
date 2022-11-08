import { Phone } from '../types/Phone';

export function getAllByQuery(
  sortBy: string | never,
  order: string,
  limit: string,
  page: string,
  data: Phone[]
) {
  const sortDirection = order === 'asc' ? -1 : 1;

  const sortedData : Phone[]
    = sortBy
      ? data
        .sort((currentPhone, nextPhone) => (
          (currentPhone.sortBy - nextPhone.sortBy) * sortDirection
        ))
      : data;

  const length = sortedData.length;

  const validLimit
    = limit 
      ? Math.min(+limit, length)
      : length;
  
  const validPage
    = page 
      ? Math.min(+page, Math.ceil(length / validLimit))
      : Math.ceil(length / validLimit);

  const start = (validPage - 1) * validLimit; 
  const end = Math.min(validPage * validLimit, length); 
  const validData = sortedData.slice(start, end);

  return {validData, length};
}