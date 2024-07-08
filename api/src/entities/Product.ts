interface ProductProps {
  name: string;
  description: string;
  price: number;
  available: boolean;
}

export class Product {
  private name: string;
  private description: string;
  private price: number;
  private available: boolean;

  public constructor(props: ProductProps){
    this.name = props.name;
    this.description = props.description;
    this.price = props.price;
    this.available = props.available;
  }
}
