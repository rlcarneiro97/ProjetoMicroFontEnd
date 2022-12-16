# ProjetoMicroFontEnd
Aplicação Micro Front-End desenvolvida na Pós-Graduação

### JSON Server
#### Instalação

Na pasta raiz do projeto, abra um terminal e digite o seguinte comando:

```
npm install -g json-server
```

#### Criando a base de dados

Crie um arquivo de nome *db.json* na raiz do projeto.
```json
{
  "clientes": [
    {
      "id": 1,
      "nome": "Laura",
      "peso": "70",
      "altura": "1.70",
      "sexo": "feminino",
      "imc": 1
    },
    {
      "id": 2,
      "nome": "Pedro",
      "peso": "80",
      "altura": "1.80",
      "sexo": "masculino",
      "imc": 1
    },
    {
      "id": 3,
      "nome": "Clara",
      "peso": "75",
      "altura": "1.60",
      "sexo": "feminino",
      "imc": 1
    }
  ]
}
```

#### Iniciando o servidor
Execute o comando para inicar o servidor. Por padrão a API vai funcionar no enderço: http://localhost:3000

```
json-server --watch db.json
```

#### Componentes

Cada pasta dentro deste projeto é uma aplicação front-end, portanto, é necessário abrir um terminal para cada uma aplicação, a fim de iniciar as aplicações.
Ao abrir todos terminais, em cada um deles execute o comando ```npm install``` para instalar a todas dependências necessárias.
Logo após, em todos terminais, execute o comando ```npm start``` para iniciar todas aplicações.

### Micro Front-End

Para testar a aplicação, acesse o endereço: [http://localhost:9000](http://localhost:9000)