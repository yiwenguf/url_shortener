import { Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize('link_shortener_yw', 'root', 'root', {
  host: '0.0.0.0',
  dialect: 'mysql',
});

export default sequelizeConnection;
