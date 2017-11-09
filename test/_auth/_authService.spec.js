/*
 * @Author: lichbin
 * @Date: 2017-11-09 20:05:12
 */

import {
    getAuthHeader
} from 'src/_auth/_authService';

describe('This is authService test', function () {
    it('getAuthHeader fn test', function () {
        let auth = getAuthHeader('/', 'GET', '8B2D7B6219F350464A0763CA5C93D9BBDCB5EF960876D697D501F6694CE329BD9DB070682FF38CAA', 'KaTWCSN7ye');
        expect(auth).toContain('nonce=');
    });
});