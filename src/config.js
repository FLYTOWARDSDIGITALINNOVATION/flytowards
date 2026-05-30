// Central configuration for dynamic environment switching
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const API_BASE_URL = isLocal 
    ? 'http://localhost:5010/api' 
    : 'https://flytowardsdigitalinnovation.com/ft-api';

export const IMAGE_BASE_URL = isLocal 
    ? 'http://localhost:5010' 
    : 'https://flytowardsdigitalinnovation.com/ft-uploads';

export const buildApiUrl = (path) => {
    const normalizedPath = String(path || '').replace(/^\/+/, '');
    return `${API_BASE_URL}/${normalizedPath}`;
};
