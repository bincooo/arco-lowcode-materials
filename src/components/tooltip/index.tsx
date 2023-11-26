import { Ref, forwardRef } from 'react';
import { Tooltip } from '@arco-design/web-react';
import { withSingleChild } from '../../utils';


const TooltipBox = forwardRef((props: any, ref: Ref<any>) => {
    const { popupVisible, ...others } = props
    if (popupVisible === undefined) {
        return withSingleChild(Tooltip, others, ref)
    }
    return withSingleChild(Tooltip, props, ref)
})

export default TooltipBox