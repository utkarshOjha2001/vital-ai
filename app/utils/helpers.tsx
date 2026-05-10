'use client';

import { useState, useEffect } from "react";


export const TypingText = ({ text, speed = 50, className }: ITypingTextProps) => {
    const [displayedText, setDisplayedText] = useState<string>('');

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));

            index++;

            if (index >= text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <div className={`${className}`}>
            {displayedText}
            <span className="animate-pulse">{" "} |</span>
        </div>
    )
}