// TypingAnimation.js

import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
    const [text, setText] = useState('');
    const phrases = ['Explore trends, predictions, and insights for college admissions'];

    useEffect(() => {
        let currentPhraseIndex = 0;
        let currentTextIndex = 0;
        let timeout;

        const type = () => {
            if (currentPhraseIndex === phrases.length) {
                currentPhraseIndex = 0;
            }

            const currentPhrase = phrases[currentPhraseIndex];
            setText(currentPhrase.substring(0, currentTextIndex));

            currentTextIndex++;

            if (currentTextIndex > currentPhrase.length) {
                currentTextIndex = 0;
                currentPhraseIndex++;
            }

            timeout = setTimeout(type, 100); // Adjust typing speed here (200ms)
        };

        type();

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="text-center mt-5 w-2/3">
            <h4 className="text-lg md:text-xl font-bold mb-4 text-purple-600">{text}</h4>
        </div>
    );
};

export default TypingAnimation;
