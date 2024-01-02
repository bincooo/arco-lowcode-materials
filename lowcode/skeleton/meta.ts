import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Skeleton"
const componentTitle: string = "骨架屏"

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
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'animation',
                title: {
                    label: '显示动画效果',
                    tip: 'animation | 是否显示动画效果',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'loading',
                title: {
                    label: '显示子组件',
                    tip: 'loading | 是否显示子组件。为 true 时候显示占位符',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'image',
                title: {
                    label: '显示图片占位',
                    tip: 'image | 是否显示图片占位',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'text',
                title: {
                    label: '显示文本占位',
                    tip: 'text | 是否显示文本占位',
                },
                setter: [
                    { componentName: 'BoolSetter' },
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
    npm: pack(componentName),
    category: '反馈',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
            ],
            style: true,
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
                children: {
                    type: "JSSlot",
                    title: "插槽容器",
                    value: [
                        {
                            componentName: "Basic",
                            props: {
                                tag: "div",
                                children: {
                                    type: "JSSlot",
                                    value: [
                                        {
                                            componentName: "Avatar",
                                            props: {
                                                children: "Arco",
                                                autoFixFontSize: false,
                                                size: 50,
                                                style: {
                                                    marginLeft: "8px",
                                                    marginRight: "8px"
                                                }
                                            },
                                            title: "头像",
                                        },
                                        {
                                            componentName: "Paragraph",
                                            props: {
                                                children: {
                                                    type: "JSSlot",
                                                    value: [
                                                        {
                                                            componentName: "Paragraph",
                                                            props: {
                                                                children: "This is content, this is content, this is content",
                                                                style: {
                                                                    margin: "0px"
                                                                }
                                                            },
                                                            title: "段落",
                                                        },
                                                        {
                                                            componentName: "Paragraph",
                                                            props: {
                                                                children: "This is content, this is content",
                                                                style: {
                                                                    margin: "0px"
                                                                }
                                                            },
                                                            title: "段落",
                                                        },
                                                        {
                                                            componentName: "Paragraph",
                                                            props: {
                                                                children: "This is content, this is content",
                                                                style: {
                                                                    margin: "0px"
                                                                }
                                                            },
                                                            title: "段落",
                                                        }
                                                    ],
                                                },
                                            },
                                            title: "段落",
                                        }
                                    ],
                                },
                                style: {
                                    display: "flex"
                                }
                            },
                            title: "div",
                        }
                    ]
                } as any,
                animation: true,
                image: {
                    shape: "circle"
                },
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
