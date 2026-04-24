import db from '../../lib/database.js';

export default {
    name: 'delcmd',
    alias: ['disablecmd'],
    desc: 'Disable a specific command.',
    category: 'owner',
    usage: 'delcmd [command_name]',
    execute: async (sock, msg, { args, isOwner }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!args[0]) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide a command name.' }, { quoted: msg });

        const data = db.get();
        if (!data.disabled_commands) data.disabled_commands = [];
        if (!data.disabled_commands.includes(args[0])) {
            data.disabled_commands.push(args[0]);
            db.save(data);
            await sock.sendMessage(msg.key.remoteJid, { text: `Command *${args[0]}* has been disabled.` }, { quoted: msg });
        } else {
            await sock.sendMessage(msg.key.remoteJid, { text: `Command *${args[0]}* is already disabled.` }, { quoted: msg });
        }
    }
};
