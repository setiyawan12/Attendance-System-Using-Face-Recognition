const db = require('../services/db');
const config = require('../config');
function getData(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM auth_user LIMIT ?,?`, [offset, config.listPerPage]);
  const meta = {page};
  return {
    data
  }
}
module.exports = {
  getData
}