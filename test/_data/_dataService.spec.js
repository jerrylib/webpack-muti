import {addValue,getValue} from './../../src/_data/_dataService';

describe('This is dataService test', function () {
    it('addValue and getValue fn test', function () {
        addValue('test', 123);
        expect(123).toEqual(getValue('test'));
    });
});