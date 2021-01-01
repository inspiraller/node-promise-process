import sync from 'node-promise-process';
import { IObjCMD } from './types';

const hello = () => {
  console.log('hello world!');
  return 'hello - success'; // need to return something... handleFunc is expecting a string result.
};

const init = async () => {
  const arrNext: IObjCMD[] = [
    {
      func: hello
    },
    {
      func: hello
    },
    {
      cmd: 'mkdir steve'
    }
  ];
  await sync(arrNext);
};

init();
