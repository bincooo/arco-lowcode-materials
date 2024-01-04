import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Transfer"
const componentTitle: string = "数据穿梭框"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'children',
                title: {
                    label: '自定义列表渲染函数',
                    tip: 'children | 自定义列表渲染函数',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["option"],
                            value: []
                        }
                    },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '禁用穿梭框',
                    tip: 'disabled | 禁用穿梭框',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'draggable',
                title: {
                    label: '列表内条目是否可拖拽',
                    tip: 'draggable | 列表内条目是否可拖拽',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'oneWay',
                title: {
                    label: '单向',
                    tip: 'oneWay | 单向',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'dataSource',
                title: {
                    label: '穿梭框数据源',
                    tip: 'dataSource | 穿梭框数据源，其中一部分会被渲染到左边一栏，targetKeys 中指定的除外',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'defaultSelectedKeys',
                title: {
                    label: '默认的',
                    tip: 'defaultSelectedKeys | 默认选中的keys',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'defaultTargetKeys',
                title: {
                    label: '默认的targetKeys',
                    tip: 'defaultTargetKeys | 默认的 targetKeys',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'listStyle',
                title: {
                    label: '左右两栏框的样式',
                    tip: 'listStyle | 左右两栏框的样式，通过数组为左右列表传入不同属性',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'operationStyle',
                title: {
                    label: '穿梭中间操作部分的样式',
                    tip: 'operationStyle | 穿梭中间操作部分的样式',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'operationTexts',
                title: {
                    label: '穿梭按钮的文案数组',
                    tip: 'operationTexts | 穿梭按钮的文案数组，顺序从上至下',
                },
                setter: [
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: [
                                { componentName: 'StringSetter' },
                                { componentName: 'SlotSetter' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'pagination',
                title: {
                    label: '是否使用翻页',
                    tip: 'pagination | 是否使用翻页，也可传入 Pagination 的配置，通过数组为左右列表传入不同属性',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'searchPlaceholder',
                title: {
                    label: '搜索框默认提示文字',
                    tip: 'searchPlaceholder | 搜索框默认提示文字，通过数组为左右列表传入不同属性',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter:  { componentName: 'StringSetter' }
                        }
                    },
                ],
            },
            {
                name: 'selectedKeys',
                title: {
                    label: '当前应该有哪些项被选中',
                    tip: 'selectedKeys | 当前应该有哪些项被选中',
                },
                setter: [
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter:  { componentName: 'StringSetter' }
                        }
                    },
                ],
            },
            {
                name: 'showFooter',
                title: {
                    label: '左右两栏是否显示底部重置按钮',
                    tip: 'showFooter | 左右两栏是否显示底部重置按钮，通过数组为左右列表传入不同属性',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'SlotSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: [
                                { componentName: 'BoolSetter' },
                                { componentName: 'SlotSetter' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'showSearch',
                title: {
                    label: '左右两栏是否显示搜索框',
                    tip: 'showSearch | 左右两栏是否显示搜索框，通过数组为左右列表传入不同属性',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'simple',
                title: {
                    label: '简单模式',
                    tip: 'simple | 简单模式',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'targetKeys',
                title: {
                    label: '渲染到右边一栏数据的key集合',
                    tip: 'targetKeys | 渲染到右边一栏数据的 key 集合',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'titleTexts',
                title: {
                    label: '穿梭框左右栏标题数组',
                    tip: 'titleTexts | 穿梭框左右栏标题数组',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'virtualListProps',
                title: {
                    label: '传递虚拟滚动属性',
                    tip: 'virtualListProps | 传递虚拟滚动属性',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'filterOption',
                title: {
                    label: '搜索框筛选算法',
                    tip: 'filterOption | 搜索框筛选算法',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'filterOption',
                            template: "\n\n  filterOption(inputValue, item, ${extParams}) {\n    // 搜索框筛选算法\n    console.log('filterOption', inputValue);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'render',
                title: {
                    label: '每行数据渲染函数',
                    tip: 'render | 每行数据渲染函数',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["item"],
                            value: []
                        }
                    },
                ],
            },
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '数据输入',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                {
                    name: 'onChange',
                    description: '选中项在两栏之间转移时的回调',
                    template: "\n\n  onChange(newTargetKeys, direction, moveKeys, ${extParams}) {\n    // 选中项在两栏之间转移时的回调\n    console.log('onChange', newTargetKeys);\n  }\n",
                },
                {
                    name: 'onSearch',
                    description: '搜索框输入进行搜索时回调函数',
                    template: "\n\n  onSearch(value, type, ${extParams}) {\n    // 搜索框输入进行搜索时回调函数\n    console.log('onSearch', value);\n  }\n",
                },
                {
                    name: 'onDragEnd',
                    description: '节点结束拖拽的回调',
                    template: "\n\n  onDragEnd(event, item, ${extParams}) {\n    // 节点结束拖拽的回调\n    console.log('onDragEnd', event);\n  }\n",
                },
                {
                    name: 'onDragLeave',
                    description: '节点离开可释放目标上时的回调',
                    template: "\n\n  onDragLeave(event, item, ${extParams}) {\n    // 节点离开可释放目标上时的回调\n    console.log('onDragLeave', event);\n  }\n",
                },
                {
                    name: 'onDragOver',
                    description: '节点被拖拽至可释放目标上时的回调',
                    template: "\n\n  onDragOver(event, item, ${extParams}) {\n    // 节点被拖拽至可释放目标上时的回调\n    console.log('onDragOver', event);\n  }\n",
                },
                {
                    name: 'onDragStart',
                    description: '节点开始拖拽的回调',
                    template: "\n\n  onDragStart(event, item, ${extParams}) {\n    // 节点开始拖拽的回调\n    console.log('onDragStart', event);\n  }\n",
                },
                {
                    name: 'onDrop',
                    description: '节点在可释放目标上释放时的回调',
                    template: "\n\n  onDrop(info, ${extParams}) {\n    // 节点在可释放目标上释放时的回调\n    console.log('onDrop', info);\n  }\n",
                },
                {
                    name: 'onResetData',
                    description: '点击重置按钮后的回调',
                    template: "\n\n  onResetData(${extParams}) {\n    // 点击重置按钮后的回调\n    console.log('onResetData');\n  }\n",
                },
                {
                    name: 'onSelectChange',
                    description: '数据项选中状态发生改变的回调',
                    template: "\n\n  onSelectChange(leftSelectedKeys, rightSelectedKeys, ${extParams}) {\n    // 数据项选中状态发生改变的回调\n    console.log('onSelectChange', leftSelectedKeys);\n  }\n",
                },
            ],
            style: true
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: require('./__screenshots__/1.png'),
        schema: {
            componentName,
            title: componentTitle,
            props: {
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
