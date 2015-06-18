  
  "use strict"

  /*
  |--------------------------------------------------------------------------
  |  Server
  |--------------------------------------------------------------------------
  |
  |  This file is used to start a new app , and does not do anything
  |  on it's own , but simply extends bootstrap/index file to spyn
  |  a server. Ideally it is a nice place to do some inital work
  |  before starting your app.
  |
  */
 

  let bootstrap             = require("./bootstrap/index")


  /*
  |--------------------------------------------------------------------------
  |  Bootstrapping
  |--------------------------------------------------------------------------
  |
  |  A single method to do all hard work in order to start an app
  |
  */
  bootstrap()