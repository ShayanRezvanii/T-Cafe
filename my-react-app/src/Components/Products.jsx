import Product from './Product';
import data from '../../Data/products.json';

function Products({ selectedValue }) {
  console.log(selectedValue);

  const filteredCategories = data.categories.filter(
    (category) => category.name === selectedValue
  );

  const filteredItems =
    filteredCategories.length > 0 ? filteredCategories[0].items : [];


  return (
    <div className={`w-full flex flex-col space-y-3 justify-center items-center relative`}>
      {filteredItems.map((item) => (
        <Product key={item.id} {...item} />
      ))}

      <div className=' bg-gradient-to-t from-black to-black/0 w-full max-w-[360px] h-[100px] bottom-2 fixed z-30'></div>
    </div>
  );
}

export default Products;
