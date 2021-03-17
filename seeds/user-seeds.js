const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    name: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    name: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    name: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    name: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    name: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    name: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    name: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    name: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    name: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    name: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
