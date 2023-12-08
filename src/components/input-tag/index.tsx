import { Ref, forwardRef } from 'react';
import { InputTag } from '@arco-design/web-react';
import { withWarp } from '../../utils'

const InputTagBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    return withWarp(InputTag, props, ref, inline)
})

export default InputTagBox