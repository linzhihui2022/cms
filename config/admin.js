module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3528e3e37efeebd33e384506293bb6f1'),
  },
});
