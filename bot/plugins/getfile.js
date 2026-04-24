import fs from 'fs';
import path from 'path';

export default {
    name: 'getfile',
    alias: ['fetchfile'],
    desc: 'Fetch a file from the bot server.',
    category: 'owner',
    usage: 'getfile [path]',
    execute: async (sock, msg, { text, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a file path.' }, { quoted: msg });

        const filePath = path.resolve(text);
        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) return sock.sendMessage(msg.key.remoteJid, { text: 'Path is a directory.' }, { quoted: msg });
            
            await sock.sendMessage(msg.key.remoteJid, { 
                document: { url: filePath }, 
                fileName: path.basename(filePath),
                mimetype: 'application/octet-stream'
            }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: 'File not found.' }, { quoted: msg });
        }
    }
};
