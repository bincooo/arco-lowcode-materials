import { Ref, forwardRef } from 'react';
import { AutoComplete } from '@arco-design/web-react';
import { withWarp } from '../../utils';


const AutoCompleteBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    return withWarp(AutoComplete, props, ref, inline)
})

export default AutoCompleteBox