import { RedisClientType, createClient } from 'redis'
import { KeyValueDatabase } from '../../abstracts/keyValueDatabase'

export class RedisDatabase implements KeyValueDatabase {
  private client: RedisClientType

  constructor({ host, port }: { host: string; port: number }) {
    this.client = createClient({
      socket: {
        host,
        port,
      },
    })
  }

  async set(key: string, value: string): Promise<any> {
    return this.client.set(key, value)
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key)
  }

  async del(key: string): Promise<any> {
    return this.client.del(key)
  }

  async hset(hash: string, key: string, value: string): Promise<any> {
    return this.client.hSet(hash, key, value)
  }

  async connect(): Promise<any> {
    return this.client.connect()
  }
}
