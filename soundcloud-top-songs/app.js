const axios = require('axios');
const express = require('express');
const app = express();

const kind = "trending";
const genre = "soundcloud:genres:all-music"
const clientId = "iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX";
const limit = 30;

const port = process.env.PORT || 2378;

const soundCloudURL = `https://api-mobi.soundcloud.com/charts?kind=${kind}&genre=${genre}&client_id=${clientId}&limit=${limit}`;
const playback_url_partial = 'https://w.soundcloud.com/player/?url=';

let trackInfoArray = [];

app.set('view engine', 'ejs');

const server = app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});

app.get('/', (req, res) => {
    trackInfoArray = [];
    axios.get(soundCloudURL)
  .then(function (response) {
    // handle success
    const tracks = response.data.collection;

    tracks.forEach(track => {
        //capture useful information regarding tracks
        const track_title = track.track.title;
        const track_artwork = track.track.artwork_url;
        const track_id = track.track.id;
        const track_permalink_url = track.track.permalink_url;
        const track_playback_count = track.track.playback_count;
        const track_release_date = track.track.release_date;
        const track_playback_url = `${playback_url_partial}${track.track.uri}`;
        const artist_username = track.track.user.username;
        const artist_url = track.track.user.permalink_url;
        const artist_avatar = track.track.user.avatar_url;

        const trackInfo = {
            track_title,
            track_artwork,
            track_id,
            track_permalink_url,
            track_playback_count,
            track_playback_url,
            track_release_date,
            artist_username,
            artist_url,
            artist_avatar
        }
        trackInfoArray.push(trackInfo);
    });

  })
  .then(() => {
      res.render("index", 
        { data: { 'number': limit, 
            trackInfoArray
            }
        } );
  })
  .catch(function (error) {
    // handle error
    res.json({
        error
    });
    console.log(error);
  });
});