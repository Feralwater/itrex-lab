import { componentsDictionary } from '../components';

export function createErrorNotificationMessage(responseStatusCode: number) {
  switch (responseStatusCode) {
    case 400:
      return componentsDictionary.message.error400Text;
    case 401:
      return componentsDictionary.message.error401Text;
    case 403:
      return componentsDictionary.message.error403Text;
    case 404:
      return componentsDictionary.message.error404Text;
    case 500:
      return componentsDictionary.message.error500Text;
    default:
      return componentsDictionary.message.errorMessageText;
  }
}

export function createSuccessNotificationMessage(responseStatusCode: number) {
  switch (responseStatusCode) {
    case 201:
      return componentsDictionary.message.successMessageText;
    default:
      return componentsDictionary.message.successMessageText;
  }
}
