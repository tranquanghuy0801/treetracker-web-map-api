var pg = require('pg');
const { Pool, Client } = require('pg');
var config = require('./../config/config');
const pool = new Pool({
  connectionString: config.connectionString
});


(async () => {

  const start = Date.now();
  const client = await pool.connect();

  try {

    sql = `update trees set certificate_id = 154 where planter_id IN (1947,1949,1953,1955,1956,1958,1959,1960,1962,1974,1983,1984,1985,1987,2078,2138,2139,2148,2149,2153,2152,2173,2174,2175,2178,2187,2188,2189) and certificate_id is null`;

    query = {
      text: sql,
    };
    console.log(query);

    await client.query(query);

    client.release();
    pool.end();

  } catch (e) {
    console.log(e)
    client.release();
    pool.end();
    throw e
  } finally {
    const end = Date.now();
    console.log(start);
    console.log(end);
    console.log('DONE');
  }


})().catch(e => console.error(e.stack))