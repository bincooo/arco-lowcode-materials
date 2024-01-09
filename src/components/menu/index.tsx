import { Ref, forwardRef } from 'react';
import { Menu } from '@arco-design/web-react';
import { withWarp } from '../../utils'

const MenuBox = forwardRef((props: any, ref: Ref<any>) => {
    // mode属性冲突
    const { iMode, ...others } = props
    return withWarp(Menu, {
        ...others,
        mode: iMode
    }, ref)
})

const MenuItemBox = forwardRef((props: any, ref: Ref<any>) => {
    return withWarp(Menu.Item, props, ref, false)
})

const MenuSubMenuBox = forwardRef((props: any, ref: Ref<any>) => {
    return withWarp(Menu.SubMenu, props, ref, false)
})



;(MenuBox as any).Item = MenuItemBox
;(MenuBox as any).SubMenu = MenuSubMenuBox
;(MenuBox as any).ItemGroup = Menu.ItemGroup
export default MenuBox