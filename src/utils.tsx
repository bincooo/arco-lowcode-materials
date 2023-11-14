import { ComponentType, Ref, createElement } from 'react';

function isEditor(props: any) {
    return props.__designMode
}

function isEmptyChild(children: any[]) {
    return (() => {
        if (!children || children.length == 0) {
            return true
        }
        if (children.length == 1) {
            const child = children[0]
            return (child.type == 'div' && child.props?.className == 'lc-container-placeholder')
        }
        return false
    })()
}
  
function withSingleChild(
    Comp: ComponentType<any>,
    props: any,
    ref: Ref<any>
  ) {
    const { children, ...others } = props
    if (isEditor(props)) {
        if (isEmptyChild(children)) {
            return <div ref={ref} {...props} style={{width: '200px'}}/>
        }
        return <div style={{display: 'inline-block'}} ref={ref}>
            <Comp
                children={<span children={children} />}
                {...others}
            />
        </div>
    }

    if (isEmptyChild(children)) {
        return <span />
    }
    console.log('123123131231312', props)
    return <Comp ref={ref} {...others} children={<span children={children} />} />
}

export {
    isEditor,
    isEmptyChild,
    withSingleChild
}