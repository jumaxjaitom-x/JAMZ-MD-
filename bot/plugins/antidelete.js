import db from '../../lib/database.js';

export default {
    name: 'antidelete',
    alias: ['antidel'],
    desc: 'Enable/Disable anti-delete feature.',
    category: 'owner',
    usage: 'antidelete on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('antidelete', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Anti-delete enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('antidelete', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Anti-delete disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: antidelete on/off' }, { quoted: msg });
        }
    }
};
