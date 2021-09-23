import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from 'react-currency-formatter';
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from 'react-redux';

const CheckoutProduct = ({
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime
}) => {

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime
    };

    //Push item in to redux store
    dispatch(addToBasket(product));
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  }
  
  return (
    <div className='grid grid-cols-5'>
      <Image
        src={image}
        height={200}
        width={200}
        objectFit='contain'
      />
      {/* Middle */}
      <div className='col-span-3 mx-5'>
        <p>{ title }</p>
        <div className='flex'>
          {Array(rating).fill().map((_, i)=> (
            <StarIcon
              key={i}
              className='h-5 text-yellow-500'
            />
        )) }
        </div>
        <p className='text-xs my-2 line-clamp-3'>{ description }</p>
        <Currency quantity={price} currency="INR" />
        
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              loading='lazy'
              className='w-12'
              src='https://links.papareact.com/fdw'
              alt=''
            />
            <p className='text-xs text-gray-500'>FREE NEXT-day Delivery</p>
          </div>
        )}
      </div>
{/*Right add/Remove button */}
      <div className='flex flex-col space-y-2 my-auto 
      justify-self-end'>
        <button className='button mt-auto' onClick={addItemToBasket}>Add to Basket</button>
         <button className='button mt-auto'onClick={removeItemFromBasket}>Remove from Basket</button>
      
      </div>
<button className='button mt-auto'></button>
    </div>
  )
}

export default CheckoutProduct;
