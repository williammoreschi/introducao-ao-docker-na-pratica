# Introdução ao Docker na Prática

O Projeto gerado com base no tutorial que eu escrevi, esse tutorial é baseado na videoaula do canal Programador a Bordo.

Link do tutorial: 
<a href='https://www.evernote.com/shard/s206/sh/3853993e-07dd-1609-7046-0248cd601a99/c5905af79accaa0acdaa90f4b11368f9'>Evernote - Docker na prática</a>

Link da aula: 
<a href='https://www.youtube.com/watch?v=Kzcz-EVKBEQ' >Docker em 22 minutos - teoria e prática (Rápido!)</a>


### Construindo as imagens
Acesse a pasta raíz do projeto e construa cada imagem (MySQL, Node API e PHP):

```sh
docker build -t mysql-image -f db/Dockerfile .
```

```sh
docker build -t node-image -f api/Dockerfile .
```

```sh
docker build -t php-image -f website/Dockerfile .
```

### Rodando o container do mysql
Na pasta raíz do projeto, execute um de cada vez.

```sh
docker run -d -v $(pwd)/db/data:/var/lib/mysql --rm --name mysql-container mysql-image
```
Agora faça o restore do banco:

```sh
docker exec -i mysql-container mysql -uroot -pdocker < db/script.sql
```

### Rodando os containers do node e do php

```sh
docker run -d -v $(pwd)/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image
```

```sh
docker run -d -v "$(pwd)/website":/var/www/html -p 8888:80 --link node-container --rm --name php-container php-image
```

Caso queira usar o mysql na versão 8 vá até db/Dockerfile e remove **:5** e use esses comando
```sh
docker stop mysql-container
docker build -t mysql-image -f db/Dockerfile .
docker run -d -v $(pwd)/db/data:/var/lib/mysql --rm --name mysql-container mysql-image --default-authentication-plugin=mysql_native_password
```

Para ter acesso aos dados via api acesse localhost:9001/users

Para ter acesso aos dados via website acesse localhost:8888


Para entender melhor sobre cada comando utilizado, assista a videoaula e depois siga o tutorial ;)
