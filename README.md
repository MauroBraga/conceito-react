# Conceitos React
    - Biblioteca de construção de Interface
    - Construção de sigle-page-application (SPA) 
    - A princípio uma biblioteca mais devido ao seu ecossistema não é incorreto dizer que é um framework
    - Tudo fica dentro do Javascript, por exemplo css com uma sintaxe diferente da usual.
    - React / ReactJS/ React Native
    - React -> biblioteca do react
    - Reactjs -> comportamento do React no browser ou seja react para browser. Junção do react com o react-dom
    - React Native -> Contrução de interfaces com elementos nativos 
    - Sintaxe JSX do React

    - Vantagens do React:
        . Organização de código - > Conceito de componetização, que seguinifica dividir parte da nossa tela. A criação de um novo componente acontece quando  se consegue isolar a lógica sem interferir o funcionamento do resto da aplicação.
        . Divisão de Responsabilidades -> O front-end fica só responsável pela interface, a regra de negócio fica no backend, ou seja o front-end só mostra os dados.
        . Uma Api, múltiplos clientes -> Vários front-end consumem a  mesma API.
        . Programação declarativa -> fala qual resultado agente espera para a  aplicação

    - JSX (Javascript XML)
        . Permite escrever Html dentro do JavaScript
        . Com React podemos criar nossos próprios elementos


    - Imperativo x Declarativa

# Babel / Webpack
    - O browser não entende todo o código
    - Babel converte o javascript para um padrão que browser entenda
    - Webpack cria o bundle que é um arquivo q tem todo o javascript 
        - Criação do bundl, arquivo com todo o código de aplicação
        - Ensina ao javascript como importar arquivos CSS, imagens e etc.
        - Live reload com webpack Dev Server

# Babel
    - Converter o código do REACT para um código que o browser entende

# Webpack
    - Para cada tipo de arquivo(.js, .css, .png) eu preciso converter o código de uma maneira diferente 
    - Loaders: babel-loader, css-loader, image-loader .....
    - Automatiza o arquivo    

# Fragment
    Criar um elemento sem nada dentro
    Ex: <code>
            function App (){
                return (
                <>
                    <Header/><Header/>
                </>
                
                
                )
            }

            export default App
        </code>