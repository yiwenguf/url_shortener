import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config';

class Links extends Model {
  id: any;
  originalLink: any;
  newLink: any;
}

Links.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    originalLink: {
      type: DataTypes.STRING,
      field: 'original_link',
      allowNull: false,
    },
    newLink: {
      type: DataTypes.STRING,
      field: 'new_link',
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: 'link',
  },
);

export default Links;
