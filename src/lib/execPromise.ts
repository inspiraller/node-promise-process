import { exec, ExecOptions } from 'child_process';
import handleExecOut from './handleExecOut';
import { TPromiseResponse } from '../types';
import print from './print';

export type TProcess = (cmd: string, intNextCursor: number, opt?: ExecOptions) => TPromiseResponse;

const execPromise: TProcess = (cmd, intNextCursor, opt = {}) =>
  new Promise((resolve, reject) => {
    print(`${intNextCursor}. ${cmd}`, { color: 'cyan', style: 'bold' });
    exec(cmd, opt, handleExecOut(resolve, reject));
  });

export default execPromise;
