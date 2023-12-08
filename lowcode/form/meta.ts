import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Form"
const componentTitle: string = "表单"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'id',
                title: {
                    label: '表单控件Id',
                    tip: 'id | 设置后，会作为表单控件 id的前缀。',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '控件是否可用',
                    tip: 'disabled | 统一配置表单控件是否可用',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'labelAlign',
                title: {
                    label: '标签的文本对齐方式',
                    tip: 'labelAlign | 标签的文本对齐方式',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            optinos: [
                                { title: 'left', value: 'left' },
                                { title: 'right', value: 'right' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'layout',
                title: {
                    label: '表单的布局',
                    tip: 'layout | 表单的布局，有三种布局，水平、垂直、多列',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            optinos: [
                                { title: 'horizontal', value: 'horizontal' },
                                { title: 'vertical', value: 'vertical' },
                                { title: 'inline', value: 'inline' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'requiredSymbol',
                title: {
                    label: '在required的时候显示加重的红色星号',
                    tip: 'requiredSymbol | 是否在 required 的时候显示加重的红色星号，设置 position 可选择将星号置于 label 前/后',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'position',
                                        title: 'position',
                                        setter: {
                                            componentName: 'RadioGroupSetter',
                                            props: {
                                                optinos: [
                                                    { title: 'start', value: 'start' },
                                                    { title: 'end', value: 'end' },
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
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
                            optinos: [
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
                name: 'colon',
                title: {
                    label: '显示标签后的一个冒号',
                    tip: 'colon | 是否显示标签后的一个冒号，优先级小于 Form.Item 中 colon 的优先级。(ReactNode in v2.41.0)',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'form',
                title: {
                    label: '表单实例',
                    tip: 'form | 表单实例：FormInstance<FormData, FieldValue, FieldKey>',
                },
                setter: [
                ],
            },
            {
                name: 'initialValues',
                title: {
                    label: '设置表单初始值',
                    tip: 'initialValues | 设置表单初始值',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'labelCol',
                title: {
                    label: '标签布局',
                    tip: 'labelCol | <label>标签布局，同<Grid.Col>组件接收的参数相同，可以配置span和offset值，会覆盖全局的labelCol设置',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'validateMessages',
                title: {
                    label: '校验提示信息模板',
                    tip: 'validateMessages | 校验提示信息模板',
                },
                setter: [
                ],
            },
            {
                name: 'validateTrigger',
                title: {
                    label: '触发验证的时机',
                    tip: 'validateTrigger | 触发验证的时机',
                },
                setter: [
                    { componentName: 'StringSetter', condition: () => true },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    },
                ],
            },
            {
                name: 'wrapper',
                title: {
                    label: '配置最外层标签',
                    tip: 'wrapper | 配置最外层标签，可以是 html 标签或是组件',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'wrapperCol',
                title: {
                    label: '控件布局',
                    tip: 'wrapperCol | 控件布局，同labelCol的设置方法一致，会覆盖全局的wrapperCol设置',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'wrapperProps',
                title: {
                    label: '传一些参数到wrapper上',
                    tip: 'wrapperProps | 配置 wrapper 之后，可以传一些参数到 wrapper 上',
                },
                setter: [
                    { componentName: 'JsonSetter' },
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
                    description: '表单项值改变时候触发',
                    template: "\n\n  onChange(value, values, ${extParams}) {\n    // 表单项值改变时候触发\n    console.log('onChange', value);\n  }\n",
                },
                {
                    name: 'onValuesChange',
                    description: '任意表单项值改变时候触发',
                    template: "\n\n  onValuesChange(value, values, ${extParams}) {\n    // 任意表单项值改变时候触发\n    console.log('onValuesChange', value);\n  }\n",
                },
                {
                    name: 'onSubmit',
                    description: '数据验证成功后回调事件',
                    template: "\n\n  onSubmit(values, ${extParams}) {\n    // 数据验证成功后回调事件\n    console.log('onSubmit', values);\n  }\n",
                },
                {
                    name: 'onSubmitFailed',
                    description: '数据验证失败后回调事件',
                    template: "\n\n  onSubmitFailed(errors, ${extParams}) {\n    // 数据验证失败后回调事件\n    console.log('onSubmitFailed', errors);\n  }\n",
                },
            ],
            style: true
        },
        component: {
            isContainer: true,
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: '', // require('./__screenshots__/icon.png'),
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
