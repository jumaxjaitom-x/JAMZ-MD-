import fs from 'fs';
import path from 'path';

export default {
    name: 'addplugin',
    alias: ['createplugin'],
    desc: 'Create a new plugin file.',
    category: 'owner',
    usage: 'addplugin [filename.js] | [code]',
    execute: async (sock, msg, { text, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text.includes('|')) return sock.sendMessage(msg.key.remoteJid, { text: 'Usage: addplugin filename.js | code' }, { quoted: msg });

        const [filename, code] = text.split('|').map(t => t.trim());
        const filePath = path.join(process.cwd(), 'bot', 'plugins', filename);

        try {
            fs.writeFileSync(filePath, code);
            await sock.sendMessage(msg.key.remoteJid, { text: `Plugin *${filename}* created successfully.` }, { quoted: msg });
        } catch (error) {
            await sock.sendMessage(msg.key.remoteJid, { text: `Failed to create plugin: ${error.message}` }, { quoted: msg });
        }
    }
};
