import db from '../../lib/database.js';

export default {
    name: 'sudo',
    alias: ['addsudo'],
    desc: 'Add a sudo user.',
    category: 'owner',
    usage: 'sudo [number]',
    execute: async (sock, msg, { text, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a number.' }, { quoted: msg });

        const number = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        const data = db.get();
        if (!data.sudo) data.sudo = [];
        if (!data.sudo.includes(number)) {
            data.sudo.push(number);
            db.save(data);
            await sock.sendMessage(msg.key.remoteJid, { text: `User *${text}* added to sudo list.` }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: `User *${text}* is already a sudo user.` }, { quoted: msg });
        }
    }
};
