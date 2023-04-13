export abstract class KeyValueDatabase {
  abstract set(key: string, value: string): Promise<boolean>
  abstract get(key: string): Promise<string | null>
  abstract del(key: string): Promise<string>
  abstract hset(hash: string, key: string, value: any): Promise<boolean>
}
