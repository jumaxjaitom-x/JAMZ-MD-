export default {
    name: 'joinrequests',
    alias: [],
    desc: 'joinrequests command',
    category: 'group',
    usage: 'joinrequests',
    execute: async (sock, msg, { args, prefix }) => {
        await sock.sendMessage(msg.key.remoteJid, { text: 'Command joinrequests is active.' }, { quoted: msg });
    }
};
