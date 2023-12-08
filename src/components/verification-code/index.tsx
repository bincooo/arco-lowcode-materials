import { Ref, forwardRef } from 'react';
import { VerificationCode } from '@arco-design/web-react';
import { withWarp } from '../../utils'

const InputNumberBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    return withWarp(VerificationCode, props, ref, inline)
})

export default InputNumberBox