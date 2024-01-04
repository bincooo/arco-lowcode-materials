import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "CollapseItem"
const componentTitle: string = "折叠面板子组件"
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
                    { componentName: 'StringSetter', condition: () => true },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'destroyOnHide',
                title: {
                    label: '面板被折叠时销毁',
                    tip: 'destroyOnHide | 面板被折叠时是否销毁节点，优先级高于 Collapse 的 destroyOnHide',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'disabled',
                title: {
                    label: '是否禁用',
                    tip: 'disabled | 是否禁用',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'showExpandIcon',
                title: {
                    label: '展示展开按钮',
                    tip: 'showExpandIcon | 是否展示展开按钮',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'name',
                isRequired: true,
                title: {
                    label: '名字',
                    tip: 'name | 对应 activeKey，当前面板组件的的唯一标识',
                },
                setter: { componentName: 'StringSetter' }
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
                name: 'extra',
                title: {
                    label: '额外节点',
                    tip: 'extra | 额外节点',
                },
                setter: { componentName: 'SlotSetter' }
            },
            {
                name: 'header',
                title: {
                    label: '折叠面板头部内容',
                    tip: 'header | 折叠面板头部内容，允许自定义',
                },
                setter: { componentName: 'SlotSetter' }
            },
            {
                name: 'contentStyle',
                title: {
                    label: '内容区附加样式',
                    tip: 'contentStyle | 内容区域的附加样式。',
                },
                setter: { componentName: 'JsonSetter' }
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
    npm: pack("Collapse", "Item"),
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
            nestingRule: {
                parentWhitelist: [ 'Collapse' ]
            }
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
                name: '1',
                header: {
                    type: 'JSSlot',
                    value: [
                    ],
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
                } as any
            }
        }
    },
];

export default {
  ...Metadata,
  snippets
};
