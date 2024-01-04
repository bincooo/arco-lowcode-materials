import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Switch"
const componentTitle: string = "开关"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'checked',
                title: {
                    label: '开关是否打开',
                    tip: 'checked | 开关是否打开',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultChecked',
                title: {
                    label: '默认是否选中',
                    tip: 'defaultChecked | 默认是否选中',
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
                name: 'loading',
                title: {
                    label: '加载中状态',
                    tip: 'loading | 加载中状态',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'size',
                title: {
                    label: '开关的尺寸',
                    tip: 'size | 开关的尺寸，有 small 和 default 可供选择',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'small', value: 'small' },
                                { title: 'default', value: 'default' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'type',
                title: {
                    label: '三种样式类型',
                    tip: 'type | 三种样式类型',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'circle', value: 'circle' },
                                { title: 'round', value: 'round' },
                                { title: 'line', value: 'line' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'checkedIcon',
                title: {
                    label: '开关打开时图标',
                    tip: 'checkedIcon | 开关打开时，按钮上显示的图标',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'checkedText',
                title: {
                    label: '开关打开时的文案',
                    tip: 'checkedText | 开关打开时的文案，small 尺寸不生效',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'uncheckedIcon',
                title: {
                    label: '开关关闭时图标',
                    tip: 'uncheckedIcon | 开关关闭时，按钮上显示的图标',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'uncheckedText',
                title: {
                    label: '开关关闭时的文案',
                    tip: 'uncheckedText | 开关关闭时的文案，small 尺寸不生效',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
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
                    description: '点击开关的回调',
                    template: "\n\n  onChange(value, event, ${extParams}) {\n    // 点击开关的回调\n    console.log('onChange', value);\n  }\n",
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
