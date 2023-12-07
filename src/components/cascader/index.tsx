import { Ref, forwardRef } from 'react';
import { Cascader } from '@arco-design/web-react';
import { withWarp } from '../../utils';


const CascaderBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    return withWarp(Cascader, props, ref, inline)
})

export default CascaderBox