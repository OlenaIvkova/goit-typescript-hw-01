type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(
  top: T,
  bottom: U
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Виклик функції
const top = {
  name: 'Object1',
  color: 'Red',
};

const bottom = {
  position: 5,
  weight: 100,
};

const result = compare(top, bottom);
console.log(result);