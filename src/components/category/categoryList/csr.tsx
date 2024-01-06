// CSR (Client Side Rendering) Component
// 이기웅 작성.

'use client'

import Link from "next/link";

export default function CategoryListComponent(){

    return (
        <div className="w-[65%] bg-red-200">
            <Link href={"/detail/1"}>상세 페이지</Link>
        </div>
    );
}