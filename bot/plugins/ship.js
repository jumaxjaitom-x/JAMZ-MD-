export default {
    name: 'ship',
    alias: [],
    desc: 'ship command',
    category: 'group',
    usage: 'ship',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command ship is active.' }, { quoted: msg });
    }
};
