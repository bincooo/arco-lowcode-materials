import { Ref, forwardRef } from 'react';
import { Input } from '@arco-design/web-react';
import { withWarp } from '../../utils'

const InputBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    return withWarp(Input, props, ref, inline)
})

;(InputBox as any).Group = Input.Group
;(InputBox as any).Search = Input.Search
;(InputBox as any).TextArea = Input.TextArea
;(InputBox as any).Password = Input.Password
export default InputBox