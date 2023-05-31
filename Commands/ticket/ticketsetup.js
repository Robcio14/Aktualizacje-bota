const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits, ActionRowBuilder } = require('discord.js');
const { EmbedBuilder,  StringSelectMenuBuilder,  } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup-ticket')
        .setDescription('Tworzy tickety na serwerze')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(message,interaction ) {
        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Kliknij aby wybrać opcje')
                    .addOptions([
                        {
                        
                            label:'❓|Pytanie',
                            description:'Wybierz te opcje żeby zadać pytanie',
                            value:'pytanie'
                        },
                        {
                            label: '🛠️|Błąd',
                            description: 'Wybierz te opcje żeby zgłosić błąd serwera dc/mc',
                            value: 'błąd'
                        },
                        {
                            label:'⛔|Niesłuszny ban',
                            description:'Wybierz te opcje aby zgłosić niesłuszny ban',
                            value:'niesłuszny_ban'
                        },
                        {
                            label:'⛔|Inne',
                            description:'Wybierz te opcje aby zapytać się o coś innego nie związanego z serwerem ',
                            value:'inne'
                        },
                            
                    ]),

            );
        if (message && message.channel) {
            message.channel.send({
                embeds: [{
                    title: 'Stwórz ticket',
                    description: `Aby stworzyć ticket, kliknij przycisk poniżej a następnie wybierz kategorię która Cię interesuje. **Tworzenie pustych ticketów może skutkować przerwą a nawet banem!**`,
                    color: "BLURPLE",
                    footer: { text: 'PandaHub.pl - Twoje imperium zagłady', iconURL: 'e2eb3f20fe4ae35ee4374addb8e50895.png' }
                }],
                components: [row]
            });
        }

    }
};