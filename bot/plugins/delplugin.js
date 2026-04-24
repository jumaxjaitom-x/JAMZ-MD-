import fs from 'fs';
import path from 'path';

export default {
    name: 'delplugin',
    alias: ['removeplugin'],
    desc: 'Delete a plugin file from the bot.',
    category: 'owner',
    usage: 'delplugin [filename.js]',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!args[0]) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a filename.' }, { quoted: msg });

        const filePath = path.join(process.cwd(), 'bot', 'plugins', args[0]);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            await sock.sendMessage(msg.key.remoteJid, { text: `Plugin *${args[0]}* has been deleted.` }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: `Plugin *${args[0]}* not found.` }, { quoted: msg });
        }
    }
};
