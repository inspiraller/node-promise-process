// import rimraf from 'rimraf';
import customProcess from 'src/lib/customProcess';
import fs from 'fs';

type TPromise = () => Promise<string>;

describe('customProcess', () => {
  describe('functions', () => {
    it('should output func as result ', async () => {
      const output = 'hello function result';
      const funcResult = () => output;
      const res = await customProcess( funcResult, 0);
      expect(res).toBe(output);
    });
    it('should output func as promise ', async () => {
      const output = 'hello function promise';
      const funcPromise: TPromise = () => new Promise(resolve => resolve(output));
      const res = await customProcess(funcPromise, 0);
      expect(res).toBe(output);
    });
  });
  describe('cmd', () => {
    const folder = 'somefolder';
    afterAll(async () => {
      // rimraf.sync(folder);
      fs.rmdirSync(folder, { recursive: true });
    });
    it('should run cmd ', async () => {
      await customProcess(`mkdir ${folder}`, 0);
      expect(fs.existsSync(folder)).toBe(true);
    });
  });
});
