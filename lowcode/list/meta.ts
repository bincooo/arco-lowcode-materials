import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "List"
const componentTitle: string = "列表"
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
                  label: '内容',
                  tip: 'children | 内容',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'bordered',
                title: {
                    label: '显示边框',
                    tip: 'bordered | 是否显示边框'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'hoverable',
                title: {
                    label: '列表项悬浮',
                    tip: 'hoverable | 列表项是否可悬浮'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'loading',
                title: {
                    label: '加载中',
                    tip: 'loading | 是否加载中'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'split',
                title: {
                    label: '显示分割线',
                    tip: 'split | 是否显示分割线'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'defaultCurrent',
                title: {
                    label: '当前页码',
                    tip: 'defaultCurrent | 滚动加载数据当前页码'
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ]
            },
            {
                name: 'pagination',
                title: {
                    label: '是否使用翻页',
                    tip: 'pagination | 是否使用翻页，也可传入 Pagination 的配置'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ]
            },
            {
                name: 'offsetBottom',
                title: {
                    label: '触发底部函数的距离阙值',
                    tip: 'offsetBottom | 触发底部函数的距离阙值'
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ]
            },
            {
                name: 'throttleDelay',
                title: {
                    label: '节流延时',
                    tip: 'throttleDelay | 节流延时'
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ]
            },
            {
                name: 'size',
                title: {
                    label: '列表的尺寸',
                    tip: 'size | 列表的尺寸'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'small', value: 'small' },
                                { title: 'default', value: 'default' },
                                { title: 'large', value: 'large' },
                            ]
                        }
                    },
                ]
            },
            {
                name: 'header',
                title: {
                  label: '列表头部',
                  tip: 'header | 列表头部',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'footer',
                title: {
                  label: '列表底部',
                  tip: 'footer | 列表底部',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'noDataElement',
                title: {
                  label: '自定空元素',
                  tip: 'noDataElement | 没有数据的时候显示的元素',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'scrollLoading',
                title: {
                  label: '滚动到底部的提示',
                  tip: 'scrollLoading | 滚动加载状态时，滚动到底部的提示',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'dataSource',
                title: {
                  label: '数据源',
                  tip: 'dataSource | 列表渲染数据源，当children存在时，可不传此参数 (dataSource优先级更高）',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'grid',
                title: {
                  label: '列表栅格配置',
                  tip: 'grid | 列表栅格配置',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'virtualListProps',
                title: {
                  label: '传递虚拟列表属性',
                  tip: 'virtualListProps | 传递虚拟列表属性，传入此参数以开启虚拟滚动',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'wrapperClassName',
                title: {
                    label: '指定最外层包裹元素的类名',
                    tip: 'wrapperClassName | 指定最外层包裹元素的类名',
                },
                setter: [
                    { componentName: 'StringSetter', condition: () => true },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    }
                ],
            },
            {
                name: 'wrapperStyle',
                title: {
                  label: '指定最外层包裹元素的样式',
                  tip: 'wrapperStyle | 指定最外层包裹元素的样式',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'render',
                title: {
                  label: '单个列表渲染函数',
                  tip: 'render | 单个列表渲染函数，当 children 存在时，可不传此参数',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'onItemRender',
                            template: '\n\n  onItemRender(item, index, ${extParams}) {\n\n  }\n',
                        },
                    },
                ],
            },
        ]
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
                    name: 'onListScroll',
                    description: '列表滚动回调函数',
                    template: "\n\n  onListScroll(event, ${extParams}) {\n    // 列表滚动回调函数\n    console.log('onListScroll', event);\n  }\n",
                },
                {
                    name: 'onReachBottom',
                    description: '滚动至底部触发函数',
                    template: "\n\n  onReachBottom(event, ${extParams}) {\n    // 滚动至底部触发函数\n    console.log('onReachBottom', event);\n  }\n",
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
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
