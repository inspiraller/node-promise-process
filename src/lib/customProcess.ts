import { exec, ExecOptions } from 'child_process';

import print from './print';
import { TPromiseResponse, IObjCMD, IObjCMDFunc } from '../types';

import handleExecOut from './handleExecOut';
import handleFunc from './handleFunc';

export type TProcess = (
  objCMD: IObjCMD,
  intNextCursor: number,
  opt?: ExecOptions
) => TPromiseResponse;
const customProcess: TProcess = (objCMD, intNextCursor, opt = {}) =>
  new Promise((resolve, reject) => {
    if (objCMD.func) {
      print(`${intNextCursor}. ${objCMD.func.name}()`, { color: 'cyan', style: 'bold' });
      handleFunc(objCMD as IObjCMDFunc, resolve, reject);
    } else {
      print(`${intNextCursor}. ${objCMD.cmd}`, { color: 'cyan', style: 'bold' });
      exec(objCMD.cmd as string, opt, handleExecOut(resolve, reject));
    }
  });

export default customProcess;
