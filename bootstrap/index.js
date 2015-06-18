

  "use strict"

  /*
  |--------------------------------------------------------------------------
  |  Boot
  |--------------------------------------------------------------------------
  |
  |  Here we extend Boot class by framework and sypn our new
  |  app by using helper methods.
  |
  */

  let Boot            = new(require("adonis-framework").Grub),
      path            = require("path")



  module.exports      = function(){


    /*
    |--------------------------------------------------------------------------
    |  Loading Environment Config
    |--------------------------------------------------------------------------
    |
    |  Next we start by loading our environment config , so that they are 
    |  ready to be consumed by several Components of app using 
    |  process.env.{Var}
    |
    */
    Boot.registerEnv(path.join(__dirname,"../.env"))



    /*
    |--------------------------------------------------------------------------
    |  Loading Config Directory
    |--------------------------------------------------------------------------
    |
    |  Then we register our config directory as the place where we will
    |  store all configuration related to our app, you are free to
    |  add your own files to it.
    |
    */
    Boot.registerConfig(path.join(__dirname,"../config"))




    /*
    |--------------------------------------------------------------------------
    |  Registering App
    |--------------------------------------------------------------------------
    |
    |  In sequence firstly we register our app by passing App directory
    |  to the register Method.
    |
    */
    Boot.registerApp(path.join(__dirname,"../App"))


    /*
    |--------------------------------------------------------------------------
    |  Loading Middlewares
    |--------------------------------------------------------------------------
    |
    |  Next we load all configured middlewares
    |
    */
    require(path.join(__dirname,"../App/Http/Kernel"))



    /*
    |--------------------------------------------------------------------------
    |  Registering Listeners
    |--------------------------------------------------------------------------
    |
    |  Next we register HTTP Error listeners.
    |
    */
    require(path.join(__dirname,"../App/Http/Listener"))



    /*
    |--------------------------------------------------------------------------
    |  Loading Routes
    |--------------------------------------------------------------------------
    |
    |  Next we load our registered routes.
    |
    */
    require(path.join(__dirname,"../App/Http/Routes"))



    /*
    |--------------------------------------------------------------------------
    |  Registering Public Folder
    |--------------------------------------------------------------------------
    |
    |  Setting up public folder for serving static files
    |
    */
    Boot.registerPublicFolder(path.join(__dirname,"../public"))


    /*
    |--------------------------------------------------------------------------
    |  Starting HTTP Server
    |--------------------------------------------------------------------------
    |
    |  Finally we spyn our HTTP server on a defined port inside our
    |  .env file.
    |
    */
    Boot.spynServer(process.env.PORT)


  }
