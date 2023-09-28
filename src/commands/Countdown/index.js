import { SlashCommandBuilder} from 'discord.js';

export const command = new SlashCommandBuilder().setName('倒數').setDescription('去讀書')





export const action = async(ctx) => {
  
    const targetDate = new Date('2024-01-20T00:00:00');  // Set your target date and time here
  
    const now = new Date();
    const timeDifference = targetDate - now;
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  
    ctx.reply(`距離學測還有 ${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`)

}