describe('asyn-service test', function () {
    it('method load success', function (done) {
        // chunk 语法支持
        import('components/service/asyn-service').then(function ({ isEmptyString }) {
            expect(isEmptyString('')).toBe(true);
            expect(isEmptyString('empty')).toBe(false);
            done();
        });
    });
});
