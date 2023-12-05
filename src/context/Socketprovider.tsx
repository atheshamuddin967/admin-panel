import { createContext, useMemo, useContext } from "react";
import { Socket, io } from "socket.io-client";

interface SocketContextProps {
  value: Socket | null;
}
const SocketContext = createContext<SocketContextProps>({ value: null });
export const useSocket = () => {
  const Socket = useContext(SocketContext);
  return Socket;
};
export const SocketProvider = (props: any) => {
  const socket = useMemo(() => io("localhost/5174"), []);
  return (
    <SocketContext.Provider value={{ value: socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};
