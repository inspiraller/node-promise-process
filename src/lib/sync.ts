import { IObjCMD } from '../types';
import customProcess from './customProcess';

type TGetNext = (arrNext: IObjCMD[], intNextCursor: number) => boolean;
const getNext: TGetNext = (arrNext, intNextCursor) => intNextCursor < arrNext.length;

interface ISync {
  arrNext: IObjCMD[];
}

interface ISyncTry extends ISync {
  intNextCursor: number;
  intNextLen: number;
}
export type TSyncTry = (props: ISyncTry) => Promise<boolean>;
const syncTry: TSyncTry = async ({ arrNext, intNextCursor, intNextLen }) => {
  const objCMD = arrNext[intNextCursor];
  const tryAll = await customProcess(objCMD, intNextCursor + 1)
    .then(async () => {
      //
      // // test time
      // time3 = new Date().getTime();
      // console.log('first then = ', (time3 - time1) / 1000);

      if (getNext(arrNext, intNextCursor + 1)) {
        const next = await syncTry({ arrNext, intNextCursor: intNextCursor + 1, intNextLen });
        return next;
      }
      return true;
    })
    .catch(async () => {
      return false;
    });

  return tryAll;
};

export type ISyncReturn = boolean;
export type TSync = (arrNext: ISync['arrNext']) => Promise<ISyncReturn>;
const sync: TSync = async arrNext => {
  const intNextCursor = 0;
  const intNextLen = arrNext.length;
  const isComplete = await syncTry({ arrNext, intNextLen, intNextCursor });
  return isComplete;
};

export default sync;
