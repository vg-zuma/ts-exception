import { TsException } from '../src/exception'; // Adjust the import based on your project structure
import { HttpStatusCode } from '../src/statusCodes';

describe('TsException', () => {
  it('should create an instance of TsException', () => {
    const exception = new TsException('Test message', 500, {
      key: 'value',
    }, false);
    console.log(exception.toString());
    expect(exception).toBeInstanceOf(TsException);
    expect(exception.message).toBe('Test message');
  });

  it('should have a default message', () => {
    try {
      throw new TsException("this is a test error", HttpStatusCode.InternalServerError);
    } catch (exception) {
      if (exception instanceof TsException && exception.errorCode === 500) {
        console.log("this needs to be retried");
        expect(exception.errorCode).toBe(500);
      }
    }
  });
});
