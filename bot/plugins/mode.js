import db from '../../lib/database.js';

export default {
    name: 'mode',
    alias: ['botmode'],
    desc: 'Set bot to public or private mode.',
    category: 'owner',
    usage: 'mode public/private',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const action = args[0]?.toLowerCase();
        if (action === 'public') {
            db.setSetting('mode', 'public');
            await sock.sendMessage(msg.key.remoteJid, { text: 'Bot set to PUBLIC mode.' }, { quoted: msg });
        } else if (action === 'private') {
            db.setSetting('mode', 'private');
            await sock.sendMessage(msg.key.remoteJid, { text: 'Bot set to PRIVATE mode.' }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: mode public/private' }, { quoted: msg });
        }
    }
};
