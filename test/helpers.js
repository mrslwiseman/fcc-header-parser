const chai = require('chai');
const assert = chai.assert;
const parse = require('../parsers')


describe('parse IP', () => {
    it('returns ip for valid ip', () => {
        const expect = '127.0.0.1';
        const result = parse.ip({ip: '127.0.0.1'});
        assert.equal(result, expect)
    }) 
    it('returns error message for invalid ip', () => {
        const expect = 'Unable to parse IP.';
        const result = parse.ip({ip: ':::1'});
        assert.equal(result, expect)
    }) 
})

// TODO: Work out how to test this:
// Cant figure out how req.acceptsLanguages() works and how to generate a header...

// describe('parse Language', () => {
//     it('returns first language in list', () => {
//         const expect = 'en-AU';
//         const result = parse.lang({rawHeaders: ['Accept-Language',
//      'en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',]});
//         assert.equal(result, expect)
//     }) 
// })

describe('parse UserAgent', () => {
    it('returns the correct user agent', () => {
        const expect = 'Macintosh; Intel Mac OS X 10_12_0';
        const test = {headers: {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36'}}
        const result = parse.userAgent(test);
        assert.equal(result, expect)
    })
})