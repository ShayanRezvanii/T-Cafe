import React from 'react';
import Product from '../Product';
import data from '../../../Data/products.json';

function ProductsDesktop({selectedValue}) {
  const filtered = data.categories.filter((item) => item.name === selectedValue);

  const filteredItems = filtered.length > 0 ? filtered[0].items : [];
  console.log(filteredItems);

  return (
    <div className='w-full h-fit gap-6 items-center justify-between p-10 flex flex-wrap'>
      {filteredItems.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ProductsDesktop;
