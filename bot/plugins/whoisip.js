export default {
    name: 'whoisip',
    alias: [],
    desc: 'whoisip command',
    category: 'search',
    usage: 'whoisip',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command whoisip is active.' }, { quoted: msg });
    }
};
