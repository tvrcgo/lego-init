
module.exports = (router, $) => {
  router
    .get('/', $.home.me)
    .get('/she', $.home.she)
    .get('/react', $.home.react)

  // exception
  router
    .all('*', $.error.code404)
};
