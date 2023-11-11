import { forwardRef, Ref, createElement } from 'react';
import { Link } from '@arco-design/web-react'
import { slotCut } from '@/utils'

const IconBox = (props: any, ref: Ref<any>) => {
    let { status, disabled, style, icon, ...others } = props;
    if (status && !disabled) {
        // css被污染了，特殊处理
        let color: string
        switch(status) {
            case 'error':
                color = 'rgb(var(--danger-6))'
                break
            case 'success':
                color = 'rgb(var(--success-6))'
                break
            case 'warning':
                color = 'rgb(var(--warning-6))'
                break
        }
        style = {
            color,
            ...style
        }
    }
    return <Link status={status} disabled={disabled} style={style} icon={slotCut([icon])} ref={ref} {...others} />
}

export default forwardRef(IconBox)