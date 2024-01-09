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

function findTarget<E extends Element = Element>(props: any): E | null {
    var selectors = ''
    if (isEditor(props)) {
        selectors = "[__tag='" + props.__tag + "']"
    } else {
        selectors = "[__id='" + props.__id + "']"
    }
    return document.querySelector(selectors)
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
    let { style = {}, children, ...others } = props
    let { width, height, ...styleOthers } = style
    if (isEditor(props)) {
        if (isEmptyChild(children)) {
            return <div ref={ref} {...props} style={inline ? {width: '320px'} : {}} />
        }

        return <div  ref={ref} style={inline ? { display: 'inline-grid' } : {}}>
            <Comp children={<span children={children} />} {...others} style={styleOthers} />
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
    withSingleChild,
    findTarget
}