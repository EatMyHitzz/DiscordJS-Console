bot.on("ready", async () => {
        console.log(`\u001b[31m`, `------------[ Console ]------------`)
        console.log(`\u001b[31m`, `ONLINE`)
	    console.log(`\u001b[31m`, `------------[ Console ]------------`)
		bot.user.setActivity("Discord", {type: `WATCHING`});

});

//This will show a colored console that says your bot is online
