import { forwardRef, Ref, createElement } from 'react';

const BasicBox = (props: any, ref: Ref<any>) => {
    let { tag = 'div', style, ...others } = props;
    let Tag = tag
    if (tag == 'text') {
        Tag = 'span'
    }
    // css污染
    if (tag == 'ol') {
        style = {
            listStyle: 'decimal',
            ...style
        }
    }
    return <Tag ref={ref} style={style} {...others} />
}

export default forwardRef(BasicBox)