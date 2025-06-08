import React from 'react';
import {LogoBlock} from "@/components/header/LogoBlock";
import {SearchBlock} from "@/components/header/SearchBlock";
import {HeaderUserBlock} from "@/components/header/HeaderUserBlock";

export const Header = () => {
    return (
        <header className={'bg-white w-full shadow-(--shadow-default)'}>
            Header
            <LogoBlock/>
            <SearchBlock/>
            <nav aria-label="Основное меню">
                <HeaderUserBlock/>
            </nav>
        </header>
    );
};
