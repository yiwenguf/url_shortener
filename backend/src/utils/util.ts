export const isUrlValid = (url: string) =>
  url.match(
    /http(s)?:\/\/.?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  ) !== null;

export const isNewUrlValid = (url: string) => url.match(/^[\w\-]+$/) !== null;

export const generateRandomString = (size: number) => {
  const charset = 'abcdefghijklmnopqrstuvwxyz0123456789-_';
  let result = '';
  for (let i = 0; i < size; i++) {
    result += charset.charAt(Math.floor(Math.random() * 38));
  }
  return result;
};
