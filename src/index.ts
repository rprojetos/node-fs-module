import fs, { rmdirSync } from 'node:fs';
import path from 'node:path';

// verificando e criando um diretório se não existir.
try {
  // verifica se o diretório existe
  if(!fs.existsSync(path.resolve('tmp'))){
    // cria um diretório
    fs.mkdirSync(path.resolve('tmp'));
  }
    const pathFile = path.resolve('tmp', 'arquivo.txt')
    if (!fs.existsSync(pathFile)){
        const content = 
        'O arquivo foi criado com sucesso!\nLinha 2 do arquivo\nLinha 3 do arquivo'
        fs.writeFileSync(pathFile, content, 'utf8');
  }

  const fileData = fs.readFileSync(pathFile, 'utf8');
  
  const newFileData = `${fileData}\nAdicionado linha 4 no arquivo`

  fs.writeFileSync(pathFile, newFileData, 'utf8');

  console.log(fs.readFileSync(pathFile, 'utf8'));

  if(fs.existsSync(path.resolve('tmp'))){
    fs.renameSync(path.resolve('tmp'), path.resolve('tmp-test'))
  }

  if (fs.existsSync(path.resolve('tmp-test', 'arquivo.txt'))){
    fs.renameSync(path.resolve('tmp-test', 'arquivo.txt'), path.resolve('tmp-test', 'arquivo-test.txt'));
  }

  console.log('--------------------------')
  // retorna um array com todos os arquivos e subdiretórios 
  // que estão dentro do diretório passado no caminho.
  console.log(fs.readdirSync(path.resolve('tmp-test')));

  console.log(('aguardando para deletar.'))
  setTimeout(() => {
    // console.log('Deletando o arquivo ...');
    // fs.unlinkSync(path.resolve('tmp-test', 'arquivo-test.txt'));
    // console.log('Deletando o diretório ...');
    // fs.rmdirSync(path.resolve('tmp-test'));

    // delete de diretório e arquivo - recursivo
    console.log('Deletando o diretório e arquivo recursivamente');
    fs.rmSync(path.resolve('tmp-test'), { recursive: true });

    console.log(('fim do programa.'))
  }, 3000);
} catch (error) {
  console.log(error);
}