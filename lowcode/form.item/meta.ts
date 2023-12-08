import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "FormItem"
const componentTitle: string = "表单子组件"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'field',
                title: {
                    label: '受控组件的唯一标示',
                    tip: 'field | 受控组件的唯一标示',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'initialValue',
                title: {
                    label: '设置控件初始值',
                    tip: 'initialValue | 设置控件初始值.(初始值，请不要使用受控组件的defaultValue了)',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'label',
                title: {
                    label: '标签的文本',
                    tip: 'label | 标签的文本',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
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
                name: 'disabled',
                title: {
                    label: '禁用',
                    tip: 'disabled | 是否禁用，优先级高于 Form 的 disabled 属性',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'hasFeedback',
                title: {
                    label: '显示校验图标',
                    tip: 'hasFeedback | 是否显示校验图标，配置 validateStatus 使用',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'hidden',
                title: {
                    label: '隐藏表单项',
                    tip: 'hidden | 隐藏表单项. 表单字段值仍然会被获取',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'required',
                title: {
                    label: '必选',
                    tip: 'required | 是否必选，会在 label 标签前显示加重红色符号，如果这里不设置，会从 rules 中寻找是否是 required',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'trigger',
                title: {
                    label: '接管子节点',
                    tip: 'trigger | 接管子节点，搜集子节点值的时机',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'triggerPropName',
                title: {
                    label: '子节点被接管的值的属性名',
                    tip: 'triggerPropName | 子节点被接管的值的属性名，默认是 value,比如 <Checkbox> 为 checked。',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'labelAlign',
                title: {
                    label: '标签的文本对齐方式',
                    tip: 'labelAlign | 标签的文本对齐方式，优先级高于 Form',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'left', value: 'left' },
                                { title: 'right', value: 'right' },
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
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'validateStatus',
                title: {
                    label: '校验状态',
                    tip: 'validateStatus | 校验状态',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'success', value: 'success' },
                                { title: 'warning', value: 'warning' },
                                { title: 'error', value: 'error' },
                                { title: 'validating', value: 'validating' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'extra',
                title: {
                    label: '额外的提示内容',
                    tip: 'extra | 额外的提示内容',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'help',
                title: {
                    label: '自定义校验文案',
                    tip: 'help | 自定义校验文案',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'dependencies',
                title: {
                    label: '设置依赖字段',
                    tip: 'dependencies | 设置依赖字段。当依赖的字段值改变时，触发自身的校验。如果是想动态渲染某个表单控件/表单区域，使用 shouldUpdate',
                },
                setter: [
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    },
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
                name: 'normalize',
                title: {
                    label: '将控件的value进行一定的转换再保存到form中',
                    tip: 'normalize | 将控件的 value 进行一定的转换再保存到form中',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'normalize',
                            template: "\n\n  normalize(value, prevValue, allValues, ${extParams}) {\n    // 将控件的 value 进行一定的转换再保存到form中\n    console.log('normalize', value);\n  }\n"
                        },
                    },
                ],
            },
            {
                name: 'noStyle',
                title: {
                    label: '不渲染任何外部标签/样式',
                    tip: 'noStyle | 不渲染任何外部标签/样式，只进行字段绑定。注意: 设置该属性为true时，该字段若未通过校验，错误信息将不会显示出来。可以传入对象，并设置 showErrorTip（ 2.5.0 开始支持） 为true，错误信息将会展示在上层 formItem 节点下。',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'rules',
                title: {
                    label: '受控模式下的验证规则',
                    tip: 'rules | 受控模式下的验证规则',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'shouldUpdate',
                title: {
                    label: '在其他控件值改变时候重新渲染当前区域',
                    tip: 'shouldUpdate | 是否在其他控件值改变时候重新渲染当前区域。设置为true时候，表单的任意改变都会重新渲染该区域。',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'shouldUpdate',
                            template: "\n\n  shouldUpdate(prevValues, currentValues, info, ${extParams}) {\n    // 在其他控件值改变时候重新渲染当前区域\n    console.log('shouldUpdate', currentValues);\n  }\n"
                        },
                    },
                ],
            },
            {
                name: 'tooltip',
                title: {
                    label: '提示文本',
                    tip: 'tooltip | 提示文本',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'validateTrigger',
                title: {
                    label: '触发验证的时机',
                    tip: 'validateTrigger | 触发验证的时机。取值和跟包裹的控件有关系，控件支持的触发事件，都可以作为值。例如Input支持的 onFocus、 onBlur、 onChange 都可以作为 validateTrigger 的值。传递为 [] 时，仅会在调用表单 validate 方法时执行校验规则。',
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
                name: 'formatter',
                title: {
                    label: '将Form内保存的当前控件对应的值进行一定的转换',
                    tip: 'formatter | 将Form内保存的当前控件对应的值进行一定的转换，再传递给控件',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'formatter',
                            template: "\n\n  formatter(value, ${extParams}) {\n    // 将Form内保存的当前控件对应的值进行一定的转换\n    console.log('formatter', value);\n  }\n"
                        },
                    },
                ],
            },
            {
                name: 'getValueFromEvent',
                title: {
                    label: '子节点触发onChange事件时如何处理值',
                    tip: 'getValueFromEvent | 指定在子节点触发onChange事件时如何处理值。（如果自定义了trigger属性，那么这里的参数就是对应的事件回调函数的参数类型）',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getValueFromEvent',
                            template: "\n\n  getValueFromEvent(...args, ${extParams}) {\n    // 将Form内保存的当前控件对应的值进行一定的转换\n    console.log('getValueFromEvent', args);\n  }\n"
                        },
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
    npm: pack("Form", "Item"),
    category: '数据输入',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                
            ],
            style: true
        },
        component: {
            isContainer: true,
            nestingRule: {
                parentWhitelist: [ 'Form', 'FormList' ],
                childWhitelist: (newNode: any, currentNode: any) => {
                    // 只允许拖入单个物料
                    return currentNode.isEmptyNode
                }
            }
        },
    },
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: '', // require('./__screenshots__/icon.png'),
        schema: {
            componentName,
            title: componentTitle,
            props: {
                label: "标签"
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
