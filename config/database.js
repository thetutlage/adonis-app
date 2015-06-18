
  "use strict"

  /*
  |--------------------------------------------------------------------------
  |  Database Config
  |--------------------------------------------------------------------------
  |  
  |  Here you config your database settings and have flexibility to use
  |  multiple "sql" drivers.
  |
  |
  */
  let path      = require("path")



  module.exports = {


    /*
    |--------------------------------------------------------------------------
    |  Sqlite
    |--------------------------------------------------------------------------
    |
    |  Use sqlite for testing/local environment.
    |
    */
    sqlite:{

      client                : 'sqlite3',
      'connection.filename' : path.join(__dirname,"../storage/dev.sqlite3")

    },


    /*
    |--------------------------------------------------------------------------
    |  Mysql
    |--------------------------------------------------------------------------
    |  
    |  Connect to mysql using mysql connection , you can configure your
    |  credentials inside .env file , so that they different for
    |  each environment.
    |
    */
    mysql:{

      client                : 'mysql',
      user                  : process.env.DB_USERNAME,
      password              : process.env.DB_PASSWORD,
      host                  : process.env.DB_HOST,
      database              : process.env.DB_DATABASE
    
    },


    /*
    |--------------------------------------------------------------------------
    |  Postgres Sequel
    |--------------------------------------------------------------------------
    |
    |  Connect to postgres sql using pg connection string.
    |
    */
    pg:{

      client                : 'pg',
      connection            : process.env.PG_CONNECTION_STRING

    }


  }