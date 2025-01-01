# ts-exception

This is an error handling library. The main class `TsException` can be used form any custom application specific exception and thrown.

This class uses standard HTTP status codes for putting an error code for each of the thrown, exception. Based on the error codes, the parent functions which are catching these exception can decide what to do, weather the call should be retried, or let go!
