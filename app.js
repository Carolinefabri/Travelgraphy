// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv').config()

// ℹ️ Connects to the database
require('./travelgraphy/db/index')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./travelgraphy/config')(app)

// default value for title local
const capitalize = require('./travelgraphy/utils/capitalize')
const projectName = 'travelgraphy'

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`

// 👇 Start handling routes here
const indexRoutes = require('./travelgraphy/routes/index.routes')
app.use('/', indexRoutes)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./travelgraphy/error-handling')(app)

module.exports = app



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});