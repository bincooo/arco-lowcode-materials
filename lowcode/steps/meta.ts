import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Steps"
const componentTitle: string = "步骤"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'lineless',
                title: {
                    label: '无连接线模式',
                    tip: 'lineless | 无连接线模式',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'current',
                title: {
                    label: '当前步数',
                    tip: 'current | 当前步数',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'direction',
                title: {
                    label: '显示方向',
                    tip: 'direction | 显示方向',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'vertical', value: 'vertical' },
                                { title: 'horizontal', value: 'horizontal' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'labelPlacement',
                title: {
                    label: '标签描述文字放置的位置',
                    tip: 'labelPlacement | 标签描述文字放置的位置，默认 horizontal 水平放在图标右侧，可选 vertical 放在图标下方',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'vertical', value: 'vertical' },
                                { title: 'horizontal', value: 'horizontal' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'size',
                title: {
                    label: '步骤条的尺寸',
                    tip: 'size | 步骤条的尺寸',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'default', value: 'default' },
                                { title: 'small', value: 'small' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'status',
                title: {
                    label: '当前步数的节点状态',
                    tip: 'status | 当前步数的节点状态',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'wait', value: 'wait' },
                                { title: 'proc', value: 'process' },
                                { title: 'finish', value: 'finish' },
                                { title: 'error', value: 'error' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'type',
                title: {
                    label: '节点样式类型',
                    tip: 'type | 节点样式类型',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'def', value: 'default' },
                                { title: 'arrow', value: 'arrow' },
                                { title: 'dot', value: 'dot' },
                                { title: 'nav', value: 'navigation' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'customDot',
                title: {
                    label: '自定义步骤条节点',
                    tip: 'customDot | 自定义步骤条节点 ，不支持箭头模式',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['dot', 'config'],
                            value: [],
                        },
                    },
                ],
            },
        ]
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '导航',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                {
                    name: 'onChange',
                    description: '点击步骤切换的回调',
                    template: "\n\n  onChange(current, id, ${extParams}) {\n    // 点击步骤切换的回调，设置这个属性后，步骤条可点击切换\n    console.log('onChange', current);\n  }\n",
                },
            ],
            style: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'StepsStep' ]
            }
        },
        advanced: {
            initialChildren: [
                {
                    componentName: 'StepsStep',
                    props: {
                        title: 'Succeeded',
                        description: 'This is a description',
                    }
                },
                {
                    componentName: 'StepsStep',
                    props: {
                        title: 'Processing',
                        description: 'This is a description',
                    }
                },
                {
                    componentName: 'StepsStep',
                    props: {
                        title: 'Pending',
                        description: 'This is a description',
                    }
                },
            ]
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
                type: 'arrow',
                current: 1,
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
