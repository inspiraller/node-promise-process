import { TResolveFunc, TRejectFunc, TExecOut } from '../types';

export type THandleExecOut = (resolve: TResolveFunc, reject: TRejectFunc) => TExecOut;
export const handleExecOut: THandleExecOut = (resolve, reject) => (error, stdout, stderr) => {
  if (error) {
    reject(error);
  } else {
    resolve(stdout || stderr);
  }
};

export default handleExecOut;
