import { SlashCommandBuilder} from 'discord.js';

export const command = new SlashCommandBuilder().setName('XD').setDescription('插Ｄ')



export const action = async(ctx) => {
    ctx.reply('xd')

}