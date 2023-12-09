import { Ref, forwardRef, createElement, useEffect } from 'react';
import { Select } from '@arco-design/web-react';
import { isEditor } from '../../utils'

const SelectBox = forwardRef((props: any, ref: Ref<any>) => {
    const inline = !!props.style?.width ?? false
    let { children, style = {}, ...others } = props
    if (isEditor(props)) {
        let { width, height, ...styleOthers } = style
        return <div  ref={ref} style={ inline ? { display: 'inline-grid', width, height } : { width, height }}>
            <Select {...others} children={children} style={styleOthers} />
        </div>
    }

    // 非编辑模式不渲染 SelectOptionBox
    return <Select ref={ref} {...others} style={style}
        children={children.map(item => {
            return <Select.Option {...item.props} />
        })}
    />
})

const SelectOptionBox = forwardRef((props: any, ref: Ref<any>) => {
    // 尝试解决元素分离导致class前缀无法正常组合
    useEffect(() => {
        const self = document.querySelector('li[componentid=' + props.componentId + ']')
        if (self.classList.contains('undefined-option')) {
            self.classList.remove('undefined-option')
            self.classList.add('arco-select-option')
        }
    })
    return <Select.Option ref={ref} {...props} />
})

;(SelectBox as any).Option = SelectOptionBox
export default SelectBox