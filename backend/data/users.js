const bcrypt = require('bcryptjs');
const users = [
    {
      name:'admin',
      email:'admin@gmail.com',
      password:bcrypt.hashSync('123456',10),
      isAdmin:true
    },

    {
        name:'akshat',
        email:'akshat@gmail.com',
        password:bcrypt.hashSync('123456',10)
    },
];

module.exports = users;