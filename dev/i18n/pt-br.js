const btnMixinsProps = [{name: 'type', type: 'String', description: 'Define o tipo do botão (submit/reset/button)'}, {name: 'loading', type: 'Boolean', description: 'Se true, mostra um spinner no button'}, {name: 'disable', type: 'Boolean', description: 'Se true, o botão é desabilitado (eventos click não são emitidos)'}, {name: 'label', type: 'Number/String', description: 'Define o texto que aparecerá no botão'}, {name: 'noCaps', type: 'Boolean', description: 'Se true, todos os caracteres do label são mostrados em lowercase'}, {name: 'noWrap', type: 'Boolean', description: 'Impede a quebra do texto'}, {name: 'icon', type: 'String', description: 'Nome do ícone qua aparecerá no botão.'}, {name: 'iconColor', type: 'String', description: 'Define uma cor para o ícone do botão. Veja <a href="#">Uloc Color Pallete</a>'}, {name: 'iconType', type: 'String', description: 'Define o tipo de ícone (fa/material)'}, {name: 'iconStyle', type: 'String', description: 'Define o estilo do ícone'}, {name: 'iconRight', type: 'String', description: 'Nome do ícone que aparecerá no lado direito do botão'}, {name: 'iconRightColor', type: 'String', description: 'Define uma cor para o ícone que aparecerá no lado direito do botão. Veja <a href="#">Uloc Color Pallete</a>'}, {name: 'iconRightType', type: 'String', description: 'Define o tipo de ícone que aparecerá no lado direito do botão (fa/material)'}, {name: 'iconRightStyle', type: 'String', description: 'Define o estilo do ícone que aparecerá no lado direito do botão'}, {name: 'round', type: 'Boolean', description: 'Se true, torna o botão redondo'}, {name: 'outline', type: 'Boolean', description: 'Se true, aplica um contorno ao botão'}, {name: 'flat', type: 'Boolean', description: 'Se true, aplica o efeito flat ao botão'}, {name: 'rounded', type: 'Boolean', description: 'Se true, aplica bordas arredondadas ao botão'}, {name: 'push', type: 'Boolean', description: 'Se true, aplica um efeito de perspectiva ao pressionar o botão'}, {name: 'size', type: 'String', description: 'define o tamanho do botão (xs/sm/md/lg/xl)'}, {name: 'fab', type: 'Boolean', description: 'Floating Action Button'}, {name: 'fabMini', type: 'Boolean', description: 'Floating Action Button menor'}, {name: 'color', type: 'String', description: 'Define uma cor para o botão. Veja <a href="#">Uloc Color Pallete</a>'}, {name: 'textColor', type: 'String', description: 'Define uma cor para o label do botão. Veja <a href="#">Uloc Color Pallete</a>'}, {name: 'glossy', type: 'Boolean', description: 'Se true, aplica o efeito glossy ao botão'}, {name: 'dense', type: 'Boolean', description: 'Se true, aplica o efeito dense ao botão'}, {name: 'tabindex', type: 'Number', description: 'Define explicitamente o atributo "tabindex" do HTML'}, {name: 'to', type: 'Object/String', description: 'Define a rota para a qual o botão será direcionado quando clicado'}, {name: 'replace', type: 'Boolean', description: 'Substitui a rota atual, em lugar de adicioná-la ao histórico'}]
const inputMixinProps = [{name: 'autofocus', type: 'Boolean/String', description: 'Se true, o foco é automaticamente habilitado'}, {name: 'maxHeight', type: 'Number', description: 'Define a altura máxima do componente'}, {name: 'placeholder', type: 'String', description: 'Texto que aparecerá no input, geralmente usado para explicar o que será inserido'}, {name: 'loading', type: 'Boolean', description: 'Se true, mostra um spinner no input'}]
const inputFrameMixinProps = [{name: 'prefix', type: 'String', description: 'Texto que aparecerá antes do input'}, {name: 'suffix', type: 'String', description: 'Texto que aparecerá após o input'}, {name: 'stackLabel', type: 'String', description: 'Um label flutuante que aparecerá acima do input'}, {name: 'floatLabel', type: 'String', description: 'Um label estático que aparecerá acima do input'}, {name: 'error', type: 'Boolean', description: 'Se true, a cor do input é alterada para indicar que há um erro'}, {name: 'warning', type: 'Boolean', description: 'Se true, a cor do input é alterada para indicar que há um alerta (warning)'}, {name: 'disable', type: 'Boolean', description: 'Se true, desabilita o input'}, {name: 'readonly', type: 'Boolean', description: 'Se true, o conteúdo do input não pode ser editado'}, {name: 'clearable', type: 'Boolean', description: 'Se true, habilita um pequeno botão que reseta o conteúdo do input'}, {name: 'color', type: 'String', description: 'Veja <a href="#">Uloc Color Pallete</a>'}, {name: 'align', type: 'String', description: 'Define o alinhamento do texto dentro do input (left/center/right)'}, {name: 'dark', type: 'Boolean', description: 'Se true, o componente será renderizado em um fundo preto'}, {name: 'before', type: 'marginal', description: 'Ícones ao lado esquerdo do input.'}, {name: 'after', type: 'marginal', description: 'Ícones ao lado direito do input.'}, {name: 'inverted', type: 'Boolean', description: 'Modo invertido. A cor é aplicada no background do componente'}, {name: 'invertedLight', type: 'Boolean', description: 'Modo invertido com cor light. A cor é aplicada no background do componente'}, {name: 'hideUnderline', type: 'Boolean', description: 'Oculta a borda inferior'}, {name: 'clearValue', type: '-', description: 'Valor que será resetado quando utilizar clearable.'}, {name: 'noParentField', type: 'Boolean', description: 'Impede o componente de tentar se conectar a um UField pai.'}]

export default {
  lang: 'pt-br',
  propsColumns: ['Propriedade', 'Tipo', 'Descrição'],
  eventsColumns: ['Evento', 'Descrição'],
  window: {
    name: 'Window',
    frameworkName: 'UWindow',
    description: 'Com foco em aplicações desktop, este componente facilita a navegação por meio de janelas, que podem ser customizadas.',
    props: [
      {
        name: 'wid',
        type: 'String',
        description: 'Somente para uso por meio do Plugin. Permite definir um nome único para a janela. Só é possível existir uma instância aberta de uma janela com o mesmo nome'
      },
      {
        name: 'props',
        type: 'Object',
        description: 'Somente para uso por meio do Plugin. Permite passar propriedades para a nova janela a ser criada'
      },
      {
        name: 'move',
        type: 'Boolean',
        description: 'Permite mover a janela'
      },
      {
        name: 'maximize',
        type: 'Boolean',
        description: 'Permite maximizar a janela'
      },
      {
        name: 'close',
        type: 'Boolean',
        description: 'Habilita o botão fechar'
      },
      {
        name: 'clickOutside',
        type: 'Boolean',
        description: 'Permite clicar fora da janela enquanto ela estiver ativa'
      },
      {
        name: 'backdrop',
        type: 'Boolean',
        description: 'Habilita o plano de fundo (backdrop)'
      },
      {
        name: 'width',
        type: 'String',
        description: 'Define a largura padrão da janela. Pode ser um número inteiro (300), ou uma porcentagem (50%)'
      },
      {
        name: 'height',
        type: 'String',
        description: 'Define a altura padrão da janela. Pode ser um número inteiro, ou uma porcentagem'
      },
      {
        name: 'minWidth',
        type: 'String',
        description: 'Define a largura mínima da janela. Pode ser um número inteiro, ou uma porcentagem'
      },
      {
        name: 'minHeight',
        type: 'String',
        description: 'Define a altura mínima da janela. Pode ser um número inteiro, ou uma porcentagem'
      },
      {
        name: 'maxWidth',
        type: 'String',
        description: 'Define a largura máxima da janela. Pode ser um número inteiro, ou uma porcentagem'
      },
      {
        name: 'maxHeight',
        type: 'String',
        description: 'Define a altura máxima da janela. Pode ser um número inteiro, ou uma porcentagem'
      },
      {
        name: 'fullscreen',
        type: 'Boolean',
        description: 'Inicia a janela no modo tela cheia'
      },
      {
        name: 'showHeader',
        type: 'Boolean',
        description: 'Limita o modo fullscreen até a borda do cabeçalho da aplicação'
      },
      {
        name: 'title',
        type: 'String',
        description: 'Título da janela'
      },
      {
        name: 'icon',
        type: 'Mixed',
        description: `Ícone da janela. Pode ser o nome do ícone de acordo o sistema padrão de ícones, ou um objeto passando detalhes do ícone, como por exemplo: <br><code>{</br>name: 'window',</br> type: 'fa',</br> color: 'primary',</br> iconStyle: 'light',</br> extraStyle: {'font-size': '18px'}</br>}</code>`
      },
      {
        name: 'contentClass',
        type: 'String',
        description: 'Classe adicional para a folha de estilo da janela'
      },
      {
        name: 'headerButtons',
        type: 'Array',
        description: 'staging'
      },
      {
        name: 'theme',
        type: 'String',
        description: 'staging'
      }
    ],
    events: [
      {
        name: 'close',
        description: 'Quando a janela é fechada. @Return wid'
      },
      {
        name: 'active',
        description: 'Quando a janela é ativada. É acionado no show() ou então quando a janela está abaixo de outras e é clicada e elevada para o nível superior da visualização. @Return wid'
      },
      {
        name: 'desactive',
        description: 'Quando algum outro componente entra na frente desta janela. @Return wid'
      },
      {
        name: 'maximize',
        description: 'Quando a janela é maximizada. @Return wid'
      },
      {
        name: 'restore',
        description: 'Quando uma janela que esteja maximizada é restaurada para o tamanho original. @Return wid'
      },
      {
        name: 'move',
        description: 'Quando uma janela é movida. @Return wid'
      }
    ]
  },
  buttongroup: {
    name: 'Button Group',
    frameworkName: 'UBtnGroup',
    description: 'Esse componente possibilita agrupar componentes UBtn e UBtnDropdown',
    props: [
      {
        name: 'outline',
        type: 'Boolean',
        description: 'Se true, define um contorno para o componente'
      },
      {
        name: 'flat',
        type: 'Boolean',
        description: 'Se true, o estilo flat é aplicado'
      },
      {
        name: 'rounded',
        type: 'Boolean',
        description: 'Se true, sao aplicadas bordas arredondadas ao componente'
      },
      {
        name: 'push',
        type: 'Boolean',
        description: 'Se true, aplica um efeito de perspectiva ao pressionar o botão'
      }
    ]
  },
  button: {
    name: 'Button',
    frameworkName: 'UBtn',
    description: 'Esse componente renderiza um botão, com possibilidade de possuir um label, ícone ou ambos',
    props: [
      {
        name: 'percentage',
        type: 'Number',
        description: 'Se true, define um contorno para o componente'
      },
      {
        name: 'darkPercentage',
        type: 'Boolean',
        description: 'Se true, o estilo flat é aplicado'
      },
      {
        name: 'repeatTimeout',
        type: 'Number/Function',
        description: 'Habilita múltiplos eventos click. Function recebe um Number (quantidade de eventos) como parâmetro'
      },
      ...btnMixinsProps,
      {
        name: 'align',
        type: 'String',
        description: 'Alinhamento do label/conteúdo do botao.'
      }
    ],
    events: [
      {
        name: 'click',
        description: 'Emitido quando o botão é clicado, se não estiver desabilitado'
      },
      {
        name: 'keydown',
        description: 'Emitido quando a tecla é pressionada'
      },
      {
        name: 'keyup',
        description: 'Emitido quando a tecla é solta'
      },
      {
        name: 'mousedown',
        description: 'Emitido ao clicar no componente, quando o componente está pressionado'
      },
      {
        name: 'mouseup',
        description: 'Emitido ao clicar no componente, quando o componente é solto'
      },
      {
        name: 'mouseleave',
        description: 'Emitido quando o ponteiro sai da área do componente'
      },
      {
        name: 'touchstart',
        description: 'Emitido ao toque no componente'
      },
      {
        name: 'touchend',
        description: 'Emitido ao fim do toque no componente'
      },
      {
        name: 'touchmove',
        description: 'Emitido durante o toque no componente'
      },
      {
        name: 'blur',
        description: 'Emitido quando o botão perde o foco'
      }
    ]
  },
  btndropdown: {
    name: 'Button Dropdown',
    frameworkName: 'UBtnDropdown',
    description: 'Esse componente funciona bem com uma UList, renderizando um dropdown com as opções contidas nela',
    props: [
      {
        name: 'value',
        type: 'Boolean',
        description: ''
      },
      {
        name: 'split',
        type: 'Boolean',
        description: ''
      },
      {
        name: 'contentClass',
        type: 'Array/String/Object',
        description: ''
      },
      {
        name: 'contentStyle',
        type: 'Array/String/Object',
        description: ''
      },
      {
        name: 'popoverAnchor',
        type: 'String',
        description: ''
      },
      {
        name: 'popoverSelf',
        type: 'String',
        description: ''
      },
      ...btnMixinsProps
    ],
    events: [
      {
        name: '',
        description: ''
      }
    ]
  },
  shadow: {
    name: 'Shadows',
    frameworkName: 'UShadows',
    description: 'Propriedade utilizada para adicionar efeitos de sobra em volta ou dentro de um elemento.',
    props: [
      {
        name: 'no-shadow',
        type: 'String',
        description: 'Remove sobra'
      },
      {
        name: 'shadow-1',
        type: 'String',
        description: 'Defina uma sobra em cima de 1 ate 24'
      },
      {
        name: 'shadow-up-1',
        type: 'String',
        description: 'Defina uma sobra embaixo em de 1 ate 24'
      },
      {
        name: 'inset-shadow',
        type: 'String',
        description: 'Defina uma sobra dentro'
      }
    ]
  },
  pagination: {
    name: 'Pagination',
    frameworkName: 'UPagination',
    description: 'Este componente ajuda o usuário a se mover de forma simples entre as páginas.',
    props: [
      {
        name: 'min',
        type: 'Number',
        description: 'Número da primeira página.'
      },
      {
        name: 'max',
        type: 'Number',
        description: 'Número da última página.'
      },
      {
        name: 'color',
        type: 'String',
        description: 'Cor do botão.'
      },
      {
        name: 'text-color',
        type: 'String',
        description: 'Cor do texto no botão.'
      },
      {
        name: 'size',
        type: 'String',
        description: 'Tamanho do botão.'
      },
      {
        name: 'input',
        type: 'Boolean',
        description: 'Use o modo de caixa de entrada em vez de botões'
      },
      {
        name: 'boundary-links',
        type: 'Boolean',
        description: 'Mostrar links do botão de limite'
      },
      {
        name: 'boundary-numbers',
        type: 'Boolean',
        description: 'Mostrar botões numéricos de limite'
      },
      {
        name: 'direction-links',
        type: 'Boolean',
        description: 'Mostrar botões de direção'
      },
      {
        name: 'ellipses',
        type: 'Boolean',
        description: 'Mostrar reticências quando as páginas estiverem disponíveis.'
      },
      {
        name: 'max-pages',
        type: 'Number',
        description: 'Número máximo de links de páginas para exibir de cada vez.'
      },
      {
        name: 'disable',
        type: 'Boolean',
        description: 'Se nenhum valor for fornecido, será considerado como definido como verdadeiro.'
      }
    ],
    events: [
      {
        name: '@input(newVal)',
        description: 'Acionado imediatamente na alteração do valor do modelo.'
      },
      {
        name: '@change(newVal)',
        description: 'Acionado na mudança de valor do modelo preguiçoso.'
      }
    ]
  },
  alert: {
    name: 'Alert',
    frameworkName: 'Ualert',
    description: 'A função do componente é mostrar ao usuário uma mensagem informativa.',
    props: [
      {
        name: 'type',
        type: 'String',
        description: 'Definindo um tipo entre "Info", "Positive", "negative" e "warning". Ja terá um alert definido com cor e ícone'
      },
      {
        name: 'color',
        type: 'String',
        description: 'Cor do alerta.'
      },
      {
        name: 'text-color',
        type: 'String',
        description: 'Cor do texto no alerta'
      },
      {
        name: 'message',
        type: 'String',
        description: 'Definir a mensagem do alerta'
      },
      {
        name: 'detail',
        type: 'String',
        description: 'Definir sub-mensagem do alerta'
      },
      {
        name: 'icon',
        type: 'String',
        description: 'Definir ícone para usar'
      },
      {
        name: 'avatar',
        type: 'String',
        description: 'Definir avatar para usar'
      },
      {
        name: 'actions',
        type: 'Array of Objects',
        description: 'Coloque um ou mais botões dentro do alerta'
      }
    ]
  },
  search: {
    name: 'Search',
    frameworkName: 'USearch',
    description: 'O USearch fornece um input com características adicionais para buscas.',
    props: [
      {
        name: 'value',
        type: 'String',
        description: 'Valor a ser buscado'
      },
      {
        name: 'type',
        type: 'String',
        description: 'Tipo do input. Pode ser text, number, tel, email ou url'
      },
      {
        name: 'debounce',
        type: 'Number',
        description: 'Número de ms de atraso para efetivar a busca do valor inserido'
      },
      {
        name: 'icon',
        type: 'String',
        description: 'Ícone que aparecerá no input'
      },
      {
        name: 'noIcon',
        type: 'Boolean',
        description: 'Oculta o ícone'
      },
      {
        name: 'upperCase',
        type: 'Boolean',
        description: 'Converte caracteres do input para upperCase'
      },
      {
        name: 'lowerCase',
        type: 'Boolean',
        description: 'Converte caracteres do input para lowerCase'
      },
      ...inputMixinProps,
      ...inputFrameMixinProps
    ],
    events: [
      {
        name: 'input',
        description: 'Ativado imediatamente ao modificar o valor do model'
      },
      {
        name: 'change',
        description: 'Ativado em uma mudança de modo lazy do valor do model'
      },
      {
        name: 'clear',
        description: 'Ativado quando o model é limpo'
      },
      {
        name: 'focus',
        description: 'Ativado quando o input é focado'
      },
      {
        name: 'blur',
        description: 'Ativado quando o input perde o foco'
      },
      {
        name: 'keydown',
        description: 'Emitido quando a tecla é pressionada'
      },
      {
        name: 'keyup',
        description: 'Emitido quando a tecla é solta'
      },
      {
        name: 'click',
        description: 'Ativado quando um click nativo é executado no input'
      }
    ]
  },
  input: {
    name: 'Search',
    frameworkName: 'USearch',
    description: 'O USearch fornece um input com características adicionais para buscas.',
    props: [
      {
        name: 'value',
        type: '-',
        description: 'valor do input'
      },
      {
        name: 'type',
        type: 'String',
        description: 'Tipo do input. Pode ser text, number, tel, email ou url'
      },
      {
        name: 'upperCase',
        type: 'Boolean',
        description: 'Converte caracteres do input para upperCase'
      },
      {
        name: 'lowerCase',
        type: 'Boolean',
        description: 'Converte caracteres do input para lowerCase'
      },
      {
        name: 'noPassToggle',
        type: 'Boolean',
        description: 'Se true, e type="password", então o ícone de toggle não é mostrado'
      },
      {
        name: 'numericKeyboardToggle',
        type: 'Boolean',
        description: 'Alguns teclados mobile não permitem digitar o ponto para compor um número flutuante, portanto, essa propriedade adiciona um ícone que, quando clicado / tocado, alterna o teclado para / de um alfanumérico.'
      },
      {
        name: 'decimals',
        type: 'Number',
        description: 'Número máximo de decimais que podem ser mostrados'
      },
      {
        name: 'step',
        type: 'Number',
        description: ''
      },
      ...inputFrameMixinProps,
      ...inputMixinProps
    ],
    events: [
      {
        name: 'input',
        description: 'Ativado imediatamente ao modificar o valor do model'
      },
      {
        name: 'change',
        description: 'Ativado em uma mudança de modo lazy do valor do model'
      },
      {
        name: 'clear',
        description: 'Ativado quando o model é limpo'
      },
      {
        name: 'focus',
        description: 'Ativado quando o input é focado'
      },
      {
        name: 'blur',
        description: 'Ativado quando o input perde o foco'
      },
      {
        name: 'keydown',
        description: 'Emitido quando a tecla é pressionada'
      },
      {
        name: 'keyup',
        description: 'Emitido quando a tecla é solta'
      },
      {
        name: 'click',
        description: 'Ativado quando um click nativo é executado no input'
      }
    ]
  },
  chipsinput: {
    name: 'Chips Input',
    frameworkName: 'UChipsInput',
    description: 'O UChipsInput permite a inserção de conjuntos de texto (Chips) que podem ser facilmente excluídos da lista',
    props: [
      {
        name: 'value',
        type: 'Array',
        description: 'Valores inseridos no input (UChip)'
      },
      {
        name: 'chipsColor',
        type: 'String',
        description: 'Define a cor do texto do UChip. Veja <a href="#">Uloc Color Pallete</a>'
      },
      {
        name: 'chipsBgColor',
        type: 'String',
        description: 'Define a cor do UChip. Veja <a href="#">Uloc Color Pallete</a>'
      },
      {
        name: 'addIcon',
        type: 'String',
        description: 'Sobrescreve o ícone da direita com outro'
      },
      {
        name: 'upperCase',
        type: 'Boolean',
        description: 'Converte caracteres do input para upperCase'
      },
      {
        name: 'lowerCase',
        type: 'Boolean',
        description: 'Converte caracteres do input para lowerCase'
      },
      ...inputMixinProps,
      ...inputFrameMixinProps
    ],
    events: [
      {
        name: 'input',
        description: 'Ativado imediatamente ao modificar o valor do model'
      },
      {
        name: 'change',
        description: 'Ativado em uma mudança de modo lazy do valor do model'
      },
      {
        name: 'clear',
        description: 'Ativado quando o model é limpo'
      },
      {
        name: 'duplicate',
        description: 'Ativado quando o usuário tenta adicionar ou duplicar um valor'
      },
      {
        name: 'add',
        description: 'Ativado quando o usuário adiciona um valor'
      },
      {
        name: 'remove',
        description: 'Ativado quando um UChip é removido'
      }
    ]
  },
  parallax: {
    name: 'Parallax',
    frameworkName: 'UParallax',
    description: 'O efeito Parallax é uma técnica na qual o background se move mais lentamente que o conteúdo à frente, criando uma ilusão de profundidade a um ambiente 2D',
    props: [
      {
        name: 'src',
        type: 'String',
        description: 'Caminho da imagem de background'
      },
      {
        name: 'height',
        type: 'Number',
        description: 'Altura do parallax'
      },
      {
        name: 'speed',
        type: 'Number',
        description: 'Velocidade de execução do efeito parallax (min: 0; max: 1)'
      }
    ]
  },
  rating: {
    name: 'Rating',
    frameworkName: 'URating',
    description: 'O URating possibilita ao usuário avaliar itens, utilizando variados UIcons como ilustração',
    props: [
      {
        name: 'value',
        type: 'Number',
        description: 'Valor do campo do rating'
      },
      {
        name: 'max',
        type: 'Number',
        description: 'Valor máximo que pode ser dado ao campo do rating'
      },
      {
        name: 'icon',
        type: 'String',
        description: 'Ícone que aparecerá no rating'
      },
      {
        name: 'color',
        type: 'String',
        description: 'Cor dos ícones do campo do rating'
      },
      {
        name: 'size',
        type: 'String',
        description: 'Tamanho do campo de rating'
      },
      {
        name: 'readonly',
        type: 'Boolean',
        description: 'Se true, o conteúdo do campo não pode ser editado'
      },
      {
        name: 'disable',
        type: 'Boolean',
        description: 'Se true, o rating é desabilitado'
      }
    ],
    events: [
      {
        name: 'input',
        description: 'Ativado quando o value é alterado'
      },
      {
        name: 'change',
        description: 'Ativado quando o value é alterado'
      }
    ]
  }
}
