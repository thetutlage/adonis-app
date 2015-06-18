
  "use strict"

  /*
  |--------------------------------------------------------------------------
  |  Home Controller
  |--------------------------------------------------------------------------
  |
  |  You can define methods on your controller and register them
  |  as route handlers, which will be executed on matching
  |  routes.
  |  
  |  Make use of Response and Request facades to have more control
  |  over the request lifecycle.
  |
  */


  /* Importing Libraries */
  
  let Response            = new(require("adonis-framework").Response)

  class HomeController{

    /*
    |--------------------------------------------------------------------------
    |  Generators
    |--------------------------------------------------------------------------
    |
    |  Generator method that renders a view using View facade.
    |
    */
    *index(){
      return Response.view("home.html")
    }


    *store(){
      // add something to database
    }

    *show(id){
      // single entry
    }

    *update(id){
      // update something to database
    }

    *destroy(id){
      // delete something inside db
    }


  }


  /* Finally export class a module to be used by IOC container. */
  module.exports = HomeController