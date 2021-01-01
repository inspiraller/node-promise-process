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
const sync = require('node-promise-process');
const init = async () => {
  await sync([
    {
      func: () => 'hello world',
      cmd: 'mkdir steve'
    }
  ]);
};
init();
```

# run

```
node myprocess.js
```

Done !
