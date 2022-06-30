import { fetchTransactionRequest } from './actions'
import { isTransactionAction, getTransactionHashFromAction } from './utils'
import { getAddress } from '../wallet/selectors'
import { RootMiddleware } from '../../types'

export const createTransactionMiddleware = () => {
  const middleware: RootMiddleware = store => next => action => {
    if (isTransactionAction(action)) {
      const address = getAddress(store.getState())
      const hash = getTransactionHashFromAction(action)

      if (address) {
        store.dispatch(fetchTransactionRequest(address, hash, action))
      }
    }

    return next(action)
  }

  return middleware
}
