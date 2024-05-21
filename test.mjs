import test from 'ava';
import { AzuraCastClient } from "./dist/index.js";
import nock from "nock";

/**
 * @type { AzuraCastClient }
 */
let client;

nock("https://demo.azuracast.com")
	.get("/api/stations")
	.reply(200, {
		yay: true
	})

test('Initialize Client', t => {
	try {
		client = new AzuraCastClient({
			apiUrl: "https://demo.azuracast.com",
			apiKey: "TOTALLY_REAL:API_KEY",
		});

		t.pass('Client initialized')
	} catch (error) {
		t.fail(error);
	}
});

test('Get all stations', async t => {
	const stations = await client.Stations.getAll();
	t.pass(t.assert(stations))
})