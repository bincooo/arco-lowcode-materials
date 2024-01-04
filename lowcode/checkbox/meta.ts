import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Checkbox"
const componentTitle: string = "复选框"

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
                name: 'checked',
                title: {
                    label: '是否选中',
                    tip: 'checked | 是否选中'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultChecked',
                title: {
                    label: '默认是否选中',
                    tip: 'defaultChecked | 默认是否选中'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '是否禁用',
                    tip: 'disabled | 是否禁用'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'error',
                title: {
                    label: '错误样式',
                    tip: 'error | 错误样式'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'indeterminate',
                title: {
                    label: '半选状态',
                    tip: 'indeterminate | 半选状态'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'icon',
                title: {
                    label: '自定义IconCheck',
                    tip: 'icon | 自定义 IconCheck'
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'value',
                title: {
                    label: '复选框的value属性',
                    tip: 'value | 复选框的value属性'
                },
                setter: [
                    { componentName: 'StringSetter' },
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
                    description: '点击复选框的回调',
                    template: "\n\n  onChange(checked, event, ${extParams}) {\n    // 点击复选框的回调\n    console.log('onChange', event);\n  }\n",
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
                children: "选项"
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
