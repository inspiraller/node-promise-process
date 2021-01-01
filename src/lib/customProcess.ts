import { exec, ExecOptions } from 'child_process';

import print from './print';
import { TPromiseResponse, TFunc, TcmdOrFunc } from '../types';

import handleExecOut from './handleExecOut';
import handleFunc from './handleFunc';

export type TProcess = (
  cmdOrFunc: TcmdOrFunc,
  intNextCursor: number,
  opt?: ExecOptions
) => TPromiseResponse;
const customProcess: TProcess = (cmdOrFunc, intNextCursor, opt = {}) =>
  new Promise((resolve, reject) => {

    const strFuncOrCmd = cmdOrFunc === 'string' ? cmdOrFunc : `${(cmdOrFunc as TFunc).name}()`;
    print(`${intNextCursor}. ${strFuncOrCmd}`, { color: 'cyan', style: 'bold' });
    if (typeof cmdOrFunc === 'string') {
      exec(cmdOrFunc as string, opt, handleExecOut(resolve, reject));
    } else {
      handleFunc(cmdOrFunc as TFunc, resolve, reject);
    }
  });

export default customProcess;
