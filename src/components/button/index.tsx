import { forwardRef, Ref, createElement } from 'react';
import { Button } from '@arco-design/web-react';

const ButtonBox = (props: any, ref: Ref<any>) => {
    let { icon, iconOnly, children, ...others } = props
    if (iconOnly) {
        children = []
    }
    return <Button
        children={children}
        iconOnly={iconOnly}
        icon={icon}
        ref={ref}
        {...others}
    />
}

export default forwardRef(ButtonBox)
const Group = Button.Group
export { Group }