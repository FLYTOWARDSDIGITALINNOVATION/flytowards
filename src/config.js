// Central configuration for dynamic environment switching
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const API_BASE_URL = isLocal 
    ? 'http://localhost:5000/api' 
    : 'https://flytowardsdigitalinnovation.com/ft-api';

export const IMAGE_BASE_URL = isLocal 
    ? 'http://localhost:5000' 
    : 'https://flytowardsdigitalinnovation.com/ft-uploads';

export const DEFAULT_CONTACT_EMAIL = 'flytowardsdigitalinnovation@gmail.com';

export const buildApiUrl = (endpoint = '') => {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return `${API_BASE_URL}${cleanEndpoint}`;
};
