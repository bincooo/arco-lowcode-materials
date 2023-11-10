export function isDesigner(props: any): boolean {
    return props.__designMode
}

export function slotCut(children: any[]): any[] {
    const cNode = children?.[0] ?? ''
    if (typeof cNode != 'string') {
        const { children: child, componentName } = cNode.props
        if (componentName == 'Slot') {
            children = child
        }
    }
    return children
}