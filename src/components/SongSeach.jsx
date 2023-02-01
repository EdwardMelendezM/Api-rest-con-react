import React, { useState } from "react";

const SongSeach = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <h1>Song Seach</h1>
    </div>
  );
};

export default SongSeach;
