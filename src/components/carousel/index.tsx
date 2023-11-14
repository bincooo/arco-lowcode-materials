import { Carousel } from '@arco-design/web-react'
import { Ref, createElement } from 'react';

// 不清楚为什么会无法选中，但这么写确实可以解决
export default function(props: any, ref: Ref<any>) {
    return <Carousel {...props} ref={ref} />
}