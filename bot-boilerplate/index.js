const dotenv = require("dotenv")
const axios = require("axios")
const telegraf = require("telegraf")

dotenv.config()

const bot = new telegraf.Telegraf(process.env.BOT_TOKEN)

bot.start(async(ctx) => {
    await ctx.reply("Benvenuto nel bot di telegram del pascal, anno 2022!")
})

// bot.on("message", async(ctx, next) => {
//     await ctx.reply("Hai scritto un messaggio")
//     next()
// })

bot.command("cat", async(ctx) => {
    const args = ctx.message.text.split(" ")
    args.shift()

    const status = args[0]
    if (!status) {
        await ctx.reply("Dimmi un codice di stato HTTP!")
        return
    }

    try {
        await ctx.sendPhoto("https://http.cat/" + status)
    } catch (err) {
        await ctx.reply("Errore... Hai inserito un codice valido?")
    }
})

bot.command("emoji", async(ctx) => {
    await ctx.reply("👹")
})

bot.command("parrot", async(ctx) => {
    const args = ctx.message.text.split(" ")
    args.shift()

    const payload = args.join(" ")
    await ctx.reply(payload)
})

bot.launch()
console.log("bot launched!")