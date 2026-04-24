import db from '../../lib/database.js';

export default {
    name: 'settings',
    alias: ['config'],
    desc: 'View current bot settings.',
    category: 'owner',
    usage: 'settings',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const data = db.get();
        let message = `*JAMZ-MD v6.0.0 Settings*\n\n`;
        for (const [key, value] of Object.entries(data.settings)) {
            message += `▢ *${key.toUpperCase()}:* ${value}\n`;
        }
        
        await sock.sendMessage(msg.key.remoteJid, { text: message || 'No settings found.' }, { quoted: msg });
    }
};
