import db from '../../lib/database.js';

export default {
    name: 'autoreact',
    alias: ['autostat'],
    desc: 'Enable/Disable auto-reaction to messages.',
    category: 'owner',
    usage: 'autoreact on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('autoreact', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Auto-reaction enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('autoreact', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Auto-reaction disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: autoreact on/off' }, { quoted: msg });
        }
    }
};
