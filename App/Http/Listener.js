
  "use strict"

  /*
  |--------------------------------------------------------------------------
  |  Http Exception Listener
  |--------------------------------------------------------------------------
  | 
  |  All HTTP Exceptions will be bubbled to this file , giving you a 
  |  chance to listen to these errors and then do custom stuff.
  |
  */
  
  let App       = new(require("adonis-framework").App)

  App.on("httpError",function(request,response,error){

    /* headers is a generator method , as events callbacks are not generators have to manaully call next() */
    let requestContentType    = request.headers("accept").next().value

    /* if expecting json , sending errors as a json string */
    if(requestContentType.accept && requestContentType.accept === 'application/json'){
      return response.status(error.status).send({error:error.message}).end()
    }

    /* else render a view */
    return response.status(error.status).view(`errors/${error.status}.html`,{message:error.message}).end()
  });