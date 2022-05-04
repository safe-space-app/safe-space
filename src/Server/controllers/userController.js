import User from '../../database/models/userModel.js';

const userController = {

  async createAccount (req, res, next)  {
    console.log('inside create account middleware')

    

    const newUser = await User.create ({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
    }, (err, user) => {
      if(err) return next(err);
      return next();
    })
  },

  login (req, res, next) {
    res.locals.data = {};
    console.log('inside user login')
    User.findOne({ username: req.body.username, password: req.body.password }, (err, user) => {
      if(err)
      {
        console.log('No matching account found...');
        return next(err);
      }
      else{
        res.locals.data.account = user;
        console.log('Found account, logging in...')
        return next();
      }
    });

  }


}

export default userController;