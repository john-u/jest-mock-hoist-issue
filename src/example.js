const { ExampleClient } = require('./example-client')


class Example {
	static async run() {
		const client = new ExampleClient()
	}
}

exports.default = Example
