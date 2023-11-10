import { forwardRef, Ref, createElement } from 'react';

const BasicBox = (props: any, ref: Ref<any>) => {
    const { tag, ...others } = props;
    let Tag = tag ?? 'div'
    if (tag == 'text') {
        Tag = 'span'
    }
    return <Tag ref={ref} {...others} />
}

export default forwardRef(BasicBox)