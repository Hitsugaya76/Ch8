const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['263780699988'] //ur owner number
global.ownernomer = "263780699988" //ur owner number2
global.ownername = "Mr Juice" //ur owner name
global.ytname = "YT: Mr Juice OFC" //ur yt chanel name
global.socialm = "Instagram: mr_juice7" //ur github or insta name
global.location = "New York, U.S.A" //ur location

//new
global.botname = "BayMax AI"
global.ownernumber = '263780699988'
global.ownername = 'ᴹᴿ᭄ ᴊᴜɪᴄᴇོ ×፝֟͜×'
global.ownerNumber = ["263780699988@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@mrjuiceofc"
global.websitex = "https://chat.whatsapp.com/GRuUvhCqhHK08msKMadAji"
global.wagc = "https://chat.whatsapp.com/GRuUvhCqhHK08msKMadAji"
global.themeemoji = '🐦'
global.wm = "BayMax AI."
global.botscript = 'https://github.com/mrjuice01' //script link
global.packname = "Belongs To"
global.author = "ᴹᴿ᭄ ᴊᴜɪᴄᴇོ ×፝֟͜×"
global.creator = "263780699988@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
