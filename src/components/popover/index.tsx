import { forwardRef, Ref } from 'react';
import { Popover } from '@arco-design/web-react';
import { withSingleChild } from '../../utils'

const PopoverBox = (props: any, ref: Ref<any>) => {
    return withSingleChild(Popover, props, ref)
}

export default forwardRef(PopoverBox)