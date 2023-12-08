import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "InputTag"
const componentTitle: string = "标签输入框"

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
                    label: '控件值',
                    tip: 'value | 控件值(Array)',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'allowClear',
                title: {
                    label: '允许清除',
                    tip: 'allowClear | 允许清除',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'animation',
                title: {
                    label: '是否为内部标签变化添加动画',
                    tip: 'animation | 是否为内部标签变化添加动画',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'autoFocus',
                title: {
                    label: '自动聚焦',
                    tip: 'autoFocus | 自动聚焦',
                },
                setter: [
                    { componentName: 'BoolSetter' },
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
                name: 'dragToSort',
                title: {
                    label: '可通过拖拽为Tag排序',
                    tip: 'dragToSort | 是否可以通过拖拽为 Tag 排序',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'labelInValue',
                title: {
                    label: '设置传入和回调出的值均为对象格式',
                    tip: 'labelInValue | 设置传入和回调出的值均为 { label: \'\', value: \'\'} 格式。',
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
                name: 'saveOnBlur',
                title: {
                    label: '在失焦时自动存储正在输入的文本',
                    tip: 'saveOnBlur | 是否在失焦时自动存储正在输入的文本',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'inputValue',
                title: {
                    label: '控件的输入框内的值',
                    tip: 'inputValue | 控件的输入框内的值',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'placeholder',
                title: {
                    label: '预设文案',
                    tip: 'placeholder | 预设文案',
                },
                setter: [
                    { componentName: 'StringSetter' },
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
                                { title: 'warning', value: 'warning' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'addAfter',
                title: {
                    label: '输入框后添加元素',
                    tip: 'addAfter | 输入框后添加元素',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'addBefore',
                title: {
                    label: '输入框前添加元素',
                    tip: 'addBefore | 输入框前添加元素',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'prefix',
                title: {
                    label: '添加前缀文字或者图标',
                    tip: 'prefix | 添加前缀文字或者图标',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'suffix',
                title: {
                    label: '后缀',
                    tip: 'suffix | 后缀',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '默认值',
                    tip: 'defaultValue | 默认值',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'icon',
                title: {
                    label: '自定义图标',
                    tip: 'icon | 自定义图标',
                },
                setter: [
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'removeIcon',
                                        title: 'removeIcon',
                                        setter: { componentName: 'SlotSetter' }
                                    },
                                    {
                                        name: 'clearIcon',
                                        title: 'clearIcon',
                                        setter: { componentName: 'SlotSetter' }
                                    },
                                ]
                            }
                        }
                    },
                ],
            },
            {
                name: 'tokenSeparators',
                title: {
                    label: '触发自动分词的分隔符',
                    tip: 'tokenSeparators | 触发自动分词的分隔符',
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
                name: 'validate',
                title: {
                    label: '校验函数',
                    tip: 'validate | 校验函数，默认在 按下enter时候触发',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'validate',
                            template: "\n\n  validate(inputValue, values, ${extParams}) {\n    // 校验函数，默认在 按下enter时候触发\n    console.log('validate', inputValue);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'renderTag',
                title: {
                    label: '自定义标签渲染',
                    tip: 'renderTag | 自定义标签渲染，props 为当前标签属性，index 为当前标签的顺序，values 为所有标签的值',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['option', 'index', 'values'],
                            value: [],
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
                    description: '失去焦点时候触发',
                    template: "\n\n  onBlur(event, ${extParams}) {\n    // 失去焦点时候触发\n    console.log('onBlur', event);\n  }\n",
                },
                {
                    name: 'onChange',
                    description: '控件值改变时触发',
                    template: "\n\n  onChange(values, reason, ${extParams}) {\n    // 控件值改变时触发\n    console.log('onChange', values);\n  }\n",
                },
                {
                    name: 'onClear',
                    description: '点击清除按钮的回调',
                    template: "\n\n  onClear(${extParams}) {\n    // 点击清除按钮的回调\n    console.log('onClear');\n  }\n",
                },
                {
                    name: 'onFocus',
                    description: '聚焦时触发',
                    template: "\n\n  onFocus(event, ${extParams}) {\n    // 聚焦时触发\n    console.log('onFocus', event);\n  }\n",
                },
                {
                    name: 'onInputChange',
                    description: '输入框文本改变的回调',
                    template: "\n\n  onInputChange(inputValue, event, ${extParams}) {\n    // 输入框文本改变的回调\n    console.log('onInputChange', inputValue);\n  }\n",
                },
                {
                    name: 'onKeyDown',
                    description: '键盘事件回调',
                    template: "\n\n  onKeyDown(event, ${extParams}) {\n    // 键盘事件回调\n    console.log('onKeyDown', event);\n  }\n",
                },
                {
                    name: 'onPaste',
                    description: '输入框文本粘贴的回调',
                    template: "\n\n  onPaste(event, ${extParams}) {\n    // 输入框文本粘贴的回调\n    console.log('onPaste', event);\n  }\n",
                },
                {
                    name: 'onPressEnter',
                    description: '按 enter 键触发',
                    template: "\n\n  onPressEnter(event, ${extParams}) {\n    // 按 enter 键触发\n    console.log('onPressEnter', event);\n  }\n",
                },
                {
                    name: 'onRemove',
                    description: '移除某一个标签时改变时触发',
                    template: "\n\n  onRemove(value, index, event, ${extParams}) {\n    // 移除某一个标签时改变时触发\n    console.log('onRemove', value);\n  }\n",
                },
            ],
            style: true
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
