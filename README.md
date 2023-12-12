# Node - Modulo FS

O FS (File System) é um módulo integrado do Node.js e permite a leitura, gravação, exclusão e manipulação de arquivos e diretórios.

É um módulo amplamente utilizado em aplicativos Nodejs para tarefas que envolvem interação com o sistema de arquivos, como o armazenamento de arquivos de configuração, logs, arquivos de dados e muito mais.

Por ser nativo, basta importa-lo:

```
import fs from 'node:fs';
```

### Métodos do módulo FS:

* `fs.access()`: checa se o arquivo existe e se o Node.js pode acessá-lo com suas permissões atuais
* `fs.appendFile()`: acrescenta dados em um arquivo. Se o arquivo não existir, ele é criado.
* `fs.chmod()`: muda as permissões de um arquivo especificado pelo nome que foi passado. Relacionado: `fs.lchmod()`, `fs.fchmod()`
* `fs.chown()`: muda o proprietário e o grupo do arquivo especificado pelo nome que foi passado. Relacionado: `fs.fchown()`, `fs.lchown()`
* `fs.close()`: fecha um descriptor de arquivo
* `fs.copyFile()`: copia um arquivo
* `fs.createReadStream()`: cria uma stream de arquivo para leitura
* `fs.createWriteStream()`: cria uma stream de arquivo para escrita
* `fs.link()`: cria um novo hard link para um arquivo
* `fs.mkdir()`: cria um novo diretório
* `fs.mkdtemp()`: cria um novo diretório temporário
* `fs.open()`: define o file mode
* `fs.readdir()`: lê os conteúdos de um diretório
* `fs.readFile()`: lê os conteúdos de um arquivo. Relacionado: `fs.read()`
* `fs.readlink()`: lê o valor de um link simbólico
* `fs.realpath()`: resolve caminhos relativos de arquivo com ponteiros (`.`, `..`) para o caminho completo
* `fs.rename()`: renomeia um arquivo ou pasta
* `fs.rmdir()`: deleta um diretório
* `fs.stat()`: retorna o status do arquivo identificado pelo nome que foi passado. Relacionado: `fs.fstat()`, `fs.lstat()`
* `fs.symlink()`: cria um novo link simbólico para um arquivo
* `fs.truncate()`: trunca o arquivo identificado pelo nome que foi passado para o tamanho especificado. Relacionado: `fs.ftruncate()`
* `fs.unlink()`: remove um arquivo ou um link simbólico
* `fs.unwatchFile()`: para de observar mudanças em um arquivo
* `fs.utimes()`: muda a timestamp do arquivo identificado pelo nome que foi passado. Relacionado: `fs.futimes()`
* `fs.watchFile()`: começa a observar muddanças em um arquivo. Relacionado: `fs.watch()`
* `fs.writeFile()`: escreve dados em um arquivo. Relacionado: `fs.write()`

Os métodos do módulo fs são assíncronos por padrão, podendo rodar de forma síncrona adicionando `Sync` no nome.

Exemplo:

| assíncrono     | síncrono<br />(bloqueia execução<br />do código) |
| --------------- | ---------------------------------------------------- |
| `fs.rename()` | `fs.renameSync()`                                  |
| `fs.write()`  | `fs.writeSync()`                                   |

### Exemplos:

1- Verifica se um diretório existe:

```javascript
fs.existsSync(path.resolve('tmp'));
```

2- Cria um diretório:

```javascript
fs.mkdirSync(path.resolve('tmp'));
```

3- Verifica se um arquivo existe, e se não existir cria e insere um conteudo:

```javascript
const pathFile = path.resolve('tmp', 'arquivo.txt');
    if (!fs.existsSync(pathFile)){
        const content = 
        'O arquivo foi criado com sucesso!\nLinha 2 do arquivo\nLinha 3 do arquivo';
        fs.writeFileSync(pathFile, content, 'utf8');
  }
```

4- Realiza a leitura de um arquivo, e acrescenta um novo conteúdo nesse arquivo:

```javascript
const pathFile = path.resolve('tmp', 'arquivo.txt');
const fileData = fs.readFileSync(pathFile, 'utf8');
  
  const newFileData = `${fileData}\nAdicionado linha 4 no arquivo`;

  fs.writeFileSync(pathFile, newFileData, 'utf8');

  console.log(fs.readFileSync(pathFile, 'utf8'));
```

5- Renomeia um arquivo, se ele existir:

```javascript
if(fs.existsSync(path.resolve('tmp'))){
    fs.renameSync(path.resolve('tmp'), path.resolve('tmp-test'));
  }
```

6-  Retorna um array com todos os arquivos e subdiretórios, que estão dentro do diretório passado no caminho.

```javascript
console.log(fs.readdirSync(path.resolve('tmp')));
```

7- Remove um arquivo ou um link simbólico:

```javascript
fs.unlinkSync(path.resolve('tmp-test', 'arquivo-test.txt'));
```

8- Remove um diretório, se este estiver vazio:

```javascript
fs.rmdirSync(path.resolve('tmp-test'));
```

9- Remove arquivos e/ou diretórios recursivamente:

```javascript
fs.rmSync(path.resolve('tmp-test'), { recursive: true });
```


## Conteúdo do repositório:

---
* Typescript com NodeJS
* Prettier
* Eslint
* Jest
---
## Typescript com NodeJS

Iniciando uma aplicação NodeJs utilizando Typescript como base:

```js
  // Typescript
  npm i -D typescript @types/node tsx tsup
```

---

## Prettier

O Prettier é uma ferramenta de formatação de código que ajuda a manter a consistência e a legibilidade do código em projetos de desenvolvimento de software.

Ele é amplamente utilizado em várias linguagens de programação/marcadores, incluindo JavaScript, TypeScript, CSS, HTML, JSON e muito mais.

```js
  // Prettier
  npm i -D prettier
```

---

## Eslint

O ESLint é uma ferramenta de análise de código estática amplamente utilizada na comunidade de desenvolvimento de software.

Ele é projetado para ajudar os desenvolvedores a identificar e corrigir problemas de qualidade, erros de sintaxe e padrões de código inconsistentes em projetos JavaScript e TypeScript.

```js
  // Eslint
  npm i -D eslint
  npm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-import
  npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

---

## Jest

O Jest é um framework de testes de JavaScript amplamente utilizado para testar aplicativos e bibliotecas JavaScript.

Ele foi desenvolvido para ser fácil de configurar e usar, fornecendo uma ampla gama de recursos para escrever testes automatizados.

```js
  // Jest
  npm i -D jest ts-jest @types/jest
  npx ts-jest config:init
```

---

Por ♥ Ricardo Poleto 👋 [Linkedin!](https://www.linkedin.com/in/ricardo-poleto/)
