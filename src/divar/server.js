class Product {
  constructor(title, price, image, location, chatLocked, condition) {
    this.id = Math.random().toString();
    this.title = title;
    this.price = price;
    this.image = image;
    this.location = location;
    this.chatLocked = chatLocked;
    this.condition = condition;
  }
}

const DATA = [
  new Product('T2', '1000', undefined, 'Tehran', true, true),
  new Product('T3', '2000', undefined, 'Tehran', true, true),
  new Product('T4', undefined, undefined, 'Tehran', true, true),
  new Product('T5', '1000', undefined, 'Tehran', false, false),
  new Product('T6', undefined, undefined, 'Tehran', false, false),
  new Product('T7', '1000', undefined, 'Tehran', true, true),
];

export function getData(filters) {
  if (!filters) {
    return fakeApiCall(DATA);
  }
  else {
    const chattable = !!filters.find(x => x.id === '1' && x.selected)
    const removeWithoutPrice = !!filters.find(x => x.id === '2' && x.selected)
    const condition = !!filters.find(x => x.id === '3' && x.selected)
    let result = [...DATA];
    if(chattable) {
      result = result.filter(x => !x.chatLocked)
    }
    
    if(removeWithoutPrice) {
      result = result.filter(x => x.price)
    }

    if(condition) {
      result = result.filter(x => !x.condition)
    }

    return fakeApiCall(result);
  }
}

function fakeApiCall(value) {
  return new Promise(resolve => {
    setTimeout(
      () => {
        resolve(value)
      },
      10
    )
  })
}