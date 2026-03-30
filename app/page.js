import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div>
      <Navbar />

      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}