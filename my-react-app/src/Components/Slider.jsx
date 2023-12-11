import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react.es';

function Slider({ selectedValue, onSelectionChange }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged() {
      console.log('Changed');
    },
    slides: {
      perView: 3,
      spacing: 16,
    },
    drag: true,
  });

  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleSlideFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleSlideBlur = () => {
    setFocusedIndex(null);
  };

  const handleClick = (value) => {
    // Call the onSelectionChange function with the clicked value
    onSelectionChange(value);
  };

  return (
    <div
      ref={sliderRef}
      className='w-full h-[66px] flex justify-center items-center z-30 keen-slider cursor-pointer'
    >
      <button
        className={`keen-slider__slide rounded-xl text text-sm w-full h-[20px] bg-yellow-50 ${
          focusedIndex === 0 ? 'focus:bg-orange-300' : ''
        } flex justify-center items-center`}
        onFocus={() => handleSlideFocus(0)}
        onBlur={handleSlideBlur}
        tabIndex="0"
        onClick={() => handleClick('FastFoods')}
      >
        فست فود
      </button>
      <button
        className={`keen-slider__slide rounded-xl w-full text-sm h-[20px] bg-yellow-50 ${
          focusedIndex === 1 ? 'focus:bg-orange-300' : ''
        } flex justify-center items-center`}
        onFocus={() => handleSlideFocus(1)}
        onBlur={handleSlideBlur}
        tabIndex="0"
        onClick={() => handleClick('Cakes')}
      >
        کیک ها
      </button>
      <button
        className={`keen-slider__slide rounded-xl w-full text-sm h-[20px] bg-yellow-50 ${
          focusedIndex === 2 ? 'focus:bg-orange-300' : ''
        } flex justify-center items-center`}
        onFocus={() => handleSlideFocus(2)}
        onBlur={handleSlideBlur}
        tabIndex="0"
        onClick={() => handleClick('CoolDrinks')}
      >
        نوشیدنی های سرد
      </button>
      <button
        className={`keen-slider__slide rounded-xl w-full text-sm h-[20px] bg-yellow-50 ${
          focusedIndex === 3 ? 'focus:bg-orange-300' : ''
        } flex justify-center items-center`}
        onFocus={() => handleSlideFocus(3)}
        onBlur={handleSlideBlur}
        tabIndex="0"
        onClick={() => handleClick('HotDrinks')}
      >
        نوشیدنی های گرم
      </button>
    </div>
  );
}

export default Slider;
