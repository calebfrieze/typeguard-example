export const isOptionalType = (data: any, type: string): boolean => 
  !data || typeof data === type
