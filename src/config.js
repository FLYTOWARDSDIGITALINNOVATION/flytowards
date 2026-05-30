// Central configuration for dynamic environment switching
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

export const API_BASE_URL = envApiBaseUrl || (isLocalHost ? '/api' : 'https://flytowardsdigitalinnovation.com/ft-api');
export const IMAGE_BASE_URL = envImageBaseUrl || (isLocalHost ? '' : 'https://flytowardsdigitalinnovation.com/ft-uploads');

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
