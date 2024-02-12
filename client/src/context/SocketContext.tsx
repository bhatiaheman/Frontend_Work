import React, { createContext, useContext, useState, useEffect } from "react";
import socketio from "socket.io-client";
import { LocalStorage } from "../utils";

const getSocket = () => {
    const token = LocalStorage.get("token");

    return socketio(import.meta.env.VITE_SOCKET_URI, {
        withCredentials: true,
        auth: { token },
    });
}

const SocketContext = createContext<{socket: ReturnType<typeof socketio> | null}> (
    {socket: null}
)

const useSocket = () => useContext(SocketContext);

const SocketProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [socket, setSocket] = useState<ReturnType<typeof socketio> | null>(
        null
    );

    useEffect(() => {
        setSocket(getSocket());
    }, []);

    return (
        // Provide the socket instance through context to its children
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
}

export {SocketProvider, useSocket};