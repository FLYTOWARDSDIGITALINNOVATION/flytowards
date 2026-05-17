// Central configuration for dynamic environment switching
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const API_BASE_URL = isLocal 
    ? 'http://localhost:5000' 
    : 'https://flytowardsdigitalinnovation.com';
