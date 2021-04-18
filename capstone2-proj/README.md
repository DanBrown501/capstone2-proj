# The Bible Project!

The Bible Project is in its first phase! Each user can create a user profile
which will show them their user information and allow them access to the Bible
Repository!

Technology Stack

## Front-end

* [JavaScript] 
* [PostgreSQL] 
* [Bootstrap]
* [CSS] 
* [React] 
* [Redux]

– The *App* component is a container with React Router. It gets app state from Redux Store. Then the *navbar* now can display based on the state.

– *Login* & *Register* components have form for data submission (with support of react-validation library). They dispatch auth actions (login/register) to Redux Thunk Middleware which uses *auth.service* to call API.

– *auth.service* methods use axios to make HTTP requests. Its also store or get JWT from Browser Local Storage inside these methods.

– *Home* component is public for all visitor.

– *Profile* component displays user information after the login action is successful.

– *BoardUser*, *BoardModerator*, *BoardAdmin* components will be displayed in *navbar* by state *user.roles*. In these components, we use *user.service* to access protected resources from Web API.

– *user.service* uses `auth-header()` helper function to add JWT to HTTP header. `auth-header()` returns an object containing the JWT of the currently logged in user from Local Storage.

## Back-end

* [express]
* [cors]  
* [sequelize]  
* [bcryptjs] 
* [jsonwebtoken]
* [PostgreSQL] 



# Features!

  - Create an account to log in and out
  - Access Bible Versions, Books, Chapters and verses
  - Create Moderators and Admins



# User flows
### Without an Account:
 
> Access website, log in and sign in

### After Registering an Account

 > with username, password and email.
 > Afterwards, you can go to exercises and view info,
 > save the exercise and leave a comment

# Routes!

## Bible API Routes

> /, /home Home
> /version/:bibleid Books
> /version/:bibleId/books/:bookId Chapter
> version/:bibleId/passages/:passagesId Passages

## Login API Routes

> /mod Moderator Board
> /admin Admin Board
> /user Bible Versions
> /login Login, Logout
> /register Sign Up
> /profile Profile
> /user User
> /mod Moderator
> /admin Administrator





 [JavaScript]: <http://javascript.com>
 [PostgreSQL]: <http://postgresql.org>
 [Bootstrap]: <https://getbootstrap.com/>
 [CSS]: <https://developer.mozilla.org/en-US/docs/Web/CSS>
 [Reactjs]: <https://reactjs.org/>
 [Redux]: <https://react-redux.js.org/>
 [express]: <https://expressjs.com/>
 [cors]: <https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>
 [sequelize]: <https://sequelize.org/> 
 [bcryptjs]: <https://www.npmjs.com/package/bcryptjs> 
 [jsonwebtoken]: <https://jwt.io/>
 [PostgreSQL]: <https://www.postgresql.org/download/>