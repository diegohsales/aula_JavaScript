(Programação Orientada a Objetos)

    Programação Orientada a Objetos é um paradigma de programação que usa abstração para criar modelos baseados no mundo real. 
    POO usa várias técnicas vindas de paradigmas previamente estabelecidos, incluindo modularidade, polimorfismo e encapsulamento. 
    Atualmente, muitas linguagens de programação populares (como Java, JavaScript, C #, C ++, Python, PHP, Ruby e Objective-C) 
    permitem a programação orientada a objetos (POO).

    A POO pode ser vista como o projeto de software utilizando uma coleção de objetos em cooperação, em oposição a uma vista 
    tradicional, em que um programa pode ser visto como uma série de funções, ou simplesmente como uma lista de instruções 
    para o computador. Em OOP, cada objeto é capaz de receber mensagens, processar dados e envio de mensagens para outros objetos. 
    Cada objeto pode ser visto como uma pequena máquina independente, com um papel ou responsabilidade distinta.

    A POO se destina a promover uma maior flexibilidade e facilidade de manutenção na aplicação, e é muito popular em engenharia 
    de softwares de grande escala. Em virtude de sua forte ênfase na modularidade, código orientado a objetos destina-se a ser mais simples de desenvolver e mais fácil de entender mais tarde, prestando-se a uma análise mais direta, codificação e compreensão de situações e procedimentos mais complexos do que nos métodos de programação menos modulares.
    Terminologia

(Namespaces)
    Um recipiente que permite empacotar todas as funcionalidades em um nome único e específico da aplicação.

(Classe)
    Define as características do objeto. Uma classe é uma definição modelo das propriedades e métodos de um objeto.

(Objeto)
    Um exemplar de uma classe.

(Atributo)
    Uma característica do objeto, como cor, modelo, fabricante se estivemos representando um veículo, por exemplo.

(Método)
    Uma ação do objeto, como ligar, desligar, frear se estivemos representando um veículo, por exemplo. É uma subrotina ou 
    função associada a uma classe.

(Construtor)
    Um método chamado assim que um novo exemplar do objeto for criado. Ele geralmente tem o mesmo nome da classe que o contém.

(Herança)
    Uma classe pode herdar características de outra classe.

(Encapsulamento)
    Uma maneira de agrupar os dados e os métodos que usam os dados.

(Abstração)
    A conjunção de herança complexa, métodos, propriedades de um objeto devem refletir adequadamente um modelo da realidade.

(Polimorfismo)
    Diferentes classes podem definir o mesmo método ou propriedade.

(Programação Baseada em Protótipos)

    Programação baseada em protótipos é um estilo de programação orientada a objetos na qual não temos presença de classes. 
    Em vez disso, a reutilização de comportamento (equivalente à herança das linguagens baseadas em classes) é realizada através
    de um processo de decorar (ou expandir) objetos existentes que servem como protótipos. Este modelo também é conhecido como 
    sem classes, orientado a protótipo, ou programação baseada em exemplares.

    O exemplo original (e o mais canônico ) de uma linguagem baseada em protótipo é a linguagem de programação Self desenvolvida 
    por David Ungar e Randall Smith.  No entanto, o estilo de programação sem classes tem se tornado mais popular recentemente, 
    e foi adotado por linguagens de programação como JavaScript, Cecil, NewtonScript, lo, MOO, REBOL, Kevo, Squeak 
    (quando se utiliza o framework Viewer para manipular componentes do Morphic) e várias outras.

(Programação Orientada a Objetos em Javascript)
(Namespaces)
    
    Um namespace é um recipiente que permite aos desenvolvedores agrupar funcionalidades em um único nome específico para uma 
    aplicação. Em JavaScript, um namespace é simplesmente outro objeto contendo métodos, propriedades e objetos.
    
    Nota: É importante notar que, em Javascript, não existe diferença a nível da linguagem entre objetos normais e namespaces. 
    Isso é diferente do que ocorre em muitas outras linguagens orientadas a objetos, e pode ser causa de confusão entre 
    programadores(as) JavaScript novatos(as).
    
    A ideia por trás de criar um namespace em JavaScript é simples: cria-se um objeto global e todas as variáveis, métodos 
    e chamadas de função tornam-se propriedades daquele objeto. O uso de namespaces também reduz a chance de conflitos de 
    nomes em uma aplicação, já que os objetos de cada aplicação são propriedades de um objeto global definido pela aplicação.
    
    Vamos criar um objeto global chamado MEUAPP:
    
    // namespaces global
    var MEUAPP = MEUAPP || {};
    
    No código acima, primeiro verificamos se MEUAPP já está definido (no mesmo arquivo ou em outro). Se estiver, usamos o 
    objeto MEUAPP global existente. Caso contrário, criamos um objeto vazio chamado MEUAPP, que encapsula métodos, variáveis 
    e objetos
    
    Podemos também criar sub-espaços de nomes.
    
    // sub namespaces
    MEUAPP.eventos = {};
    
    A seguir, temos a sintaxe para criar um namespace e adicionar variáveis, funções e um método:
    
    // Criando um recipiente chamado MEUAPP.metodosEmComum
    // para métodos e propriedades em comum
    
    MEUAPP.metodosEmComum = {
    
      regexParaNome: "", // definindo uma expressao regular
                         // para validação de nomes
    
      regexParaTelefone: "",  // define uma expressao regular para
                              //validacao de numeros de telefone
    }
    
    // Objeto junto a declaracoes de método
    
    MEUAPP.eventos = {
    
        adicionarTratador: function(elemento, tipo, funcao) {
    
        // codigos
    
        },
    
        removerTratador: function(elemento, tipo, funcao) {
    
        // codigos
    
        },
    
        obterEvento: function(e) {
    
        // codigos
    
        }
    
        // é possível adicionar outros métodos e propriedades
    
    }
    
    // Sintaxe para usar o método adicionarTratador:
    
    MEUAPP.eventos.adicionarTratador("youre1", "tipo", tratador);
    
    Objetos inclusos por padrão
    
    JavaScript tem vários objetos incluídos em seu núcleo; por exemplo, objetos como Math, Object, Array, e String. 
    O exemplo abaixo mostra como usar o objeto Math para obter um número aleatório usando seu método random().
    
    console.log(Math.random());
    
    Nota: Este e todos os exemplos a seguir presumem que uma função console.log() está definida globalmente. 
    A função console.log() não faz parte do JavaScript em si, mas muitos navegadores a implementam para ajudar no 
    processo de depuração.
    
    Veja Core JavaScript 1.5 Reference:Global Objects para a lista dos objetos inclusos por padrão em JavaScript.
    
    Cada objeto em JavaScript é um exemplar do objeto Object e, portanto, herda todas as suas propriedades e métodos.
    
(Objetos Personalizados)    
(A Classe)
    
    JavaScript é uma linguagem baseada em protótipos e não contém a declaração class, como vemos em C++ ou Java. Isso, 
    às vezes, causa confusão em programadores(as) acostumados(as) a linguagens com uma declaração para classes. Em vez 
    disto, JavaScript usa funções como classes. Definir uma classe-função é tão fácil quanto definir uma função. 
    No exemplo abaixo, nós definimos uma nova classe chamada Pessoa.
    
    var Pessoa = function () {};
    
    O objeto (exemplar de uma classe)
    
    Para criar um novo exemplar de um objeto obj, usamos a declaração new obj, atribuindo o resultado (que é do tipo obj) a 
    uma variável que será acessada depois.
    
    No exemplo acima, definimos uma classe chamada Pessoa. No exemplo abaixo, criamos dois exemplares (pessoa1 e pessoa2).
    
    var pessoa1 = new Pessoa();
    var pessoa2 = new Pessoa();
    
    Nota: Por favor, veja também Object.create para um novo e alternativo método que cria um exemplar não-inicializado.
  
(O Construtor)

    O construtor é chamado no momento que o exemplar do objeto é criado. O construtor é um método da classe. Em JavaScript, 
    a função serve como o construtor do objeto. Portanto, não há a necessidade de definir explicitamente um método construtor. 
    Toda ação declarada na classe é executada no momento da criação.
    
    O construtor é usado para definir as propriedades do objeto ou para chamar metodos que preparem o objeto para o uso. 
    O acréscimo de métodos e suas definições à classe funciona através do uso uma sintaxe diferente, descrita mais adiante, 
    nesse artigo.
    
    No exemplo abaixo, o construtor da classe Pessoa envia uma mensagem ao log quando um exemplar de Pessoa é criado.
    
    var Pessoa = function () {
      console.log("exemplar criado");
    }
    
    var pessoa1 = new Pessoa();
    var pessoa2 = new Pessoa();
    
    Propriedades (atributos de objetos)
    
    Propriedades são variáveis contidas em uma classe; cada exemplar do objeto tem essas propriedades. Propriedades devem ser 
    definidas no construtor (ou função) da classe, de modo que sejam criados em cada exemplar.
    
    A palavra-chave this, que se refere ao objeto atual, te permite trabalhar com propriedades do lado de dentro da classe. 
    Acessos (leitura ou escrita) uma propriedade do lado de fora da classe são feitos com a sintaxe NomeDoExemplar.Propriedade, 
    assim como em C++, Java e várias outras linguagens. (Dentro da classe, a sintaxe this.Propriedade é usada para obter ou 
    atribuir um valor ao objeto.)
    
    var Pessoa = function(nome) {
      this.nome = nome;
      console.log('Exemplar de Pessoa criado');
    };
    
    var pessoa1 = new Pessoa('Alice');
    var pessoa2 = new Pessoa('Bob');
    
    // mostrando as propriedades nome dos objetos
    console.log('pessoa1 é ' + pessoa1.nome); // envia "pessoa1 é Alice" ao log
    console.log('pessoa2 é ' + pessoa2.nome); // envia "pessoa2 é Bob" ao log
    
(Métodos)
    
    Métodos são funções (e definidos como funções), mas seguem a mesma lógica das propriedades. Chamar um método é parecido 
    com acessar uma propriedade, mas você coloca () no final do nome do método, possivelmente com argumentos. Para definir 
    um método, atribua uma função a uma propriedade com nome do prototype da classe. Depois disso, você pode chamar o método 
    do objeto usando o mesmo nome ao qual você atribuiu a função.
    
    No exemplo abaixo, definimos e usarmos o método dizerOla() na classe Pessoa .
    
    var Pessoa = function (genero) {
      this.genero = genero;
      alert('Pessoa instanciada');
    }
    
    Pessoa.prototype.dizerOla = function()
    {
      alert ('hello');
    };
    
    var pessoa1 = new Pessoa('Masculino');
    var pessoa2 = new Pessoa('Feminino');
    
    // Chamando o método dizerOla em Pessoa .
    pessoa1.dizerOla(); // hello
    
    Em JavaScript métodos são funções normais de objetos que são vinculados a uma classe/objeto como uma propriedade, o que 
    significa que eles podem ser invocados "fora de contexto" . Considere o seguinte exemplo de código: 
    
    function Pessoa(genero) {
      this.genero = genero;
    }
    
    Pessoa.prototype.dizGenero = function()
    {
      alert(this.genero);
    };
    
    var pessoa1 = new Pessoa('Masculino');
    var informaGenero = pessoa1.dizGenero;
    
    pessoa1.dizGenero(); // 'Masculino'
    informaGenero(); // undefined
    alert(informaGenero === pessoa1.dizGenero); //true
    alert(informaGenero === Pessoa.prototype.dizGenero); //true
    
    Este exemplo demonstra vários conceitos de uma vez. Mostrando que não existem "métodos por objetos " em Javascript as 
    referências ao método apontam para a mesma função, aquela que definimos primeiro usando prototype. JavaScript "liga" o 
    "contexto de objeto" atual à variável especial "this", quando uma função é invocada como um método (ou propriedade para 
    ser exato) de um objeto. Isso equivale a chamar o método "call" do objeto Function, da seguinte maneira:
    
    informaGenero.call(pessoa1); //alerts 'Masculino'
    
    Veja mais sobre em Function.call e Function.apply

(Herança)
    
    Herança é uma maneira de criar uma classe como uma versão especializados de uma ou mais classes (JavaScript suporta apenas 
    herança de classe única). A classe especializada é comumente chamada de filha, e a outra classe é comumente chamada de pai. 
    Em JavaScript você faz isso nomeando uma instância da classe pai para a classe filha, e então especializa-a. Em navegadores 
    modernos você também pode usar Object.create para implementar herança.
    
    JavaScript não detecta o  prototype.constructor da classe filha, veja a propriedade Core JavaScript 1.5 Reference:Global 
    Objects:Object:prototype, então devemos declará-la manualmente.
    
    No exemplo abaixo, nós definimos a classe Estudante como filha da classe Pessoa. Então redefinimos o método dizOi() e cria 
    o método dizTchau().
    
    // define a classe Pessoa
    function Pessoa() {}
    
    Pessoa.prototype.caminhar = function(){
      alert ('Estou Caminhando!');
    };
    Pessoa.prototype.dizOi = function(){
      alert ('Oi!');
    };
    
    // define a classe  Estudante
    function Estudante() {
      // Chama o método pai
      Pessoa.call(this);
    }
    
    // herda de Pessoa
    Estudante.prototype = new Pessoa();
    
    // corrige o ponteiro construtor, que aponta para Pessoa
    Estudante.prototype.constructor = Estudante;
    
    // adiciona o método dizOi
    Estudante.prototype.dizOi = function(){
      alert('Oi, eu sou estudante');
    }
    
    // adiciona o método dizTchau
    Estudante.prototype.dizTchau = function(){
      alert('tchau');
    }
    
    var estudante1 = new Estudante();
    estudante1.dizOi();
    estudante1.caminhar();
    estudante1.dizTchau();
    
    // checa a herança
    alert(estudante1 instanceof Pessoa); // true
    alert(estudante1 instanceof Estudante); // true
    
    Utilizando Object.create a linha de herança deveria ser:
    
    Estudante.prototype = Object.create(Pessoa.prototype);
    
(Encapsulamento)
    
    Em exemplo anterior, Estudante não precisava saber como o método caminhar() da classe Pessoa seria implementada, mas ainda 
    pode utilizar esté método; a classe Estudante não possui necessidade explícita de definir o método desde que não queremos 
    alterar-lo. Isso se chama encapsulamento, pelo qual cada classe herda os métodos de seu pai e só precisa definir as coisas 
    que deseja mudar.
    Abstração
    
    A Abstração é uma mecânica que permite modelar a parte atual do problema no trabalho.  Isso pode ser alcançado com herança 
    (especialização), ou composição. JavaScript alcança especialização por herança, e composição por deixando instâncias de 
    classes ser os valores de atributos de outros objetos.
    
    A Função de classe do JavaScript é hedar da classe Object (isso demonstra a especialização do modelo). e a propriedade 
    Function.prototype é uma instância de Object (isso demonstra composição)
    
    var foo = function(){};
    alert( 'foo é um Function: ' + (foo instanceof Function) );
    alert( 'foo.prototype é um Object: ' + (foo.prototype instanceof Object) );
    
(Polimorfismo)
    
    Assim como todos os métodos e propriedades são definidos dentro da propriedade prototype, classes diferentes podem definir
     métodos com o mesmo nome; os métodos tem como escopo a classe a qual foram definidos, a menos que duas classes possuam uma relação pai-filho. (ex.: uma herda da outra numa cadeia de herança).