import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeDynamicProps } from '@alilc/lowcode-types';
import pack, { baseProps } from '../pack'

const componentName: string = "Title"
const componentTitle: string = "标题"
// 动态属性编辑
const mixedConfig: Record<string, unknown> | IPublicTypeDynamicProps = {
    setters: [
        {
            componentName: 'ObjectSetter',
            props: {
                config: {
                    items: [
                        {
                            name: 'cssEllipsis',
                            title: {
                                label: '自动省略',
                                tip: 'cssEllipsis | 自动溢出省略（只支持字符串），在大量使用情况下建议开启提高性能。'
                            },
                            setter: 'BoolSetter'
                        },
                        {
                            name: 'defaultExpanded',
                            title: '默认展开',
                            setter: 'BoolSetter'
                        },
                        {
                            name: 'expandable',
                            title: {
                                label: '折叠按钮',
                                tip: 'expandable | 显示展开/折叠按钮'
                            },
                            setter: 'BoolSetter'
                        },
                        {
                            name: 'expanded',
                            title: '是否展开',
                            setter: 'BoolSetter'
                        },
                        {
                            name: 'rows',
                            title: '显示省略的行数',
                            setter: 'NumberSetter'
                        },
                        {
                            name: 'ellipsisStr',
                            title: '省略号',
                            setter: 'StringSetter'
                        },
                        {
                            name: 'suffix',
                            title: '后缀',
                            setter: 'StringSetter'
                        },
                        {
                            name: 'onEllipsis',
                            title: {
                                label: 'onEllipsis',
                                tip: 'onEllipsis | 在省略发生改变的时候触发，通常是窗口resize情况会触发。'
                            },
                            setter: 'FunctionSetter'
                        },
                        {
                            name: 'onExpand',
                            title: {
                                label: 'onExpand',
                                tip: 'onExpand | 在折叠/展开状态发生改变的时候触发，通常是点击折叠/展开按钮触发。'
                            },
                            setter: 'FunctionSetter'
                        },
                    ]
                }
            },
            initialValue: {
                // title: "Title"
            }
        }
    ]
}

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
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'bold',
                title: '粗体',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'disabled',
                title: '是否禁用',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'code',
                title: '代码块样式',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'delete',
                title: '删除线样式',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'underline',
                title: '下划线样式',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'type',
                title: {
                    label: '文本类型',
                    tip: 'type | 不同状态: primary 主要、secondary 次要、success 成功、warning 警告、error 失败'
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                {
                                    title: 'primary',
                                    value: 'primary'
                                },
                                {
                                    title: 'secondary',
                                    value: 'secondary'
                                },
                                {
                                    title: 'success',
                                    value: 'success'
                                },
                                {
                                    title: 'warning',
                                    value: 'warning'
                                },
                                {
                                    title: 'error',
                                    value: 'error'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: 'heading',
                title: {
                    label: '标题级别',
                    tip: 'heading | 标题级别，相当于 h1 h2 h3 h4 h5 h6'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                {
                                    title: 'h1',
                                    value: 1
                                },
                                {
                                    title: 'h2',
                                    value: 2
                                },
                                {
                                    title: 'h3',
                                    value: 3
                                },
                                {
                                    title: 'h4',
                                    value: 4
                                },
                                {
                                    title: 'h5',
                                    value: 5
                                },
                                {
                                    title: 'h6',
                                    value: 6
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: 'mark',
                title: '标记样式',
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ]
            },
            {
                name: 'copyable',
                title: '复制功能',
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'editable',
                title: '编辑功能',
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'ellipsis',
                title: {
                    label: '自动溢出省略',
                    tip: 'ellipsis | 自动溢出省略（只支持字符串）'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    {
                        componentName: 'MixedSetter',
                        props: mixedConfig
                    }
                ]
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
    npm: pack("Typography", componentName),
    category: '通用',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            style: true
        }
    }
};

const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: '',
        schema: {
            componentName,
            title: componentTitle,
            props: {
                children: '我是标题'
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};