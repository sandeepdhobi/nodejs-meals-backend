module.exports = {
  server: {
    port: 3000,
    version: 'v1',
    status: 'test' //test || live
  },
  database: {
    //uri: 'mongodb://localhost:27017/calories',
    uri: 'mongodb://devuser:sadfasdfgdf@ds123933.mlab.com:23933/calories',
    table: '',
  },
  logger: {
    level: '',
  },
  secret: {
    passwordSalt: '$2a$10$lvh1E1ZVePCsuLSN22jI3e',
    jwtSignature: 'devAppSecret',
  },
  nutritionix: {
    key: '1bc56afe2aef0fa1e670a6ad30676936',
    id: '3522a250',
  },
  listing: {
    limit: 10,
  },
  mail: {
    sendgrid: {
      apiKey: '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',
      templates: {
        newUser: {
          subject: 'Verify your account',
          templateId: '4a4cb1f4-bbff-4d52-89ff-0804e500ece9'
        },
        activeNewUser: {
          subject: 'New account details',
          templateId: 'ca92cef7-f790-4111-b72c-d7e686133c68'
        },
        forgotPassword: {
          subject: 'Password Reset',
          templateId: 'a0624261-3f89-495d-b60e-434e7a8e751a',
        },
      }
    },
    fromEmail: 'vignes.arul@gmail.com'
  }
};
