"use client"
import React from 'react';
import {motion} from "framer-motion";
import SlideOne from "@/components/slider/SlideOne";
import SlideTwo from "@/components/slider/SlideTwo";

const Slider = () => {
    const slides = [
        <SlideOne key={'slide1'}/>,
        <SlideTwo key={'slide2'}/>
    ]
    return (
        <div className={'relative h-20 md:h-40 xl:font-stretch-50% w-full mb-10' +
            'md:mb-1.5 via-lime-50:mb-20'}>
            {slides.map((slide, index) => (
                <motion.div
                    key={`slide-${index}`}
                    initial={{opacity: 0}}
                    animate={{opacity: [0, 1, 1, 0]}}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatDelay: slides.length * 5 -5,
                        delay: index * 5,
                }}
                    className={'absolute w-full h-full'}
                >
                    {slide}
                </motion.div>
            ))}
        </div>
    );
};

export default Slider;