export * from './src/message'
import { withInstallFunction } from '@ryan/utils'
import Message from './src/message-method'

export const RyanMessage = withInstallFunction(Message, '$message')

export default RyanMessage
