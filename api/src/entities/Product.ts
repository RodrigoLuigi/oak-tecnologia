interface ProductProps {
  name: string;
  description: string;
  price: number;
  available: boolean;
}

export class Product {
  public name: string;
  public description: string;
  public price: number;
  public available: boolean;

  public constructor(props: ProductProps){
    this.name = props.name;
    this.description = props.description;
    this.price = props.price;
    this.available = props.available;
  }
}
