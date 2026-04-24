import util from 'util';

export default {
    name: 'inspect',
    alias: ['eval'],
    desc: 'Evaluate JavaScript code.',
    category: 'owner',
    usage: 'inspect [code]',
    execute: async (sock, msg, { text, isOwner, args, body, prefix, commandName, plugins }) => {
        if (!isOwner) return sock.sendMessage(msg.key.remoteJid, { text: 'Only the owner can use this command.' }, { quoted: msg });
        if (!text) return sock.sendMessage(msg.key.remoteJid, { text: 'Please provide code to evaluate.' }, { quoted: msg });

        try {
            let evaled = await eval(text);
            if (typeof evaled !== 'string') evaled = util.inspect(evaled);
            await sock.sendMessage(msg.key.remoteJid, { text: evaled }, { quoted: msg });
        } catch (e) {
            await sock.sendMessage(msg.key.remoteJid, { text: String(e) }, { quoted: msg });
        }
    }
};
