import { forwardRef, Ref, useEffect, createElement } from 'react';
import { Card } from '@arco-design/web-react';
import { findTarget } from '../../utils';

const CardMetaBox = forwardRef((props: any, ref: Ref<any>) => {
    useEffect(() => {
        // 尝试解决元素actions DOM元素没有正常插入到内标签问题
        const self = findTarget(props)
        if (!self || !self.nextElementSibling) {
            return
        }
        if (self.nextElementSibling.classList?.contains('arco-card-actions')) {
            self.querySelector('div.arco-card-meta-footer').appendChild(self.nextElementSibling)
        }
    })
    return <Card.Meta ref={ref} {...props} />
})

const CardGridBox = forwardRef((props: any, ref: Ref<any>) => {
    let { children, className = '', ...others } = props
    // 样式修复
    if (!className.includes('arco-card-contain-grid')) {
        className += " arco-card-contain-grid"
    }
    return <Card.Grid className={className} ref={ref} {...others} children={<div class="arco-card-body" children={children} />} />
})

const CardBox = forwardRef((props: any, ref: Ref<any>) => {
    return <Card ref={ref} {...props} />
})

;(CardBox as any).Meta = CardMetaBox
;(CardBox as any).Grid = CardGridBox
export default CardBox