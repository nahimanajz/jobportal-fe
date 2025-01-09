export const filterEmptyValues = (obj:any) =>{
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => value !== "" && value !== null && value !== undefined)
    );
  }