import Product from './Product';
import data from '../../Data/products.json'


function Products() {


  return (
    <div className={`w-full flex flex-col space-y-3  justify-center items-center relative  `}>
      {data.map((product, index) => (
        <Product key={index} title={product.name} image={product.image} price={product.price} desc={product.description} />
      ))}
      <div className=' bg-gradient-to-t from-black to-black/0 w-full max-w-[360px] h-[100px] bottom-2 fixed  z-30'></div>
    </div>
  );
}

export default Products;
