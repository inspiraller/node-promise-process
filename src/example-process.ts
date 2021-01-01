import sync, { TcmdOrFunc } from './index';

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
