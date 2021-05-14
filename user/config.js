/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *      Quick Start
 * ---------------------
 *
 * 	> For detailed instructions, visit the GitHub repository and read the documentation:
 * 	https://github.com/eartharoid/DiscordTickets/wiki
 *
 * 	> IMPORTANT: Also edit the TOKEN in 'user/.env'
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Information: https://github.com/eartharoid/DiscordTickets/#readme
 * 	> Discord Support Server: https://go.eartharoid.me/discord
 * 	> Wiki: https://github.com/eartharoid/DiscordTickets/wiki
 *
 * ###############################################################################################
 */

module.exports = {
	prefix: '!',
	name: 'Tsunade',
	presences: [
		{
			activity: '%snew',
			type: 'PLAYING'
		},
		{
			activity: 'With My Boobs',
			type: 'PLAYING'
		},
		{
			activity: 'With My Boobs',
			type: 'PLAYING'
		}
	],
	append_presence: '',
	colour: '#009999',
	err_colour: 'RED',
	cooldown: 3,
	guild: '842544989522362380', // ID of your guild (REQUIRED)
	staff_role: '842604524438945842', // ID of your Support Team role (REQUIRED)

	tickets: {
		category: '842603936577880086', // ID of your tickets category (REQUIRED)
		send_img: false,
		ping: 'here',
		text: `Hello there, {{ tag }}!
		A member of staff will assist you shortly.
		In the mean time, please describe your issue in as much detail as possible! :)`,
		pin: false,
		max: 3,
		default_topic: {
			command: 'No topic given',
			panel: 'Created via panel'
		}
	},

	commands: {
		close: {
			confirmation: true,
			send_transcripts: true
		},
		delete: {
			confirmation: true
		},
		new: {
			enabled: true
		},
		closeall: {
			enabled: true,
		},
	},

	transcripts: {
		text: {
			enabled: true,
			keep_for: 90,
		},
		web: {
			enabled: false,
			server: 'https://tickets.example.com',
		},
		channel: '' // ID of your archives channel
	},

	panel: {
		title: 'Support Tickets',
		description: 'Need help? No problem! React to this panel to create a new support ticket so our Support Team can assist you.',
		reaction: '🧾'
	},

	storage: {
		type: 'sqlite'
	},

	logs: {
		files: {
			enabled: true,
			keep_for: 7
		},
		discord: {
			enabled: false,
			channel: '' // ID of your log channel
		}
	},

	debug: false,
	updater: true
};
