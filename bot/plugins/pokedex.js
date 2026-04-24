export default {
    name: 'pokedex',
    alias: [],
    desc: 'pokedex command',
    category: 'info',
    usage: 'pokedex',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command pokedex is active.' }, { quoted: msg });
    }
};
