const { foo, bar } = require('./lib')


class AnotherExample {
	static run() {
		foo()
		bar()
	}
}

exports.default = AnotherExample
