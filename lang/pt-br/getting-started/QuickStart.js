export default {
  header: 'Inicio rápido',
  headerText: 'Use um dos pacotes Vuetify Vue CLI _(com base nos exemplos oficiais)_ para começar seu projeto. Vuetify suporta **SSR** (server-side rendering), **SPA** (single page application), **PWA** (progressive web application) e páginas **HTML** padrão.',
  alert1: 'Para que seu aplicativo funcione corretamente, você **deve** colocá-lo dentro do componente `v-app`. Este componente é usado para gerenciar dinamicamente sua área de conteúdo e é o ponto de montagem para muitos componentes.',
  newStoreAlert: 'A nova loja do Vuetify agora está no ar!. Ajude a sustentar o projeto e receba algum produto legal ao mesmo tempo! <a href="https://vuetifyjs.com/store" class="btn btn--white primary--text"><span class="btn__content">Confira</span></a>',
  browserHeader: 'Navegadores suportados',
  browserText: 'Vuetify é um framework progressivo que tenta levar o desenvolvimento web para o próximo nível. Para melhor realizar esta tarefa, alguns sacrifícios tiveram que ser feitos em termos de suporte para versões antigas do Internet Explorer. Esta não é uma lista completa dos navegadores compatíveis, mas sim dos principais.',
  cdnHeader: 'Instalação via CDN',
  cdnText: 'Para testar usar o Vuetify.js sem instalar um modelo da Vue CLI, copie o código abaixo em seu index.html. Isso carregará a versão mais recente do Vue e do Vuetify, permitindo que você comece a brincar com os componentes. Você também pode usar o [iniciador Vuetify](https://template.vuetifyjs.com) no codepen.',
  newHeader: 'Novas aplicações',
  newText: 'Vuetify tem 8 modelos Vue CLI pré implementados, 3 que são fork do repositório de [templates oficial do Vue.js](https://github.com/vuejs-templates). Eles contêm pequenas modificações para ajudá-lo a começar ainda mais rápido com o Vuetify. Esses pacotes requerem `vue-cli`. Para mais informações sobre vue-cli, visite o reporitório oficial no [Github](https://github.com/vuejs/vue-cli). Esses modelos foram projetados para você começar o mais rápido possível com seu projeto',
  existingHeader: 'Aplicações existentes',
  existingText1: 'Para incluir o Vuetify em um projeto existente, você deve inseri-lo em seu node_modules. Você pode usar `npm` ou `yarn` para realizar esta tarefa. Estes são ambos gerenciadores de pacotes nos quais permitem que você controle quais recursos estarão disponíveis na sua aplicação.',
  existingText2: 'Para obter uma explicação detalhada de como executar o `npm` em seu ambiente, confira a [documentação oficial](https://docs.npmjs.com/getting-started/what-is-npm). Alternativamente, se você deseja usar o `yarn`, você pode encontrar a documentação oficial [aqui](https://yarnpkg.com/lang/en/docs/). Uma vez configurado, você pode executar qualquer comando do seu prompt de comando.',
  existingText3: 'Uma vez que o Vuetify tenha sido instalado, navegue até o ponto de entrada principal da sua aplicação. Na maioria dos casos, isso estará em `index.js` ou` main.js`. Neste arquivo você importará Vuetify e informará ao Vue para utilizá-lo.',
  existingText4: 'Você também precisará incluir o arquivo CSS do Vuetify. Basta incluir o arquivo CSS do Vuetify em seu `index.html` ou importar o arquivo stylus ou o CSS minificado.',
  existingText5: 'A maneira mais fácil de incluir os ícones do Material Design é colocando a tag `link` no seu arquivo `index.html`.',
  alert2: 'Aviso: Embora o Vuetify tenta ao máximo não causar qualquer colisão no CSS, não há garantia de que seus estilos personalizados não alterem sua experiência ao integrar este framework em seu projeto existente.',
  ie11Header: 'Suporte ao IE11 e Safari 9 ',
  ie11Text: 'No diretório de seu projeto, instale o `babel-polyfill` e importe-o em sua entrada principal:',
  ie11Text2: 'Devido ao suporte limitado do Internet Explorer para tags `<template>`, você deve enviar elementos do dom totalmente compilados para o navegador. Isso pode ser feito tanto construindo antecipamente seu código Vue quanto criando componentes auxiliares para substituir os elementos do DOM. Por exemplo, se for enviado diretamente para o IE, isso falhará:',
  browserSupport: {
    supported: 'Suportado',
    notSupported: 'Não suportado',
    polyfill: 'Suportado com polyfill'
  },
  toc: [
    {
      text: 'Introdução',
      href: 'introduction'
    },
    {
      text: 'Navegadores suportados',
      href: 'supported-browser'
    },
    {
      text: 'Instalação via CDN',
      href: 'cdn-install'
    },
    {
      text: 'Novas aplicações',
      href: 'new-applications'
    },
    {
      text: 'Aplicações existentes',
      href: 'existing-applications'
    },
    {
      text: 'Suporte ao IE11',
      href: 'ie11-support'
    }
  ]
}
