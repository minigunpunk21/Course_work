import { Repository } from '../models/Repository';
import { Commit } from '../models/Commit';
import { File } from '../models/File';
import { Branch } from '../models/Branch';

describe('Repository', () => {
    it('should add a file to the repository', () => {
        const repo = new Repository('1', 'MyRepo', '/path/to/repo', 'ownerId', new Date());
        const file = new File('1', 'file.txt', repo.id, 'added');

        repo.addFile(file);
        expect(repo.getFiles()).toContain(file);
    });

    it('should add a commit to the repository', () => {
        const repo = new Repository('1', 'MyRepo', '/path/to/repo', 'ownerId', new Date());
        const commit = new Commit('1', 'hash', repo.id, 'nikita', new Date(), 'Initial commit');

        repo.addCommit(commit);
        expect(repo.getCommits()).toContain(commit);
    });

    it('should add a branch to the repository', () => {
        const repo = new Repository('1', 'MyRepo', '/path/to/repo', 'ownerId', new Date());
        const branch = new Branch('1', 'main', repo.id, 'commitId');

        repo.addBranch(branch);
        expect(repo.getBranches()).toContain(branch);
    });
});
