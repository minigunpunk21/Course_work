import { CommitService } from '../services/CommitService';
import { Repository } from '../models/Repository';
import { Commit } from '../models/Commit';

describe('CommitService', () => {
    it('should create a commit for a repository', () => {
        const repo = new Repository('1', 'MyRepo', '/path/to/repo', 'ownerId', new Date());
        const commitService = new CommitService();

        const commit = commitService.createCommit(repo, 'nikita', 'Initial commit');

        expect(commit.message).toBe('Initial commit');
        expect(repo.getCommits()).toContain(commit);
    });
});
