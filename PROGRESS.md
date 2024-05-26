# API Coverage

Here are the endpoints currently supported by this wrapper.

## Emoji Key

| :white_check_mark: | :x:           | :radio_button: |
| ------------------ | ------------- | -------------- |
| Available          | Not Available | Incomplete     |

## Format

- `emoji` `Category`: `Subcategory`
  - `emoji` `HTTP Method` `endpoint` `wrapper method`

The wrapper method (after the endpoint) describes how to access this endpoint using the wrapper. `<client>` is the instantiated `AzuraCastClient`.

Example: `<client>.Stations.getAll()` would mean:

```js
import { AzuraCastClient } from "azuracast.js";

const client = new AzuraCastClient({
  ...
})

client.Stations.getAll() // <- this is that the "wrapper method" entails
```

## Coverage

> The following categories and endpoints were taken from the API documentation available from any AzuraCast instance followed by `/api`

- :white_check_mark: Now Playing
  - :white_check_mark: GET /nowplaying `<client>.NowPlaying.getAll()`
  - :white_check_mark: GET /nowplaying/{station_id} `<client>.NowPlaying.get(stationId)`
- :radio_button: Stations: General
  - :white_check_mark: GET /station/{station_id}/fallback: `<client>.Station.getFallback(stationId)`
  - :x: POST /station/{station_id}/fallback
  - :white_check_mark: DELETE /station/{station_id}/fallback `<client>.Station.deleteFallback(stationId)`
  - :white_check_mark: GET /stations `<client>.Station.getAll()`
  - :white_check_mark: GET station/{station_id} `<client>.Station.get(stationId)`
- :x: Stations: Broadcasting
  - :x: GET /station/{station_id}/stereo-tool-configuration
  - :x: POST /station/{station_id}/stereo-tool-configuration
  - :x: DELETE /station/{station_id}/stereo-tool-configuration
- :radio_button: Stations: Song Requests
  - :white_check_mark: GET /station/{station_id}/requests `<client>.SongRequests.getRequestable(stationId)`
  - :radio_button: POST /station/{station_id}/request/{request_id} `<client>.SongRequests.request(stationId, requestId)`
- :x: Stations: Service Control
  - :x: GET /station/{station_id}/status
  - :x: POST /station/{station_id}/restart
  - :x: POST /station/{station_id}/frontend/{action}
  - :x: POST /station/{station_id}/backend/{action}
- :x: Stations: Automation
  - > No endpoint info was found in API Documentation
- :x: Stations: History
  - :x: GET /station/{station_id}/history
- :x: Stations: HLS Streams
  - :x: GET /station/{station_id}/hls_streams
  - :x: POST /station/{station_id}/hls_streams
  - :x: GET /station/{station_id}/hls_stream/{id}
  - :x: PUT /station/{station_id}/hls_stream/{id}
  - :x: DELETE /station/{station_id}/hls_stream/{id}
- :x: Stations: Listeners
  - :x: GET /station/{station_id}/listeners
- :x: Stations: Schedules
  - :x: GET /station/{station_id}/schedule
- :x: Stations: Media
  - :x: GET /station/{station_id}/art/{media_id}
  - :x: POST /station/{station_id}/art/{media_id}
  - :x: DELETE /station/{station_id}/art/{media_id}
  - :x: GET /station/{station_id}/files
  - :x: POST /station/{station_id}/files
  - :x: GET /station/{station_id}/file/{id}
  - :x: PUT /station/{station_id}/file/{id}
  - :x: DELETE /station/{station_id}/file/{id}
- :x: Stations: Mount Points
  - :x: GET /station/{station_id}/mount/{id}/intro
  - :x: POST /station/{station_id}/mount/{id}/intro
  - :x: DELETE /station/{station_id}/mount/{id}/intro
  - :x: GET /station/{station_id}/mounts
  - :x: POST /station/{station_id}/mounts
  - :x: GET /station/{station_id}/mount/{id}
  - :x: PUT /station/{station_id}/mount/{id}
  - :x: DELETE /station/{station_id}/mount/{id}
- :x: Stations: Playlists
  - :x: GET /station/{station_id}/playlists
  - :x: POST /station/{station_id}/playlists
  - :x: GET /station/{station_id}/playlist/{id}
  - :x: PUT /station/{station_id}/playlist/{id}
  - :x: DELETE /station/{station_id}/playlist/{id}
- :x: Stations: Podcasts
  - :x: GET /station/{station_id}/podcast/{podcast_id}/episodes
  - :x: POST /station/{station_id}/podcast/{podcast_id}/episodes
  - :x: GET /station/{station_id}/podcast/{podcast_id}/episode/{id}
  - :x: PUT /station/{station_id}/podcast/{podcast_id}/episode/{id}
  - :x: DELETE /station/{station_id}/podcast/{podcast_id}/episode/{id}
  - :x: GET /station/{station_id}/podcast/{podcast_id}/art
  - :x: POST /station/{station_id}/podcast/{podcast_id}/art
  - :x: DELETE /station/{station_id}/podcast/{podcast_id}/art
  - :x: GET /station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/art
  - :x: POST /station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/art
  - :x: DELETE /station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/art
  - :x: GET /station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/media
  - :x: POST /station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/media
  - :x: DELETE /station/{station_id}/podcast/{podcast_id}/episode/{episode_id}/media
  - :x: GET /station/{station_id}/podcasts
  - :x: POST /station/{station_id}/podcasts
  - :x: GET /station/{station_id}/podcast/{id}
  - :x: PUT /station/{station_id}/podcast/{id}
  - :x: DELETE /station/{station_id}/podcast/{id}
- :x: Stations: Queue
  - :x: GET /station/{station_id}/queue
  - :x: GET /station/{station_id}/queue/{id}
  - :x: DELETE /station/{station_id}/queue/{id}
- :x: Stations: Remote Relays
  - :x: GET /station/{station_id}/remotes
  - :x: POST /station/{station_id}/remotes
  - :x: GET /station/{station_id}/remote/{id}
  - :x: PUT /station/{station_id}/remote/{id}
  - :x: DELETE /station/{station_id}/remote/{id}
- :x: Stations: SFTP Users
  - :x: GET /station/{station_id}/sftp-users
  - :x: POST /station/{station_id}/sftp-users
  - :x: GET /station/{station_id}/sftp-user/{id}
  - :x: PUT /station/{station_id}/sftp-user/{id}
  - :x: DELETE /station/{station_id}/sftp-user/{id}
- :x: Stations: Streamers/DJs
  - :x: GET /station/{station_id}/streamers
  - :x: POST /station/{station_id}/streamers
  - :x: GET /station/{station_id}/streamer/{id}
  - :x: PUT /station/{station_id}/streamer/{id}
  - :x: DELETE /station/{station_id}/streamer/{id}
- :x: Stations: Web Hooks
  - :x: GET /station/{station_id}/webhooks
  - :x: POST /station/{station_id}/webhooks
  - :x: GET /station/{station_id}/webhook/{id}
  - :x: PUT /station/{station_id}/webhook/{id}
  - :x: DELETE /station/{station_id}/webhook/{id}
- :radio_button: Administration: Custom Fields
  - :white_check_mark: GET /admin/custom_fields `<client>.CustomFields.getAll()`
  - :white_check_mark: POST /admin/custom_fields `<client>.CustomFields.create(customFieldData)`
  - :white_check_mark: GET /admin/custom_field/{id} `<client>.CustomFields.get(customFieldId)`
  - :radio_button: PUT /admin/custom_field/{id} `<client>.CustomFields.update(customFieldId, customFieldData)`
  - :radio_button: DELETE /admin/custom_field/{id} `<client>.CustomFields.delete(customFieldId)`
- :x: Administration: Users
  - :x: GET /admin/users
  - :x: POST /admin/users
  - :x: GET /admin/user/{id}
  - :x: PUT /admin/user/{id}
  - :x: DELETE /admin/user/{id}
- :x: Administration: Relays
  - :x: GET /internal/relays
- :x: Administration: Roles
  - :x: GET /admin/permissions
  - :x: GET /admin/roles
  - :x: POST /admin/roles
  - :x: GET /admin/role/{id}
  - :x: PUT /admin/role/{id}
  - :x: DELETE /admin/role/{id}
- :x: Administration: Settings
  - :x: GET /admin/settings
  - :x: PUT /admin/settings
- :x: Administration: Stations
  - :x: GET /admin/stations
  - :x: POST /admin/stations
  - :x: GET /admin/station/{id}
  - :x: PUT /admin/station/{id}
  - :x: DELETE /admin/station/{id}
- :x: Administration: Storage Locations
  - :x: GET /admin/storage_locations
  - :x: POST /admin/storage_locations
  - :x: GET /admin/storage_location/{id}
  - :x: PUT /admin/storage_location/{id}
  - :x: DELETE /admin/storage_location/{id}
- :x: Miscellaneous
  - :x: GET /status
  - :x: GET /time
- :x: Administration: CPU stats
  - :x: GET /admin/server/stats
