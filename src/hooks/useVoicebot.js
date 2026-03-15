'use client';

import { useEffect, useState } from 'react';

const useVoicebot = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');

    useEffect(() => {
        const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new speechRecognition();

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event) => {
            const { transcript } = event.results[0][0];
            setTranscript(transcript);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        return () => {
            recognition.stop();
        };
    }, []);

    const startListening = () => {
        recognition.start();
    };

    const stopListening = () => {
        recognition.stop();
    };

    return { isListening, transcript, startListening, stopListening };
};

export default useVoicebot;
