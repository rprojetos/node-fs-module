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

1-verificando e criando um diretório se não existir.

```typescript
try {
  if(!fs.existsSync(path.resolve('tmp'))){
    fs.mkdirSync(path.resolve('tmp'));
  }
} catch (error) {
  console.log(error);
}
```
