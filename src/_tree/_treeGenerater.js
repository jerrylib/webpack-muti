import faker from 'faker';
import times from 'lodash/times';

const ROOT_ID = null;
const PARENT_ID_KEY = 'parent_id';
const CHILDREN_ID_KEY = 'children';
const ID_KEY = 'id';

export const DEFAULT_SETTINGS = {
    ROOT_ID,
    PARENT_ID_KEY,
    CHILDREN_ID_KEY,
    ID_KEY
};

export function emptyTree() {
    return [];
}

export function rootTree({index, level = 1, maxLevel, childrenCount = 2}) {
    return genTree(ROOT_ID, { level, index, maxLevel, childrenCount });
}

export function fullLevelTree({maxLevel = 1, rootCount = 1, childrenCount = 2}) {
    const tree = emptyTree();
    const roots = times(rootCount, index => rootTree({
        index,
        childrenCount,
        maxLevel,
        level: 0
    }));
    return tree.concat(roots);
}

function genTree(rootId, options) {
    let node;
    const { level, index, maxLevel, childrenCount } = options;

    if (level <= maxLevel) {
        node = genNode(rootId, level, index, childrenCount);
        if (childrenCount > 0 && level + 1 <= maxLevel) {
            node[CHILDREN_ID_KEY] = times(childrenCount, index => genTree(node[ID_KEY], {
                index,
                childrenCount,
                maxLevel,
                level: level + 1
            }));
        }
    }

    return node;
}

function genNode(parent_id, level, index) {
    return {
        level,
        [PARENT_ID_KEY]: parent_id,
        [CHILDREN_ID_KEY]: [],
        [ID_KEY]: uuid(),
        text: `${level}-${index}`
    };
}

function uuid() {
    return faker.random.uuid();
}
