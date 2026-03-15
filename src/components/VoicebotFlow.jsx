import React from 'react';
import { Button } from 'YOUR_UI_LIBRARY'; // Import your UI library component

const VoicebotFlow = () => {
    return (
        <div>
            <h1>Voicebot Flow</h1>
            <p>This is a guided flow for the voicebot.</p>
            <Button onClick={() => alert('Start the flow!')}>Start</Button>
        </div>
    );
};

export default VoicebotFlow;