import { Ref, forwardRef } from 'react';
import { Slider } from '@arco-design/web-react';
import { withWarp } from '../../utils'

function conv2Marks(marks: any[]) {
    if (!marks || marks.length == 0) {
        return undefined
    }
    let obj = {}
    marks.forEach(item => {
        obj[item.key] = item.value
    })
    return obj
}

const SliderBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    let { marks, ...others } = props
    return withWarp(Slider, {...others, marks: conv2Marks(marks)}, ref, inline)
})

export default SliderBox