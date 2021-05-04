import { hello } from '../src';

describe('hello', () => {
    it('should return a greeting to the person passed in', () => {
        expect(hello('Cameron')).toEqual('Hello, Cameron');
        expect(hello('Emery')).toEqual('Hello, Emery');
        expect(hello('Brittany')).toEqual('Hello, Brittany');
    });
});
