import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "AutoComplete"
const componentTitle: string = "自动补全"

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
                name: 'allowClear',
                title: {
                    label: '允许一键清除',
                    tip: 'allowClear | 是否允许一键清除'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultActiveFirstOption',
                title: {
                    label: '默认高亮第一个选项',
                    tip: 'defaultActiveFirstOption | 是否默认高亮第一个选项'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '禁用',
                    tip: 'disabled | 是否禁用'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'loading',
                title: {
                    label: '处于加载状态',
                    tip: 'loading | 是否处于加载状态。'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'strict',
                title: {
                    label: '大小写敏感',
                    tip: 'strict | true 的时候大小写敏感'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '自动补全组件的默认值',
                    tip: 'defaultValue | 自动补全组件的默认值'
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'placeholder',
                title: {
                    label: '输入框提示',
                    tip: 'placeholder | 输入框提示'
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'value',
                title: {
                    label: '自动补全组件的值',
                    tip: 'value | 自动补全组件的值（受控模式）'
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'status',
                title: {
                    label: '状态',
                    tip: 'status | 状态'
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
                name: 'data',
                title: {
                    label: '自动完成的数据源',
                    tip: 'data | 自动完成的数据源'
                },
                setter: [
                    { componentName: 'JsonSetter', },
                ],
            },
            {
                name: 'inputProps',
                title: {
                    label: '传递Input组件的属性',
                    tip: 'inputProps | 传递 Input 组件的属性。`Partial<InputProps>`'
                },
                setter: [
                    { componentName: 'JsonSetter', },
                ],
            },
            {
                name: 'triggerProps',
                title: {
                    label: '可以接受所有Trigger的Props',
                    tip: 'triggerProps | 可以接受所有 Trigger 的 Props。`Partial<TriggerProps>`'
                },
                setter: [
                    { componentName: 'JsonSetter', },
                ],
            },
            {
                name: 'virtualListProps',
                title: {
                    label: '传递虚拟滚动属性',
                    tip: 'virtualListProps | 传递虚拟滚动属性。`AvailableVirtualListProps`'
                },
                setter: [
                    { componentName: 'JsonSetter', },
                ],
            },
            {
                name: 'dropdownRender',
                title: {
                    label: '自定义弹出内容',
                    tip: 'dropdownRender | 自定义弹出内容。'
                },
                propType: 'func',
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['menu'],
                            value: [],
                        },
                    },
                ],
            } as any,
            {
                name: 'filterOption',
                title: {
                    label: '根据输入的值筛选数据',
                    tip: 'filterOption | 是否根据输入的值筛选数据。如果传入函数的话，接收 inputValue 和 option 两个参数，当option符合筛选条件时，返回 true，反之返回 false。'
                },
                setter: [
                    { componentName: 'BoolSetter', },
                    { componentName: 'FunctionSetter', },
                ],
            },
            {
                name: 'getPopupContainer',
                title: {
                    label: '弹出框挂载的父节点',
                    tip: 'getPopupContainer | 弹出框挂载的父节点。'
                },
                setter: [
                    { componentName: 'FunctionSetter', },
                ],
            },
            {
                name: 'triggerElement',
                title: {
                    label: '自定义触发元素',
                    tip: 'triggerElement | 自定义触发元素'
                },
                propType: [ 'func', 'boolean' ],
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['option'],
                            value: [],
                        },
                    },
                ],
            } as any,
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
                    description: '失去焦点的回调',
                    template: "\n\n  onBlur(event, ${extParams}) {\n    // 失去焦点的回调\n    console.log('onBlur', event);\n  }\n",
                },
                {
                    name: 'onChange',
                    description: '输入或者点击补全项',
                    template: "\n\n  onChange(event, ${extParams}) {\n    // 输入或者点击补全项，value 改变时的回调（仅在点击补全项时存在第二个参数）\n    console.log('onChange', event);\n  }\n",
                },
                {
                    name: 'onFocus',
                    description: '聚焦时的回调',
                    template: "\n\n  onFocus(event, ${extParams}) {\n    // 聚焦时的回调\n    console.log('onFocus', event);\n  }\n",
                },
                {
                    name: 'onPressEnter',
                    description: '按下回车键的回调',
                    template: "\n\n  onPressEnter(event, activeOption, ${extParams}) {\n    // 按下回车键的回调\n    console.log('onPressEnter', event);\n  }\n",
                },
                {
                    name: 'onSearch',
                    description: '搜索补全时的回调',
                    template: "\n\n  onSearch(event, ${extParams}) {\n    // 搜索补全时的回调\n    console.log('onSearch', event);\n  }\n",
                },
                {
                    name: 'onSelect',
                    description: '点击补全项时的回调',
                    template: "\n\n  onSelect(event, option, ${extParams}) {\n    // 点击补全项时的回调\n    console.log('onSelect', event);\n  }\n",
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
                placeholder: 'Please Enter',
                style: {
                    width: 320
                }
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
