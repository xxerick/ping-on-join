const {
    Client,
    GatewayIntentBits
} = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async member => {
    const channels = ["channel1", "channel2"]
    for (const channel of channels) {
        const channell = client.channels.cache.get(channel)
        channell.send(`Welcome, <@${member.id}> !`).then(msg => setTimeout(() => msg.delete(), 1000));

    }
});

client.login("token");
