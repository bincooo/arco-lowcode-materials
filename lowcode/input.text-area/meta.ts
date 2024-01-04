import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "TextAreaInput"
const componentTitle: string = "文本域输入框"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
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
                name: 'placeholder',
                title: {
                    label: '输入框提示文字',
                    tip: 'placeholder | 输入框提示文字',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'value',
                title: {
                    label: '值',
                    tip: 'value | 值',
                },
                setter: [
                    { componentName: 'StringSetter' },
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
                name: 'clearIcon',
                title: {
                    label: '清除按钮的图标',
                    tip: 'clearIcon | allowClear 时配置清除按钮的图标',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'autoSize',
                title: {
                    label: '是否自动调整输入框的高度',
                    tip: 'autoSize | 是否自动调整输入框的高度',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'maxLength',
                title: {
                    label: '输入框最大输入的长度',
                    tip: 'maxLength | 输入框最大输入的长度；设置 errorOnly为 true 后，超过 maxLength 会展示 error 状态，并不限制用户输入',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'wrapperStyle',
                title: {
                    label: '字数统计标签包裹样式',
                    tip: 'wrapperStyle | 开启字数统计之后，会在 textarea 标签外包一层 div，wrapperStyle 用来配置这个 div 的样式',
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
    npm: pack("Input", "TextArea"),
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
                    description: '输入时的回调',
                    template: "\n\n  onChange(value, event, ${extParams}) {\n    // 输入时的回调\n    console.log('onChange', value);\n  }\n",
                },
                {
                    name: 'onClear',
                    description: '点击清除按钮的回调',
                    template: "\n\n  onClear(${extParams}) {\n    // 点击清除按钮的回调\n    console.log('onClear');\n  }\n",
                },
                {
                    name: 'onPressEnter',
                    description: '按下回车键的回调',
                    template: "\n\n  onPressEnter(event, ${extParams}) {\n    // 按下回车键的回调\n    console.log('onPressEnter', event);\n  }\n",
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
