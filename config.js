const ownerNumber = ["557187645787@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '557187645787' 
// mude para seu numero

const menuimg = 'https://i.imgur.com/2KJfprY.jpg'
// Link da foto do menu

const registeruser = false
// Se é obrigatório o usuário se registrar para usar os comandos

const callbotmsgs = ['bot', 'alastor']

var gimagenotregister = false
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = false
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'O anti chat novo está ativado e você não é meu proprietário, logo será bloqueado'
//mensagem do antinewchat


const antipvmsg = '*🚫 PV BLOQUEADO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const delaystealcmd = 60
//tempo de delay dos comandos steal (medido por segundos)

const delaygamescmd = 60
//tempo de delay dos comandos de games (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nEscreve ${prefix}menu para lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adeus ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `MENU DO ALASTOR-BOT`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BEM-VINDO'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `https://images.squarespace-cdn.com/content/v1/5da7a0592a4fea6a5c51d653/1571356610593-WTGPUKXI2WJS8T4Q200Q/banner.jpeg?format=1000w`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://images.squarespace-cdn.com/content/v1/5da7a0592a4fea6a5c51d653/1571356610593-WTGPUKXI2WJS8T4Q200Q/banner.jpeg?format=1000w`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '✟🔥⃢⃟𝘼𝙇𝘼⃟𝙎𝙏𝙊𝙍 𝘽𝙊⃟𝙏🔥✟\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '🚫 *Caro senhor, você foi bloqueado pelo meu chefe, Não mande mais comando para mim se não quer ter uma visita* 🚫'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫 Esse comando não está disponível no momento meu amigo 🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Ora ora ora, parece que alguém mandou uma mensagem proibida, hora da punição*'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `Veja bem meu caro amigo, a contagem de mensagens é por grupo e consiste em rankear, listar, remover pessoas de acordo
com a frequência de mensagens no grupo, veja abaixo os comandos para administrar as mensagens do grupo:

checkativo (marcar) - lista a frequência de mensagens do membro marcado
rankativo - rankea as pessoas mais ativas do grupo
banativos (num) - remove membros com uma certa qnt de numeros de msg pra baixo
filtroativo (num) - lista membros com uma certa qnt de numeros de msg pra baixo]
atividade - lista a atividade de todos membros do grupo

Obs: O número de mensagens pode estar impreciso devido a contagem ser pelo bot.`

const adminmsgtype = '*Olá caro adm, parece que você mandou uma mensagem proibida, vou fingir que não vi isso*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = '*Atos depravados não serão tolerados aqui, te vejo no inferno...*'
// mensagem de ban no antiporn

const adminmsgporn = '*Olá caro adm, você enviou coisas libidonas neste grupo, vou apenas fingir que não vi nada*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = '*Links não serão tolerados aqui, até nunca escória...*'
// mensagem de ban no antilink

const adminmsglink = '*Olá senhor adm, você mandou um link neste grupo, porém vou fingir que não vi nada*'
// mensagem de quando adm manda link

const adminmsgpalavra = 'Caro adm, tais palavras estão proibidas no grupo, cuidado ao pronuncia-las'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = '*Esse tipo de vocabulário nao será tolerado no grupo, até nunca insolente...*'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.pinimg.com/originals/f9/03/00/f90300595d4ebdb1cd1f7ae8eb76d199.jpg'
const textmsgday = 'Bom dia meu jovem, hoje está um lindo dia não acha?'
// link e mensagem de bom dia

const linkimgeve = 'https://i1.sndcdn.com/avatars-000814515319-i3bm1l-t500x500.jpg'
const textmsgeve = `Boa tarde senhor, como vai a vida?`
// link e mensagem de boa tarde

const linkimgnig = 'https://pbs.twimg.com/media/Eq2SOBfWMAEc5_6.jpg'
const textmsgnig = 'Boa noite meu jovem, melhor se preparar para o próximo dia de sua vida'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Desculpe-me meu jovem não consegui atender seu desejo'
// mensagem de erro

const notregister = `*Este comando não está registrado senhor, solicito para que veja o menu*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Muito obrigado meu caro, mas não me bajule muito'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Pelo visto alguém aqui quer que eu faça uma visitinha na sua casa'
const cadebot = 'Estou aqui meu jovem, só dizer os comandos'
const botfdp = 'Que falta de respeito meu caro!! Vou te ensinar a ter bons modos mais tarde'
const botgostoso = 'Muito obrigado meu jovem, pena que não posso dizer o mesmo'
const botfofo = 'Muito obrigado meu jovem, pena que não posso dizer o mesmo'
const botbaianor = 'Não me compare com humanos a não ser que eu vá te ensinar bons modos'
const botcorno = 'Você se enganou humano, não sou da sua espécie de bovino humanizado'
const botputa = 'Você já se perguntou onde sua mãe está agora?'
const botgay = 'Atrações sexuais, são tão primitivas, tipíco de um humano'
const botviado = 'Atrações sexuais, são tão primitivas, tipíco de um humano'
const numbotfeio = 'Pelo visto alguém aqui quer que eu faça uma visitinha na sua casa'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Um momento meu jovem... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Desculpe-me senhor, mas houve falha ao converter para sticker ❌',
        Iv: '❌ Senhor, este link é inválido ❌'
    },
    only: {
        group: '❌ Infelizmente este comando está disponível somente para grupos meu caro! ❌',
        ownerG: '❌ Este comando somente meu chefe pode usar! ❌',
        ownerB: '❌ Este comando somente o grupo do meu chefe pode usar! ❌',
        admin: '❌ Se ponha no seu lugar membro comum ❌',
        Badmin: '❌ Como posso fazer esse comando se eu não sou administrado deste grupo! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu Chefe\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557187645787:+55 71 8764 5787\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`

const votohelp = `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`

// Nem ouse mexer aqui se n quiser que de erro
exports.registeruser = registeruser
exports.delaygamescmd = delaygamescmd
exports.delaystealcmd = delaystealcmd
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.callbotmsgs = callbotmsgs
exports.menuimg = menuimg