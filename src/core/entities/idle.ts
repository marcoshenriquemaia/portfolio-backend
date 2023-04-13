import { Entity, KeyValueDatabase } from '../../abstracts'
import { generateId } from '../../utils'
import { IdleSprite } from '../sprites'

interface IdleConstructor {
  name: string
  id: string
  sprite: IdleSprite
  position: { x: number; y: number }
  size: { width: number; height: number }
  dataBase: KeyValueDatabase
}

export class Idle implements Entity {
  name: string
  id: string
  sprite: IdleSprite
  position: { x: number; y: number }
  size: { width: number; height: number }
  dataBase: KeyValueDatabase

  constructor(props: IdleConstructor) {
    this.name = props.name
    this.id = `idle_${generateId()}`
    this.sprite = props.sprite
    this.position = props.position
    this.size = props.size
    this.dataBase = props.dataBase

    this.save()
  }

  async save(): Promise<boolean> {
    return this.dataBase.set(this.id, JSON.stringify(this))
  }
}
