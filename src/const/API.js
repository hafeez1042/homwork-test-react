export const BASE_URL = 'http://localhost:1337/';

export const LISTING_API = `${BASE_URL}homework`;
export const DETAILS_API = (id) => `${BASE_URL}homework/${id}`;
export const UPDATE_API = DETAILS_API;
