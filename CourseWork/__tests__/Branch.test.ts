import { Branch } from '../models/Branch';

describe('Branch', () => {
    it('should create a branch with correct properties', () => {
        const branch = new Branch('1', 'main', 'repoId', 'commitId');

        expect(branch.id).toBe('1');
        expect(branch.name).toBe('main');
    });
});
