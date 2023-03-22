import { Sequelize } from 'sequelize';
import Links, { initLinks } from './models/links';

const initSequelizeConnection = (db_host: string, db_name: string, db_user: string, db_pass: string): Sequelize => new Sequelize(db_name, db_user, db_user, {
  host: db_host,
  dialect: 'mysql',
});

const initDb = async () => {
  const sequelizeConnection = initSequelizeConnection(process.env.db_host, process.env.db_name, process.env.db_user, process.env.db_pass);
  initLinks(sequelizeConnection);
  Promise.all([await Links.sync()]);
};

export default initDb;
