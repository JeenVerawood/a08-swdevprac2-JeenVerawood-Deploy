import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
    return (
        <div className="h-16 flex justify-end items-center bg-white shadow-md px-5 fixed top-0 w-full z-50">
             <div className="">
                <TopMenuItem title="Booking" href="/booking" />
            </div>
            <Image src="/img/logo.png" alt="Logo" width={40} height={40} />
        </div>
    );
}