interface BaseObject{
  [key:number|string|symbol]: string,
}

export function createMapFromArray<T extends BaseObject>(key: keyof T, array: T[]) {
  const map = new Map<keyof T,T>();
  array.forEach(value => {
    map.set(value[key], value);
  });
}


export function removeLastArrayElement<T>(array: Array<T>) {
  return array.filter((_, index) => index !== array.length-1);
}




export function getEventCords(e: MouseEvent | TouchEvent|React.MouseEvent|React.TouchEvent) {
  const cords =
      "touches" in e
        ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
        : { x: e.clientX, y: e.clientY };
  return cords;
}
