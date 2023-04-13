export abstract class WebSocket {
  abstract on: <D = any>(event: string, callback: (data: D) => void) => void
}
