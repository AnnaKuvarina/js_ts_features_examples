type PizzaSize = 'little' | 'medium' | 'large';

enum PizzaSize2 {
  small = 's',
  medium = 'm',
  large = 'l',
}

console.log(PizzaSize2);


function cookPizza(size: PizzaSize2): string {
  switch (size) {
    case PizzaSize2.small:
      return 'One person pizza';
    case PizzaSize2.medium:
      return 'Usual pizza';
    case PizzaSize2.large:
      return 'The biggest pizza';
  }
}

const pizza1 = cookPizza(PizzaSize2.large);
console.log(pizza1);

const array: Array<any> = []


