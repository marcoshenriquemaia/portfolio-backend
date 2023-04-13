import { KeyValueDatabase } from '../abstracts'

export class ThrottleTCP {
  private delay: number = 0
  private callbacks: Function[] = []

  onlyLast?: boolean
  keyValueDatabase: KeyValueDatabase

  constructor({
    delay,
    onlyLast,
    keyValueDatabase,
  }: {
    delay: number
    onlyLast?: boolean
    keyValueDatabase: KeyValueDatabase
  }) {
    this.delay = delay
    this.onlyLast = onlyLast
    this.keyValueDatabase = keyValueDatabase
  }

  public throttle(callback: Function) {
    if (this.onlyLast) this.callbacks = []
    this.callbacks.push(callback)
    this.check()
  }

  private async setLastCall() {
    await this.keyValueDatabase.set('throttleTCP_lastCall', String(Date.now()))
  }

  private async check() {
    const now = Date.now()

    const lastCall = await this.keyValueDatabase.get('throttleTCP_lastCall')

    console.log('CLX_LOG:', 'lastCall', lastCall)

    if (!lastCall) await this.setLastCall()

    if (now - Number(lastCall) > this.delay || !lastCall) {
      this.callbacks.forEach((callback) => callback())
      this.callbacks = []
      await this.setLastCall()
    }
  }
}
