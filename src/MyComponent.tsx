interface Product {
  id: number;
  name: string;
  price: number;
};

export const MyComponent = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h2>Product Lists</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
