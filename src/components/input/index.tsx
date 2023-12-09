import { Ref, forwardRef } from 'react';
import { Input } from '@arco-design/web-react';
import { withWarp } from '../../utils'

const InputBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    return withWarp(Input, props, ref, inline)
})

const SearchBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    return withWarp(Input.Search, props, ref, inline)
})

const TextAreaBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    return withWarp(Input.TextArea, props, ref, inline)
})

const PasswordBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    return withWarp(Input.Password, props, ref, inline)
})

;(InputBox as any).Group = Input.Group
;(InputBox as any).Search = SearchBox
;(InputBox as any).TextArea = TextAreaBox
;(InputBox as any).Password = PasswordBox
export default InputBox