import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';
const base: IPublicTypeFieldConfig[] = [
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
        name: 'showWordLimit',
        title: {
            label: '显示字数统计',
            tip: 'showWordLimit | 配合 maxLength，显示字数统计',
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
            label: '输入框的值',
            tip: 'value | 输入框的值，受控模式',
        },
        setter: [
            { componentName: 'StringSetter' },
        ],
    },
    {
        name: 'autoWidth',
        title: {
            label: '设置宽度自适应',
            tip: 'autoWidth | 设置宽度自适应。minWidth 默认为 0，maxWidth 默认为 100%',
        },
        setter: [
            { componentName: 'BoolSetter' },
            { componentName: 'JsonSetter' },
        ],
    },
    {
        name: 'normalizeTrigger',
        title: {
            label: '指定normalize执行的时机',
            tip: 'normalizeTrigger | 指定 normalize 执行的时机',
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
        name: 'size',
        title: {
            label: '输入框的尺寸',
            tip: 'size | 输入框的尺寸',
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
            label: '添加后缀文字或者图标',
            tip: 'suffix | 添加后缀文字或者图标',
        },
        setter: [
            { componentName: 'StringSetter' },
            { componentName: 'SlotSetter' },
        ],
    },
    {
        name: 'afterStyle',
        title: {
            label: '输入框后添加元素的样式',
            tip: 'afterStyle | 输入框后添加元素的样式',
        },
        setter: [
            { componentName: 'JsonSetter' },
        ],
    },
    {
        name: 'beforeStyle',
        title: {
            label: '输入框前添加元素的样式',
            tip: 'beforeStyle | 输入框前添加元素的样式',
        },
        setter: [
            { componentName: 'JsonSetter' },
        ],
    },
    {
        name: 'height',
        title: {
            label: '自定义输入框高度',
            tip: 'height | 自定义输入框高度',
        },
        setter: [
            { componentName: 'NumberSetter' },
            { componentName: 'StringSetter' },
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
            { componentName: 'ObjectSetter' },
        ],
    },
    {
        name: 'normalize',
        title: {
            label: '在指定时机对用户输入的值进行格式化处理',
            tip: 'normalize | 在指定时机对用户输入的值进行格式化处理。前后值不一致时，会触发 onChange',
        },
        setter: [
            { componentName: 'StringSetter' },
            {
                componentName: 'FunctionSetter',
                props: {
                    name: 'normalize',
                    template: "\n\n  normalize(value, ${extParams}) {\n    // 在指定时机对用户输入的值进行格式化处理\n    console.log('normalize', value);\n  }\n"
                }
            },
        ],
    },
]
export default base

export const events = [
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
]