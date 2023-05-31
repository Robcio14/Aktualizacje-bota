const {  PermissionsBitField, ActionRowBuilder,  StringSelectMenuBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (interaction.isStringSelectMenu()) return;
        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('del')
                    .setPlaceholder('Wybierz, aby usunąć ticket!')
                    .addOptions({
                            label: '🗑️| Usuń ticket',
                            description: 'Usun kanał',
                            value: 'delete'

                        })
            );


        let categorie = "1107001871941517352"
        let roleStaff = interaction.guild.roles.cache.get('1108801538404651049')

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)

        if (interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({ content: '<:4247off:912015084035907665> Masz już otwarty ticket na serwerze', ephemeral: true })
            if (interaction.values[0] == "pytanie") {
                interaction.guild.channels.create(`Otworzył ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${categorie}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c) => {
                    const pytanie = new EmbedBuilder()
                        .setTitle('Otworzyłeś ticket.')
                        .setDescription('Prosze zadaj tutaj pytanie.')
                        .setFooter('PandaHub.pl - Ticket')
                    c.send({ embeds: [pytanie], content: `${roleStaff} | ${interaction.user}`, components: [row] })
                    interaction.reply({ content: `<:2003on:912015084405014558> Twój ticket został pomyślnie otworzony <#${c.id}>`, ephemeral: true })
                })

            } else if (interaction.values[0] == "błąd") {
                interaction.guild.channels.create(`Otworzył ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${categorie}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            allow: [PermissionsBitField.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [PermissionsBitField.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [PermissionsBitField.VIEW_CHANNEL]
                        }
                    ]
                }).then((c) => {
                    const błąd = new EmbedBuilder()
                        .setTitle('Otworzyłeś ticket')
                        .setDescription('Opisz tutaj błąd który znalazłeś na serwerze w razie możliwości wyślij ss lub filmik jeśli masz')
                        .setFooter('PandaHub.pl - Ticket')
                    c.send({ embeds: [błąd], content: `${roleStaff} | ${interaction.user}`, components: [row] })
                    interaction.reply({ content: `<:2003on:912015084405014558> Twój ticket został pomyślnie otworzony. <#${c.id}>`, ephemeral: true })
                })
            } else if (interaction.values[0] == "niesłuszny_ban") {
                interaction.guild.channels.create(`Otworzył  ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${categorie}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            allow: [PermissionsBitField.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [PermissionsBitField.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [PermissionsBitField.VIEW_CHANNEL]
                        }
                    ]
                }).then((c) => {
                    const niesłuszny_ban = new EmbedBuilder()
                        .setTitle('Otworzyłeś ticket')
                        .setDescription('Opisz tutaj dlaczego uwarzasz że to jest niesłuszny ban i wyślij ss z datą,godziną,plus cały ekran adminstracja nie bendzie wnikać w twoje potwierane żeczy.')
                        .setFooter('PandaHub.pl - Ticket')
                    c.send({ embeds: [niesłuszny_ban], content: `${roleStaff} | ${interaction.user}`, components: [row] })
                    interaction.reply({ content: `<:2003on:912015084405014558> Twój ticket został pomyślnie otworzony. <#${c.id}>`, ephemeral: true })
                })
            } else if (interaction.values[0] == "inne") {
                interaction.guild.channels.create(`Otworzył  ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${categorie}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            allow: [PermissionsBitField.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [PermissionsBitField.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [PermissionsBitField.VIEW_CHANNEL]
                        }
                    ]
                }).then((c) => {
                    const inne = new EmbedBuilder()
                        .setTitle('Otworzyłeś ticket')
                        .setDescription('Opisz tutaj to co chcesz zapytać lub coś INNEGO')
                        .setFooter('PandaHub.pl - Ticket')
                    c.send({ embeds: [inne], content: `${roleStaff} | ${interaction.user}`, components: [row] })
                    interaction.reply({ content: `<:2003on:912015084405014558> Twój ticket został pomyślnie otworzony. <#${c.id}>`, ephemeral: true })
                })
            }
        }
    }
}