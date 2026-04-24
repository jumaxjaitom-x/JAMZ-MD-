export default {
    name: 'whois',
    alias: [],
    desc: 'whois command',
    category: 'info',
    usage: 'whois',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command whois is active.' }, { quoted: msg });
    }
};
