import { Commit } from '../models/Commit';

describe('Commit', () => {
    it('should create a commit with correct properties', () => {
        const commit = new Commit('1', 'hash', 'repoId', 'nikita', new Date(), 'Initial commit');

        expect(commit.id).toBe('1');
        expect(commit.message).toBe('Initial commit');
        expect(commit.author).toBe('nikita');
    });
});
