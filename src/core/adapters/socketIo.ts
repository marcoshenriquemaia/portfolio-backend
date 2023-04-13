import { WebSocket } from '../../abstracts'

export class SocketIO implements WebSocket {
  constructor() {
    // ...
  }

  on<D = any>(event: string, callback: (data: D) => void) {}
}
