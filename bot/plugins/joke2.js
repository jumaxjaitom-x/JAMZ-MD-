export default {
    name: 'joke2',
    alias: [],
    desc: 'joke2 command',
    category: 'fun',
    usage: 'joke2',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command joke2 is active.' }, { quoted: msg });
    }
};
