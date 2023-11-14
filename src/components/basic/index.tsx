import { forwardRef, Ref, createElement } from 'react';

const BasicBox = (props: any, ref: Ref<any>) => {
    let { tag = 'div', style, attr, children, ...others } = props;
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
    if (tag == 'ul') {
        style = {
            listStyle: 'disc',
            ...style
        }
    }
    if (tag == 'img') {
        children = undefined
    }

    return <Tag ref={ref} {...arr2Obj(attr)} children={children} style={style} {...others} />
}

function arr2Obj(arr: any[]) {
    let obj = {}
    for (const index in arr) {
        const item = arr[index]
        if (item?.key && item?.value) {
            obj[item.key] = item.value
        }
    }
    return obj
}

export default forwardRef(BasicBox)