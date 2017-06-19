import { songsDirectory as songs } from './directory'

const ADD_SONG = 'ADD_SONG';
const REMOVE_SONG = 'REMOVE_SONG';

const getSongById = (songId, songList) => songList.find((song) => song.id === songId)

export { songs, getSongById, ADD_SONG, REMOVE_SONG }
