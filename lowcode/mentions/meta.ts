import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Mentions"
const componentTitle: string = "提及输入框"

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
                    label: '输入框默认值',
                    tip: 'defaultValue | 输入框默认值',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'options',
                title: {
                    label: '下拉框可选项',
                    tip: 'options | 下拉框可选项(Array)',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'alignTextarea',
                title: {
                    label: '弹出框是否与输入框对齐',
                    tip: 'alignTextarea | 弹出框是否与输入框对齐',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'allowClear',
                title: {
                    label: '允许清空输入框',
                    tip: 'allowClear | 允许清空输入框',
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
                name: 'split',
                title: {
                    label: '选中项前后分隔符',
                    tip: 'split | 选中项前后分隔符',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'position',
                title: {
                    label: '下拉框的弹出位置',
                    tip: 'position | 下拉框的弹出位置',
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'top', value: 'top' },
                                { title: 'tl', value: 'tl' },
                                { title: 'tr', value: 'tr' },
                                { title: 'bottom', value: 'bottom' },
                                { title: 'bl', value: 'bl' },
                                { title: 'br', value: 'br' },
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
                name: 'notFoundContent',
                title: {
                    label: '下拉列表没有数据时显示的内容',
                    tip: 'notFoundContent | 下拉列表没有数据时显示的内容',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'autoSize',
                title: {
                    label: '自动调整输入框的高度',
                    tip: 'autoSize | 是否自动调整输入框的高度',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'prefix',
                title: {
                    label: '触发关键字',
                    tip: 'prefix | 触发关键字',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    },
                ],
            },
            {
                name: 'triggerProps',
                title: {
                    label: 'Trigger组件的Props',
                    tip: 'triggerProps | 可以接受所有 Trigger 组件的 Props',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'wrapperStyle',
                title: {
                    label: '字数统计包装样式',
                    tip: 'wrapperStyle | 开启字数统计之后，会在 textarea 标签外包一层 div，wrapperStyle 用来配置这个 div 的样式',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'filterOption',
                title: {
                    label: '根据输入的值筛选数据',
                    tip: 'filterOption | 是否根据输入的值筛选数据，可传入函数自定义过滤逻辑',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'filterOption',
                            template: "\n\n  filterOption(inputValue, option, ${extParams}) {\n    // 根据输入的值筛选数据\n    console.log('filterOption', inputValue);\n    return false;\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'getPopupContainer',
                title: {
                    label: '弹出框挂载的父节点',
                    tip: 'getPopupContainer | 弹出框挂载的父节点',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getPopupContainer',
                            template: "\n\n  getPopupContainer(node, ${extParams}) {\n    // 弹出框挂载的父节点\n    console.log('getPopupContainer', node);\n  }\n"
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
                    description: '失焦时的回调',
                    template: "\n\n  onBlur(event, ${extParams}) {\n    // 失焦时的回调\n    console.log('onBlur', event);\n  }\n",
                },
                {
                    name: 'onChange',
                    description: '输入改变时的回调',
                    template: "\n\n  onChange(value, ${extParams}) {\n    // 输入改变时的回调\n    console.log('onChange', value);\n  }\n",
                },
                {
                    name: 'onClear',
                    description: '点击清除按钮的回调',
                    template: "\n\n  onClear(${extParams}) {\n    // 点击清除按钮的回调\n    console.log('onClear');\n  }\n",
                },
                {
                    name: 'onFocus',
                    description: '聚焦时的回调',
                    template: "\n\n  onFocus(event, ${extParams}) {\n    // 聚焦时的回调\n    console.log('onFocus', event);\n  }\n",
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
