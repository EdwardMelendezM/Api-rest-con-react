import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ lyric, bio, search }) => {
  return (
    <div>
      <SongLyric />
      <SongArtist />
    </div>
  );
};

export default SongDetails;
