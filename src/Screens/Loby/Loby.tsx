import { useState, useCallback } from "react";

function Loby() {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const handelsubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      console.log({ email, room });
    },
    [email, room]
  );
  return (
    <div className="container">
      <div className="mt-4">
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
      </div>
    </div>
  );
}

export default Loby;
