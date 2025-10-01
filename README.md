# NP1-AT1
NP1/AT1
## A atividade
APP 1 - Partindo do princípio do ambiente instalado e desenvolvimento do aplicativo
"Hello" utilizando React Native com Expo (rascunho disponibilizado), realizem uma
pesquisa exploratória e desenvolva um novo aplicativo exemplificando o uso dos
componentes abaixo (façam anotações sobre depreciação, substituição por outros
componentes e aplicações sugeridas):
  View
  Text
  TextInput
  Button
  Alert
  Image
  Modal
  ActivityIndicator
  FlatList
  SafeAreaView
  ScrollView
  SectionList
  StatusBar
  Switch
  TouchableOpacity
  
# Componentes utilizados

#### Aqui tá a lista do que foi usado e pra quê, com as anotações que foram pedidas

1. SafeAreaView

    Pra que serve: A gente usou isso como o componente principal pra tela não bugar e aparecer atrás dos menus do celular (tipo onde fica o relógio e a bateria).

    Anotação Importante: O VS Code tá avisando que esse componente está depreciado (SafeAreaView' is deprecated.ts(6385)). 

2. View

    Pra que serve: É tipo uma div do HTML. A gente usou pra organizar tudo em caixinhas: o cabeçalho, a parte de adicionar tarefa, cada item da lista, etc. Essencial pra montar o layout.

3. Text

    Pra que serve: o nome meio que diz tudo

4. TextInput

    Pra que serve: É o campo onde o usuário digita o nome da nova tarefa. Sem ele, não dá pra adicionar nada. (o nome tambem é autoexplicativo)

5. TouchableOpacity

    Pra que serve: Fizemos o botão de "Adicionar" com ele. Basicamente, é uma View que fica meio transparente quando você clica, dando um feedback visual de que o toque funcionou.

    Sugestão de substituição: Dava pra usar o Pressable, que é mais novo e dá mais controle sobre o visual do botão quando ele é pressionado. Mas pra um botão simples assim, o TouchableOpacity resolve bem.

6. FlatList

    Pra que serve: Usamos pra mostrar a lista de tarefas. O bom dele é que ele é otimizado e só renderiza os itens que aparecem na tela, então se a lista ficasse gigante, o app não ia travar.

    Aplicação sugerida: Perfeito pra qualquer lista que vai crescer, tipo um feed de notícias, lista de contatos, etc. Pra listas pequenas e fixas, um ScrollView também serviria.

7. Switch

    Pra que serve: É aquele botãozinho de ligar/desligar que fica do lado de cada tarefa pra marcar se ela foi concluída ou não.

8. StatusBar

    Pra que serve: Configura a barrinha de status lá em cima no celular. A gente usou pra deixar os ícones (bateria, Wi-Fi) brancos (light-content), combinando com o fundo escuro do cabeçalho.

9. Alert

    Pra que serve: É a API que manda aquele pop-up de alerta na tela. A gente chama ele se o usuário clica em "Adicionar" sem ter escrito nada no campo de texto.
