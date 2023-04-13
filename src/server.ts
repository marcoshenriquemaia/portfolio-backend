import { ThrottleTCP } from './core'
import { RedisDatabase } from './core/adapters'
import { AppError } from './error'

const run = async () => {
  const ENV = {
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
  }

  if (!ENV.REDIS_HOST || !ENV.REDIS_PORT) {
    throw new AppError(500, 'REDIS_ERROR', 'Redis host or port not found')
  }

  const redis = new RedisDatabase({
    host: ENV.REDIS_HOST,
    port: Number(ENV.REDIS_PORT),
  })

  const tcpThrottle = new ThrottleTCP({
    delay: 1000,
    onlyLast: false,
    keyValueDatabase: redis,
  })
}

run()
