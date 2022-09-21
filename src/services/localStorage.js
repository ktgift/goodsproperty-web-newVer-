const KEY_ACCESS_TOKEN = 'keyAccessToken';

export const getToken = () => localStorage.getItem(KEY_ACCESS_TOKEN);

// เพิ่ม token เข้า 
export const setToken = (token) => localStorage.setItem(KEY_ACCESS_TOKEN, token);

export const removeToken = () => localStorage.removeItem(KEY_ACCESS_TOKEN);