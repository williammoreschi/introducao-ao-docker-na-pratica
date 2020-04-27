// 1: importar o express e o mysql;
const express = require('express');
const mysql = require('mysql');

// 2: instanciar o express;
const app = express();

// 3: criar a conexão com o banco utilizando o método createConnection;
const connection = mysql.createConnection({
  host: 'mysql-container',
  user: 'root',
  password: 'docker',
  database: 'dockernapratica'
});

// 4: Conectando a banco;
connection.connect(function(err) {
  if(err){
    console.error('error connecting: '+err.stack);
    return;
  }
  console.log('connected as id: '+ connection.threadId);
});

// 5: Criando a rota que vai listar os dados da tabela users
app.get('/users',function(req,res){
  connection.query('Select * FROM users', function(error,results){
    if(error){
      throw error;
    }
    res.send(results.map(user => ({name: user.name, email: user.email}) ));
  });
});

// 6: Informar a porta onde a nossa applicação vai estar ouvindo e respondendo as solicitações;
app.listen(9001, '0.0.0.0', function() {
  console.log('Listening on port 9001');
});