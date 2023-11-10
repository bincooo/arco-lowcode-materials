import { forwardRef, Ref, createElement } from 'react';
import * as Icons from '@arco-design/web-react/icon';

const IconBox = (props: any, ref: Ref<any>) => {
    const { tag = '', ...others } = props;
    const Tag = ((Icons || {}) as any)[tag] ?? Icons.IconQuestion;
    return <Tag ref={ref} {...others} />
}

export default forwardRef(IconBox)