// Central configuration for dynamic environment switching
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const API_BASE_URL = isLocal 
    ? 'http://localhost:5002/api' 
    : 'https://flytowardsdigitalinnovation.com/ft-api';

export const IMAGE_BASE_URL = isLocal 
    ? 'http://localhost:5002' 
    : 'https://flytowardsdigitalinnovation.com/ft-uploads';
