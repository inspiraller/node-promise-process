import sync from 'src/lib/sync';
type TPromise = () => Promise<string>;

describe('sync', () => {
  describe('isComplete false', () => {
    it('should return isComplete = false if rejected ', async () => {
      const error = 'eror result';
      const funcPromise: TPromise = () => new Promise((resolve, reject) => reject(Error(error)));
      const res = await sync([{ func: funcPromise }]);
      expect(res).toBe(false);
    });
  });
  describe('isComplete true', () => {
    it('should return isComplete = true for 1 item ', async () => {
      const output = 'hello function result';
      const funcResult = () => output;
      const res = await sync([{ func: funcResult }]);
      expect(res).toBe(true);
    });
    it('should return isComplete = true for 2 item ', async () => {
      const output = 'hello function result';
      const funcResult = () => output;
      const res = await sync([{ func: funcResult }, { func: funcResult }]);
      expect(res).toBe(true);
    });
  });
});
