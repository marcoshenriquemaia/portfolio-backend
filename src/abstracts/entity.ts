export abstract class Entity {
  abstract name: string
  abstract id: string
  abstract sprite: string
  abstract position: { x: number; y: number }
  abstract size: { width: number; height: number }
}
