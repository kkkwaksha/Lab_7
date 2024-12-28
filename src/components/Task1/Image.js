import React, { useState } from "react";

function Image() {
  const [size, setSize] = useState(700);

  const increaseSize = () => {
    if (size < 1200) {
      setSize(size + 50);
    }
  };

  const decreaseSize = () => {
    if (size > 50) {
      setSize(size - 50);
    }
  };

  const resetSize = () => {
    setSize(700);
  };

  const removeImage = () => {
    setSize(0);
  };

  return (
    <div>
      {size > 0 && (
        <img
          src="/images/poznan.png"
          alt="Познань"
          style={{ width: `${size}px` }}
        />
      )}
      <div>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
        <button onClick={resetSize}>Додати</button>
      </div>
    </div>
  );
}

export default Image;

