# Prerequisites:

- node
- npm
- yarn optional

# Download this repo

```
git clone https://github.com/inspiraller/node-promise-process.git
```

# cd into folder

```
cd node-promise-process
```

# install dependencies

```
yarn install
```

or

```
npm install
```

# Create your example

**myprocess.js**
```javascript
const sync = require('node-promise-process').default;

const helloworld = () => 'hello world';

const init = async () => {
  await sync([
    helloworld,
    'mkdir steve'
  ]);
};

init();
```

# run

```
node myprocess.js
```

# How to test as typescript version
- prerequisites - will need dependencies

**package.json - script**
```javascript
"scripts": {
  "example-process": "cross-env-shell babel-node --extensions '.ts,.tsx' src/example-process.ts"
},
```
**example-process.ts**
```typescript
import sync, {TcmdOrFunc} from 'node-promise-process';

const hello1 = () => {
  console.log('hello world!');
  return 'hello - success'; // need to return something... handleFunc is expecting a string result.
};
const hello2 = hello1;

const init = async () => {
  const arrNext: TcmdOrFunc[] = [
    hello1,
    hello2,
    'mkdir steve'
  ];
  await sync(arrNext);
};
init();
```

Done !
