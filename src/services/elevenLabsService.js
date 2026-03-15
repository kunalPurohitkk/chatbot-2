// elevenLabsService.js

const axios = require('axios');

const ELEVEN_LABS_API_KEY = 'your_api_key_here'; // Replace with your Eleven Labs API key
const BASE_URL = 'https://api.elevenlabs.io/v1';

// Function to synthesize speech
async function synthesizeSpeech(text) {
    try {
        const response = await axios.post(`${BASE_URL}/synthesize`, {
            text: text,
        }, {
            headers: {
                'Authorization': `Bearer ${ELEVEN_LABS_API_KEY}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error synthesizing speech:', error);
        throw error;
    }
}

module.exports = {
    synthesizeSpeech,
};