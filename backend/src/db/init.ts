import Links from './models/links';

const dbInit = async () => {
  Promise.all([await Links.sync()]);
};

export default dbInit;
