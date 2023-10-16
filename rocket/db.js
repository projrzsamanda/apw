const mysql = require ("mysql")

const connection = mysql.createConnection ({
   host: "localhost", 
   user: "root",
   password: "", 
   database: "rocket",
})
        connection.connect ()

        //inserir
        function inserir (){
            let sql = "insert into prada set?"
            let dados = {nomeprada:"Re-edition",tipo: "bolsa", ano:2005}
            connection.query(sql,dados,function(error, results, fields){
                if(error)throw error
                console.log("cadastrado!")
            })
            connection.end( )
        }
