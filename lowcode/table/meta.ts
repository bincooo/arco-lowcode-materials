import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeDynamicSetter } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Table"
const componentTitle: string = "基础表格"


function createColumnsProps(mode?: string): IPublicTypeDynamicSetter {
    const uuid = () => {
        const str = "1ab8cd2efg9hi3jklm4opq5rst0uv6wxyz7"
        let result = ""
        for (let index = 0; index < 5; index++) {
            const idx = Math.round(Math.random() * str.length)
            result += str[idx]
        }
        return result
    }

    return (target) => {
        return {
            componentName: 'ArraySetter',
            props: {
                mode,
                itemSetter: {
                    componentName: 'ObjectSetter',
                    initialValue: {
                        title: "Title",
                        dataIndex: "Title-" + uuid()
                    },
                    props: {
                        config: {
                            items: [
                                {
                                    name: 'ellipsis',
                                    title: {
                                        label: '是否自动省略',
                                        tip: 'ellipsis | 单元格内容超出长度后，是否自动省略，显示 ...。设置这个属性后，table 的 table-layout 将自动变成 fixed。'
                                    },
                                    setter: [
                                        { componentName: 'BoolSetter' },
                                    ],
                                },
                                {
                                    name: 'filterMultiple',
                                    title: {
                                        label: '可以筛选多项',
                                        tip: 'filterMultiple | 是否可以筛选多项'
                                    },
                                    setter: [
                                        { componentName: 'BoolSetter' },
                                    ],
                                },
                                {
                                    name: 'dataIndex',
                                    isRequired: true,
                                    title: {
                                        label: '数据项中对应的key',
                                        tip: 'dataIndex | 列数据在数据项中对应的 key，用于取值显示，支持 a[0].b.c[1] 的嵌套写法，详情看 lodash.get。'
                                    },
                                    setter: [
                                        { componentName: 'StringSetter' },
                                    ],
                                },
                                {
                                    name: 'align',
                                    title: {
                                        label: '列的对齐方式',
                                        tip: 'align | 设置列的对齐方式'
                                    },
                                    setter: [
                                        {
                                            componentName: 'RadioGroupSetter',
                                            props: {
                                                options: [
                                                    { title: 'left', value:'left' },
                                                    { title: 'center', value:'center' },
                                                    { title: 'right', value:'right' },
                                                ]
                                            }
                                        }
                                    ],
                                },
                                {
                                    name: 'defaultSortOrder',
                                    title: {
                                        label: '默认排序方式',
                                        tip: 'defaultSortOrder | 默认排序方式'
                                    },
                                    setter: [
                                        {
                                            componentName: 'RadioGroupSetter',
                                            props: {
                                                options: [
                                                    { title: 'ascend', value:'ascend' },
                                                    { title: 'descend', value:'descend' },
                                                ]
                                            }
                                        }
                                    ],
                                },
                                {
                                    name: 'fixed',
                                    title: {
                                        label: '固定头和列',
                                        tip: 'fixed | 固定头和列到左边或者右边'
                                    },
                                    setter: [
                                        {
                                            componentName: 'RadioGroupSetter',
                                            props: {
                                                options: [
                                                    { title: 'left', value:'left' },
                                                    { title: 'right', value:'right' },
                                                ]
                                            }
                                        },
                                    ],
                                },
                                {
                                    name: 'filterIcon',
                                    title: {
                                        label: '自定义筛选图标',
                                        tip: 'filterIcon | 自定义筛选图标'
                                    },
                                    setter: {  componentName: 'SlotSetter' },
                                },
                                {
                                    name: 'title',
                                    title: {
                                        label: '列标题',
                                        tip: 'title | 列标题'
                                    },
                                    setter: [
                                        { componentName: 'StringSetter' },
                                        {  componentName: 'SlotSetter' },
                                    ],
                                },
                                {
                                    name: 'selectedRowKeys',
                                    title: {
                                        label: 'Table选中的项',
                                        tip: 'selectedRowKeys | Table选中的项，（受控模式，需要跟 onChange 配合使用）'
                                    },
                                    setter: [
                                        { componentName: 'StringSetter' },
                                        {
                                            componentName: 'ArraySetter',
                                            props: {
                                                itemSetter: { componentName: 'StringSetter' }
                                            }
                                        },
                                    ],
                                },
                                {
                                    name: 'filterDropdown',
                                    title: '自定义筛选框',
                                    propType: 'func',
                                    setter: [
                                        {
                                          componentName: 'SlotSetter',
                                          title: '单元格插槽',
                                          initialValue: {
                                            type: 'JSSlot',
                                            params: ['option'],
                                            value: [],
                                          },
                                        },
                                    ],
                                },
                                {
                                    name: 'render',
                                    title: '自定义单元格显示的内容',
                                    propType: 'func',
                                    setter: [
                                        {
                                          componentName: 'SlotSetter',
                                          title: '单元格插槽',
                                          initialValue: {
                                            type: 'JSSlot',
                                            params: ['col', 'item', 'index'],
                                            value: [],
                                          },
                                        },
                                    ],
                                },
                                {
                                    name: 'children',
                                    title: '子组表头',
                                    setter: [
                                        createColumnsProps('popup'),
                                        { componentName: 'JsonSetter' },
                                    ]
                                }
                            ]
                        }
                    }
                }
            }
        }
    }
}

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '数据',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'columns',
                title: {
                    label: '列数据对象的数组',
                    tip: 'columns | 列描述数据对象的数组'
                },
                setter: createColumnsProps(),
            },
            {
                name: 'data',
                title: {
                    label: '表格数据',
                    tip: 'data | 表格数据'
                },
                setter: { componentName: 'JsonSetter' },
            },
            {
                name: 'loading',
                title: {
                    label: '表格加载中',
                    tip: 'loading | 表格是否在加载中'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'rowKey',
                title: {
                    label: '表格行key的取值字段',
                    tip: 'rowKey | 表格行 key 的取值字段'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'FunctionSetter' },
                ],
            },
            {
                name: 'summary',
                title: {
                    label: '总结栏',
                    tip: 'summary | 总结栏'
                },
                setter: [
                    { componentName: 'FunctionSetter' },
                ],
            },
        ]
    },
    {
        title: '分页',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'pagination',
                title: {
                    label: '分页器设置',
                    tip: 'pagination | 分页器设置，参考Pagination组件，设置 false 不展示分页'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'renderPagination',
                title: {
                    label: '自定义分页渲染',
                    tip: 'renderPagination | 自定义分页渲染'
                },
                setter: [
                    { componentName: 'FunctionSetter' },
                ],
            },
            {
                name: 'pagePosition',
                title: {
                    label: '设置分页器的位置',
                    tip: 'pagePosition | 设置分页器的位置，有四个方位 右下 左下 右上 左上 上中 下中'
                },
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            { title: 'br', value: 'br' },
                            { title: 'bl', value: 'bl' },
                            { title: 'tr', value: 'tr' },
                            { title: 'tl', value: 'tl' },
                            { title: 'topCenter', value: 'topCenter' },
                            { title: 'bottomCenter', value: 'bottomCenter' },
                        ]
                    }
                },
            },
        ]
    },
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'borderCell',
                title: {
                    label: '显示单元格边框',
                    tip: 'borderCell | 是否显示单元格边框，作用等同于 border={{ cell: true }}'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'defaultExpandAllRows',
                title: {
                    label: '默认展开所有可展开的行',
                    tip: 'defaultExpandAllRows | 默认展开所有可展开的行'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'hover',
                title: {
                    label: '开启鼠标悬浮效果',
                    tip: 'hover | 是否开启鼠标悬浮效果'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'showHeader',
                title: {
                    label: '是否显示表头',
                    tip: 'showHeader | 是否显示表头'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'stripe',
                title: {
                    label: '开启斑马纹',
                    tip: 'stripe | 是否开启斑马纹'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'tableLayoutFixed',
                title: {
                    label: '表格的宽度不会被内容撑开',
                    tip: 'tableLayoutFixed | 表格的 table-layout 属性设置为 fixed，设置为 fixed 后，表格的宽度不会被内容撑开超出 100%。'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'virtualized',
                title: {
                    label: '表格开启虚拟滚动',
                    tip: 'virtualized | 表格开启虚拟滚动，用于处理大数据场景。( 注意：虚拟滚动会自动关闭对树形数据的支持 )'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'indentSize',
                title: {
                    label: '树形数据每个层级向左偏移的像素',
                    tip: 'indentSize | 树形数据每个层级向左偏移的像素'
                },
                setter: { componentName: 'NumberSetter' },
            },
            {
                name: 'childrenColumnName',
                title: {
                    label: '树形数据字段名',
                    tip: 'childrenColumnName | 树形数据在 data 中的字段名，默认是 children'
                },
                setter: { componentName: 'StringSetter' },
            },
            {
                name: 'size',
                title: {
                    label: '表格尺寸',
                    tip: 'size | 表格尺寸，分为 默认，默认 中 小 迷你 四个尺寸'
                },
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            { title: 'default', value: 'default' },
                            { title: 'middle', value: 'middle' },
                            { title: 'small', value: 'small' },
                            { title: 'mini', value: 'mini' },
                        ]
                    }
                },
            },
            {
                name: 'noDataElement',
                title: {
                    label: '空显示的元素',
                    tip: 'noDataElement | 没有数据的时候显示的元素'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'placeholder',
                title: {
                    label: '占位符',
                    tip: 'placeholder | 当单元格内容为空时，显示占位符，优先级低于 column.placeholder。'
                },
                setter: { componentName: 'SlotSetter' },
            },
            {
                name: 'expandProps',
                title: {
                    label: '展开的行',
                    tip: 'expandProps | 展开的行（受控）'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'rowSelection',
                title: {
                    label: '设置表格行可选',
                    tip: 'rowSelection | 设置表格行是否可选，选中事件等。配置项'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'scroll',
                title: {
                    label: '设置x轴或y轴的滚动',
                    tip: 'scroll | 设置x轴或y轴的滚动。x 设置为 true，会给 table 添加 table-layout: fixed 以及给父元素添加 overflow: auto。y 设置为 true，表头和表身会分离，放在两个 table 中'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'showSorterTooltip',
                title: {
                    label: '表头是否显示下一次排序的 tooltip 提示',
                    tip: 'showSorterTooltip | 表头是否显示下一次排序的 tooltip 提示。可以设置对象，可以传 Tooltip 组件的所有参数。'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'virtualListProps',
                title: {
                    label: '用于配置虚拟滚动',
                    tip: 'virtualListProps | 用于配置虚拟滚动'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'expandedRowRender',
                title: {
                    label: '展开额外行的渲染函数',
                    tip: 'expandedRowRender | 点击展开额外的行，渲染函数。返回值为 null 时，不会渲染展开按钮'
                },
                setter: [
                    { componentName: 'FunctionSetter' },
                ],
            },
            {
                name: 'footer',
                title: {
                    label: '表格尾部',
                    tip: 'footer | 表格尾部'
                },
                setter: [
                    { componentName: 'FunctionSetter' },
                ],
            },
            {
                name: 'rowClassName',
                title: {
                    label: '表格行的类名',
                    tip: 'rowClassName | 表格行的类名'
                },
                setter: [
                    { componentName: 'FunctionSetter' },
                ],
            },
        ]
    },
    {
        name: 'border',
        title: {
            label: '边框设置',
            tip: 'border | 边框设置'
        },
        setter: [
            { componentName: 'BoolSetter', condition: () => true },
            {
                componentName: 'ObjectSetter',
                props: {
                    config: {
                        items: [
                            {
                                name: 'wrapper',
                                title: 'wrapper',
                                setter: 'BoolSetter',
                            },
                            {
                                name: 'headerCell',
                                title: 'headerCell',
                                setter: 'BoolSetter',
                            },
                            {
                                name: 'bodyCell',
                                title: 'bodyCell',
                                setter: 'BoolSetter',
                            },
                            {
                                name: 'cell',
                                title: 'cell',
                                setter: 'BoolSetter',
                            },
                        ],
                    },
                }
            },
        ],
    },
    {
        name: 'expandedRowKeys',
        title: {
            label: '展开的行',
            tip: 'expandedRowKeys | 展开的行（受控）'
        },
        setter: [
            { componentName: 'StringSetter' },
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'StringSetter' },
                }
            }
        ],
    },
    {
        name: 'defaultExpandedRowKeys',
        title: {
            label: '默认展开的行',
            tip: 'defaultExpandedRowKeys | 默认展开的行'
        },
        setter: [
            { componentName: 'StringSetter' },
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'StringSetter' },
                }
            }
        ],
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: '',
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '数据显示',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                {
                    name: 'onFinish',
                    description: '倒计时完成后触发的回调',
                    template: "\n\n  onFinish(event, ${extParams}) {\n    // 倒计时完成后触发的回调\n    console.log('onFinish', event);\n  }\n",
                }
            ],
            style: true,
        },
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
                pagination: false,
                columns: [
                    {
                      title: 'Name',
                      dataIndex: 'name',
                    },
                    {
                      title: 'Salary',
                      dataIndex: 'salary',
                    },
                    {
                      title: 'Address',
                      dataIndex: 'address',
                    },
                    {
                      title: 'Email',
                      dataIndex: 'email',
                    },
                ],
                data: [
                    {
                      key: '1',
                      name: 'Jane Doe',
                      salary: 23000,
                      address: '32 Park Road, London',
                      email: 'jane.doe@example.com',
                    },
                    {
                      key: '2',
                      name: 'Alisa Ross',
                      salary: 25000,
                      address: '35 Park Road, London',
                      email: 'alisa.ross@example.com',
                    },
                    {
                      key: '3',
                      name: 'Kevin Sandra',
                      salary: 22000,
                      address: '31 Park Road, London',
                      email: 'kevin.sandra@example.com',
                    },
                    {
                      key: '4',
                      name: 'Ed Hellen',
                      salary: 17000,
                      address: '42 Park Road, London',
                      email: 'ed.hellen@example.com',
                    },
                    {
                      key: '5',
                      name: 'William Smith',
                      salary: 27000,
                      address: '62 Park Road, London',
                      email: 'william.smith@example.com',
                    },
                ]
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
