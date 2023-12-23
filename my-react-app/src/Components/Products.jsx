import Product from './Product';
import data from '../../Data/products.json';
import PopUp from './PopUp';
import { useState } from 'react';
function Products({ selectedValue }) {
  const [dataProduct, setDataProduct] = useState(null)
  const filteredCategories = data.categories.filter(
    (category) => category.name === selectedValue
  );

  const filteredItems =
    filteredCategories.length > 0 ? filteredCategories[0].items : [];

    const [close, setClose] = useState(false);
    const closePopupHandler = () => {
      setClose(!close);
      console.log(close);
    };
    const openModalHandler = (product) => {
      setDataProduct(product);
      setClose(true);
    };
  return (
    <div className={`w-full  flex flex-col space-y-3 justify-center items-center relative`}>
      {filteredItems.map((item) => (
        <Product key={item.id} {...item}  openModalHandler={openModalHandler} />
      ))}
       {close ? (
        <div className=" bg-black/80 max-w-[460px]  fixed  right-0 left-0 bottom-0 flex justify-center items-center z-40 w-full  h-screen  ">
          <PopUp closeButton={closePopupHandler} selectedProduct={dataProduct}  />
        </div>
      ) : null}
      <div className=' bg-gradient-to-t from-black to-black/0 w-full max-w-[360px] h-[100px] bottom-0 fixed z-30'></div>
    </div>
  );
}

export default Products;
