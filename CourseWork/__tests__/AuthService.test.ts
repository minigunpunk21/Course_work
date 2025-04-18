import { AuthService } from '../services/AuthService';

describe('AuthService', () => {
    it('should register a user and authenticate correctly', () => {
        const authService = new AuthService();
        const user = authService.register('nikita', 'password123', 'nikita@example.com');

        expect(user.login).toBe('nikita');

        const authenticatedUser = authService.authenticate('nikita', 'password123');
        expect(authenticatedUser).toEqual(user);
    });

    it('should return null for incorrect authentication', () => {
        const authService = new AuthService();
        authService.register('nikita', 'password123', 'nikita@example.com');

        const authenticatedUser = authService.authenticate('nikita', 'wrongPassword');
        expect(authenticatedUser).toBeNull();
    });
});
