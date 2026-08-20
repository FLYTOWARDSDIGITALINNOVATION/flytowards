// Central configuration for dynamic environment switching
<<<<<<< HEAD
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const API_BASE_URL = isLocal 
    ? 'http://localhost:5000/api' 
    : 'https://flytowardsdigitalinnovation.com/ft-api';

export const IMAGE_BASE_URL = isLocal 
    ? 'http://localhost:5000' 
    : 'https://flytowardsdigitalinnovation.com/ft-uploads';

export const DEFAULT_CONTACT_EMAIL = 'flytowardsdigitalinnovation@gmail.com';
=======
const isBrowser = typeof window !== 'undefined';
const isLocalHost =
    isBrowser &&
    ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);

const normalizeBaseUrl = (value) => {
    if (!value) return '';
    return value.trim().replace(/\/+$/, '');
};

const envApiBaseUrl = normalizeBaseUrl(import.meta?.env?.VITE_API_BASE_URL);
const envImageBaseUrl = normalizeBaseUrl(import.meta?.env?.VITE_IMAGE_BASE_URL);

export const API_BASE_URL = envApiBaseUrl || (isLocalHost ? 'http://localhost:5010/api' : 'https://flytowardsdigitalinnovation.com/ft-api');
export const IMAGE_BASE_URL = envImageBaseUrl || (isLocalHost ? 'http://localhost:5010' : 'https://flytowardsdigitalinnovation.com/ft-uploads');

export const buildApiUrl = (path = '') => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${API_BASE_URL}${normalizedPath}`;
};

export const buildImageUrl = (path = '') => {
    if (!path) return '';
    if (/^[a-z]+:/i.test(path)) return path;

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    if (!IMAGE_BASE_URL) return normalizedPath;
    return `${IMAGE_BASE_URL}${normalizedPath}`;
};
>>>>>>> origin/main
