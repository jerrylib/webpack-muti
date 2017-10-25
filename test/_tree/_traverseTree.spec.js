import noop from 'lodash/noop';
import traverseTree from 'src/_tree/_traverseTree';

describe('traverseTree run test', () => {
    it('should illegal tree-data param return undefined', () => {
        const illegals = [undefined, null, '123', '', 0, Infinity, NaN, noop];
        illegals.forEach(illegal => expect(traverseTree(illegal, noop)).toBe(undefined));
    });

    it('should no-function method param return undefined', () => {
        const illegals = [undefined, null, '123', '', 0, Infinity, NaN];
        illegals.forEach(illegal => expect(traverseTree([], illegal)));
    });
});
