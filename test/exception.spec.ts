import { TsException } from '../src/exception'; // Adjust the import based on your project structure

describe('TsException', () => {
  it('should create an instance of TsException', () => {
    const exception = new TsException('Test message', 500, {
      key: 'value',
    }, true);
    console.log(exception.toString());
    expect(exception).toBeInstanceOf(TsException);
    expect(exception.message).toBe('Test message');
  });

  // it('should have a default message', () => {
  //   const exception = new TsException();
  //   expect(exception.message).toBe('Default exception message'); // Adjust based on your implementation
  // });

  // it('should handle specific error codes', () => {
  //   const exception = new TsException('Error with code', 404);
  //   expect(exception.code).toBe(404); // Adjust based on your implementation
  // });
});
