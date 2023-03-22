import { DataTypes, Model, Sequelize } from 'sequelize';

class Links extends Model {
  id: any;
  originalLink: any;
  newLink: any;
}

export function initLinks(connection: Sequelize){
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
      sequelize: connection,
      modelName: 'link',
    },
  );
}


export default Links;
