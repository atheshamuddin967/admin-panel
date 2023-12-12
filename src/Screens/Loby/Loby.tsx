// import { useState, useCallback } from "react";

import ReactPlayer from "react-player";
import ReactHlsPlayer from "react-hls-player";
import { useRef } from "react";

function Loby() {
  const playerRef = useRef(null);

  return (
    <div className="container">
      {/* <div className="mt-4">
        <form action="" onSubmit={handelsubmit}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="room">Room</label>
          <input
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />

          <button>join</button>
        </form>
      </div> */}
      <video width="500px" height="500px" controls>
        <source
          src="http://192.168.100.44:8000/live/haseeb/index.m3u8"
          type="application/x-mpegURL"
        />
        Your browser does not support the video tag.
      </video>
      <ReactPlayer
        url="http://192.168.100.44:8000/live/haseeb/index.m3u8"
        width={"100px"}
        type={"application/x-mpegURL"}
        height={"200px"}
        controls={false}
        playing={true}
        loop={true}
        playerRef={playerRef}
      />
      <ReactHlsPlayer
        src="http://192.168.100.44:8000/live/haseeb/index.m3u8"
        controls={true}
        muted={true}
        autoPlay={true}
        width="100%"
        height="auto"
        playerRef={playerRef}
      />
      ,
    </div>
  );
}

export default Loby;
