import db from '../../lib/database.js';

export default {
    name: 'cmdreact',
    alias: ['command-reaction'],
    desc: 'Enable/Disable reaction to every command executed.',
    category: 'owner',
    usage: 'cmdreact on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('cmdreact', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Command reaction enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('cmdreact', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Command reaction disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: cmdreact on/off' }, { quoted: msg });
        }
    }
};
