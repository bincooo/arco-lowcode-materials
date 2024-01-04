import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "VerificationCode"
const componentTitle: string = "验证码输入框"

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
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '默认值',
                    tip: 'defaultValue | 默认值',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '禁用',
                    tip: 'disabled | 禁用',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'masked',
                title: {
                    label: '密码模式',
                    tip: 'masked | 是否是密码模式',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'readOnly',
                title: {
                    label: '只读',
                    tip: 'readOnly | 只读',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'length',
                title: {
                    label: '验证码的长度',
                    tip: 'length | 验证码的长度，根据长度渲染对应个数的输入框',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'size',
                title: {
                    label: '尺寸',
                    tip: 'size | 不同尺寸',
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
                name: 'status',
                title: {
                    label: '状态',
                    tip: 'status | 状态',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'error', value: 'error' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'separator',
                title: {
                    label: '分隔符',
                    tip: 'separator | 分隔符。可在不同索引的输入框后自定义渲染分隔符',
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
                name: 'validate',
                title: {
                    label: '校验函数',
                    tip: 'validate | 校验函数，用户输入值改变时触发',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'validate',
                            template: "\n\n  validate(data, ${extParams}) {\n    //校验函数，用户输入值改变时触发\n    console.log('validate', data);\n  }\n"
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
                    description: '输入值改变时触发的回调',
                    template: "\n\n  onChange(value, ${extParams}) {\n    // 输入值改变时触发的回调\n    console.log('onChange', value);\n  }\n",
                },
                {
                    name: 'onFinish',
                    description: '输入框都被填充后触发的回调',
                    template: "\n\n  onFinish(value, ${extParams}) {\n    // 输入框都被填充后触发的回调\n    console.log('onFinish', value);\n  }\n",
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
                style: {
                    width: 230
                }
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
