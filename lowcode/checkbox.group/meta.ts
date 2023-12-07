import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "CheckboxGroup"
const componentTitle: string = "复选框组"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'disabled',
                title: {
                    label: '整组失效',
                    tip: 'disabled | 整组失效',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'direction',
                title: {
                    label: '方向',
                    tip: 'direction | 方向',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'horizontal', value: 'horizontal' },
                                { title: 'vertical', value: 'vertical' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '默认选中的选项',
                    tip: 'defaultValue | 默认选中的选项',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'options',
                title: {
                    label: '可选项',
                    tip: 'options | 可选项',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: {
                                componentName: 'ObjectSetter',
                                props: {
                                    config: {
                                        items: [
                                            {
                                                name: 'disabled',
                                                title: 'disabled',
                                                setter: { componentName: 'BoolSetter' }
                                            },
                                            {
                                                name: 'label',
                                                title: 'label',
                                                setter: { componentName: 'SlotSetter' }
                                            },
                                            {
                                                name: 'icon',
                                                title: 'icon',
                                                setter: { componentName: 'SlotSetter' }
                                            },
                                        ]
                                    }
                                }
                            },
                        }
                    }
                ],
            },
            {
                name: 'value',
                title: {
                    label: '选中的选项',
                    tip: 'value | 选中的选项（受控模式）',
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
    npm: pack("Checkbox", "Group"),
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
                    description: '变化时的回调函数',
                    template: "\n\n  onChange(value, event, ${extParams}) {\n    // 变化时的回调函数\n    console.log('onChange', event);\n  }\n",
                },
            ],
            style: true
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'Checkbox' ]
            }
        },
        advanced: {
            initialChildren: [
                {
                    componentName: "Checkbox",
                    props: {
                        children: "选项1"
                    },
                    title: "复选框",
                },
                {
                    componentName: "Checkbox",
                    props: {
                        children: "选项2"
                    },
                    title: "复选框",
                },
                {
                    componentName: "Checkbox",
                    props: {
                        children: "选项2"
                    },
                    title: "复选框",
                },
            ]
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
