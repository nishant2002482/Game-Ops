import Header from '@/components/common/Header';
import Image from 'next/image';
import React from 'react';
import Logo from '../public/assets/GameOps.svg'
import DoubleSpace from '@/components/common/DoubleSpace';


const UnityComponent = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-cover bg-center relative' >  
      <Image className='w-full h-full object-cover' src='/backgoundImage.avif' alt='' height={1000} width={1000} />
      <div className='absolute w-full top-0 flex'>
        <Image className='mt-4 ml-6' src={Logo} alt='' height={150} width={150} />
      </div>
      <div className='absolute flex flex-col'>
        <div className=''>
          <DoubleSpace />
        </div>
      </div>
    </div>
  );
};

export default UnityComponent;