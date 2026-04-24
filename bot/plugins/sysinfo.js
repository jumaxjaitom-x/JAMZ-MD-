import os from 'os';

export default {
    name: 'sysinfo',
    alias: ['system'],
    desc: 'Show system information.',
    category: 'owner',
    usage: 'sysinfo',
    execute: async (sock, msg, { isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        
        const info = `*System Information*\n\n` +
            `*OS:* ${os.type()} ${os.release()}\n` +
            `*Platform:* ${os.platform()}\n` +
            `*Architecture:* ${os.arch()}\n` +
            `*RAM:* ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB\n` +
            `*Free RAM:* ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB\n` +
            `*Uptime:* ${(os.uptime() / 3600).toFixed(2)} hours\n` +
            `*CPU:* ${os.cpus()[0].model}`;
            
        await sock.sendMessage(msg.key.remoteJid, { text: info }, { quoted: msg });
    }
};
