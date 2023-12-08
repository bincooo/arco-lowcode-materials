import { Ref, forwardRef, createElement } from 'react';
import { Form } from '@arco-design/web-react';
import { withWarp } from '../../utils';


const FormBox = forwardRef((props: any, ref: Ref<any>) => {
    return withWarp(Form, props, ref, false)
})

const FormItemBox = forwardRef((props: any, ref: Ref<any>) => {
    let { children, ...others } = props
    if (children.length > 0) {
        children = children[0]
    }
    return <Form.Item ref={ref} {...others} children={children} />
})

const ProviderBox = (props: any, ref: Ref<any>) => {
    return <Form.Provider ref={ref} {...props} />
}

;(FormBox as any).Item = FormItemBox
;(FormBox as any).Provider = ProviderBox
export default FormBox