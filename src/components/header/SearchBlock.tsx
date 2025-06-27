import React from 'react';
import Image from "next/image";

export const SearchBlock = () => {
    return (
        <div className={'flex flex-row'}>
            <button className={'bg-(--color-primary) ' +
                'hover:shadow-(--shadow-button-default) active:shadow-(--shadow-button-active)'}
            >
                <Image src={'/icon/icon-menu.svg'} alt={'icon'}/>
            </button>
            <div></div>
        </div>
    );
};
