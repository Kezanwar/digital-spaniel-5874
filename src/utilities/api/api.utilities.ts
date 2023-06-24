import { ErrorObject } from '../../types/error';

export type FetchErrorHandlerOptions = {
  error: unknown;
  onError: (errorObj: ErrorObject) => void;
};

export const fetchErrorHandler = (
  errorHandlerOptions: FetchErrorHandlerOptions
): void => {
  const { error, onError } = errorHandlerOptions;
  const apiErr = error as ErrorObject;

  console.error(error);

  if (typeof error === 'string') {
    onError({ message: error, statusCode: 500 });
  } else if (apiErr?.message && apiErr?.statusCode) {
    onError(apiErr);
  } else {
    onError({ message: 'Something went wrong', statusCode: 500 });
  }
};
