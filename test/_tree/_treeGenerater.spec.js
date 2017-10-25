import isObject from 'lodash/isObject';
import get from 'lodash/get';
import { fullLevelTree, DEFAULT_SETTINGS } from 'src/_tree/_treeGenerater';

describe('generater full tree', () => {
    it('should root count current', () => {
        const rootCounts = [0, 1, 2, 4, 10];
        rootCounts.forEach(function (rootCount) {
            const tree = fullLevelTree({
                rootCount
            });

            expect(tree.length).toEqual(rootCount);
            tree.forEach(node => expect(isObject(node)).toBeTruthy());
        });
    });

    it('should current level structure', () => {
        const maxLevels = [1, 2, 4, 10];
        const childrenKey = DEFAULT_SETTINGS.CHILDREN_ID_KEY;
        maxLevels.forEach(function (maxLevel) {
            const tree = fullLevelTree({ maxLevel });
            tree.forEach(function (root) {
                const path = levelPath(childrenKey, maxLevel);
                const leaf = get(root, path);
                const nextLeaf = get(root, levelPath(childrenKey, maxLevel + 1));

                expect(isObject(leaf)).toBeTruthy();
                expect(nextLeaf).toBeUndefined();
            });
        });
    });

    it('should current parent id', () => {
        const { ID_KEY, CHILDREN_ID_KEY, PARENT_ID_KEY } = DEFAULT_SETTINGS;
        const maxLevel = 4;
        const rootCount = 3;
        const tree = fullLevelTree({
            maxLevel, rootCount
        });

        expect(tree[0][ID_KEY]).toEqual(getParentId(tree[0], 1));
        expect(tree[1][ID_KEY]).toEqual(getParentId(tree[1], 1));
        expect(tree[2][ID_KEY]).toEqual(getParentId(tree[2], 1));

        expect(getId(tree[0], 1)).toEqual(getParentId(tree[0], 2));
        expect(getId(tree[1], 1)).toEqual(getParentId(tree[1], 2));
        expect(getId(tree[2], 1)).toEqual(getParentId(tree[2], 2));

        function getParentId(root, level) {
            return get(root, levelPath(CHILDREN_ID_KEY, level) + `[${PARENT_ID_KEY}]`);
        }

        function getId(root, level) {
            return get(root, levelPath(CHILDREN_ID_KEY, level) + `[${ID_KEY}]`);
        }
    });

    function levelPath(childrenKey, level, index = 0) {
        if (level >= 0) {
            const array = Array(level);
            array.fill(`${childrenKey}[${index}]`);

            return array.join('.');
        } else {
            return childrenKey;
        }
    }
});
