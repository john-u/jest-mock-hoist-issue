## jest mock hoist issue

### Steps to reproduce
1. Clone my repo
1. `npm install`
1. `npm test`
2. Both provided tests should fail with something like `ReferenceError: Cannot access 'mockExampleClient' before initialization`
