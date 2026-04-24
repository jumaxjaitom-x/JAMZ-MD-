export default {
    name: 'fact',
    alias: [],
    desc: 'fact command',
    category: 'fun',
    usage: 'fact',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command fact is active.' }, { quoted: msg });
    }
};
