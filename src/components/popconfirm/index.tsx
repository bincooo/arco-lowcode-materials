import { Ref, forwardRef } from 'react';
import { Popconfirm } from '@arco-design/web-react';
import { withSingleChild } from '../../utils'

const PopconfirmBox = forwardRef((props: any, ref: Ref<any>) => {
    return withSingleChild(Popconfirm, props, ref)
})

export default PopconfirmBox