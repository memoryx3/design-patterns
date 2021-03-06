abstract class Product {
  name: string;
  options: string[];

  constructor() {
    this.name = '';
    this.options = [''];
  }

  public showInfo(): void {
    console.log(`Product: ${this.name}, options: ${this.options.join(', ')}`);
  }
}

class Chocolate extends Product {
  public name: string;
  public options: string[];

  constructor() {
    super();
    this.name = 'Alenka';
    this.options = ['90% cacao', 'made in Russia', 'export only'];
  }
}
class PlayStation extends Product {
  public name: string;
  public options: string[];

  constructor() {
    super();
    this.name = 'PlayStation 5';
    this.options = ['digital version', 'made in China', 'for EU only'];
  }
}

abstract class Creator {
  abstract createProduct(): Product;
}

class ChocolateCreator extends Creator {
  createProduct(): Chocolate {
    return new Chocolate();
  }
}

class PlayStationCreator extends Creator {
  createProduct(): PlayStation {
    return new PlayStation();
  }
}

class Main {
  constructor() {
    const random = this.randomize();
    const product = this.chooseProduct(random).createProduct();
    product.showInfo();
  }

  private randomize(): boolean {
    return Math.round(Math.random()) ? true : false;
  }

  private chooseProduct(arg: boolean): Creator {
    return arg ? new ChocolateCreator() : new PlayStationCreator();
  }
}

new Main();