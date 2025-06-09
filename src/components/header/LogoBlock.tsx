import React from 'react';
import Link from "next/link";
import Image from "next/image";

export const LogoBlock = () => {
    return (
        <Link href="/" className={'flex flex-row gap-3 items-center cursor-pointer'}>
            <div className={'relative w-10 h-8 md:w-12 md:h-10 xl:w-10 xl:h-8'}>
                <Image src={'/icons-header/icon-logo.svg'} alt={'Logo'}
                       fill sizes={'(max-width: 768px) 100vw, max-width: 1200px) 50vw, 33vw'}
                />
            </div>
            <div className={''}>
                <Image src={''} alt={'text'}
                       fill
                />
            </div>
        </Link>
    );
};
