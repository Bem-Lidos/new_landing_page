'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../Button';

const books = [
    {
        id: 1,
        title: 'O Pequeno Príncipe',
        author: 'Antoine de Saint-Exupéry',
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
        progress: 45,
        currentChapter: 'Capítulo 8',
    },
    {
        id: 2,
        title: 'Dom Casmurro',
        author: 'Machado de Assis',
        cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop',
        progress: 72,
        currentChapter: 'Capítulo 21',
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop',
        progress: 30,
        currentChapter: 'Parte 1, Cap. 5',
    },
    {
        id: 4,
        title: 'Cem Anos de Solidão',
        author: 'Gabriel García Márquez',
        cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=450&fit=crop',
        progress: 58,
        currentChapter: 'Capítulo 12',
    },
    {
        id: 5,
        title: 'A Metamorfose',
        author: 'Franz Kafka',
        cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop',
        progress: 88,
        currentChapter: 'Parte 3',
    },
    {
        id: 6,
        title: 'O Senhor dos Anéis',
        author: 'J.R.R. Tolkien',
        cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop',
        progress: 15,
        currentChapter: 'Capítulo 3',
    },
    {
        id: 7,
        title: 'Orgulho e Preconceito',
        author: 'Jane Austen',
        cover: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop',
        progress: 62,
        currentChapter: 'Capítulo 18',
    },
];

const getIndex = (index: number, length: number) => {
    return ((index % length) + length) % length;
};

export function Hero() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Refs for GSAP animations
    const farLeftRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const farRightRef = useRef<HTMLDivElement>(null);
    const phoneCoverRef = useRef<HTMLDivElement>(null);
    const phoneInfoRef = useRef<HTMLDivElement>(null);
    const phoneProgressRef = useRef<HTMLDivElement>(null);
    const gsapRef = useRef<typeof import('gsap').default | null>(null);

    const currentBook = books[selectedIndex];

    // Load GSAP only on client
    useEffect(() => {
        import('gsap').then((gsapModule) => {
            gsapRef.current = gsapModule.default;
            setIsMounted(true);
        });
    }, []);

    const animateSlide = useCallback((direction: 'left' | 'right', onComplete: () => void) => {
        const gsap = gsapRef.current;
        if (!gsap) return onComplete();

        const tl = gsap.timeline({
            onComplete,
        });

        const moveDistance = direction === 'right' ? -120 : 120;
        const exitDistance = direction === 'right' ? -200 : 200;

        // Animate all books sliding
        tl.to(farLeftRef.current, {
            x: direction === 'right' ? exitDistance : moveDistance,
            opacity: direction === 'right' ? 0 : 0.7,
            scale: direction === 'right' ? 0.6 : 1,
            duration: 0.5,
            ease: 'back.out(1.2)',
        }, 0);

        tl.to(leftRef.current, {
            x: moveDistance,
            opacity: direction === 'right' ? 0.4 : 0,
            scale: direction === 'right' ? 0.85 : 0.8,
            duration: 0.5,
            ease: 'back.out(1.2)',
        }, 0);

        tl.to(rightRef.current, {
            x: moveDistance,
            opacity: direction === 'left' ? 0.4 : 0,
            scale: direction === 'left' ? 0.85 : 0.8,
            duration: 0.5,
            ease: 'back.out(1.2)',
        }, 0);

        tl.to(farRightRef.current, {
            x: direction === 'left' ? exitDistance : moveDistance,
            opacity: direction === 'left' ? 0 : 0.7,
            scale: direction === 'left' ? 0.6 : 1,
            duration: 0.5,
            ease: 'back.out(1.2)',
        }, 0);

        // Animate phone content
        tl.to(phoneCoverRef.current, {
            x: direction === 'right' ? -150 : 150,
            opacity: 0,
            scale: 0.8,
            rotateY: direction === 'right' ? -20 : 20,
            duration: 0.4,
            ease: 'power2.in',
        }, 0);

        tl.to(phoneInfoRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
        }, 0);

        tl.to(phoneProgressRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
        }, 0);

    }, []);

    const resetPositions = useCallback(() => {
        const gsap = gsapRef.current;
        if (!gsap) return;

        // Reset all positions with bounce entrance
        gsap.set([farLeftRef.current, leftRef.current, rightRef.current, farRightRef.current], { x: 0 });
        gsap.set(farLeftRef.current, { opacity: 0.4, scale: 0.85 });
        gsap.set(leftRef.current, { opacity: 0.7, scale: 1 });
        gsap.set(rightRef.current, { opacity: 0.7, scale: 1 });
        gsap.set(farRightRef.current, { opacity: 0.4, scale: 0.85 });

        // Animate phone content entrance with bounce
        gsap.fromTo(phoneCoverRef.current,
            { x: 0, opacity: 0, scale: 0.5, rotateY: 0 },
            { x: 0, opacity: 1, scale: 1, rotateY: 0, duration: 0.6, ease: 'back.out(1.7)' }
        );

        gsap.fromTo(phoneInfoRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: 'back.out(1.5)' }
        );

        gsap.fromTo(phoneProgressRef.current,
            { opacity: 0, scaleX: 0 },
            { opacity: 1, scaleX: 1, duration: 0.5, delay: 0.2, ease: 'back.out(1.3)' }
        );
    }, []);

    const scrollPrev = useCallback(() => {
        if (isAnimating || !isMounted) return;
        setIsAnimating(true);

        animateSlide('left', () => {
            setSelectedIndex((prev) => getIndex(prev - 1, books.length));
            resetPositions();
            setTimeout(() => setIsAnimating(false), 100);
        });
    }, [isAnimating, isMounted, animateSlide, resetPositions]);

    const scrollNext = useCallback(() => {
        if (isAnimating || !isMounted) return;
        setIsAnimating(true);

        animateSlide('right', () => {
            setSelectedIndex((prev) => getIndex(prev + 1, books.length));
            resetPositions();
            setTimeout(() => setIsAnimating(false), 100);
        });
    }, [isAnimating, isMounted, animateSlide, resetPositions]);

    const goToIndex = useCallback((index: number) => {
        if (isAnimating || index === selectedIndex || !isMounted) return;
        const direction = index > selectedIndex ? 'right' : 'left';
        setIsAnimating(true);

        animateSlide(direction, () => {
            setSelectedIndex(index);
            resetPositions();
            setTimeout(() => setIsAnimating(false), 100);
        });
    }, [isAnimating, selectedIndex, isMounted, animateSlide, resetPositions]);

    // Auto-play
    useEffect(() => {
        if (!isMounted) return;

        const interval = setInterval(() => {
            if (!isAnimating) {
                scrollNext();
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [scrollNext, isAnimating, isMounted]);

    // Get visible books
    const getVisibleBooks = () => {
        return {
            farLeft: books[getIndex(selectedIndex - 2, books.length)],
            left: books[getIndex(selectedIndex - 1, books.length)],
            current: books[selectedIndex],
            right: books[getIndex(selectedIndex + 1, books.length)],
            farRight: books[getIndex(selectedIndex + 2, books.length)],
        };
    };

    const visibleBooks = getVisibleBooks();

    return (
        <section className="relative overflow-hidden min-h-screen">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-linear-to-b from-primary-50 via-background to-background dark:from-primary-900/10 dark:via-background dark:to-background" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
                {/* Header content */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Sua biblioteca digital na palma da mão
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-10">
                        Descubra milhares de livros, acompanhe seu progresso de leitura e conecte-se com uma comunidade apaixonada por literatura.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg">
                            Começar grátis
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg">
                            <Play className="w-5 h-5" />
                            Ver demonstração
                        </Button>
                    </div>
                </div>

                {/* Slider section - 5 items visible */}
                <div className="relative flex items-center justify-center gap-3 md:gap-5 overflow-hidden px-4">
                    {/* Far Left book */}
                    <div
                        ref={farLeftRef}
                        className="w-20 h-30 md:w-28 md:h-42 shrink-0 rounded-lg shadow-xl bg-cover bg-center cursor-pointer hover:brightness-110 opacity-40 scale-85"
                        style={{ backgroundImage: `url(${visibleBooks.farLeft.cover})` }}
                        onClick={scrollPrev}
                    />

                    {/* Left book */}
                    <div
                        ref={leftRef}
                        className="w-28 h-42 md:w-36 md:h-54 shrink-0 rounded-lg shadow-xl bg-cover bg-center cursor-pointer hover:brightness-110 opacity-70"
                        style={{ backgroundImage: `url(${visibleBooks.left.cover})` }}
                        onClick={scrollPrev}
                    />

                    {/* Phone mockup - static in center */}
                    <div className="relative w-56 md:w-64 shrink-0 z-10">
                        {/* Phone frame */}
                        <div className="bg-gray-900 dark:bg-gray-800 rounded-[2rem] p-2 shadow-2xl">
                            {/* Phone notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-xl z-10" />

                            {/* Phone screen */}
                            <div className="bg-white dark:bg-gray-900 rounded-[1.5rem] overflow-hidden aspect-9/19">
                                {/* App content */}
                                <div className="h-full flex flex-col">
                                    {/* Status bar */}
                                    <div className="h-8 flex items-end justify-center pb-1">
                                        <div className="w-14 h-1 bg-gray-300 dark:bg-gray-700 rounded-full" />
                                    </div>

                                    {/* Book cover in app */}
                                    <div className="flex-1 p-2 flex flex-col items-center overflow-hidden">
                                        <div className="relative w-24 h-36 md:w-28 md:h-40 overflow-hidden">
                                            <div
                                                ref={phoneCoverRef}
                                                className="absolute inset-0 rounded-lg shadow-lg bg-cover bg-center"
                                                style={{ backgroundImage: `url(${currentBook.cover})` }}
                                            />
                                        </div>

                                        {/* Book info */}
                                        <div ref={phoneInfoRef} className="mt-2 text-center">
                                            <h3 className="font-semibold text-[10px] md:text-xs text-gray-900 dark:text-white line-clamp-1">
                                                {currentBook.title}
                                            </h3>
                                            <p className="text-[8px] md:text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                                                {currentBook.author}
                                            </p>
                                        </div>

                                        {/* Progress bar */}
                                        <div ref={phoneProgressRef} className="w-full mt-2 px-1 origin-left">
                                            <div className="flex justify-between text-[8px] text-gray-500 mb-0.5">
                                                <span>{currentBook.currentChapter}</span>
                                                <span>{currentBook.progress}%</span>
                                            </div>
                                            <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary rounded-full transition-all duration-700"
                                                    style={{ width: `${currentBook.progress}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Continue reading button */}
                                        <button className="mt-2 w-full bg-primary text-primary-foreground py-1.5 rounded-lg text-[10px] font-medium">
                                            Continuar lendo
                                        </button>
                                    </div>

                                    {/* Bottom nav bar */}
                                    <div className="h-10 border-t border-gray-200 dark:border-gray-800 flex items-center justify-around px-3">
                                        <div className="w-4 h-4 rounded bg-gray-300 dark:bg-gray-700" />
                                        <div className="w-4 h-4 rounded bg-primary" />
                                        <div className="w-4 h-4 rounded bg-gray-300 dark:bg-gray-700" />
                                        <div className="w-4 h-4 rounded bg-gray-300 dark:bg-gray-700" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right book */}
                    <div
                        ref={rightRef}
                        className="w-28 h-42 md:w-36 md:h-54 shrink-0 rounded-lg shadow-xl bg-cover bg-center cursor-pointer hover:brightness-110 opacity-70"
                        style={{ backgroundImage: `url(${visibleBooks.right.cover})` }}
                        onClick={scrollNext}
                    />

                    {/* Far Right book */}
                    <div
                        ref={farRightRef}
                        className="w-20 h-30 md:w-28 md:h-42 shrink-0 rounded-lg shadow-xl bg-cover bg-center cursor-pointer hover:brightness-110 opacity-40 scale-85"
                        style={{ backgroundImage: `url(${visibleBooks.farRight.cover})` }}
                        onClick={scrollNext}
                    />
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {books.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === selectedIndex
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                            }`}
                            onClick={() => goToIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
