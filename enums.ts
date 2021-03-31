type PizzaSize = 'small' | 'medium' | 'large';

/*enum PizzaSize2 {
  small,
  medium,
  large,
}

console.log(PizzaSize2);*/


function cookPizza(size: PizzaSize): string {
  switch (size) {
    case 'small':
      return 'One person pizza';
    case 'medium':
      return 'Usual pizza';
    case 'large':
      return 'The biggest pizza';
  }
}

const pizza1 = cookPizza('small');
console.log(pizza1);


