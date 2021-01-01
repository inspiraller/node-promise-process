import {
  TPromiseResponse,
  TResolveFunc,
  TRejectFunc,
  TSuccessOrError,
  TSuccess,
  TError,
  TFunc
} from '../types';

export type THandleFuncResult = (
  result: TSuccessOrError,
  resolve: TResolveFunc,
  reject: TRejectFunc
) => void;
export const handleFuncAsResult: THandleFuncResult = (result, resolve, reject) => {
  try {
    resolve(result as TSuccess);
  } catch (err) {
    reject(err);
  }
};

export type THandleFuncAsPromise = (
  response: TPromiseResponse,
  resolve: TResolveFunc,
  reject: TRejectFunc
) => void;
export const handleFuncAsPromise: THandleFuncAsPromise = (response, resolve, reject) => {
  response
    .then(result => {
      resolve(result);
    })
    .catch((err: TError) => {
      reject(err);
    });
};

export type THandleFunc = (func: TFunc, resolve: TResolveFunc, reject: TRejectFunc) => void;
const handleFunc: THandleFunc = (func, resolve, reject) => {
  console.log('func = ', func, typeof func);
  const response: TSuccessOrError | TPromiseResponse = func();
  if (response instanceof Promise) {
    handleFuncAsPromise(response, resolve, reject);
  } else {
    const result: TSuccessOrError = response;
    handleFuncAsResult(result, resolve, reject);
  }
};

export default handleFunc;
