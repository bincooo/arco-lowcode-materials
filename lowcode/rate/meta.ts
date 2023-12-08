import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Rate"
const componentTitle: string = "评分"

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
                    label: '星的个数',
                    tip: 'value | 星的个数，受控值',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '默认值',
                    tip: 'defaultValue | 默认值',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'allowClear',
                title: {
                    label: '是否允许清除',
                    tip: 'allowClear | 是否允许清除',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'allowHalf',
                title: {
                    label: '是否允许半选',
                    tip: 'allowHalf | 是否允许半选',
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
                name: 'grading',
                title: {
                    label: '笑脸分级',
                    tip: 'grading | 笑脸分级',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'readonly',
                title: {
                    label: '是否只读',
                    tip: 'readonly | 是否只读',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'count',
                title: {
                    label: '星的总数',
                    tip: 'count | 星的总数',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'tooltips',
                title: {
                    label: '自定义每一项的提示信息',
                    tip: 'tooltips | 自定义每一项的提示信息(Array)',
                },
                setter: [
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    },
                    { componentName: 'JsonSetter' }
                ],
            },
            {
                name: 'character',
                title: {
                    label: '自定义字符',
                    tip: 'character | 自定义字符',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['index'],
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
                    name: 'onChange',
                    description: '选择时的回调',
                    template: "\n\n  onChange(value, ${extParams}) {\n    // 选择时的回调\n    console.log('onChange', value);\n  }\n",
                },
                {
                    name: 'onHoverChange',
                    description: '鼠标经过时数值变化的回调',
                    template: "\n\n  onHoverChange(value, ${extParams}) {\n    // 鼠标经过时数值变化的回调\n    console.log('onHoverChange', value);\n  }\n",
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
                children: '单选'
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
