import { List } from '@arco-design/web-react'
import { Ref, createElement } from 'react';

// 不清楚为什么会无法选中，但这么写确实可以解决
const ListBox = (props: any, ref: Ref<any>) => {
    return <List {...props} ref={ref} />
}

(ListBox as any).Item = List.Item;
(ListBox as any).Meta = List.Item.Meta;
export default ListBox