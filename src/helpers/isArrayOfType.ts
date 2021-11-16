export const isArrayOfType = (data: any, guard: (x: any) => any) => 
  Array.isArray(data) && data.every(guard)