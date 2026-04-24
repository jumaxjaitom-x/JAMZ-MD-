export default {
    name: 'goodnight',
    alias: [],
    desc: 'goodnight command',
    category: 'quotes',
    usage: 'goodnight',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command goodnight is active.' }, { quoted: msg });
    }
};
