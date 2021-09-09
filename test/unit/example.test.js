const Example = require('../../src/example')


const mockMethod = jest.fn()
const mockExampleClient = jest.fn(() => ({
	endpoint: {
		method: mockMethod,
	},
}))

jest.mock('../../src/example-client', () => ({
	ExampleClient: mockExampleClient,
}))

describe('example', () => {
	it('does not throw ReferenceError', async () => {
		await expect(Example.run()).resolves.not.toThrow(ReferenceError)
	})
})
