// function isInteger(num) {
//     if (typeof num !== 'number') return false;
//     var pattern = /^[1-9]\d*$/g;
//     return pattern.test(num);
// }
// var dataService = require(['dataService',function(a){
//     console.log('aaaaaaaaaaaaaa',a);
// }]);
define([
    'dataService'
], function (dataService) {
    console.log('dataService',dataService);
});
// define([
//     'dataService'
// ], function (dataService) {
//     console.log('dataService',dataService);
//     describe('This is a integer test!', function () {
//         it('Is integer1', function () {
//             expect(true).toEqual(isInteger(20));
//             expect(false).toEqual(isInteger('20'));
//             expect(false).toEqual(isInteger(0));
//             expect(false).toEqual(isInteger('AAAAAAAA'));
//             dataService.addValue('test', 123);
//             expect(123).toEqual(dataService.addValue('test'));
//         });
//         it('Is integer2', function () {
//             expect(true).toEqual(isInteger(20));
//         });
//         it('Is integer3', function () {
//             expect(true).toEqual(isInteger(20));
//         });
//     });
// });