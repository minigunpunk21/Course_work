import { File } from '../models/File';

describe('File', () => {
    it('should create a file with correct properties', () => {
        const file = new File('1', 'file.txt', 'repoId', 'added');

        expect(file.id).toBe('1');
        expect(file.path).toBe('file.txt');
        expect(file.status).toBe('added');
    });
});
