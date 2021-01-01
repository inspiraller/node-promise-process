import { ExecException } from 'child_process';

export type TError = ExecException | null;
export type TSTDOut = string; // | Buffer;
export type TSuccess = TSTDOut;
export type TSuccessOrError = TSuccess | TError;
export type TPromiseResponse = Promise<TSuccess>;
export type TFunc = () => TSuccessOrError | TPromiseResponse;
export type TResolveFunc = (value: TSuccess) => void;
export type TRejectFunc = (value: TError) => void;
export type TExecOut = (error: TError, stdout: TSTDOut, stderr: TSTDOut) => void;

export interface IObjCMDFunc {
  func: TFunc;
}
export interface IObjCMDExec {
  cmd: string;
}

export interface IObjCMD {
  cmd?: IObjCMDExec['cmd'];
  func?: IObjCMDFunc['func'];
}
