import express from 'express';
import { Retry, TsExceptionHandler } from '../src/middleware';
import { HttpStatusCode } from '../src/statusCodes';
import { BadRequestException, TsException } from '../src/exception';

const app = express();

const retryFunction: Retry = (err, req, res, next) => {
  res.status(200).send("this needs to be retried");
}

app.get('/', (req, res, next) => {
  // throw new TsException("this is a test error", HttpStatusCode.InternalServerError);
  throw new BadRequestException("this is a test error");
  // throw new Error('this is a test error');
  // return;
});
app.use(TsExceptionHandler(retryFunction));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
