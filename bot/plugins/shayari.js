export default {
    name: 'shayari',
    alias: [],
    desc: 'shayari command',
    category: 'quotes',
    usage: 'shayari',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command shayari is active.' }, { quoted: msg });
    }
};
