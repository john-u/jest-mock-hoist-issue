const AnotherExample = require('../../src/another-example')


const mockOriginalLib = jest.requireActual('../../src/lib')

jest.mock('../../src/lib', () => {
	return {
		...mockOriginalLib,
		foo: jest.fn(),
	}
})

describe('another-example', () => {
	it('also does not throw ReferenceError', () => {
		expect(() => AnotherExample.run()).not.toThrow(ReferenceError)
	})
})
