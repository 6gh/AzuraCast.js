import test from 'ava';
import { AzuraCastClient } from "./dist/index.js"

/**
 * @type { AzuraCastClient }
 */
let client;

test('Initialize Client', t => {
	try {
		client = new AzuraCastClient({
			apiKey: process.env.API_KEY,
			apiUrl: process.env.API_URL,
		});

		t.pass('Client initialized')
	} catch (error) {
		t.fail(error);
	}
});

test('Get all stations', t => {
	client.Stations.getAll()
		.then(stations => {
			t.pass(`${stations.length} stations found.`)
		})
		.catch(error => {
			console.error(error);
			t.fail("Failed to get stations")
		})
})