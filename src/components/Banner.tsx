"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Banner() {

    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg'];
    // const covers = ['/cover.jpg', '/cover2.jpg', '/cover3.jpg', '/cover4.jpg'];
    // const covers = ['../../public/', '/cover2.jpg', '/cover3.jpg', '/cover4.jpg'];
    // const covers = ['.././', '/cover2.jpg', '/cover3.jpg', '/cover4.jpg'];
    const [index, setIndex] = useState(0);
    const router = useRouter();

    return (
        <div 
            className="relative w-full h-96 overflow-hidden cursor-pointer" 
            onClick={() => setIndex((index + 1) % covers.length)}
        >
            <img 
                src={covers[index]} 
                alt="Banner" 
                className="w-full h-96 object-cover" 
            />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black/40 rounded-xl p-10">
                <h1 className="text-4xl font-bold">Where every event finds its venue</h1>
                <p>บริการจองสถานที่จัดเลี้ยงครบวงจร ตอบโจทย์ทุกโอกาสพิเศษของคุณ</p>
            </div>
            <button 
                className="absolute bottom-5 right-5 bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200"
                onClick={(e) => {
                   
                    e.stopPropagation();
                    router.push('/venue');
                }}
            >
                Select Venue
            </button>
        </div>
    );
}