import Links from '../../db/models/links';

export const create = (
  originalLink: string,
  newLink: string,
): Promise<[Links, boolean]> => {
  try {
    return Links.findOrCreate({
      where: {
        newLink,
      },
      defaults: {
        originalLink,
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const find = (newLink: string): Promise<Links> => {
  try {
    return Links.findOne({
      where: {
        new_link: newLink,
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
