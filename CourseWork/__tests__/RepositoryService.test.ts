import { RepositoryService } from '../services/RepositoryService';

describe('RepositoryService', () => {
    it('should create a repository', () => {
        const service = new RepositoryService();
        const repo = service.createRepository('MyRepo', '/path/to/repo', 'ownerId');

        expect(repo.name).toBe('MyRepo');
        expect(repo.path).toBe('/path/to/repo');
    });

    it('should retrieve a repository by id', () => {
        const service = new RepositoryService();
        const repo = service.createRepository('MyRepo', '/path/to/repo', 'ownerId');

        const retrievedRepo = service.getRepository(repo.id);
        expect(retrievedRepo).toEqual(repo);
    });
});
