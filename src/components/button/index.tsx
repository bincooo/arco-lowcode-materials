import { forwardRef, Ref, createElement } from 'react';
import { Button } from '@arco-design/web-react';
import { slotCut, isDesigner } from '@/utils';

const ButtonBox = (props: any, ref: Ref<any>) => {
    let { icon, iconOnly, children, ...others } = props
    if (iconOnly) {
        children = []
    }
    if (isDesigner(props)) {
        return <Button
            children={children}
            iconOnly={iconOnly}
            icon={icon}
            ref={ref}
            {...others}
        />
    }

    // 如果是Slot标签，舍弃这一层级
    return <Button
        icon={icon?.props?.children}
        children={slotCut(children)}
        iconOnly={iconOnly}
        ref={ref}
        {...others}
    />
}

export default forwardRef(ButtonBox)