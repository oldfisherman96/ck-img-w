import puppeteer from '@cloudflare/puppeteer';
import { Buffer } from 'node:buffer';
import { deflate } from 'node:zlib';
import { FULL_MATCH } from '../views/full_match.js';

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomInt(n) {
	return Math.floor(Math.random() * n) + 1;
}

export default {
	async fetch(request, env) {
		let url = new URL(request.url);
		let path = url.pathname.slice(1).split('/');
		if (!path[0]) {
			return new Response('Not found 1', {
				status: 400,
			});
		}

		switch (path[0]) {
			case 'html':
				return this.html(request)
			case 'img':
				// return this.test(request, env)
				const browserDO = `BROWSER${getRandomInt(2)}`;
				console.log(browserDO);
				let id = env[browserDO].idFromName(`browser`);
				let obj = env[browserDO].get(id);
		
				// Send a request to the Durable Object, then await its response.
				let resp = await obj.fetch(request.url);
		
				return resp;
			default:
				return new Response('Not found', {
					status: 200,
				});
			}
		
	},

	async test(request, env){

		const url = new URL(request.url);
		const newUrl =  new URL(`${env.HOST}/html`);

		for (const [key, value] of url.searchParams) {
			newUrl.searchParams.append(key, value);
		}
		const data = await fetch(newUrl);

		return new Response(await data.text(), {
			status: 200,
		});
	},

	async html(request){
		let url = new URL(request.url);
		let path = url.pathname.slice(1).split('/');
		const query = url.searchParams;
		// const html = await ejs.renderFile('./views/full_match.ejs', {
		// 	req,
		// 	query,
		//   });
		// //   return html;
		console.log('check', query.get('away_logo'));

		
		let full_match = FULL_MATCH;
		full_match = full_match.replace('<%= query.away_logo %>', query.get('away_logo'));
		full_match = full_match.replace('<%= query.home_logo %>', query.get('home_logo'));
		full_match = full_match.replace('<%= query.away_name %>', query.get('away_name'));
		full_match = full_match.replace('<%= query.home_name %>', query.get('home_name'));
		full_match = full_match.replace('<%= query.league_name %>', query.get('league_name'));
		full_match = full_match.replace('<%= query.date %>', query.get('date'));
		full_match = full_match.replace('<%= query.time %>', query.get('time'));
		full_match = full_match.replace('<%= query.commentator %>', query.get('commentator'));
		full_match = full_match.replace('<%= query.is_live %>', query.get('is_live'));
		full_match = full_match.replace('<%= query.sport_type %>', query.get('sport_type'));
	

		return new Response(full_match, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			  },
		});
	}
};

const KEEP_BROWSER_ALIVE_IN_SECONDS = 60;

export class Browser {
	constructor(state, env) {
		this.state = state;
		this.env = env;
		this.keptAliveInSeconds = 0;
		this.storage = this.state.storage;
		this.initBrowser();
	}

	async initBrowser() {
		console.log('init browser');
		try {
			this.browser = await puppeteer.launch(this.env.MYBROWSER);
		} catch (e) {
			console.log(`Browser DO: Could not start browser instance. Error: ${e}`);
		}
	}

	async fetch(request) {
		// screen resolutions to test out
		const width = [1920, 1366, 1536, 360, 414];
		const height = [1080, 768, 864, 640, 896];

		const url = new URL(request.url);
		const newUrl =  new URL(`${this.env.HOST}/html`);

		for (const [key, value] of url.searchParams) {
			newUrl.searchParams.append(key, value);
		}

		//if there's a browser session open, re-use it
		let waitTimes = 30;
		while ((!this.browser || !this.browser.isConnected()) && waitTimes > 0) {
			await sleep(1000);
			waitTimes--;
		}

		if (!this.browser || !this.browser.isConnected()) {
			await this.initBrowser();
		}


		const page = await this.browser.newPage();

		await page.setViewport({ width: width[0], height: height[0] });
		await page.goto(newUrl);
		const fileName = 'screenshot_' + width[0] + 'x' + height[0];
		const sc = await page.screenshot({ encoding: 'binary', type: 'webp', quality: 80 });

		const screenshotBuffer = Buffer.from(sc);
		await page.close();

		return new Response(screenshotBuffer);
	}
}

export class Browser1 extends Browser {
	constructor(state, env) {
		super(state, env);
	}
}

export class Browser2 extends Browser {
	constructor(state, env) {
		super(state, env);
	}
}

export class Browser3 extends Browser {
	constructor(state, env) {
		super(state, env);
	}
}

export class Browser4 extends Browser {
	constructor(state, env) {
		super(state, env);
	}
}
