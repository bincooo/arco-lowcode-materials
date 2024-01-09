import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Pagination"
const componentTitle: string = "分页"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'disabled',
                title: {
                    label: '禁用',
                    tip: 'disabled | 是否禁用',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'hideOnSinglePage',
                title: {
                    label: '只有一页时隐藏',
                    tip: 'hideOnSinglePage | 是否在只有一页的情况下隐藏',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'pageSizeChangeResetCurrent',
                title: {
                    label: '分页修改时重置页码',
                    tip: 'pageSizeChangeResetCurrent | pageSize 改变的时候重置当前页码为 1',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'showJumper',
                title: {
                    label: '显示快速跳转到某页',
                    tip: 'showJumper | 是否显示快速跳转到某页，在 simple 模式下默认为 true',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'showMore',
                title: {
                    label: '显示更多页码提示',
                    tip: 'showMore | 是否显示更多页码提示（当尚无法计算数据总数时可以使用）',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'simple',
                title: {
                    label: '应用精简分页模式',
                    tip: 'simple | 是否应用精简分页模式',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'sizeCanChange',
                title: {
                    label: '可以改变每页条数',
                    tip: 'sizeCanChange | 是否可以改变每页条数',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'bufferSize',
                title: {
                    label: '区间页码个数',
                    tip: 'bufferSize | current 页与 ... 之间的页码个数',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'current',
                title: {
                    label: '当前页',
                    tip: 'current | 当前页',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'defaultCurrent',
                title: {
                    label: '当前页默认值',
                    tip: 'defaultCurrent | 当前页默认值',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'pageSize',
                title: {
                    label: '每页数据条数',
                    tip: 'pageSize | 每页数据条数',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'defaultPageSize',
                title: {
                    label: '默认每页数据条数',
                    tip: 'defaultPageSize | 默认每页数据条数',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'total',
                title: {
                    label: '数据总数',
                    tip: 'total | 数据总数',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'itemRender',
                title: {
                    label: '定制分页按钮的结构',
                    tip: 'itemRender | 定制分页按钮的结构',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['page', 'type', 'origin'],
                            value: [],
                        },
                    },
                ],
            },
            {
                name: 'size',
                title: {
                    label: '尺寸',
                    tip: 'size | 分页器尺寸'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                {
                                    title: 'mini',
                                    value: 'mini'
                                },
                                {
                                    title: 'small',
                                    value: 'small'
                                },
                                {
                                    title: 'default',
                                    value: 'default'
                                },
                                {
                                    title: 'large',
                                    value: 'large'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: 'activePageItemStyle',
                title: {
                    label: '被选中的分页按钮样式',
                    tip: 'activePageItemStyle | 被选中的分页按钮样式',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'pageItemStyle',
                title: {
                    label: '分页按钮样式',
                    tip: 'pageItemStyle | 分页按钮样式',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'selectProps',
                title: {
                    label: '配置弹出框的属性',
                    tip: 'selectProps | 用于配置弹出框的属性',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'sizeOptions',
                title: {
                    label: '每页可以显示数据条数',
                    tip: 'sizeOptions | 每页可以显示数据条数',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'showTotal',
                title: {
                    label: '是否显示数据总数',
                    tip: 'showTotal | 是否显示数据总数',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['total', 'range'],
                            value: [],
                        },
                    },
                ],
            },
        ]
    },
    {
        name: 'icons',
        title: {
            label: '设置分页器的图标',
            tip: 'icons | 设置分页器的图标',
        },
        setter: {
            componentName: 'ObjectSetter',
            props: {
                config: {
                    items: [
                        { name: 'prev', title: '左图标', setter: 'SlotSetter' },
                        { name: 'next', title: '右图标', setter: 'SlotSetter' },
                    ]
                }
            }
        }
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '导航',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                {
                    name: 'onChange',
                    description: '变化时的回调',
                    template: "\n\n  onChange(pageNumber, pageSize, ${extParams}) {\n    // 变化时的回调\n    console.log('onChange', pageNumber);\n  }\n",
                },
                {
                    name: 'onPageSizeChange',
                    description: 'pageSize 变化时的回调',
                    template: "\n\n  onPageSizeChange(size, current, ${extParams}) {\n    // pageSize 变化时的回调\n    console.log('onPageSizeChange', size);\n  }\n",
                },
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
                showJumper: true,
                sizeCanChange: true,
                showTotal: true,
                total: 50,
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
