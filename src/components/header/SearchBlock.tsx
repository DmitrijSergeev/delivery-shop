import React from 'react';
import Image from "next/image";

export const SearchBlock = () => {
    return (
        <div className={'flex flex-row gap-4 flex-grow'}>
            <button className={'bg-(--color-primary) hover:shadow-(--shadow-button-default) active:shadow-(--shadow-button-active) hidden md:flex w-10 p-2 gap-4 lg:w-35 cursor-pointer duration-300 rounded'}
            >
                <Image src={'/icons-header/icon-menu.svg'} alt={'icon-menu'}
                       width={24} height={24}
                       className={'hidden md:block'}
                />
            </button>
            <div></div>
        </div>
    );
};
