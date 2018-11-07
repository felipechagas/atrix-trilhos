# Módulo de integração com o sistema Trilhos

O sistema foi desenvolvido utilizando Vue.js, SCSS e qualquer modificação deve ser realizada nos arquivos presentes na pasta src/. O webpack se encarregará de gerar os arquivos estáticos.

## Pré-requisitos

* NodeJS
* Webpack

*Obs: Os comandos abaixo devem ser executados na raíz do projeto*

## Instalação do ambiente

Instalação do módulo global do webpack:

```
npm install -g webpack
```
    
Instalação dos módulos da aplicação:
    
```
npm install
```

## Processo de build

Para geração dos arquivos estáticos deve ser utilizado o seguinte comando:

```
webpack
```

Para geração dos arquivos estáticos e manter o webpack observando as mudanças seguintes:
    
```
webpack -w
```

## Procedimento de deploy

Arquivos estáticos gerados pelo webpack e que devem ser enviados para o servidor:

```
www/bundle.main.js
www/bundle.vendor.js
www/index.html
trilhos.php
icone.png
```