// CSR (Client Side Rendering) Component
// 주재훈 작성.

'use client'

import Link from 'next/link';
import { MENUBOX_COLOR } from '@/constants/color';
import Image from 'next/image';

type Data = {
  serverRenderedData: string[];
}

function CategoryComponent({ serverRenderedData }: Data) {

  return (
    <div className='Container w-[100%] min-h-[80px] flex items-center justify-center flex-wrap gap-[20px] '>
      {serverRenderedData.map((item, index) => (
        <div
          key={index}
          className='Catrgory w-[80px] h-[80px] rounded-md shadow-md overflow-hidden'
          style={{backgroundColor:MENUBOX_COLOR}}
        >
          <Link href={`/category/${item}/1`}>
            <div className='flex items-center justify-center w-full h-full hover:bg-slate-300 transition-all'>
              <Image src={`/images/containers/category/${item}.png`} width={100} height={100} alt='categoryImage' style={{objectFit: 'cover', width: '100%', height: '100%'}} className='hover:opacity-80'></Image>
            </div>
          </Link>
          <div className='w-[80px] h-[30px] flex flex-col items-center justify-center absolute'>
            <p key={index} className='text-center font-light text-[13px]'>{ item }</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryComponent  