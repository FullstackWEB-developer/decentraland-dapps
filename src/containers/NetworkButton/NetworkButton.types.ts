import { ButtonProps } from 'dcl-ui/dist/components/Button/Button'
import { Network } from '@dcl/schemas/dist/dapps/network'

export type Props = ButtonProps & {
  network: Network
}
