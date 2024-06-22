import React from 'react';

function Props({ message, name, occupation, image }) {
  return (
    <div className='testimonial-card'>
      <div>
        {message && <p className='text max-w-[300px] font-semibold'>{message}</p>}
      </div>
      <div>
        {image && <img src={image} alt="" className='photo mt-auto' />}
        {name && <p className='name mt-auto'>{name}</p>}
        {occupation && <p className='occupation'>{occupation}</p>}
      </div>
    </div>
  );
}

export default Props;
