import dataService from 'components/service/data-service';

describe('This is a integer test!', function () {
    it('Is integer1', function () {
        dataService.addValue('test', 123);
        expect(123).toEqual(dataService.getValue('test'));
    });
});
