import db from '../../lib/database.js';

export default {
    name: 'setcmd',
    alias: ['addcmd'],
    desc: 'Assign a custom alias to a command.',
    category: 'owner',
    usage: 'setcmd [alias] | [command_name]',
    execute: async (sock, msg, { text, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text.includes('|')) return sock.sendMessage(msg.key.remoteJid, { text: 'Usage: setcmd alias | command' }, { quoted: msg });

        const [alias, command] = text.split('|').map(t => t.trim());
        const data = db.get();
        if (!data.custom_commands) data.custom_commands = {};
        data.custom_commands[alias.toLowerCase()] = command.toLowerCase();
        db.save(data);

        await sock.sendMessage(msg.key.remoteJid, { text: `Custom command alias set: *${alias}* -> ${command}` }, { quoted: msg });
    }
};
