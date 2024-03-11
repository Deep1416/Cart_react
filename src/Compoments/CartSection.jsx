import React, { useState } from "react";
import Shop from "./Shop";
import Data from "./Data.json";

function CartSection({ quantity, setQuantity }) {
  const [data, setData] = useState(Data);
  const [total, setTotal] = useState(0);
  
  const clearBtn = () =>{
    setData([]);
    setTotal(0);
    setQuantity(0);

  }
  
  return (
    <>
    {
      data.length ? <div className="w-[90vw]  max-width-[800px] m-auto mt-10 px-9">
      <div>
        <h2 className="text-4xl mb-12 text-center uppercase">your bag</h2>
      </div>
      <div>
        {data.map((e, i) => {
          return (
            <Shop
              key={i}
              image={e.img_url}
              name={e.name}
              price={e.price}
              quantity={e.quantity}
              id={i}
              setData={setData}
              total={total}
              setTotal={setTotal}
              setQuantity = {setQuantity}
            />
          );
        })}
      </div>

      <div className="m-20 text-center">
        <hr className="h-2" />
        <div className="flex justify-around gap-1 p-5 ">
          <h3 className="text-xl font-medium">Total</h3>
          <span className="text-xl font-medium bg-[#645cff] px-3 text-white rounded ">${total}</span>
        </div>
        <button className="text-center bg-[#c1beff] text-[#645cff] py-1 px-3 font-medium  rounded hover:bg-[#645cff] hover:text-white" onClick={clearBtn} >Clear Cart</button>
      </div>
    </div>:<h2 className=" flex justify-center items-center mt-28 text-3xl font-italic">Card is Empty</h2>
    } 
    
    </>
    
  );
}

export default CartSection;
