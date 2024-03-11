import React, { useState } from "react";

function Shop({
  image,
  name,
  price,
  quantity,
  id,
  setData,
  total,
  setTotal,
  setQuantity,
}) {
  let add = (e) => {
    setData((prev) => {
      let value = [...prev];
      value[e].quantity += 1;
      setQuantity((prev) => (prev += 1));
      setTotal((amount) => {
        // console.log(value[e].price * value[e].quantity);
        return amount + value[e].price;
      });
      return value;
    });
  };
  let sub = (id) => {
    setData((prev) => {
      let value = [...prev];
      if (value[id].quantity > 0) {
        // console.log(value[id].quantity);
        value[id].quantity -= 1;
        setQuantity((prev) => (prev -= 1));
        setTotal((amount) => {
          // console.log(value[e].price * value[e].quantity);
          return amount - value[id].price;
        });
        return value;
      } else {
        return value;
      }
    });
    console.log(total);
  };

  const deleteBtn = (id) =>{
    setData((prev) =>{
      let value = [...prev]
      setQuantity((prev) => (prev - (value[id].quantity)));
      setTotal((prev) =>{
        return prev - (value[id].quantity * value[id].price)
      }) 
      let filterBtn = value.filter((e , idx) =>{
        return id != idx;
      })
      return filterBtn
    })
  }

  return (
    <div className="flex justify-evenly items-center gap-10 mb-10">
      <div className="flex ">
        <img className="w-20 h-20" src={image} alt="" />
        <div>
          <h5 className="font-medium mb-2">{name}</h5>
          <span>${price}</span>
          <br />
          <button
            className="text-[#645cff] text-sm bg-transparent border-none mt-2 cursor-pointer"
            onClick={() => {
              deleteBtn(id);
            }}
          >
            remove
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button onClick={() => add(id)} className="text-[#645cff] text-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            class="amount-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
          </svg>
        </button>
        <span>{quantity}</span>
        <button onClick={() => sub(id)} className="text-[#645cff] text-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            class="amount-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Shop;
