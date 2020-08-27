export const setupSocket = () => {
    return dispatch => {
        const socket = new WebSocket('http://localhost:8080');
        socket.onopen = () => {
            dispatchEvent({
                type: 'SETUP_SOCKET',
                payload: socket
            });
        }
    }
}