import db from '../../lib/database.js';

export default {
    name: 'autotyping',
    alias: ['always-typing'],
    desc: 'Enable/Disable auto-typing status.',
    category: 'owner',
    usage: 'autotyping on/off',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'on') {
            db.setSetting('autotyping', true);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Auto-typing enabled.' }, { quoted: msg });
        } else if (action === 'off') {
            db.setSetting('autotyping', false);
            await sock.sendMessage(msg.key.remoteJid, { text: 'Auto-typing disabled.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: autotyping on/off' }, { quoted: msg });
        }
    }
};
