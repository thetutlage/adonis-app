
  "use strict"

  /*
  |--------------------------------------------------------------------------
  |  Kernel
  |--------------------------------------------------------------------------
  | 
  |  Http kernel file let's you define your all global middlewares
  |  that will be executed on every request. Adonis ships with
  |  some pre-built middlewares too.
  |
  */
 

  let Middlewares         = new(require("adonis-framework").Middlewares),
      path                = require("path")


  /*
  |--------------------------------------------------------------------------
  |  Loading Global Middlewares
  |--------------------------------------------------------------------------
  |   
  |  Global middlewares are called on every request of any verb. Use
  |  named middlewares to request specific checks.
  |
  */
  
  // Middlewares.global([
  //     // Require Array of Middlewares here
  // ])
  

  /*
  |--------------------------------------------------------------------------
  |  Loading Named Middlewares
  |--------------------------------------------------------------------------
  |   
  |  Named middlewares are middlewares specific to routes, and you can
  |  use them inside your Routes.js file.
  |
  */
  
  // Middlewares.named({
  //    "auth" : path.join(__dirname,"./Middlewares/Auth") 
  // })
  

