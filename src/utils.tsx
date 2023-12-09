import { ComponentType, Ref, createElement } from 'react';

function isEditor(props: any) {
    return props.__designMode
}

function isEmptyChild(children: any[]) {
    if (!children || children.length == 0) {
        return true
    }
    if (children.length == 1) {
        const child = children[0]
        return (child.type == 'div' && child.props?.className == 'lc-container-placeholder')
    }
    return false
}

function isSlot(obj: any) {
    if (obj.type?.displayName == 'Slot') {
        return true
    }
    return false
}

// 特殊情况无法选中，或者没有宽高时可以试试这样
function withWarp(
    Comp: ComponentType<any>,
    props: any,
    ref: Ref<any>,
    inline: boolean = true
  ) {
    if (isEditor(props)) {
        let { style = {}, ...others } = props
        let { width, height, ...styleOthers } = style
        return <div ref={ref} style={ inline ? { display: 'inline-grid', width, height } : { width, height }}>
            <Comp {...others} style={styleOthers} />
        </div>
    }

    return <Comp ref={ref} {...props} />
}

// 用于组件只能接收一个children内容的适配处理
function withSingleChild(
    Comp: ComponentType<any>,
    props: any,
    ref: Ref<any>,
    inline: boolean = true
  ) {
    let { children, ...others } = props
    if (isEditor(props)) {
        if (isEmptyChild(children)) {
            return <div ref={ref} {...props} />
        }

        return <div  ref={ref} style={inline ? { display: 'inline-block' } : {}}>
            <Comp children={<span children={children} />} {...others} />
        </div>
    }

    if (isEmptyChild(children)) {
        return <span />
    }
    return <Comp ref={ref} {...others} children={<span children={children} />} />
}

export {
    isEditor,
    isEmptyChild,
    isSlot,
    withWarp,
    withSingleChild
}