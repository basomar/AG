const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

























console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const x5bz4 = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر https://discord.gg/HMhYHRS ***'
]
 client.on('message', message => {
 if (message.content.startsWith('-مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://b.top4top.net/p_595rigg31.png")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});

















var servers = {};

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {fliter: "audionly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

client.on("ready", () => {
    console.log("AG");
});

var PREFIX = "-";

client.on("message", message => {

var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "play":
            if (!args[1]) {
                message.channel.sendMessage("حط رابط المقطع او الاغنيه");
                return;
            }

            if (!message.member.voiceChannel) {
                    message.channel.sendMessage("لازم تكون في روم صوت");
                return;
            }

            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });
            break;
            case "skip":
            var server = servers[message.guild.id];

            if(server.dispatcher) server.dispatcher.end();
                break;

                case "stop":
                    var server = server = servers[message.guild.id];

                    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
                    break;
    }
});

client.login('MzQ0MzA4MTA3NDY1MzI2NTkz.DGtzhA.1k9pu_dztko1dHRyLxAj83keIlA');














client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كسمك')){
        message.delete()
    return message.reply(`** لا تسب😠 ! **`)
    }
});













client.on('message', message => {
   if (message.content === "-id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});
























client.on("message", message => {
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('جحلوطي مصمم البوت')
      .addField('-invite', `لاضافة البوت الى سيرفرك`)
	  .addField('-roles', `لمعرفة الرتب الي في السيرفر`)
	  .addField('-bc', `لخاصية البرودكستات`)
	  .addField('-kick', `يطرد عضو من السيرفر لازم يكون عندك خاصية كيك`)
	  .addField('-ban', `يبند عضو من السيرفر لازم يكون عندك خاصية باند`)
	  .addField('-avatar', `يجبلك الافتار حقك يعني صورة حسابك`)
	  .addField('-server', `يجبلك معلومات السيرفر`)
	  .addField('-id', `يجبلك الملف الشخصي حقك`)
	  .addField('-clear', `البوت يمسح  100 رسايل`)
	  .addField('-say', `البوت يكرر الكلام الي انت تقوله`)
	  .addField('-ping', `يقلك كم بنق البوت`)
	  .addField('-servers', `يقلك كم سيرفر البوت في اونلاين`)
    .addField('-support', `سيرفر الدعم`)
    .addField('-play', `لسمع اغنيه`)
    .addField('-غرد', `للتغريد`)
    .addField('-id', `لمعلومات حسابك`)
  message.author.send({embed});

 }
});










client.on("message", message => {
 if (message.content === "-invite") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('جحلوطي مصمم البوت')
      .addField('شكرا لك لاستخدامك ل لعرب جيمس', `https://discordapp.com/oauth2/authorize/?permissions=805314622&scope=bot&client_id=344308107465326593`)
  message.author.send({embed});

 }
});





















client.on("message", message => {
 if (message.content === "-support") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('جحلوطي مصمم البوت')  
      .addField('سيرفر الدعم والكلان شكرا لكم', `  https://discord.gg/q44aTy7  `)
  message.author.send({embed});

 }
});
















client.on('message', message => {
     if (message.content === "-servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` AG||BOT .`, 'https://b.top4top.net/p_595rigg31.png')

  message.channel.sendEmbed(embed);
    }
});





client.on('message', message => {
    if (message.content === "-roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});









client.on("message", (message) => {
    if (message.content.startsWith("-kick")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You Dont Have **KICK_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Kicked From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
        }).catch(() => {
            message.channel.send(`:x: I cant kick this member`);
        });
    }
    if (message.content.startsWith("-ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You Dont Have **BAN_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        guildMember.ban(7).then((member) => {
            message.channel.send(member.displayName + " Banned From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
        }).catch(() => {
            message.channel.send(`:x: I cant ban this member`);
        });
    }
});









const x5bz = new Discord.Client();
const x5bztoken = "token"
x5bz.on('ready', () => {
  x5bz.user.setGame(`-help لرؤية الاوامر`,'https://www.twitch.tv/v5bz');
  console.log('Im Ready!');
});
/* YT: iiPixlSA */
x5bz.on('message', message => {
if (message.content.split(' ')[0] == '-bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});
x5bz.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(":white_check_mark: | تم ارسال للكل رساله فارغه")
                                .setColor("#FF0000")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال للكل الرساله !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
x5bz.login("MzQ0MzA4MTA3NDY1MzI2NTkz.DGtzhA.1k9pu_dztko1dHRyLxAj83keIlA");

















client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);


if (command == "غرد") {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription(args.join(" "))
    .setFooter('© . :AG || Copyright')
    msg.channel.sendEmbed(embed);
    msg.delete();
  }
});



















































































client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | *** ⚠ لا يوجد لك مانج ماسج ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© RoyalDev ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
























client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' *** سلام *** ..',
}}).catch(console.error);
  }
);
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' *** هلا والله منور السيرفر *** !',
}}).catch(console.error);
  }
);















const cuttweet = [
     'كت تويت ‏- تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت ‏- أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت ‏- الحرية لـ ... ؟',
     'كت تويت ‏- قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏- كلمة للصُداع؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',
     'كت تويت ‏- موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏- أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت| بعد ١٠ سنين ايش بتكون ؟',

     'كت تويت ‏- مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت| عمرك شلت مصيبة عن شخص برغبتك ؟',
'كت تويت ‏- أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت|ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت|وش يفسد الصداقة؟',
     '‏كت تويت|شخص لاترفض له طلبا ؟',
     '‏كت تويت|كم مره خسرت شخص تحبه؟.',
     '‏كت تويت|كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت|كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت|هل تُخفي نجاحك أو كت كت تويت | هل تخفي نجاحك أو أشيائك الجميلة خوفاً من العين والحسد؟',
     '‏كت تويت|جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت|أقوى كذبة مشت عليك ؟',
     '‏كت تويت|تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت|هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت|أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت|‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت|وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت|مطلبك الوحيد الحين ؟',
     '‏كت تويت|- هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content === `-كت تويت`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});




































var prefix = "-";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});











client.on('message', message => {
   if (message.content === "-id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});





client.on('ready', () => {
  client.user.setGame(`-help`,'https://www.twitch.tv/v5bz');
  console.log('BOT ONLINE');
});
client.on("message", message => {
    var prefix = "-";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});





    client.on('message', message => {

     if (message.content === "-server") {

 var servername = message.guild.name;

var serverowner = message.guild.owner;

var memberCount = message.guild.memberCount;

var id = message.guild.id;

var region = message.guild.region;

var channels = message.guild.channels.size;

var roles = message.guild.roles;

var createdAt = message.guild.createdAt;

var verificationLevel = message.guild.verificationLevel;

var defaultChannel = message.guild.defaultChannel;

    const embed = new Discord.RichEmbed()

    .setAuthor(`${message.guild.name}`)         

          .setColor('RANDOM')

                          .addField(' رقم الشــخصي الخاص بـ السيرفر ',`**(${message.guild.id})**`)

                          .addField(' الشات الأساسي في السيرفر',`**${message.guild.defaultChannel}**`, true)

                          .addField(' عدد اعضاء السيرفر',`**[${memberCount}]**`)

                          .addField(' الدوله الي موجود عليها السيرفر', `**[${message.guild.region}]**`)

                          .addField(' عدد الرومات الموجودة في السيرفر',`**[${message.guild.channels.size}]**`, true)

                          .addField(' صاحب السيرفر',`**${message.guild.owner}**`)

                          .addField(' تاريخ افتتاح السيرفر',`**${message.guild.createdAt}**`)

      message.channel.send({embed})

} 

});









































client.login("MzQ0MzA4MTA3NDY1MzI2NTkz.DGtzhA.1k9pu_dztko1dHRyLxAj83keIlA");