import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ lyric, bio, search }) => {
  if (!lyric || !bio) return null;
  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AboutError" ? (
        <Message
          msg={`Error, no existe la cancion ${search.song}`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric />
      )}

      {bio.artist ? (
        <SongArtist />
      ) : (
        <Message
          msg={`Error, no existeel interprete ${search.artist}`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
