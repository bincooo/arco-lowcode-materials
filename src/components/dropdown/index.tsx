import { Ref, forwardRef, createElement } from 'react';
import { Dropdown, Menu } from '@arco-design/web-react';
import { withSingleChild } from '../../utils'

const DropdownBox = forwardRef((props: any, ref: Ref<any>) => {
    let { droplist, ...others } = props
    let _droplist = <Menu children={droplist} />
    return withSingleChild(Dropdown, {
        ...others,
        droplist: _droplist
    }, ref)
})

;(DropdownBox as any).Button = Dropdown.Button
export default DropdownBox