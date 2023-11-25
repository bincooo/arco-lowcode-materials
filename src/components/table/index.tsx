import { Ref, forwardRef } from 'react';
import { Table } from '@arco-design/web-react';
import { withWarp } from '../../utils'

function trimUndef(children: any[]): any[] {
    if (!children) {
        return children
    }
    for(let index = children.length - 1; index > 0; index --) {
        const item = children[index]
        if (item.children) {
            if (item.children.length == 0) {
                delete item.children
            } else {
                item.children = trimUndef(item.children)
            }
        }
    }
    return children
}

const TableBox = forwardRef((props: any, ref: Ref<any>) => {
    let { columns, ...others } = props
    columns = trimUndef(columns)
    return withWarp(Table, {...others, columns}, ref, false)
})

export default TableBox