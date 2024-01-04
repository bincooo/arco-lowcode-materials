import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "InputNumber"
const componentTitle: string = "数字输入框"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'value',
                title: {
                    label: '当前值',
                    tip: 'value | 当前值',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '初始值',
                    tip: 'defaultValue | 初始值',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '是否禁用',
                    tip: 'disabled | 是否禁用',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'error',
                title: {
                    label: '错误状态',
                    tip: 'error | 错误状态',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'hideControl',
                title: {
                    label: '隐藏右侧按钮',
                    tip: 'hideControl | 隐藏右侧按钮',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'readOnly',
                title: {
                    label: '是否只读',
                    tip: 'readOnly | 是否只读',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'strictMode',
                title: {
                    label: '严格模式',
                    tip: 'strictMode | 严格模式下，onChange 回调将返回字符串类型',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'max',
                title: {
                    label: '最大值',
                    tip: 'max | 最大值',
                },
                setter: [
                    {
                        componentName: 'NumberSetter',
                        props: {
                            precision: 5
                        }
                    },
                ],
            },
            {
                name: 'min',
                title: {
                    label: '最小值',
                    tip: 'min | 最小值',
                },
                setter: [
                    {
                        componentName: 'NumberSetter',
                        props: {
                            precision: 5
                        }
                    },
                ],
            },
            {
                name: 'step',
                title: {
                    label: '数字变化步长',
                    tip: 'step | 数字变化步长',
                },
                setter: [
                    {
                        componentName: 'NumberSetter',
                        props: {
                            precision: 5
                        }
                    },
                ],
            },
            {
                name: 'placeholder',
                title: {
                    label: '默认显示文案',
                    tip: 'placeholder | 默认显示文案',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'mode',
                title: {
                    label: '按钮模式',
                    tip: 'mode | embed - 按钮内嵌模式，button - 左右按钮模式',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'embed', value: 'embed' },
                                { title: 'button', value: 'button' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'size',
                title: {
                    label: '尺寸',
                    tip: 'size | 不同尺寸的数字输入框。分别对应 24px, 28px, 32px, 36px',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'mini', value: 'mini' },
                                { title: 'small', value: 'small' },
                                { title: 'default', value: 'default' },
                                { title: 'large', value: 'large' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'prefix',
                title: {
                    label: '显示前缀',
                    tip: 'prefix | 显示前缀',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'suffix',
                title: {
                    label: '显示后缀',
                    tip: 'suffix | 显示后缀',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'icons',
                title: {
                    label: '配置图标',
                    tip: 'icons | 配置图标',
                },
                setter: [
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'up',
                                        title: 'up',
                                        setter: [
                                            { componentName: 'SlotSetter' },
                                        ],
                                    },
                                    {
                                        name: 'down',
                                        title: 'down',
                                        setter: [
                                            { componentName: 'SlotSetter' },
                                        ],
                                    },
                                    {
                                        name: 'plus',
                                        title: 'plus',
                                        setter: [
                                            { componentName: 'SlotSetter' },
                                        ],
                                    },
                                    {
                                        name: 'minus',
                                        title: 'minus',
                                        setter: [
                                            { componentName: 'SlotSetter' },
                                        ],
                                    },
                                ]
                            }
                        }
                    },
                ],
            },
            {
                name: 'formatter',
                title: {
                    label: '定义输入框展示值',
                    tip: 'formatter | 定义输入框展示值',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'formatter',
                            template: "\n\n  formatter(value, info, ${extParams}) {\n    // 定义输入框展示值\n    console.log('formatter', value);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'parser',
                title: {
                    label: '从formatter转换为数字',
                    tip: 'parser | 从 formatter 转换为数字，和 formatter 搭配使用',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'parser',
                            template: "\n\n  parser(value, ${extParams}) {\n    // 定义输入框展示值\n    console.log('parser', value);\n  }\n"
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
                    name: 'onBlur',
                    description: '输入框失去聚焦事件的回调',
                    template: "\n\n  onBlur(event, ${extParams}) {\n    // 输入框失去聚焦事件的回调\n    console.log('onBlur', event);\n  }\n",
                },
                {
                    name: 'onChange',
                    description: '变化回调',
                    template: "\n\n  onChange(value, ${extParams}) {\n    // 变化回调\n    console.log('onChange', value);\n  }\n",
                },
                {
                    name: 'onFocus',
                    description: '输入框聚焦事件的回调',
                    template: "\n\n  onFocus(event, ${extParams}) {\n    // 输入框聚焦事件的回调\n    console.log('onFocus', event);\n  }\n",
                },
                {
                    name: 'onKeyDown',
                    description: '键盘事件回调',
                    template: "\n\n  onKeyDown(event, ${extParams}) {\n    // 键盘事件回调\n    console.log('onKeyDown', event);\n  }\n",
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
