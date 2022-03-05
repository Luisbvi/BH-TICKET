const { MessageEmbed, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");
const { COUNTER, OPENTICKET, EVERYONEID, PARENTID, TRANSCRIPTID } = require("../../config.json");

module.exports = {
    name: "ticket",
    description: "Set Up your ticketing message.",
    permission: "ADMINISTRATOR",

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const { guild } = interaction;

        const Embed = new MessageEmbed()
            .setAuthor(
                guild.name + " | Ticketing System",
                guild.iconURL({ dynamic: true })
            )
            .setDescription(`**Residential Proxies Shop**\n
            Bottinghub provides the most advanced, premium, private, residential proxies, hosted in Germany, UK and USA. We offer 1 free swap per month.\n\n
        1 residential proxy - **4.99$** PER MONTH\n
        3 residential proxies - **12.99$** PER MONTH\n
        6 residential proxies - **21.99$** PER MONTH\n
        12 residential proxies - **41.99$** PER MONTH\n
        24 residential proxies - **64.99$** PER MONTH\n
        32 residential proxies - **76.99$** PER MONTH\n
        48 residential proxies - **109.99$** PER MONTH\n

        Custom order available - Open ticket for quote
        
        **Methods of payment**:\n
        **BTC**: Coinbase (instant transfer, no fees) / Hard address (fee must be covered)\n
        **07GP**: 0.35$/M (F2P Worlds)  
        `)
            .setColor('RED')
            .setFooter(`Powered By BottingHub.com`)

        const Buttons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("germany")
                    .setLabel("Germany")
                    .setStyle("PRIMARY")
                    .setEmoji("🇩🇪"),
                new MessageButton()
                    .setCustomId("uk")
                    .setLabel("United Kingdom")
                    .setStyle("DANGER")
                    .setEmoji("🇬🇧"),
                new MessageButton()
                    .setCustomId("usa")
                    .setLabel("Usa")
                    .setStyle("SUCCESS")
                    .setEmoji("🇺🇸"),
                new MessageButton()
                    .setCustomId('quote')
                    .setLabel('Quote')
                    .setStyle('SECONDARY')
                    .setEmoji('🎫')

            );

        await guild.channels.cache
            .get(OPENTICKET)
            .send({ embeds: [Embed], components: [Buttons] })

        interaction.reply({ content: "Done.", ephemeral: true })

    }
}