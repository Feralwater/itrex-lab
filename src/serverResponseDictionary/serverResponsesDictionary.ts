import dictionary from '../dictionary/dictionary';

export function createErrorNotificationMessage(responseStatusCode: number) {
  switch (responseStatusCode) {
    case 400:
      return dictionary.message.error400Text;
    case 401:
      return dictionary.message.error401Text;
    case 403:
      return dictionary.message.error403Text;
    case 500:
      return dictionary.message.error500Text;
    default:
      return dictionary.message.errorMessageText;
  }
}

export function createSuccessNotificationMessage(responseStatusCode: number) {
  switch (responseStatusCode) {
    case 201:
      return dictionary.message.successMessageText;
    default:
      return dictionary.message.successMessageText;
  }
}
