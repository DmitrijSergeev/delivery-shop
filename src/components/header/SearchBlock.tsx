import React from 'react';
import Image from "next/image";
import iconSearch from '../../../public/icons-header/icon-search.svg'

export const SearchBlock = () => {
    return (
        <div className={'flex flex-row gap-4 flex-grow'}>
            <button className={'bg-(--color-primary) hover:shadow-(--shadow-button-default) ' +
                'active:shadow-(--shadow-button-active) hidden md:flex ' +
                'w-10 p-2 gap-4 lg:w-35 cursor-pointer duration-300 rounded'}
            >
                <Image src={'/icons-header/icon-menu.svg'} alt={'icon-menu'}
                       width={24} height={24}
                       className={'hidden md:block'}
                />
                <span className={'text-base text-white hidden lg:block'}>Каталог</span>
            </button>
            <div className={'relative min-w-[261px]'}>
                <input type={'text'}
                       placeholder={'Найти товар'}
                       className={'w-full h-40px rounded p-2 outline outline-(--color-primary)' +
                           'focus:shadow-(--shadow-button-default) text-[#8f8f8f] text-base' +
                           'leading-[150%]'}
                />
                <button>
                    <Image src={iconSearch} alt={'Поиск'} width={24} height={24}/>
                </button>
            </div>
        </div>
    );
};
