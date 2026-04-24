export default {
    name: 'qmaker',
    alias: [],
    desc: 'qmaker command',
    category: 'tools',
    usage: 'qmaker',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command qmaker is active.' }, { quoted: msg });
    }
};
