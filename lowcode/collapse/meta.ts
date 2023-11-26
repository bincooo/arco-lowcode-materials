import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Collapse"
const componentTitle: string = "折叠面板"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'accordion',
                title: {
                    label: '手风琴模式',
                    tip: 'accordion | 是否是手风琴模式',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'bordered',
                title: {
                    label: '无边框样式',
                    tip: 'bordered | 无边框样式',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'destroyOnHide',
                title: {
                    label: '折叠是否销毁',
                    tip: 'destroyOnHide | 是否销毁被折叠的面板',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'lazyload',
                title: {
                    label: '挂载时不渲染隐藏的面板',
                    tip: 'lazyload | 设置为 true 时，挂载时不会渲染被隐藏的面板。',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'expandIcon',
                title: {
                    label: '自定义展开图标',
                    tip: 'expandIcon | 自定义展开图标',
                },
                setter: { componentName: 'SlotSetter' }
            },
            {
                name: 'activeKey',
                title: {
                    label: '当前面板选中值',
                    tip: 'activeKey | 当前面板选中值',
                },
                setter: [
                    { componentName: 'StringSetter', condition: () => true },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    }
                ]
            },
            {
                name: 'defaultActiveKey',
                title: {
                    label: '默认展开的面板',
                    tip: 'defaultActiveKey | 默认展开的面板',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    }
                ]
            },
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: '',
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '数据显示',
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
                    description: '展开面板改变时触发',
                    template: "\n\n  onChange(event, ${extParams}) {\n    // 展开面板改变时触发\n    console.log('onChange', event);\n  }\n"
                }
            ],
            style: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'CollapseItem' ]
            }
        },
        advanced: {
            initialChildren: [
                {
                    componentName: 'CollapseItem',
                    props: {
                        name: '1',
                        header: {
                            type: 'JSSlot',
                            value: [
                            ],
                        },
                    },
                    children: {
                        type: 'JSSlot',
                        value: [
                            {
                                componentName: 'Basic',
                                props: {
                                    tag: 'p',
                                    children: "ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around\n        the world. Toutiao started out as a news recommendation engine and gradually evolved into a\n        platform delivering content in various formats, such as texts, images, question-and-answer\n        posts, microblogs, and videos."
                                },
                            }
                        ],
                    }
                }
            ]
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: '',
        schema: {
            componentName,
            title: componentTitle,
            props: {
                defaultActiveKey: '1'
            }
        }
    },
];

export default {
  ...Metadata,
  snippets
};
