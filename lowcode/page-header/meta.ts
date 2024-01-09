import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "PageHeader"
const componentTitle: string = "页头"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'extra',
                title: {
                    label: '展示额外内容',
                    tip: 'extra | 展示额外内容',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'footer',
                title: {
                    label: '底部内容',
                    tip: 'footer | 底部内容',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'title',
                title: {
                    label: '主标题',
                    tip: 'title | 主标题',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'subTitle',
                title: {
                    label: '次级标题',
                    tip: 'subTitle | 次级标题',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'backIcon',
                title: {
                    label: '返回图标',
                    tip: 'backIcon | 返回图标，设置为 false 时会隐藏图标',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'breadcrumb',
                title: {
                    label: '面包屑',
                    tip: 'breadcrumb | 面包屑，接受面包屑的所有属性, BreadcrumbProps',
                },
                setter: [
                    { componentName: 'JsonSetter' },
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
                ...baseEvents,
                {
                    name: 'onBack',
                    description: '点击返回图标的回调',
                    template: "\n\n  onBack(event, ${extParams}) {\n    // 点击返回图标的回调\n    console.log('onBack', event);\n  }\n",
                },
            ],
            style: true,
        },
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
                title: 'ArcoDesign',
                subTitle: 'This is a description',
                extra: {
                    type: "JSSlot",
                    value: [
                        {
                            componentName: "RadioGroup",
                            props: {
                                type: "button",
                                defaultValue: "small"
                            },
                            title: "单选框组",
                            children: [
                                {
                                    componentName: "Radio",
                                    props: {
                                        children: "large",
                                        value: "large"
                                    },
                                    title: "单选框",
                                },
                                {
                                    componentName: "Radio",
                                    props: {
                                        children: "medium",
                                        value: "medium"
                                    },
                                    title: "单选框",
                                },
                                {
                                    componentName: "Radio",
                                    props: {
                                        children: "small",
                                        value: "small"
                                    },
                                    title: "单选框",
                                }
                            ]
                        }
                    ],
                    title: "插槽容器",
                }
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
