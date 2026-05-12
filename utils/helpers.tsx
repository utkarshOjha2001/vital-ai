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

export const dateAnalyzer = (date: Date) => {

    const currentDate = new Date();

    const today = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
    );

    const targetDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    );

    const diffTime =
        today.getTime() - targetDate.getTime();

    const diffDays =
        diffTime / (1000 * 60 * 60 * 24);

    if (diffDays === 0) {
        return 'Today';
    }
    if (diffDays === 1) {
        return 'Yesterday';
    }

    return new Intl.DateTimeFormat(
        'en-In',
        {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        }
    ).format(date);
};
