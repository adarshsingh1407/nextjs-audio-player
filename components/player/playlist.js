const ADD_SONG = 'ADD_SONG';
const REMOVE_SONG = 'REMOVE_SONG';

const playlist = [
  {
    "id": 1,
    "name": "Remember Us - Pineapple Thiefs",
    "src": "http://mp3.progarchives.com/StreamMP3.asp?id=169",
    "img": "https://i.ytimg.com/vi/PWzmVEn0M3U/hqdefault.jpg"
  },
  {
    "id": 2,
    "name": "Trains - Porcupine Tree",
    "src": "http://a.tumblr.com/tumblr_m5e9tgdyhQ1qztmnoo1.mp3",
    "img": "https://i.ytimg.com/vi/0UHwkfhwjsk/hqdefault.jpg"
  }
];

const getSongById = (songId, songList) => songList.find((song) => song.id === songId)

export { playlist, getSongById, ADD_SONG, REMOVE_SONG }
