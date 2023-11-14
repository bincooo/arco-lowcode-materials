import { forwardRef, Ref, useEffect, createElement } from 'react';
import { Card } from '@arco-design/web-react';

const CardMetaBox = (props: any, ref: Ref<any>) => {
    const isEditor = props.__designMode
    useEffect(() => {
        // 尝试解决元素actions DOM元素没有正常插入到内标签问题
        const self = document.querySelector('div'+ (isEditor ? 
            "[__tag='" + props.__tag + "']"
                :
            "[__id='" + props.__id + "']"))
        if (!self || !self.nextElementSibling) {
            return
        }
        if (self.nextElementSibling.classList?.contains('arco-card-actions')) {
            self.querySelector('div.arco-card-meta-footer').appendChild(self.nextElementSibling)
        }
    })
    return <Card.Meta ref={ref} {...props} />
}

export default forwardRef(CardMetaBox)