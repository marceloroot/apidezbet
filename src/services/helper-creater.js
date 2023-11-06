const EstrategiaMiner = require('../models/dtb_estrategia_miner');
const MsgMiner = require('../models/dtb_mensagem_padrao_miner');
const EstrategiaAviator = require('../models/dtb_estrategia_aviator');
const MsgAviator = require('../models/dtb_mensagem_padrao_aviator');
const EstrategiaFutbalStudio = require('../models/dtb_estrategia_futballstudio');
const MsgFutballStudio = require('../models/dtb_mensagem_padrao_futballstudio');
const EstrategiaPenalty = require('../models/dtb_estrategia_penalty');
const MsgPenalty = require('../models/dtb_mensagem_padrao_penalty');
const EstrategiaFantan = require('../models/dtb_estrategia_fantan');
const MsgFantan = require('../models/dtb_mensagem_padrao_fantan');
const EstrategiaCrashPremium = require('../models/dtb_estrategiapremium_crash');
const MsgCrashPremium = require('../models/dtb_mensagem_padrao_premium');
const EstrategiaFurtuneTiger = require('../models/dtb_estrategia_furtunetiger');
const MsgFurtuneTiger = require('../models/dtb_mensagem_padrao_furtunetiger');
const TipoJogo = require('../models/dtb_tipojogo');
const EstrategiaRoleta = require('../models/dtb_estrategia_bet365');    
const MsgRoleta = require('../models/dtb_mensagem_padrao_bet365');    
const EstrategiaDouble = require('../models/dtb_estrategia_double');

const EstrategiaVarioSlot = require('../models/dtb_estrategia_varioslots');
const msgVarioSlot = require('../models/dtb_mensagem_padrao_varioslots'); 

module.exports ={
    async createDouble(tipoJogoId){
        
          //Estrategias doubles
          await EstrategiaDouble.create({
            bot_id:tipoJogoId,
            nome:'Sequencia 5 preto',
            sequencia:'2,2,2,2,2,2',
            apostar_em:'1',
            martingale:'2',
        }); 

        await EstrategiaDouble.create({
            bot_id:tipoJogoId,
            nome:'Sequencia 5 vermelho',
            sequencia:'1,1,1,1,1,1',
            apostar_em:'2',
            martingale:'2',
        }); 


        await EstrategiaDouble.create({
            bot_id:tipoJogoId,
            nome:'Alternancia 5 preto',
            sequencia:'1,2,1,2,1',
            apostar_em:'2',
            martingale:'2',
        }); 

        await EstrategiaDouble.create({
            bot_id:tipoJogoId,
            nome:'Alternancia 5 vermelho',
            sequencia:'2,1,2,1,2',
            apostar_em:'1',
            martingale:'2',
        }); 
        
        await EstrategiaDouble.create({
            bot_id:tipoJogoId,
            nome:'Dois em dois preto',
            sequencia:'2,2,1,1,2',
            apostar_em:'2',
            martingale:'2',
        });
        
        
        await EstrategiaDouble.create({
            bot_id:tipoJogoId,
            nome:'Dois em dois vermelho',
            sequencia:'1,1,2,2,1',
            apostar_em:'1',
            martingale:'2',
        }); 


    },
    async createMiner(tipoJogoId){
        await EstrategiaMiner.create({
            bot_id:tipoJogoId,
            espera:2,
            tentativas:3,
            minas_a:3,
            minas_b:5,
            entrada_a:4,
            entrada_b:6,
        }); 

            
        await MsgMiner.create({
            bot_id:tipoJogoId,
            abertura:'             ⚠️ ATENÇÃO ⚠️ \n\nIniciaremos o envio dos sinais em breve. \n\nFique atento e proveita.', 
            fechamento:'             Sinais encerrados \nSe você deseja continuar recebendo os sinais 24Hrs, convidamos a fazer parte do nosso grupo VIP. \nNão perca esta oportunidade!',  
            atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',

            confirmacao:'🟢🟢 Entrada Confirmada 🟢🟢||🔵🔵 Entrada Finalizada 🔵🔵|| \n\n💣 Selecione com [NUMERO_MINAS] minas \n\n🎯Entrada: \n[ENTRADA] \n⏱ Valido até as [HORARIO] \n🎲 Tentativas: [TENTATIVAS] \n🎰 BraxBet: [LINK_JOGO]',

            parcial:'🚀Resultado parcial  \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
            final:'🚀Resultado Final \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
            tipomensagem:1,
        }); 

        await MsgMiner.create({
            bot_id:tipoJogoId,
            atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',

            confirmacao:'🟢🟢 Entrada Confirmada 🟢🟢||🔵🔵 Entrada Finalizada 🔵🔵|| \n\n💣 Selecione com [NUMERO_MINAS] minas \n\n🎯Entrada: \n[ENTRADA] \n⏱ Valido até as [HORARIO] \n🎲 Tentativas: [TENTATIVAS] \n🎰 BraxBet: [LINK_JOGO]',

            parcial:'🚀Resultado parcial \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
            final:'🚀Resultado Final \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
            tipomensagem:2,
        }); 
    },

    async createAviator(tipoJogoId){
        await EstrategiaAviator.create({
            bot_id:tipoJogoId,
            nome:'Padrão 1',
            sequencia:'AZUL,AZUL',
            apostar_em:'1.5',
            martingale:'2',
           }); 

           await EstrategiaAviator.create({
            bot_id:tipoJogoId,
            nome:'Padrão 2',
            sequencia:'AZUL,AZUL,AZUL,AZUL,AZUL',
            apostar_em:'2',
            martingale:'2',
           }); 

           await EstrategiaAviator.create({
            bot_id:tipoJogoId,
            nome:'Padrão 3',
            sequencia:'ROSA,ROSA',
            apostar_em:'1.5',
            martingale:'2',
           }); 

           
           await EstrategiaAviator.create({
            bot_id:tipoJogoId,
            nome:'Padrão 3',
            sequencia:'ROXO,ROXO',
            apostar_em:'1.5',
            martingale:'2',
           }); 

           //Mensagem futballstudio #################################
           await MsgAviator.create({
            bot_id: tipoJogoId,
            abertura:'             ⚠️ ATENÇÃO ⚠️ \n\nIniciaremos o envio dos sinais em breve. \n\nFique atento e proveita fechamento', 
            fechamento:'             Sinais encerrado \n\nSe você deseja continuar recebendo os sinais 24Hrs, convidamos a fazer parte do nosso grupo VIP. \n\nNão perca esta oportunidade!',  
            atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            
            cofirmacao:'🔔 Entrada Confirmada 🔔||🔕 Entrada Finalizada 🔕|| \n🎰 Braxbet: [LINK_JOGO] \n💰 Entrar após [ULTIMA_VELA]  \n🚀 Auto retirar [ENTRADA]',

            win:'✅✅✅GREEN - BATEU META? VAZA \n[RESULTADOS]',
            
            loss:'⛔ RED - SEGUE GERENCIAMENTO \n[RESULTADOS]',

            martingale:'🔁 [NUMERO]º Martingale!',

            branco:'🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n🤑🤑🤑🤑🤑 Empate 🤑🤑🤑🤑🤑\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
            parcial:'🚀Resultado parcial \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
            final:'🚀Resultado Final \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
            tipomensagem:1,
           });

           await MsgAviator.create({
            bot_id: tipoJogoId,
            atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            
            cofirmacao:'🔔 Entrada Confirmada 🔔||🔕 Entrada Finalizada 🔕|| \n🎰 Braxbet: [LINK_JOGO] \n💰 Entrar após [ULTIMA_VELA]  \n🚀 Auto retirar [ENTRADA]',

            
            win:'✅✅✅GREEN - BATEU META? VAZA \n[RESULTADOS]',
            
            loss:'⛔ RED - SEGUE GERENCIAMENTO \n[RESULTADOS]',

            martingale:'🔁 [NUMERO]º Martingale!',

            branco:'🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n🤑🤑🤑🤑🤑 Empate 🤑🤑🤑🤑🤑\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
            parcial:'🚀Resultado parcial \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
            final:'🚀Resultado Final \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
            tipomensagem:2,
           });  
    },

    async createFootBallStudio(tipoJogoId){
            await EstrategiaFutbalStudio.create({
                bot_id:tipoJogoId,
                nome:'Padrão 1',
                sequencia:'V,V',
                apostar_em:'C',
                martingale:'2',
            }); 

            await EstrategiaFutbalStudio.create({
                bot_id:tipoJogoId,
                nome:'Padrão 2',
                sequencia:'C,C',
                apostar_em:'V',
                martingale:'2',
              }); 

            await EstrategiaFutbalStudio.create({
                bot_id:tipoJogoId,
                nome:'Padrão 3',
                sequencia:'E,C',
                apostar_em:'V',
                martingale:'2',
              }); 
            await EstrategiaFutbalStudio.create({
                bot_id:tipoJogoId,
                nome:'Padrão 4',
                sequencia:'E,C',
                apostar_em:'C',
                martingale:'2',
              }); 

              //Mensagem futballstudio #################################
            await MsgFutballStudio.create({
                bot_id: tipoJogoId,
                abertura:'             ⚠️ ATENÇÃO ⚠️ \n\nIniciaremos o envio dos sinais em breve. \n\nFique atento e proveita fechamento', 
                fechamento:'             Sinais encerrado \n\nSe você deseja continuar recebendo os sinais 24Hrs, convidamos a fazer parte do nosso grupo VIP. \n\nNão perca esta oportunidade!',  
                atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            
                cofirmacao:'🔔🔔 Entrada Confirmada 🔔||🔕 Entrada Finalizada 🔕|| \n🎰 Braxbet: [LINK_JOGO] \n📍 Entrar Após [ULTIMA_COR] \n🟠 Cobrir o Empate \n💰 Apostar: [ENTRADA]',

                win:'✅✅✅GREEN - BATEU META? VAZA \n[RESULTADOS]',
                
                loss:'⛔ RED - SEGUE GERENCIAMENTO \n[RESULTADOS]',

                martingale:'🔁 [NUMERO]º Martingale!',

                branco:'🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n🤑🤑🤑🤑🤑 Empate 🤑🤑🤑🤑🤑\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
                parcial:'🚀Resultado parcial \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
                final:'🚀Resultado Final \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
                tipomensagem:1,
            });
            await MsgFutballStudio.create({
                bot_id: tipoJogoId,
                atencao:'⚠️ ATENÇÃO possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            
                cofirmacao:'🔔🔔 Entrada Confirmada 🔔||🔕 Entrada Finalizada 🔕|| \n🎰 Braxbet: [LINK_JOGO] \n📍 Entrar Após [ULTIMA_COR] \n🟠 Cobrir o Empate \n💰 Apostar: [ENTRADA]',

                win:'✅✅✅GREEN - BATEU META? VAZA \n[RESULTADOS]',
                
                loss:'⛔ RED - SEGUE GERENCIAMENTO \n[RESULTADOS]',

                martingale:'🔁 [NUMERO]º Martingale!',

                branco:'🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n🤑🤑🤑🤑🤑 Empate 🤑🤑🤑🤑🤑\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
                parcial:'🚀Resultado parcial \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
                final:'🚀Resultado Final \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
                tipomensagem:2,
            });  
    },

    async createPenalty(tipoJogoId){
        
        await EstrategiaPenalty.create({
            bot_id:tipoJogoId,
            esperar:2,
            tentativa:2,
        }); 
         //free
         await MsgPenalty.create({
            bot_id:tipoJogoId,
            abertura:'             ⚠️ ATENÇÃO ⚠️ \n\nIniciaremos o envio dos sinais em breve. \n\nFique atento e proveita fechamento', 
            fechamento:'             Sinais encerrado \n\nSe você deseja continuar recebendo os sinais 24Hrs, convidamos a fazer parte do nosso grupo VIP. \n\nNão perca esta oportunidade!',  
            atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            cofirmacao:'🟢🟢 Entrada Confirmada 🟢🟢||🔵🔵 Entrada Finalizada 🔵🔵|| \n\n🎯Entrada: [BANDEIRAS] \n🔥Buscando: [VELA][ENTRADA] \n🎰 BraxBet [LINK_JOGO] \n\n🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            tipomensagem:1,
          });

          //vip
        await MsgPenalty.create({
            bot_id:tipoJogoId,
            atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            cofirmacao:'🟢🟢 Entrada Confirmada 🟢🟢||🔵🔵 Entrada Finalizada 🔵🔵|| \n\n🎯 Selecione a Bandeira: [BANDEIRAS] \n[ENTRADA] \n🎰 BraxBet [LINK_JOGO] \n\n🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟 \n\n🎲 Tentativas: [TENTATIVAS] \n\n⏱ Valido até as [HORARIO]',
            tipomensagem:2,
        }); 
    },

    async createFantan(tipoJogoId){
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 1',
            sequencia:'1,1',
            apostar_em:'3-4',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 2',
            sequencia:'1,2',
            apostar_em:'1-4',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 3',
            sequencia:'1,3',
            apostar_em:'1-3',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 4',
            sequencia:'1,4',
            apostar_em:'1-2',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 5',
            sequencia:'2,1',
            apostar_em:'3-4',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 6',
            sequencia:'2,2',
            apostar_em:'2-4',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 7',
            sequencia:'2,3',
            apostar_em:'3-4',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 8',
            sequencia:'2,4',
            apostar_em:'1-3',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 9',
            sequencia:'3,1',
            apostar_em:'1-2',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 10',
            sequencia:'3,2',
            apostar_em:'3-4',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 11',
            sequencia:'3,3',
            apostar_em:'1-2',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 12',
            sequencia:'3,4',
            apostar_em:'1-2',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 13',
            sequencia:'4,1',
            apostar_em:'3-4',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 14',
            sequencia:'4,2',
            apostar_em:'1-2',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 15',
            sequencia:'4,3',
            apostar_em:'3-4',
            martingale:'2',
        }); 
        await EstrategiaFantan.create({
            bot_id:tipoJogoId,
            nome:'Padrão 16',
            sequencia:'4,4',
            apostar_em:'1-2',
            martingale:'2',
        }); 

        await MsgFantan.create({
            bot_id:tipoJogoId,
            abertura:'             ⚠️ ATENÇÃO ⚠️ \n\nIniciaremos o envio dos sinais em breve. \n\nFique atento e proveita.', 
            fechamento:'             Sinais encerrados \n\nSe você deseja continuar recebendo os sinais 24Hrs, convidamos a fazer parte do nosso grupo VIP. \n\nNão perca esta oportunidade!',  
            atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            
            cofirmacao:'🔔 Entrada Confirmada 🔔||🔕 Entrada Finalizada 🔕|| \n📍 Entrar Após [ULTIMO_NUMERO] \n🎰 BraxBet: [LINK_JOGO] \n💰 Apostar: [ENTRADA]',

            
            win:'✅✅✅GREEN - BATEU META? VAZA  \n[RESULTADOS]',
            
            loss:'⛔ RED - SEGUE GERENCIAMENTO \n[RESULTADOS]',

            martingale:'🔁 [NUMERO]º Martingale!',

            branco:'🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n🤑🤑🤑🤑🤑Green no Branco🤑🤑🤑🤑🤑\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
            parcial:'🚀Resultado parcial \n\n✅([ACERTOS]) VS ❌([ERROS])  \nAssertividade: [PORCENTAGEM_ACERTO]',
            final:'🚀Resultado Final \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
            tipomensagem:1,
        }); 
        await MsgFantan.create({
            bot_id: tipoJogoId,
            atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            
            cofirmacao:'🔔 Entrada Confirmada 🔔||🔕 Entrada Finalizada 🔕|| \n📍 Entrar Após [ULTIMO_NUMERO] \n🎰 BraxBet: [LINK_JOGO] \n💰 Apostar: [ENTRADA]',

            
            win:'✅✅✅GREEN - BATEU META? VAZA  \n[RESULTADOS]',
            
            loss:'⛔ RED - SEGUE GERENCIAMENTO \n[RESULTADOS]',

            martingale:'🔁 [NUMERO]º Martingale!',

            branco:'🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n🤑🤑🤑🤑🤑Green no Branco🤑🤑🤑🤑🤑\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
            parcial:'🚀Resultado parcial \n\n✅([ACERTOS]) VS ❌([ERROS])  \nAssertividade: [PORCENTAGEM_ACERTO]',
            final:'🚀Resultado Final \n\n✅([ACERTOS]) VS ❌([ERROS]) \nAssertividade: [PORCENTAGEM_ACERTO]',
            tipomensagem:2,
        }); 

    },
    async createCPremium(tipoJogoId){   
        await EstrategiaCrashPremium.create({
                bot_id:tipoJogoId,
                nome:"Estratégia Padrão",
                sair:0,
                aguardar:7,
                notificar:3,
                lista:4,
                sair_em:5
        }); 

        await MsgCrashPremium.create({
            bot_id:tipoJogoId,
            abertura:'             ⚠️ ATENÇÃO ⚠️ \n\nIniciaremos o envio dos sinais em breve. \n\nFique atento e proveita.', 
            fechamento:'             Sinais encerrados \n\nSe você deseja continuar recebendo os sinais 24Hrs, convidamos a fazer parte do nosso grupo VIP. \n\nNão perca esta oportunidade!',  
            atencao:'🔔 Entrada confirmada 🔔 \n\nPOSSÍVEL [VELA_ALTA]️x  \n\n[LISTA_HORARIO]  🚀 \n\nEntre [INTERVALO] \n\n🎰 Braxbet: <a href="https://braxbet.com/casino/game/1688165">Aviator</a> \n\n<a href="https://tracking.braxbet.com/o/Dcyg1x?lpage=HPK4a6">🌟🌟🌟 Cadastre-se 🌟🌟🌟</a>',
            
            win:'⏱ [HORARIO]  - 🚀  [RESULTADO]️ | ✅✅✅✅✅✅',
            
            loss:'⛔⛔⛔⛔⛔⛔⛔',

            parcial:'🚀Resultado parcial \n\n✅([ACERTOS]) VS ❌([ERROS]) \n\nAssertividade: [PORCENTAGEM_ACERTO] \n\nTotal de Velas Altas️: [TOTAL_VELAS_ALTAS',
            final:'🚀Resultado Final \n\n✅([ACERTOS]) VS ❌([ERROS]) \n\nAssertividade: [PORCENTAGEM_ACERTO] \n\nTotal de Velas Altas️: [TOTAL_VELAS_ALTAS]',
            tipomensagem:1,
        }); 
        await MsgCrashPremium.create({
            bot_id: tipoJogoId,
            atencao:'🔔 Entrada confirmada 🔔 \n\nPOSSÍVEL [VELA_ALTA]️x  \n\n[LISTA_HORARIO]  🚀 \n\nEntre [INTERVALO] \n\n🎰 Braxbet: <a href="https://braxbet.com/casino/game/1688165">Aviator</a> \n\n<a href="https://tracking.braxbet.com/o/Dcyg1x?lpage=HPK4a6">🌟🌟🌟 Cadastre-se 🌟🌟🌟</a>',
            
            win:'⏱ [HORARIO]  - 🚀  [RESULTADO]️ | ✅✅✅✅✅✅',
            
            loss:'⛔⛔⛔⛔⛔⛔⛔',

            parcial:'🚀Resultado parcial \n\n✅([ACERTOS]) VS ❌([ERROS]) \n\nAssertividade: [PORCENTAGEM_ACERTO] \n\nTotal de Velas Altas️: [TOTAL_VELAS_ALTAS',
            final:'🚀Resultado Final \n\n✅([ACERTOS]) VS ❌([ERROS]) \n\nAssertividade: [PORCENTAGEM_ACERTO] \n\nTotal de Velas Altas️: [TOTAL_VELAS_ALTAS]',
            tipomensagem:2,
        }); 
    },
   
    async createFurtuneTiger(tipoJogoId){
        
        await EstrategiaFurtuneTiger.create({
            bot_id:tipoJogoId,
            espera:2,
            minimo:2,
            maximo:2,
        }); 

          //free
          await MsgFurtuneTiger.create({
            bot_id:tipoJogoId,
            abertura:'             ⚠️ ATENÇÃO ⚠️ \n\nIniciaremos o envio dos sinais em breve. \n\nFique atento e proveita fechamento', 
            fechamento:'             Sinais encerrado \n\nSe você deseja continuar recebendo os sinais 24Hrs, convidamos a fazer parte do nosso grupo VIP. \n\nNão perca esta oportunidade!',  
            atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            confirmacao:'🟢🟢 Entrada Confirmada 🟢🟢||🔵🔵 Entrada Finalizada 🔵🔵|| \n\n🎯Entrada: [BANDEIRAS] \n🔥Buscando: [VELA][ENTRADA] \n🎰 BraxBet [LINK_JOGO] \n\n🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            final:'🚀Resultado Final\n✅([ACERTOS]) VS ❌([ERROS])\nAssertividade: [PORCENTAGEM_ACERTO]',
            tipomensagem:1,
          });

          //vip
        await MsgFurtuneTiger.create({
            bot_id:tipoJogoId,
            atencao:'⚠️ ATENÇÃO, possível entrada \n⌚️ Aguarde a confirmação \n🎰 BraxBet: [LINK_JOGO] \n\n      🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟',
            confirmacao:'🟢🟢 Entrada Confirmada 🟢🟢||🔵🔵 Entrada Finalizada 🔵🔵|| \n\n🎯 Selecione a Bandeira: [BANDEIRAS] \n[ENTRADA] \n🎰 BraxBet [LINK_JOGO] \n\n🌟🌟🌟 [LINK_CADASTRE_AQUI] 🌟🌟🌟 \n\n🎲 Tentativas: [TENTATIVAS] \n\n⏱ Valido até as [HORARIO]',
            final:'🚀Resultado Final\n✅([ACERTOS]) VS ❌([ERROS])\nAssertividade: [PORCENTAGEM_ACERTO]',
            tipomensagem:2,
        }); 
       
       
    },
    async updatewinlossEstrategias(tipoJogoName,win,loss,id){
        
         ///Monta as estrategias e mensagem ;;;;; melhorar isso atravazes de utils
        
          if(tipoJogoName.includes('Crash')){
            var aviator = await EstrategiaAviator.findOne({where:{ id:id }});
            console.log('aviator',aviator)
            await aviator.update({
                win:win,
                loss:loss
             }); 
          }else if(tipoJogoName.includes('Mines')){
            var miner = await EstrategiaMiner.findOne({where:{ id:id }});
            await miner.update({
                win:win,
                loss:loss
             }); 
          }else if(tipoJogoName.includes('Fantan')){
            var fantan = await EstrategiaFantan.findOne({where:{ id:id }});
            await fantan.update({
                win:win,
                loss:loss
             })
          }else if(tipoJogoName.includes('FootBallStudio')){
            var footBallEstudio = await EstrategiaFutbalStudio.findOne({where:{ id:id }});
            await footBallEstudio.update({
                win:win,
                loss:loss
             })

          }else if(tipoJogoName.includes('Penalty')){
            var penalty = await EstrategiaPenalty.findOne({where:{ id:id }});
            await penalty.update({
                win:win,
                loss:loss
             })
         
          }else if(tipoJogoName.includes("CPremium")){             
           //implementar
          }else if(tipoJogoName == "Roleta"){
                   
            var roleta = await EstrategiaRoleta.findOne({where:{ id:id }});
            await roleta.update({
                win:win,
                loss:loss
             })

          }else{
            //Estrategia Crash
            await EstrategiaCrash.create({
                bot_id:grupo.id,
                nome:'Jogada 1.5',
                sequencia:3,
                valor_a:1,
                valor_b:1.5,
                apostar_em:1.5,
                martingale:2,
            });
            
            await EstrategiaCrash.create({
                bot_id:grupo.id,
                nome:'Jogada 2.0',
                sequencia:8,
                valor_a:1,
                valor_b:1.5,
                apostar_em:2,
                martingale:2,
            }); 
        
          }
  
    },

    async updatewinlossJogo(win,loss,id){
        
        
        var jogo = await TipoJogo.findOne({where:{ id:id }});
         
           await jogo.update({
               win:win,
               loss:loss
            }); 
 
    },

     async createRoleta(tipoJogoId){  

        await EstrategiaRoleta.create({
            bot_id:tipoJogoId,
            nome_roleta:'Estrategia Padrão',
            sequencia_cor:11,
            sequencia_maior_menor:11,
            sequencia_par_impar:11,
            sequencia_duzias:8,
            sequencia_colunas:8,
            martingale:2,
            status:1,
        }); 
       
        //free
        await MsgRoleta.create({
            bot_id: tipoJogoId,
            
            abertura:'             ⚠️ ATENÇÃO ⚠️ \n\nIniciaremos o envio dos sinais em breve. \n\nFique atento e proveita.', 
           
            fechamento:'             Sinais encerrados \nSe você deseja continuar recebendo os sinais 24Hrs, convidamos a fazer parte do nosso grupo VIP. \nNão perca esta oportunidade!',  
           
            atencao:"⚠️ ANALISANDO A MESA ⚠️\n🎰 Roleta: [NOME_ROLETA]\n🎲 Estratégia: [REPETICAO]",

            confirmacao:"🔔 APOSTA CONFIRMADA 🔔\n🎰 Roleta: [NOME_ROLETA]\n📍Entrar: [ENTRAR_EM]\n0️⃣ Cobrir o ZERO.",

            win:"✅✅✅ GREEN ✅✅✅\n[RESULTADO]",
            
            loss:"❌❌RED❌❌\n[RED]",
            
            martingale:'🔁 [NUMERO]º Martingale!',

            parcial:"🚀Resultado Parcial:✅([ACERTOS]) VS ❌([ERROS])\nAssertividade: [PORCENTAGEM_ACERTO]",
        
            final:"🚀Resultado Final:✅([ACERTOS]) VS ❌([ERROS])\nAssertividade: [PORCENTAGEM_ACERTO]",
            tipomensagem:1,
        }); 

        //vip
        await MsgRoleta.create({
            bot_id: tipoJogoId,
            atencao:"⚠️ ANALISANDO A MESA ⚠️\n🎰 Roleta: [NOME_ROLETA]\n🎲 Estratégia: [REPETICAO]",

            confirmacao:"🔔 APOSTA CONFIRMADA 🔔\n🎰 Roleta: [NOME_ROLETA]\n📍Entrar: [ENTRAR_EM]\n0️⃣ Cobrir o ZERO.",

            win:"✅✅✅ GREEN ✅✅✅\n[RESULTADO]",
            
            loss:"❌❌RED❌❌\n[RED]",
            
            martingale:'🔁 [NUMERO]º Martingale!',

            parcial:"🚀Resultado Parcial:✅([ACERTOS]) VS ❌([ERROS])\nAssertividade: [PORCENTAGEM_ACERTO]",
        
            final:"🚀Resultado Final:✅([ACERTOS]) VS ❌([ERROS])\nAssertividade: [PORCENTAGEM_ACERTO]",
            tipomensagem:2,
        }); 
       
     },


     async createVariosSlots(tipoJogoId){
        await EstrategiaVarioSlot.create({
            bot_id:tipoJogoId,
            espera:2,
            minimo:2,
            maximo:2,
            listajogs:''
        }); 
         await msgVarioSlot.create({
            bot_id:tipoJogoId,
          
            abertura:'             ⚠️ ATENÇÃO ⚠️ \n\nIniciaremos o envio dos sinais em breve. \n\nFique atento e proveita fechamento', 
            fechamento:'             Sinais encerrado \n\nSe você deseja continuar recebendo os sinais 24Hrs, convidamos a fazer parte do nosso grupo VIP. \n\nNão perca esta oportunidade!',  
          
            atencao:'⚠️ ATENÇÃO, possível entrada [ENTRADA] \n⌚️ Aguarde a confirmação \n🎰 Bet 10: <a href="https://bet10">Crash</a>',

            confirmacao:'🔔 Entrada Confirmada 🔔 \n🎰 Bet 10: <a href="https://bet10">Crash</a> \💰 Entrar após [ULTIMA_VELA] \n🚀 Auto retirar [ENTRADA]',

            final:'🚀Resultado Final\n✅([ACERTOS]) VS ❌([ERROS])\nAssertividade: [PORCENTAGEM_ACERTO]',
            tipomensagem:1,
        }); 

        await msgVarioSlot.create({
            bot_id:tipoJogoId,
          
            atencao:'⚠️ ATENÇÃO, possível entrada [ENTRADA] \n⌚️ Aguarde a confirmação \n🎰 Bet10: <a href="https://bet10">Crash</a>',

            confirmacao:'🔔 Entrada Confirmada 🔔 \n🎰 Bet10: <a href="https://bet10">Crash</a> \💰 Entrar após [ULTIMA_VELA] \n🚀 Auto retirar [ENTRADA]',

            final:'🚀Resultado Final\n✅([ACERTOS]) VS ❌([ERROS])\nAssertividade: [PORCENTAGEM_ACERTO]',
            tipomensagem:2,
        }); 
 
  

    },

}