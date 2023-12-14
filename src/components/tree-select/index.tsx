import { Ref, forwardRef } from 'react';
import { TreeSelect } from '@arco-design/web-react';
import { withWarp } from '../../utils'

const TreeSelectBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    return withWarp(TreeSelect, props, ref, inline)
})

export default TreeSelectBox