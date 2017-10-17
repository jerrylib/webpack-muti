import {addValue,getValue} from './../../src/service/dataService';

describe('This is a integer test!', function () {
    it('Is integer1', function () {
        addValue('test', 123);
        expect(123).toEqual(getValue('test'));
    });
});
