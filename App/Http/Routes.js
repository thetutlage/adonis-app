
  "use strict"


  /*
  |--------------------------------------------------------------------------
  |  Routes
  |--------------------------------------------------------------------------
  |
  |  Here you can define your application routes and attach handlers
  |  to them. When a request matches your pattern , yout attached
  |  handler will be executed or a 404 will be returned.
  |  
  |--------------------------------------------------------------------------
  |  @example
  |--------------------------------------------------------------------------
  |  
  |  Route.get('/',"HomeController.index")
  |  Route.get('/',function(){
  |     return "hello world"
  |  })
  |
  |--------------------------------------------------------------------------
  */
 
  let Route           = new(require("adonis-framework").Route)

  Route.get("/","HomeController.index")
