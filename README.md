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

# run example via npm script and using typescript
```
yarn run example-process
```

# See example script below
**src/example-process.ts**
```typescript
import sync from "./src/lib/sync";
import { IObjCMD } from "./src/types";

const hello = () => {
  console.log("hello world!");
  return "hello - success"; // need to return something... handleFunc is expecting a string result.
};

const init = async () => {
  const arrNext: IObjCMD[] = [{
    func: hello
  }, {
    func: hello
  }, {
    cmd: 'mkdir steve'
  }];
  await sync(arrNext);
};

init();
```

# Create your own script