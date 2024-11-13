import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Receita from './components/Receita';
import './index.css'; // Importando o CSS global
import Header from './components/Header';
import './components/Header.css'; // Importando o CSS do Header

const App = () => {
  const [enfermidadeSelecionada, setEnfermidadeSelecionada] = useState(null);

  const receitas = {

    "Abandono": {
      descricao: `“Se não tiver cuidado, você pode passar o resto da vida na
      expectativa de ser rejeitado. Como um primeiro passo para a
      recuperação, com frequência é útil perceber que aqueles que
      o abandonaram muito provavelmente foram abandonados
      também. E, em vez de ficar desejando que eles acordem e lhe
      deem o apoio ou a atenção que você tanto quer, direcione sua
      energia para encontrar outra pessoa com quem possa contar
      e que seja mais equipada para a função.”`,
      prescricao: "Canto chão, a história de Kent Haruf ________ 15 a 30 páginas por dia. \n\nDesfrute de uma caminhada ao ar livre antes da leitura.",
    },
    
    "Abatimento": {
      descricao: `“Os que têm o espírito abatido precisam ser tratados com
      delicadeza. Por essa razão, nossa cura é um romance para
      crianças, simples e curto, mas com imenso poder. Leia-o para
      renovar a esperança e reconstruir a resistência quando sua
      noção de si mesmo parecer perdida.”`,
      prescricao: "Eu sou o David, de Anne Holm ________ 30 páginas por dia. \n\nReflita sobre a história e siga o exemplo de David e afirme sua identidade para si mesmo e para os outros, todos os dias.",
    },

    "Adolescência": {
      descricao: `"A adolescência não pode ser curada, mas há maneiras de
      tirar o melhor proveito dela. Essa fase não precisa ser um
      inferno. Lembre-se de que seus colegas também estão
      lutando para atravessar o abismo, e, se for possível,
      compartilhem essa luta. Com os amigos ou sem eles, não
      deixe de modo algum de fazer as coisas loucas e idiotas que
      apenas adolescentes fazem. Se não tiver essa chance
      enquanto está na escola, tire um ano sabático antes dos vinte
      (e certifique-se de levar os livros certos com você)."`,
      prescricao: "O apanhador no campo de centeio, de J. D. Salinger o ajudará a enfrentar esse momento ________ 10 a 20 páginas por dia. \n\nDesconecte-se de dispositivos eletrônicos durante a leitura.",
    },

    "Agorafobia": {
      descricao: `"Os agorafóbicos sentem grande desconforto quando se veem
      em lugares novos. Cercados pelo desconhecido, o medo de
      perder o controle pode desencadear um ataque de pânico. E, por isso, eles preferem ficar em
      casa, o que resulta em isolamento, depressão e solidão."`,
      prescricao: "Mulher das Dunas, de Kobo Abe ________ 20 páginas por dia. \n\nA leitura deve ser feita em um ambiente calmo, onde você pode se conectar com a sensação de isolamento do protagonista.",
    },

    "Alcoolismo": {
      descricao: `"Alcoólatras perambulam pelas páginas de livros como cubos
      de gelo no gim. Por quê? Porque o álcool solta a língua. E
      porque são sempre os ébrios que nos seguram pelo colarinho
      para contar uma história. Quando eles estão na página,
      podemos nos divertir com suas divagações sem ter de sentir
      seu bafo de cerveja. Mas vamos concordar que é melhor
      mantê-los ali. Ninguém quer um desses, real, em casa."`,
      prescricao:"O Iluminado, de Stephen King ________ 15 páginas por dia.\nÀ Sombra do Vulcão, de Malcolm Lowry ________ 15 páginas por dia.\nEra Uma Vez um Corredor, de John L. Parker, Jr. ________ 10 a 15 páginas por dia.\n\nReflita sobre o impacto do alcoolismo enquanto desfruta de um café preto.",
    },

    "Ansiedade": {
      descricao: "“Viver com ansiedade é viver com uma sanguessusa que sorve sua energia, autoconfiança e entusisasmo. Marcada por uma sensação constante de inquetação e temor, a ansiedade é tanto uma resposta a circunstâncias externas como um modo de encarar a vida.”",
      prescricao: "Retrato de uma Senhora, de Henry James ________ 10 a 20 páginas por dia. \n\nAcompanhado de um chá da tarde, enquanto você mergulha nas questões de liberdade e destino.",
    },

    "Bloqueio criativo": {
      descricao: `"A mente pode ser caprichosa, e quem já sofreu de bloqueio
      criativo sabe que, muitas vezes, o melhor remédio é sair da
      frente do computador — ou deixar o caderno de lado, se você
      for do tipo analógico — e ir dar uma caminhada, encontrar
      amigos, ouvir música, espairecer. Mas, é claro, a literatura
      também pode ser uma aliada bastante efetiva."`,
      prescricao: "Livro do desassossego, de Fernando Pessoa ________ 5 a 10 fragmentos quando achar necessários. \n\nAcompanhe a leitura enquanto saboreia um chá de camomila, depois de uma volta a pé ao ar livre."
    },

    "Bullying": {
      descricao: `"O bullying acontece de muitas formas. Entre meninos, tende a
      ser agressivo e físico. Entre meninas, maldoso e verbal. E,
      embora tenhamos a tendência a pensar nele como um
      fenômeno infantil, o bullying acontece com igual intensidade
      entre adultos — no local de trabalho e em casa."`,
      prescricao: `- Se você pratica bullying:\nUma Morte em Família, de James Agee ________ 15 a 20 páginas por dia. \n\nAcompanhe a leitura com uma xícara de chá preto, refletindo nos efeitos de seu comportamento sobre sua vítima.
      \n- Se você sobre bullying:\nOlho de Gato, de Margaret Atwood ________ 10 a 15 páginas por dia.
      Tom Brown na Escola, de Thomas Hughes ________ 20 páginas por dia.\n\nLeia enquanto desfruta de um café com leite, vai dar tudo certo, acredite.`,
    },

    "Câncer": {
      descricao: `"Quando você estiver passando por quimioterapia, quando
      estiver se sentindo fraco, quando seu cérebro se recusar a
      funcionar, quando você não tiver a força como companheira…
      você precisa é de um pouco de prosa curta e bem escrita."`,
      prescricao:"O Dia do Casamento, de John Berger ________ 10 páginas por dia.\nBonequinha de Luxo, de Truman Capote ________ 10 páginas por dia.\nO Caçador de Androides, de Philip K. Dick ________ 20 páginas por dia.\nO Bom Soldado, de Ford Madox Ford ________ 15 páginas por dia.\nSonhos de Trem, de Denis Johnson ________ 10 a 15 páginas por dia.\nUma Vida Imaginária, de David Malouf ________ 15 páginas por dia.\nEu Fui Amelia Earhart, de Jane Mendelsohn ________ 10 páginas por dia.\nFlush: Memórias de um Cão, de Virginia Woolf ________ 10 páginas por dia.\nXadrez, de Stefan Zweig ________ 10 páginas por dia.\n\nEncontre alívio e refúgio nessas páginas. Cada história é uma pausa, cada palavra, uma pausa para o espírito. Que a leitura traga momentos de paz e força para sua jornada.",
    },

    "Chorar": {
      descricao: `"Às vezes, você só precisa deixar a tristeza sair, seja um
      coração partido, uma relíquia de família quebrada ou
      hormônios fora de controle."`,
      prescricao: "Uma Lição Antes de Morrer, de Ernest J. Gaines ________ 10 páginas por dia.\nA Culpa é das Estrelas, de John Green ________ 15 páginas por dia.\nTess, de Thomas Hardy ________ 10 a 15 páginas por dia.\nUm Dia, de David Nicholls ________ 10 páginas por dia.\nDoutor Jivago, de Boris Pasternak ________ 20 páginas por dia.\nO Beijo da Mulher-Aranha, de Manuel Puig ________ 15 páginas por dia.\nDiário de uma Paixão, de Nicholas Sparks ________ 10 páginas por dia.\nA Escolha de Sofia, de William Styron ________ 15 páginas por dia.\nA História de Lucy Gault, de William Trevor ________ 10 páginas por dia.\nMinha Querida, Queria Dizer-te, de Louisa Young ________ 10 páginas por dia.\n\nAcompanhadas de lenços de papel e um conhaque."
    },

    "Cinismo": {
      descricao: `"Os cínicos originais, na Grécia Antiga, defendiam a rejeição do materialismo em
      favor de uma vida virtuosa e simples, em harmonia com a natureza. Mas, quando o cinismo se torna
      uma afronta generalizada à sociedade e a seus valores e
      convenções, achamos recomendável administrar doses
      regulares de algo profundamente restaurador."`,
      prescricao: "Memórias Póstumas de Brás Cubas, de Machado de Assis ________ 10 a 15 páginas por dia.\n\nLeia enquanto saboreia um café preto, mergulhando nas reflexões irônicas de Brás Cubas sobre a vida e a morte."
    },

    "Ciúme": {
      descricao: `"O ciúme é a tendência a se torturar com a ideia de que alguém
      possa pegar o que você tem. Cego para a razão, esse
      sentimento é uma força supremamente destrutiva e, se
      deixado sem controle, corroerá sua autoestima e acabará por
      impedi-lo de ter uma relação saudável com aquilo que você
      guarda com tanto desespero."`,
      prescricao: "A Vênus das Peles, de Leopold von Sacher-Masoch ________ 10 a 15 páginas por dia. \n\nAcompanhe a leitura com um chá de hortelã, refletindo sobre as complexas dinâmicas de poder e desejo presentes na obra."
    },

    "Confiança": {
      descricao: `"Em primeiro lugar, precisamos decidir se uma pessoa é
      merecedora de nossa conàança ou não.
      Quando estiver em dúvida, lembre-se disto:
      o grau em que você está preparado para confiar é uma
      medida do grau em que os outros podem confiar em você. Se
      você desistir das pessoas muito facilmente, elas saberão que
      você as deixará na mão também."`,
      prescricao: "O Corte, de Susanna Moore ________ 10 a 15 páginas por dia. \n\nA leitura pode ser acompanhada por um espresso forte enquanto ouve uma música suave ao fundo."
    },

    "Coração partido": {
      descricao: `"Rara é a pessoa que passa pela vida com o coração intacto.
      Uma vez que a flecha tenha sido lançada do arco do Cupido e
      acertado o alvo, balançando com ardilosa emoção, tem início
      uma reação química que despacha a vítima em uma jornada
      cheia de alguns dos prazeres mais sublimes da vida, mas
      também de suas armadilhas mais angustiantes. Nove em cada dez vezes, o romance desmorona
      e tudo acaba em lágrimas." (Obs.(1): Estudos demonstram que números precisos não são mais úteis do que os que a gente inventa. Obs.(2): ironia das autoras).`,
      prescricao: "Jane Eyre, de Charlotte Brontë ________ 15 a 20 páginas por dia. \n\nAcompanhe a leitura com um chá de jasmim."
    },

    "Covardia": {
      descricao: `"É impossível levar uma vida boa e ser covarde. Como aspirar a
      fazer o que é certo pelos outros — ou até por si mesmo — se
      seu primeiro impulso, quando as coisas complicam, é fugir e
      esconder seus joelhos trêmulos?`,
      prescricao: "O Sol é Para Todos, de Harper Lee ________ 15 a 20 páginas por dia. \n\nAcompanhe a leitura com uma limonada fresca."
    },

    "Culpa": {
      descricao: `"Aconselhamos que você sinta sua culpa, depois leia
      imediatamente nossa cura. Devidamente reconhecida, ela
      poderá ser extirpada, analisada e, após as apropriadas
      desculpas pedidas ou acusações lançadas, você estará livre
      para seguir em frente.`,
      prescricao: "Crime e Castigo, de Fyodor Dostoiévski ________ 10 a 15 páginas por dia. \n\nAcompanhe a leitura com um café forte, enquanto o som suave de um piano clássico toca ao fundo."
    },

    "Depressão": {
      descricao: `"A depressão é uma escala móvel. Na extremidade mais
      branda, em que a maioria de nós mergulha um dedo do pé de
      tempos em tempos, estão aqueles dias ou períodos em que
      nada dá certo, em que parecemos não ter mais nenhum
      amigo e nos sentimos imersos em um estado de profunda
      tristeza. Nessas horas,
      precisamos de um livro que mude nossa percepção de
      mundo, que nos lembre de que ele pode ser um lugar de luz e
      alegria também.`,
      prescricao: `A Insustentável Leveza do Ser, de Milan Kundera ________ 10 a 15 páginas por dia.
      A Redoma de Vidro, de Sylvia Plath ________ 10 a 15 páginas por dia.
      Mr. Chartwell, de Rebecca Hunt ________ 15 a 20 páginas por dia. \n
      Acompanhe com um chá de ervas, permitindo-se momentos de pausa e introspecção entre cada leitura.`
      },

    "Desorientação": {
      descricao: `"Estar desorientado é estar em um estado de grande e terrível
      perturbação. Talvez você esteja em um entroncamento na
      estrada e não saiba que caminho tomar. Desnorteado e
      confuso, você precisa encontrar calma e clareza — o centro
      tranquilo do olho do furacão.`,
      prescricao: "Em Casa, de Marilynne Robinson ________ 10 a 15 páginas por dia. Acompanhe a leitura com uma xícara de chá preto.\n\nAproveite o silêncio ao seu redor, refletindo sobre as complexidades das relações e o impacto do lar na formação do ser."
      },

    "Diferente": {
      descricao: `"De modo geral, os seres humanos podem ser divididos em
      duas categorias. Há aqueles que se encaixam e os que não se
      encaixam. Como todos sabem, a vida é infinitamente mais
      fácil para os que se encaixam. Você é aceito, é parte da turma.
      Quando você não se encaixa, na melhor das hipóteses, é mal
      compreendido e deixado de fora. Nas piores situações, é
      totalmente excluído. Se você sempre se sentiu diferente, sua vida terá muito mais sucesso se aprender a ver essa diferença como uma
      vantagem.`,
      prescricao: "Fernão Capelo Gaivota, de Richard Bach ________ 15 a 20 páginas por dia.\n\nAcompanhe a leitura com um suco natural de laranja, sentindo a liberdade de Fernão enquanto ele busca superar os limites impostos a ele. Permita-se uma pausa reflexiva após cada capítulo, ponderando sobre os sonhos e a busca pela perfeição."       
      },
      
    "Dor": {
        descricao: `"Nenhuma vida está livre dela. E, embora a medicina moderna
        ofereça várias maneiras de aliviá-la e a literatura possa ajudálo
        a se distrair (veja nossa lista dos melhores livros escapistas,
        a seguir), é muito difícil encontrar sugestões na literatura
        sobre como suportá-la e conviver com ela.
        Quando você precisar esquecer a dor em sua cabeça,
        coração ou corpo; quando estiver esperando um ônibus
        que nunca chega; quando estiver com vontade de se
        ejetar da rotina diária, dê uma escapada com um
        destes títulos.`,
        prescricao: "A Morte de um Apicultor, de Lars Gustafsson ________ 10 a 15 páginas por dia. \nO Bandolim de Corelli, de Louis de Bernières ________ 15 a 20 páginas por dia. \nAs Feras de Jamrach, de Carol Birch ________ 10 a 15 páginas por dia. \nOs Detetives Selvagens, de Roberto Bolaño ________ 15 a 20 páginas por dia. \nUma Passagem para a Índia, de E. M. Forster ________ 10 a 15 páginas por dia. \nUma Cidade para o Amor, de Nevil Shute ________ 10 a 15 páginas por dia. \nO Mapa do Amor, de Ahdaf Soueif ________ 15 páginas por dia. \nA História de Edgar Sawtelle, de David Wroblewski ________ 10 a 15 páginas por dia. \n\nAcompanhe as leituras com um chá de hortelã, criando um ambiente acolhedor e reflexivo."
      },

    "Drogas": {
        descricao: `"Para Sherlock Holmes, o uso de cocaína três vezes por dia em
        uma solução a sete por cento era “transcendentalmente
        estimulante e esclarecedor para a mente”. Mas Watson ficava
        horrorizado com o hábito de Holmes e notava com
        consternação as picadas em seu braço. [...] O sinal de alarme realmente toca quando àcamos tão
        dependentes que não conseguimos reconhecer a necessidade
        de ajuda."`,
        prescricao: "Admirável Mundo Novo, de Aldous Huxley ________ 10 a 15 páginas por dia. \nAbaixo de Zero, de Bret Easton Ellis ________ 15 páginas por dia. \nTrainspotting, de Irvine Welsh ________ 15 a 20 páginas por dia. \n\nAcompanhe todas as leituras com um café preto forte, estimulando a mente para lidar com os temas de alienação, consumismo e as complexidades das escolhas humanas nas sociedades modernas."      
      },

    "Egoísmo": {
      descricao: `"Ser egoísta foi reclassificado como um traço de personalidade
      positivo. Cuide de suas necessidades em primeiro lugar,
      exortam os livros de autoajuda. Faça tudo para chegar ao
      topo. Colocar-se em primeiro lugar pode até lhe trazer muito
      dinheiro e levá-lo a aterrissar em uma cadeira giratória de
      presidente de empresa, mas nunca vai lhe trazer amigos — ou
      pelo menos o tipo de amigo que vale a pena. A menos que
      você ache divertido ver as pessoas a sua volta se darem mal,
      ser egoísta jamais o fará feliz."`,
      prescricao: "Um Estranho no Ninho, de Ken Kesey ________ 15 a 20 páginas por dia. \n\nAcompanhe a leitura com um chá preto, enquanto mergulha na tensão entre o indivíduo e a instituição."
    },

    "Estresse": {
      descricao: `"Seu coração está batendo forte. Sua respiração é rápida e
      superàcial. Seus punhos estão fechados, e os olhos e ouvidos
      procuram informações que possam salvar sua vida.
      Não, você não deu de cara com um urso. Está esperando o
      trem para ir trabalhar, ou fazendo uma torrada, ou decidindo
      qual marca de papel higiênico comprar — qualquer coisa
      simples e cotidiana, exceto pelo fato de estar sofrendo de
      uma das epidemias mais debilitantes da era moderna: o
      estresse."`,
      prescricao: "O Homem que Plantava Árvores, de Jean Giono ________ 5 a 10 páginas por dia. \n\nAcompanhe a leitura com um chá de camomila, inspirando-se na calma e perseverança do protagonista enquanto ouve uma música relaxante, um mantra talvez, que ressoe com o ritmo sereno e transformador da narrativa."
    },

    "Estresse": {
      descricao: `"Seu coração está batendo forte. Sua respiração é rápida e
      superàcial. Seus punhos estão fechados, e os olhos e ouvidos
      procuram informações que possam salvar sua vida.
      Não, você não deu de cara com um urso. Está esperando o
      trem para ir trabalhar, ou fazendo uma torrada, ou decidindo
      qual marca de papel higiênico comprar — qualquer coisa
      simples e cotidiana, exceto pelo fato de estar sofrendo de
      uma das epidemias mais debilitantes da era moderna: o
      estresse."`,
      prescricao: "O Homem que Plantava Árvores, de Jean Giono ________ 5 a 10 páginas por dia. \n\nAcompanhe a leitura com um chá de camomila, inspirando-se na calma e perseverança do protagonista enquanto ouve uma música relaxante, um mantra talvez, que ressoe com o ritmo sereno e transformador da narrativa."
    },

    "Excluído": {
      descricao: `"Às vezes, pode parecer que você está sendo intencionalmente
      excluído, deixado de fora da diversão. Se tivéssemos
      escolhido não participar, tudo bem — nem todos somos
      festeiros. Mas, quando o desejo de fazer
      parte existe e por algum motivo o gesto de boas-vindas não
      chega, pode-se acabar com muita pena de si mesmo e
      ressentido com esses egoístas e desatentos que não fizeram
      nada para aliviar sua angústia. Infelizmente, um impulso
      comum é tentar consertar a situação de uma destas duas
      maneiras equivocadas: forçar a entrada no grupo ou rejeitar o
      grupo que nos rejeitou."`,
      prescricao: "A Convidada do Casamento, de Carson McCullers ________ 10 a 15 páginas por dia.\n\nLeia o livro e lembre-se: não force as coisas e, especialmente se tiver apenas doze anos, não fuja de casa. Tenha paciência. Seu convite para a festa chegará."
    },

    "Felicidade": {
      descricao: `"Felicidade, a principal meta da vida. Será?
      Muitos de nós, no Ocidente, passamos a vida buscando
      esse estado transitório — no amor, no trabalho, em viagens,
      na decoração da casa. O fato de ele nos acenar das
      propagandas e dos programas de tevê sobre estilo de vida é
      uma doença moderna. É importante lembrar que, até o século
      XX, as pessoas não pensavam na felicidade como algo a ser
      esperado na vida e, em muitas culturas orientais, ainda não
      pensam. Para muitos, a vida está aí para se enfrentar e
      aprender, não como fonte de expectativa de prazer. Ter
      comida, um teto sobre a cabeça e a liberdade para seguir as
      próprias crenças religiosas — isso é suficiente. Comece a
      pensar que você tem de ser feliz e estará se abrindo para todo
      tipo de decepção."`,
      prescricao: "Fahrenheit 451, de Ray Bradbury ________ 15 a 20 páginas por dia. \n\nAcompanhe a leitura com um café expresso forte."
    },

    "Fracasso": {
      descricao: `"Então você se sente um fracasso. Talvez seu passado esteja
      cheio de iniciativas abandonadas. Talvez você sinta que tudo
      em que toca dá errado. Sua própria previsão de fracasso acaba
      se tornando realidade — embora o medo do fracasso às vezes
      o faça nem sequer começar. Você anda de cabeça baixa,
      ombros caídos. É a imagem da falta de sucesso. Se essa
      descrição parece se encaixar em você, é hora de conhecer a
      criação mais encantadora de H. G. Wells, o malsucedido Mr.
      Polly."`,
      prescricao: "As Aventuras de Mr. Polly, de H. G. Wells ________ 10 a 15 páginas por dia. \n\nAcompanhe a leitura com uma limonada refrescante."
    },

    "Gripe": {
      descricao: `"Algo que nenhum médico ou pesquisador científico notou, ou
      mesmo estudou, é a seguinte estranha coincidência: o
      momento em que um paciente de gripe começa a ler um
      romance de Agatha Christie marca o início de sua recuperação.
      Se a correlação for mais que mera coincidência, só
      podemos especular, clinicamente falando, quanto ao que
      talvez esteja acontecendo. Talvez, como peixes que não
      conseguem recusar uma isca, nossa curiosidade inata para
      descobrir o criminoso seja mais forte que a necessidade de
      chafurdar em nosso sofrimento gripal. Dores, calafrios, febre,
      dor de garganta, nariz escorrendo — isso não é nada
      comparado à determinação de descobrir o culpado antes de
      Poirot."`,
      prescricao: "O Assassinato de Roger Ackroyd, de Agatha Christie ________ 20 a 25 páginas por dia. \n\nAcompanhe a leitura com uma xícara de chá preto com um toque de limão, criando o clima perfeito para um mistério intrigante enquanto desvenda as pistas."    
    },

    "Hipocondria": {
      descricao: `"Ler O jardim secreto serve como um lembrete educado de que
      muitos de nossos males são, na verdade, fictícios. [...] Deixe que esse romance o atraia para
      fora da cama, a fim de descobrir seu próprio jardim secreto,
      [...] e um retorno glorioso à saúde perfeita."`,
      prescricao: "O Jardim Secreto, de Frances Hodgson Burnett ________ 10 a 15 páginas por dia. \n\nAcompanhe a leitura com um chá de hortelã, enquanto explora a magia e a cura que um simples jardim pode trazer."    
    },

    "Homofobia": {
      descricao: `"Não faz muito tempo, a sociedade queria “curar” os homens
      homossexuais de sua orientação sexual, vendo-a como uma
      aberração, uma perversão, uma doença (e mais ou menos
      esquecida das mulheres homossexuais, ou talvez preferindo
      ignorá-las). Felizmente, em anos recentes a homofobia vem
      substituindo a homossexualidade como elemento inaceitável
      na sociedade. Mas ela persiste, e muito — e nossa
      contribuição para curar aqueles que ainda abrigam
      preconceito sexual, seja abertamente ou nos recessos
      sombrios do coração, é uma prescrição para ler ou reler
      Maurice, talvez o primeiro romance homossexual dos tempos
      modernos."`,
      prescricao: "Maurice, de E. M. Forster ________ 15 a 20 páginas por dia. \n\nAcompanhe a leitura com uma taça de vinho tinto, refletindo sobre as nuances do amor, da busca pela identidade e da coragem de viver uma vida autêntica, mesmo contra as convenções sociais."    
    },

    "Indecisão": {
      descricao: `"Se você tem tendência de se atrapalhar toda vez que precisa
      tomar uma decisão; se é o tipo de pessoa que vê as coisas
      pelo ponto de vista de todo mundo, menos do seu; se deixa a
      si mesmo e seus amigos loucos enquanto pula de um lado
      para outro entre uma variedade de caminhos, incapaz de
      escolher ou de se comprometer com algum deles, com certeza
      está sofrendo do mal típico da nossa era: indecisão. Porque
      nunca antes houve tanta possibilidade de escolha — no
      entanto, nunca ficamos tão paralisados."`,
      prescricao: "Indecisão, de Benjamin Kunkel ________ 10 a 15 páginas por dia. \n\nAcompanhe a leitura com um café gelado, enquanto explora temas de autodescoberta, escolhas e as inquietações da vida adulta."    
    },

    "Insatisfação": {
      descricao: `"Muitos de nós vivemos acompanhados de uma perpétua
      sensação de insatisfação [...]. Para
      alguns, é não ter coisas suficientes [...]. Para outros, é não ter
      tempo suficiente [...]. Para outros ainda, é uma sensação de
      estar emocional, intelectual ou espiritualmente incompleto,
      não totalmente preenchido — e ansiamos por um
      relacionamento melhor, ou um
      emprego melhor, ou um estilo de vida
      melhor, que nos fizesse sentir que
      finalmente chegamos aonde queríamos e podemos, por fim,
      começar a viver de fato.
      Detestamos ter que lhe dizer isso, mas, se você continuar
      procurando as respostas fora de si, a insatisfação vai
      permanecer. Por mais clichê que possa ser, a resposta está
      dentro. E, com frequência, a única maneira de ver isso é parar
      de correr atrás de borboletas, sossegar um pouco e avaliar a
      situação."`,
      prescricao: "A Rua das Ilusões Perdidas, de John Steinbeck ________ 15 a 20 páginas por dia. \n\nAcompanhe a leitura com uma caneca de chá preto, absorvendo a melancolia e a profundidade da narrativa enquanto reflete sobre as aspirações e lutas das pessoas comuns em busca de propósito."
    },

    "Menopausa": {
      descricao: `"Pode ser o fim de seus ciclos mensais, mas não precisa ser o
      seu fim. Na verdade, para muitas mulheres, a chegada à
      menopausa desencadeia o desejo de desencavar o “eu” que
      estava enterrado ou deixado de lado pelas distrações dos anos
      férteis. Quer você tenha tido filhos cedo ou tarde, ou não os
      tenha tido, a deposição de seus ovários do trono permite que
      você própria se dispa de um certo manto maternal e se vista
      com algo mais empolgante."`,
      prescricao: "O Verão Antes da Queda, de Doris Lessing ________ 10 a 15 páginas por dia.\nO Anjo de Miss Garnet, de Salley Vickers ________ 10 a 15 páginas por dia. \nA Vida Íntima de Pippa Lee, de Rebecca Miller ________ 15 a 20 páginas por dia. \n\nAcompanhe com uma taça de vinho tinto."    
    },

    "Mentira": {
    descricao: `"A mentira tem várias formas. Mas, exceto mentirinhas
    inocentes, aquelas usadas para proteger outra pessoa de um
    sofrimento desnecessário, mentiras geralmente são
    espalhadas por maldade e/ou egoísmo: um desejo de fazer
    mal ou de se proteger de vergonha ou castigo. Não subestime
    os danos que elas podem causar. Permita-se provocar
    pequenas infelicidades, por mais que pareçam
    insignificantes, e você não só estará se relegando à categoria
    das pessoas em quem não se pode confiar como também
    correrá o risco de causar a si próprio, ou a outros, danos que
    podem durar a vida inteira."`,
    prescricao: "Reparação, de Ian McEwan ________ 15 a 20 páginas por dia. \n\nAcompanhe a leitura com um chá de camomila."
  },

  "Morte": {
  descricao: `A morte não pode ser adiada para sempre, e, quando chega a
    hora, precisamos estar prontos. No Ocidente, temos tendência
    a evitar pensamentos de morte e a ignorar mais ou menos
    esse fato em nossa vida cotidiana. Foram-se os dias do
    memento mori, um lembrete diário de que um dia vamos
    morrer. No entanto, é essencial tanto viver na presença da
    morte — e, assim, ter a certeza de estar sempre plenamente
    vivo — como estar preparado com as companhias literárias
    adequadas. De modo que, quando o momento vier, não
    cheguemos a um leito de morte — o nosso próprio, ou o de
    outra pessoa — sem o devido arsenal. Quer seja você quem
    está morrendo, quer você se encontre na cabeceira de uma
    pessoa amada enquanto ela deixa este mundo, alguma
    literatura que console e acalme, e ao mesmo tempo incentive
    suavemente a aceitação, é uma dádiva inestimável.`,
    prescricao: `Pérola, de O Poeta de Gawain ________ 10 a 15 páginas por dia.
      Metamorfoses, de Ovídio ________ 10 a 15 páginas por dia. 
      A Morte de Ivan Ilitch, de Lev Tolstói ________ 10 a 15 páginas por dia.
      A Hora da Estrela, de Clarice Lispector ________ 10 a 20 páginas por dia.
      O Livro dos Mortos, de Tiziano Terzani ________ 10 páginas por dia.
      As Intermitências da Morte, de José Saramago ________ 15 a 20 páginas por dia.
      O Caçador de Pipas, de Khaled Hosseini ________ 15 a 20 páginas por dia.
      Nosso Último Verão em Maisie, de Henry James ________ 10 a 15 páginas por dia.
      Morte Súbita, de J.K. Rowling ________ 20 páginas por dia.
      O Fim de Todo o Mundo, de Niccolò Ammaniti ________ 10 a 15 páginas por dia.
      O Morro dos Ventos Uivantes, de Emily Brontë ________ 10 a 15 páginas por dia.
      A Morte de Arthur, de Sir Thomas Malory ________ 10 a 20 páginas por dia.
    \nAcompanhe a leitura com uma xícara de chá de lavanda, acalmando a mente enquanto reflete sobre o tema.`
},

"Mudança": {
  descricao: `"É compreensível ficar nervoso com mudanças. Nós nos
    acostumamos com nossos cantinhos, e a ideia de sair deles é
    assustadora. Questionar ou nos desviar de normas
    estabelecidas nos dá vertigens e nos faz perguntar quem
    somos, provocando uma crise de identidade. Mas a mudança é essencial para o crescimento e o
    desenvolvimento, e o medo da mudança não é razão para
    resistir a ela."`,
  prescricao: "Jornada ao Oeste, de Wu Cheng'en ________ 15 a 20 páginas por dia.\n\nAcompanhe a leitura com um chá de jasmim e depois experiemente algo novo que sempre quis fazer."
},

"Ódio": {
descricao: `"O ódio é como uma planta venenosa. Deixe que ele finque
  raízes em seu ser e ele o consumirá gradualmente por dentro,
  contaminando tudo que você tocar. [...]. O fato de
  você nutrir essa emoção violenta em seu coração acabará
  sendo uma violência contra si mesmo."`,
prescricao: "1984, de George Orwell ________ 15 a 20 páginas por dia. \n\nAcompanhe a leitura com um café preto."
},

"Organização excessiva": {
descricao: `"Um efeito colateral infeliz de uma vida corrida é que podemos
ficar tão hábeis em organizar nosso tempo, dividir nossos dias
em segmentos de meia hora alocados a um uso específico —
trabalhar, dormir, se exercitar, comer, cumprir tarefas, fazer
compras, atividades sociais —, que nos esquecemos de
dedicar uma parte aos aspectos da vida que não se encaixam
sob um rótulo. Onde fica apenas sentar sem fazer nada? Ou
sair espontaneamente de bicicleta, sem um plano? Ou
encontrar alguém por acaso na rua e ir tomar um café? [...]. Ser organizado, planejar, decidir as coisas com antecedência — isso não é o cálice sagrado da existência. Se você quiser um tipo de vida
realmente intenso, ao estilo Kerouac, tome uma dose de On
the Road no começo de cada dia e siga o ritmo da música."`,
prescricao: "On the Road — Pé na estrada, de Jack Kerouac ________ 20 a 25 páginas por dia. \n\nAcompanhe a leitura com um café expresso, depois faça algo sem muito planejamento, vá a algum lugar por aí, faça uma viagem."
},

"Outsider": {
descricao: `"Um outsider é alguém que não se encaixa. Ele não é deixado
de fora, porque nunca esteve dentro. E, embora certamente seja diferente, também é um transplantado. Porque um outsider deixou
um lugar onde havia outros como ele, ou nunca chegou a
encontrar esse lugar, e vagueia pelo mundo como um perene
observador, olhando para dentro, mas nunca, jamais
entrando."`,
prescricao: "Oscar e Lucinda, de Peter Carey ________ 15 a 20 páginas por dia. \n\nAcompanhe a leitura com uma xícara de chá e uma fatia de bolo de cenoura."
},

"Pânico": {
descricao: `"Só há uma coisa mais assustadora do que achar que talvez
você esteja prestes a ter um ataque de pânico: ter um ataque
de pânico. Claro que saber disso, e se preocupar com isso,
torna a possibilidade ainda mais provável. Aqueles que se
veem encurralados nessa situação precisam manter um frasco de tranquilidade literária à mão e tomar goles longos e lentos — seja lendo, seja recitando em silêncio passagens que ficaram na lembrança — sempre que estiverem em pânico ou com a possibilidade de entrar em pânico. Faça isso com frequência e, com o tempo, só o título já
acalmará as batidas de seu coração."`,
prescricao: "Shane, de Jack Schaefer ________ 15 a 20 páginas por dia.\n\nAcompanhe a leitura com uma xícara de café preto, ouvindo uma música country suave."
},

"Paranoia": {
descricao: `"Esse romance é inteiro sobre você. Sim, você mesmo! Você vai encontrar seu
nome nele. Experimente a página 49."`,
prescricao:"O Leilão do Lote 49, de Thomas Pynchon ________ 10 a 15 páginas por dia. \n\nAcompanhe a leitura bebendo sua bebida favorita, seria uma coca-cola zero, certo?"
},

"Pesadelos": {
descricao: `"Se você tende a ser perturbado por sonhos ruins nas
madrugadas solitárias, um romance tranquilizador ajudará a
reconfortar sua mente. Mantenha uma pilha destas leituras a
respeito de rios ao lado da cama e flutue de volta ao sono
seguindo sua corrente."`,
prescricao:`Rio Profundo, de Shusaku Endo ________ 15 a 20 páginas por dia. 
O Vento nos Salgueiros, de Kenneth Grahame ________ 10 a 15 páginas por dia. 
Três Homens e Uma Canoa, de Jerome K. Jerome ________ 20 páginas por dia. 
O Monge Endinheirado, A Mulher do Bandido e Outras Histórias de um Rio Indiano, de Gita Mehta ________ 15 a 20 páginas por dia. 
O Guia, de R. K. Narayan ________ 10 a 15 páginas por dia. 
Terra d'Água, de Graham Swift ________ 15 a 20 páginas por dia. 
As Aventuras de Huckleberry Finn, de Mark Twain ________ 20 a 25 páginas por dia. 
\nAcompanhe a leitura com uma xícara de chá de camomila para relaxar.`
},

"Pressão alta": {
descricao: `"Reconhecida por reduzir a ansiedade, a leitura é um ótimo
hábito para adquirir se você tiver pressão alta, especialmente
se fizer isso com um animalzinho peludo aconchegado sobre
os joelhos. Mas tenha cuidado com o que escolhe; algo rápido
demais, ou que o deixe roendo as unhas de nervoso, vai fazer
sua pressão subir ainda mais."`,
prescricao:`Villette, de Charlotte Brontë ________ 15 a 20 páginas por dia.
A Cidade do Seu Destino Final, de Peter Cameron ________ 10 a 15 páginas por dia.
As Horas, de Michael Cunningham ________ 15 a 20 páginas por dia.
O Coração é um Caçador Solitário, de Carson McCullers ________ 15 a 20 páginas por dia.
Destinos Cruzados, de Wallace Stegner ________ 20 a 25 páginas por dia.
As Ondas, de Virginia Woolf ________ 10 a 15 páginas por dia.
\nAcompanhe a leitura com uma xícara de chá de camomila ouvindo música suave..`
},

"Procrastinação": {
descricao: `"Por que fazer hoje o que pode esperar até amanhã? Porque, a
cada dia que você deixar de fazer uma tarefa, ela vai ficando
maior e a motivação para fazê-la diminui.
A procrastinação, ou a arte de evitar fazer o que precisa
ser feito, não tem nada a ver com preguiça ou mesmo com
estar ocupado demais. Suas causas são emocionais.[...] O procrastinador evita as tarefas que, consciente ou inconscientemente, associa a emoções desconfortáveis, como tédio, ansiedade ou medo de fracasso. O problema de deixar que
uma emoção desconfortável fique em seu caminho é que,
uma vez evitadas, tarefas que eram provavelmente bem
tranquilas de cumprir começam a crescer em nossa
imaginação e (com frequência) na realidade, até que se
agigantam sobre nós de maneira tão opressiva que se tornam
merecedoras de ser procrastinadas."`,
prescricao: "Os Resíduos do Dia, de Kazuo Ishiguro ________ 10 a 15 páginas por dia.\n\nAcompanhe a leitura comendo uma fatia de bolo de maçã."
},

"Rabugice": {
descricao: `"Há muitas coisas de que reclamar na vida. Se concorda com
essa aàrmação, você é um deles. Porque é uma dessas
pessoas irritantes que sofrem de rabugice, ou uma
necessidade constante de resmungar e reclamar, o que não só
é autoperpetuador — já que a determinação a ver o mundo
em preto e branco é a maneira mais segura de desbotá-lo de
toda cor — como também impede você de notar a riqueza da
vida."`,
prescricao: "A Morte de um Estranho, de Andrei Kurkov ________ 10 a 15 páginas por dia.\n\nAcompanhe a leitura com uma fatia de bolo de laranja enquanto saboreia o doce e amargo da vida."
},

"Racismo": {
descricao: `"Qualquer pessoa que seja alvo de atitudes ou
comportamentos racistas — ou aquelas ainda inclinadas a pôr
a culpa pelas tensões raciais na conta das minorias sitiadas —
faria bem em ler o extraordinário e radical romance de Ralph
Ellison, Homem invisível. A redação e a publicação desse livro
foram um ato de heroísmo por parte do autor, pois, quando a
obra irrompeu na cena literária, em 1952, os Estados Unidos
ainda eram um país tolhido pela segregação e cheio de
preconceito racial."`,
prescricao: "Homem Invisível, de Ralph Ellison ________ 15 a 20 páginas por dia.\n\nAcompanhe a leitura com um café preto, refletindo sobre identidade e invisibilidade social."
},

"Raiva": {
descricao: `"Porque, mesmo depois de oitenta e quatro dias consecutivos
saindo com seu barco sem pegar um único peixe, o velho se
mostra alegre e confiante. E, mesmo quando os outros
pescadores riem dele, ele não fica bravo. E, apesar de agora ter
de pescar sozinho — porque o garoto que estava com ele
desde os cinco anos, que ele ama e que o ama também, foi
forçado pela família a tentar a sorte em outro barco —, ele
não carrega nenhum ressentimento no coração. E porque, no
octogésimo quinto dia, ele sai com o barco outra vez, cheio de
esperança."`,
prescricao: "O Velho e o Mar, de Ernest Hemingway ________ 10 a 15 páginas por dia.\n\nAcompanhe a leitura com um chá de hortelã, absorvendo a resiliência e determinação do protagonista enquanto aprecia a simplicidade e força dessa narrativa."
},

"Resfriado": {
descricao: `"Não há cura para o resfriado. Mas ele é uma desculpa
excelente para se enrolar no cobertor, com um chá quente ao
lado e uma leitura confortável e restauradora."`,
prescricao: `Um Estudo em Vermelho, de Arthur Conan Doyle ________ 10 a 15 páginas por dia. 
Memórias de uma Gueixa, de Arthur Golden ________ 15 a 20 páginas por dia.  
O Noivo da Princesa, de William Goldman ________ 10 a 15 páginas por dia.  
Jornada pelo Rio Mar, de Eva Ibbotson ________ 10 a 15 páginas por dia.  
A Vida Secreta das Abelhas, de Sue Monk Kidd ________ 10 a 15 páginas por dia.  
O Cometa na Terra dos Mumins, de Tove Jansson ________ 5 a 10 páginas por dia.  
A Pousada da Jamaica, de Daphne du Maurier** ________ 10 a 15 páginas por dia.  
A Arte Perdida de Guardar Segredos, de Eva Rice ________ 10 a 15 páginas por dia.  
O Diabo Veste Prada, de Lauren Weisberger ________ 15 a 20 páginas por dia.  
A Época da Inocência, de Edith Wharton** ________ 10 a 15 páginas por dia.  
\nSe enrole no cobertor e leia enquanto saboreia um chá de jasmim.` 
},

"Romântico incorrigível": {
descricao: `"Você espalha pétalas de rosa na cama todas as noites, espera
que seus pretendentes subam até sua varanda levando
chocolates e deixa bilhetinhos de amor dentro da geladeira de
seu(sua) namorado(a)? Você viajaria milhares de quilômetros
para colher o primeiro morango alpino da estação e dá-lo de
presente a sua alma gêmea no café da manhã? E espera que
ele/ela faça o mesmo por você?
Se a resposta a qualquer uma dessas perguntas for sim,
você é de fato um romântico incorrigível. Nós o aplaudimos e
lamentamos em igual medida. Porque, embora adoremos
românticos incorrigíveis, tememos por seu coração e
esperamos que ele não se parta com muita frequência."`,
prescricao: "O Mensageiro, de L. P. Hartley ________ 10 a 15 páginas por dia.\n\nAcompanhe a leitura tomando um delicioso chocolate quente."
},

"Rompimento": {
descricao: `"Separações nunca são fáceis e, quer tenha sido você quem
deu ou levou o fora, não deve passar por isso sozinho.
Idealmente, você precisa da mão de um amigo que já tenha,
ele próprio, sofrido as dores de relações rompidas e entenda
como você está se sentindo. Oferecemos a você a mão de Rob, o herói
louco por música de Alta fidelidade, o hino ao pop de Nick
Hornby."`,
prescricao: "Alta Fidelidade, de Nick Hornby ________ 15 a 20 páginas por dia.\n\nMergulhe na leitura com um café com leite levemente adocicado."
},

"Ronco": {
descricao: `"Dormir com alguém que ronca pode ser um tormento
noturno. Na melhor das hipóteses, vocês acabam em camas
separadas e diante da perspectiva de um futuro com menos
intimidade física. Na pior das hipóteses, você passa seus dias
em uma névoa de irritabilidade por causa do sono
interrompido, e as noites odiando o emissor dos sons com
todas as suas forças."`,
prescricao: `Para salvar sua sanidade e seu relacionamento — se não a vida de seu parceiro —, invista em fones de ouvido, ou em um dispositivo de áudio próprio para ser colocado sob o travesseiro, e mantenha uma pilha de audiolivros tranquilizadores ao lado da cama. Lidos em voz suave, em  tom tranquilo, eles são a garantia de abafar os roncos de seu parceiro e preservar seu sono. Ouça-os a noite inteira se for preciso, entrando e saindo do sono. Para condições de sono ideais, a familiaridade com o livro é um bônus.`
},

"Sedução,": {
descricao: `"De todas as habilidades na vida, as que pertencem à arte da
sedução talvez sejam as mais difíceis de desenvolver — ao
mesmo tempo em que, certamente, estão entre as mais
importantes para uma vida feliz e satisfatória. Mas como
fazer para adquiri-las? Observamos nossos pais com horror,
nossos amigos com divertimento e os filmes de Hollywood
com descrença. Será que a literatura pode vir em nosso
socorro de cabeceira?"`,
prescricao: "Dom Casmurro, de Machado de Assis ________ 10 a 15 páginas por dia.\n\nAcompanhe a leitura com uma xícara de chá de gengibre e canela, um blend conhecido por suas propriedades afrodisíacas."
},

"Sem palavras": {
descricao: `"Se você está sem palavras porque está em choque, espere o
choque passar e as palavras retornarão. [...]. Mas, se você não encontra as palavras porque
eloquência não é o seu forte e as palavras certas parecem
abandoná-lo sempre que você mais precisa delas, receba a
companhia do narrador de Lolita, Humbert Humbert, um
homem que está tão longe quanto possível de ser afetado por
esse mal."`,
prescricao: "Lolita, de Vladimir Nabokov ________ 10 a 15 páginas por dia.\n\nAcompanhe a leitura com um quadradinho de chocolate amargo, apreciando os tons provocativos e a complexidade da narrativa."
},

"Sentimental": {
descricao: `"Tempos atrás, ser sentimental significava simplesmente estar
em contato com as próprias emoções e, portanto, ser um
apreciador melhor da literatura, da música e da arte. Mas o
mundo girou, e agora o termo indica emoções duvidosas —
um mundo açucarado de ursinhos de pelúcia e finais
hollywoodianos piegas. Insistimos fortemente na cessação de todas
essas emoções superficiais, que ocorrem à custa de
sentimentos mais profundos e mais delicados. Solicita-se que
os sentimentais se administrem uma dose do excelente conto
de pirataria, rapto e morte de Richard Hughes, Um ciclone na
Jamaica. Esse livro é tão incisivamente não sentimental que,
depois de lê-lo, você não vai mais chorar diante da imagem de
uma criança faminta. Em vez disso, vai enviar um pacote de
comida ou se voluntariar para ajudar."`,
prescricao: "Um Ciclone na Jamaica, de Richard Hughes ________ 15 a 20 páginas por dia.\n\nAcompanhe a leitura com uma xícara de chá de gengibre, permitindo-se imergir na atmosfera exótica e imprevisível da história."
},

"Sexo": {
descricao: `"Se você não está vendo muita ação no departamento “cama”
— e isso está resultando em contrariedade, tristeza e um
desejo frustrado de celebrar seu lado físico —, insistimos que
compare seu sofrimento com o dos monges e freiras no
multifacetado Os mil outonos de Jacob de Zoet, de David
Mitchell. Ambientado em uma ilha no Japão na virada do
século XIX, conta a história de duas comunidades unissexuais
tão sexualmente carentes que inventam rituais estranhos e
perturbadores para atenuar o confinamento. Você ficará tão
aliviado por não estar vivendo aquela vida que aceitará a sua
com mais equanimidade."`,
prescricao: `- Pouco sexo:\nOs Mil Outonos de Jacob de Zoet, de David Mitchell ________ 20 a 25 páginas por dia.\n\nAcompanhe a leitura com uma infusão de chá verde e hortelã, evocando os aromas de terras distantes.
\n- Sexo demais:\nA Maligna: Vida e Amores de uma Mulher Demônio, de Fay Weldon ________ 15 a 20 páginas por dia.\nMulheres, de Charles Bukowski ________ 20 páginas por dia.\n\nAcompanhe a leitura com uma taça de vinho tinto.`
},

"Solidão": {
descricao: `"Você nunca terá de se sentir solitário com um quarto cheio de
livros — ou mesmo apenas aquele que você levaria para uma
ilha deserta —, e todos temos nossos amigos literários
favoritos. Mas há, inevitavelmente, tempos de seca literária,
em que você talvez não tenha nenhum livro à mão; para esses
momentos, é preciso ter certeza de haver povoado sua mente
com muitos personagens, ideias e conversas interessantes,
reunidos da ficção, para garantir que seu mundo interior
esteja sempre a postos para lhe fazer companhia."`,
prescricao: `A Bússola de Ouro, de Philip Pullman ________ 15 a 20 páginas por dia.
Eu, Cláudio, de Robert Graves ________ 10 a 15 páginas por dia.
Histórias de uma Cidade, de Armistead Maupin ________ 20 páginas por dia.\n\nAcompanhe a leitura com uma xícara de chá de maçã e canela e uma fatia de bolo de chocolate.`
},

"Sonhos desfeitos": {
descricao: `"Presenciar a destruição dos sonhos de uma pessoa amada, ou
resignar-se à perda de seus próprios, é algo terrível de
enfrentar. E é muito mais comum do que você poderia
imaginar. Porque ter um sonho é fácil, mas encontrar a
maneira certa de fazê-lo se tornar realidade é muito mais
difícil — e seu sucesso ou fracasso quanto a isso pode fazer de
você alguém realizado ou arrasado. Se você tiver desistido de
seus sonhos, pergunte-se se realmente deu uma chance a
eles. Como esse livro contundente mostra, é possível que você
tenha escolhido o caminho errado para alcançá-los."`,
prescricao: "Réquiem por um Sonho, de Hubert Selby Jr. ________ 10 a 15 páginas por dia.\n\nAcompanhe a leitura com uma xícara de café forte, permitindo-se sentir as emoções intensas e a complexidade dos personagens enquanto reflete sobre os limites da obsessão e os custos dos sonhos perdidos."
},

"Tédio": {
descricao: `"A Mãe e eu moramos no Quarto. Tem uma janela, que é a
Claraboia. A gente precisa ficar de pé na Mesa para ver por
ela, e aí dá para ver o Céu. Também tem a Cama, o Guarda-
Roupa, a Prateleira, a TV, a Mesa, a Porta e o Secador de
Roupa. A Mãe andava toda triste, até eu acontecer na barriga
dela. Agora, sou o sr. Cinco Anos, porque é meu aniversário."`,
prescricao: "Quarto, de Emma Donoghue ________ 15 a 20 páginas por dia.\n\nAcompanhe a leitura com um chá suave de erva-doce."
},

"TPM": {
descricao: `"Suas pernas doem. Você tem arrepios. Não tem vontade de se
mover muito depressa. Qualquer coisa mais complicada pode
levá-la às lágrimas."`,
prescricao: `A Casa dos Espíritos, de Isabel Allende ________ 15 a 20 páginas por dia.
A Tenda Vermelha, de Anita Diamant ________ 10 a 15 páginas por dia.
As Virgens Suicidas, de Jeffrey Eugenides ________ 10 a 15 páginas por dia.
Bridget Jones: No Limite da Razão, de Helen Fielding ________ 15 a 20 páginas por dia..\n\nAconchegue-se sob as cobertas com uma garrafa térmica de chá e uma boa literatura para meninas: um reconfortante analgésico.`
},

"Tristeza": {
descricao: `"Quando estamos tristes, nosso corpo se move para a estante
de livros com a mesma força irresistível por meio da qual a
lua atrai as marés, indo pousar com inexorável precisão em
Dois irmãos. Um romance tão embebido em tristeza que a
emoção parece vazar da página e misturar-se com a nossa,
proporcionando conforto pelo conhecimento inescapável de
que, neste mundo, a tristeza profunda existe."`,
prescricao: "Dois Irmãos, de Milton Hatoum ________ 15 a 20 páginas por dia.\n\nAcompanhe a leitura com uma fatia de bolo de castanha-do-pará e mergulhe em seu poço de tristeza sempre que a sua própriaestiver ameaçando transbordar."
},

"Vaidade": {
descricao: `"O problema de ser vaidoso é que isso torna você egoísta e tolo.[...] Trate os outros como gostaria de ser tratado e continuará viçoso até além dos noventa anos."`,
prescricao: "E o Vento Levou, de Margaret Mitchell ________ 20 a 25 páginas por dia.\nO Retrato de Dorian Gray, de Oscar Wilde ________ 10 a 15 páginas por dia.\n\nAcompanhe essas leituras com um chá preto bem forte."
},

"Vergonha": {
descricao: `"A vergonha é uma emoção profunda e primitiva — uma das
primeiras a surgir em corações despreocupados e inocentes.
Os envergonhados sentem uma urgência natural, instintiva,
de fugir e se esconder — no fundo do cesto de roupa suja ou
em outro país — onde ninguém possa encontrá-los. Leve
nossa cura para o cesto de roupa suja com você e, quando sair
de lá, entenderá a sabedoria e a necessidade de enfrentar o
mundo."`,
prescricao: "A Resposta, de Kathryn Stockett ________ 15 a 20 páginas por dia.\n\nAcompanhe a leitura com uma fatia de bolo de fubá ou milho, apreciando a simplicidade e a riqueza dos sabores."
},

"Vício": {
descricao: `"Para combater a agonia física e emocional de se livrar de um
vício, você precisa de livros que prendam, instiguem e forcem
você a investigar sua alma castigada. Imersão total é
recomendada, assim como a opção de administração auditiva."`,
prescricao: `Viagem ao Fim da Noite, de Louis-Ferdinand Céline ________ 20 a 25 páginas por dia.
A História Sem Fim, de Michael Ende ________ 15 a 20 páginas por dia.
Pergunte ao Pó, de John Fante ________ 10 a 15 páginas por dia.
Lugar Nenhum, de Neil Gaiman ________ 15 a 20 páginas por dia.
Oblómov, de Ivan Gontcharóv ________ 20 páginas por dia.
Meridiano de Sangue, de Cormac McCarthy ________ 15 a 20 páginas por dia.
Rei Rato, de China Miéville ________ 15 páginas por dia.
A Náusea, de Jean-Paul Sartre ________ 10 a 15 páginas por dia.
As Crisálidas, de John Wyndham ________ 15 a 20 páginas por dia.

Acompanhe a leitura com um chá preto com especiarias.`
},

"Vingança": {
descricao: `"Vingar-se é sempre uma má ideia. Isso põe em movimento
uma reação em cadeia de vingança e contravingança que
aumenta inevitavelmente em violência e se torna
extremamente difícil de interromper."`,
prescricao: "O Morro dos Ventos Uivantes, de Emily Brontë ________ 15 a 20 páginas por dia.\n\nAcompanhe a leitura com um chocolate quente aromatizado com canela, imergindo-se na atmosfera intensa e sombria da obra enquanto saboreia um toque de calor aconchegante."
},

};

return (
  <div className="app">
    <Header /> {/* Cabeçalho */}
    <div className="main-content">
      <div className="sidebar-and-receita">
        <Sidebar 
          enfermidades={Object.keys(receitas)} 
          selecionarEnfermidade={setEnfermidadeSelecionada} 
        />
        
        {/* Exibindo o texto explicativo no centro, antes da seleção da receita */}
        <div className="receita-container">
          {!enfermidadeSelecionada ? (
            <div className="texto-intro">
              <p><strong>Bem-vindo(a) às Receitas Literárias!</strong></p>
              <p>
                As Receitas Literárias têm como objetivo proporcionar aos usuários indicações literárias que promovam uma experiência de leitura terapêutica. A proposta é que os participantes possam refletir sobre suas opiniões, emoções e sentimentos antes, durante ou após a leitura de uma obra, criando um espaço acolhedor para compartilhar suas experiências. Além disso, promover o debate de ideias e a pluralidade de opiniões, sempre com respeito, empatia e livre de julgamentos.
              </p>
              <p>
                É importante ressaltar que as Receitas Literárias não têm a intenção de substituir tratamentos médicos ou psicológicos, mas sim de complementar o bem-estar dos participantes. O objetivo é oferecer um espaço de apoio emocional através da literatura, enriquecendo a vida dos leitores e contribuindo para a saúde mental de todos aqueles que são apaixonados por livros.
              </p>
              <p><strong>Selecione uma enfermidade para começar a sua jornada literária!</strong></p>
            </div>
          ) : (
            <Receita 
              enfermidade={enfermidadeSelecionada} 
              receita={receitas[enfermidadeSelecionada]} 
            />
          )}
        </div>
      </div>
    </div>
  </div>
);
};

export default App;
