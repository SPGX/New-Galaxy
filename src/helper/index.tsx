export const isEmptyObject = (obj: any): boolean => {
  if (!obj) return false
  return JSON.stringify(obj) !== '{}'
}