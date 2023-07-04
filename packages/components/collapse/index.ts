export * from './src/collapse'
import { withInstall } from '@ryan/utils'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

export const RyanCollapse = withInstall(Collapse)
export const RyanCollapseItem = withInstall(CollapseItem)

export default RyanCollapse
