import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import '../../../../App.css'
import '../../../../fonts/gilroy/Gilroy-SemiBold.ttf'
import '../../../../fonts/gilroy/Gilroy-Bold.ttf'
import "../../../../fonts/Manrope/static/Manrope-Regular.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-Regular.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-Medium.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf"
function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 1000,
    config: { mass: 1, tension: 10, friction: 10 }
  });

  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}

function Sec2() {
  return (
    <div className='m-container mt-5 md:mt-[-10vh] mb-[1vh] pb-[5vh] font-[Montserrat-med] md:pr-10 ml:pl-5'>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4 text-center'>
        <div className='part-1 row-span-1 col-span-1'>
          <h1 className='font-bold text-[10vh]'>
            <Number n={5} />
          </h1>
          <p>Partnered Schools</p>
        </div>
        <div className='part-2 row-span-1 col-span-1'>
          <h1 className='font-bold text-[10vh]'>
            <Number n={100} /> <span>+</span>
          </h1>
          <p>Students reached by our newsletter</p>
        </div>
        <div className='part-3 row-span-1 col-span-1'>
          <h1 className='font-bold text-[10vh]'>
            <Number n={3} />
          </h1>
          <p>States where our newsletter has reached</p>
        </div>
        <div className='part-4 row-span-1 col-span-1'>
          <h1 className='font-bold text-[10vh]'>
            <Number n={500} /> <span>+</span>
          </h1>
          <p>Comprehensive articles written by <br /> mental health professionals</p>
        </div>
      </div>
    </div>
  );
}

export default Sec2;
