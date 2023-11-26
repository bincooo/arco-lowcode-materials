import { Ref, forwardRef } from 'react';
import { Tabs } from '@arco-design/web-react';
import { withWarp } from '../../utils'


const TabsBox = forwardRef((props: any, ref: Ref<any>) => {
    return withWarp(Tabs, {...props}, ref, false)
})

;(TabsBox as any).TabPane = Tabs.TabPane
export default TabsBox