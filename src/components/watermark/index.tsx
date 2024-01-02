import { Ref, forwardRef } from 'react';
import { Watermark } from '@arco-design/web-react';
import { withWarp } from '../../utils'

const PopconfirmBox = forwardRef((props: any, ref: Ref<any>) => {
    return withWarp(Watermark, props, ref, false)
})

export default PopconfirmBox