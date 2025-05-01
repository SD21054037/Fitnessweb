
export default function useAuth() {
    const token = localStorage.getItem('token');
    if (!token) return { isAuthenticated: false };

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const isExpired = payload.exp * 1000 < Date.now();
        return {
            isAuthenticated: !isExpired,
            payload,
            logout: () => localStorage.removeItem('token')
        };
    } catch {
        return { isAuthenticated: false };
    }
}
