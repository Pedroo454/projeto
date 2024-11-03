const { AoiClient } = require("aoi.js");


const client = new AoiClient({
  token: "xxx",
  prefix: "T!",
  intents: 'all',
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});

client.command({
    name: "<@$clientID>",
    aliases: ["<@!$clientID>"],
    nonPrefixed: true,
    code: `    
    $title[<:panda_astronaut:1287414371802157056> - __*Painel - Menção*__]
$color[FFFFFF]
$thumbnail[$userAvatar[$clientID]]
$footer[Utilizado por: $username;$userAvatar]
$description[
***Ajuda:***

> ( <:Dono_Decoration:1287412057171427370> ) - __*Criador*__: Pedrinho.pkz
> ( <:eventor:1287412067913043980> ) - __*Prefixo*__: **A?**
> ( <a:dev:1287412007800279070> ) - __*Versão*__: 0.1.0
> ( <:Discord_Bots:1287412046886867085> ) - __*Linguagem*__: ***AOI.JS***

Se interessou? Então use A?help para obter ajuda!]
$image[https://media.discordapp.net/attachments/1097591338221973520/1287170665601957929/standard.gif?ex=66f13b59&is=66efe9d9&hm=53279543d08aa0be6aaf957a639548bd764fd6b9657a8dd8a9662df8a7e8b969&=]
$addButton[1;Suporte;link;https://discord.gg/DChb5NeceK;<:serves:1287411982709817394>
$addButton[1;Invite;link;https://discord.com/oauth2/authorize?client_id=1287235949662830603;<:Convite:1152391375715831859>]
]
`});

client.status({
    name: "Example Text!",
    type: "PLAYING",
    status: "idle",
    time: 12
});

client.variables({
sodas: "0",
description: "nada",
});

client.command({
    name: "cpu",
    code: `
  OS: $cpu[os]
  Process: $cpu[process]
  `
});

client.command({
  name: "isButtonInteraction",
  code: `
  Hello!
  $addButton[1;Click Me!;primary;ButtonID;false]
  `
  },{
  name: "ButtonID",
  type: "interaction",
  prototype: "button",
  code:`
$isButtonInteraction
  $interactionReply[Hello World!;everyone;false]
   `
  });

client.loadCommands("./Comandos/", true);
