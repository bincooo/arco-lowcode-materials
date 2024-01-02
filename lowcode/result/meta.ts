import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Result"
const componentTitle: string = "结果页"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'status',
                title: {
                    label: '状态',
                    tip: 'status | 不同状态，传入 null 时，需要通过 icon 属性设置图标，并且默认没有背景色以及图标颜色',
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'success', value: 'success' },
                                { title: 'error', value: 'error' },
                                { title: 'info', value: 'info' },
                                { title: 'warning', value: 'warning' },
                                { title: '404', value: '404' },
                                { title: '403', value: '403' },
                                { title: '500', value: '500' },
                                { title: 'null', value: null },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'icon',
                title: {
                    label: '自定义图标',
                    tip: 'icon | 自定义图标',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'extra',
                title: {
                    label: '额外内容',
                    tip: 'extra | 额外内容',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'title',
                title: {
                    label: '标题文字',
                    tip: 'title | 标题文字',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'subTitle',
                title: {
                    label: '子标题文字',
                    tip: 'subTitle | 子标题文字',
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
                status: 'success',
                title: 'Success message',
                subTitle: 'This is a success description.',
                extra: {
                    type: "JSSlot",
                    value: [
                      {
                        componentName: "Space",
                        title: "间距",
                        children: [
                            {
                                componentName: "Button",
                                props: {
                                    type: "secondary",
                                    children: "secondary"
                                },
                                title: "次级按钮",
                            },
                            {
                                componentName: "Button",
                                props: {
                                    type: "primary",
                                    children: "primary"
                                },
                                title: "主要按钮",
                            }
                        ]
                      }
                    ],
                  }
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
