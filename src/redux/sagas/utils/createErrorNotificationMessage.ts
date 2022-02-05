export function createErrorNotificationMessage(message: string) {
  const errorMessage = message.replace('message: ', '');
  return errorMessage[0].toUpperCase() + errorMessage.slice(1);
}
