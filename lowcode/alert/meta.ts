import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Alert"
const componentTitle: string = "警告提示"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'title',
                title: {
                    label: '标题',
                    tip: 'title | 标题',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'content',
                title: {
                    label: '内容',
                    tip: 'content | 内容',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'banner',
                title: {
                    label: '用作顶部公告',
                    tip: 'banner | 是否用作顶部公告',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'closable',
                title: {
                    label: '是否可关闭',
                    tip: 'closable | 是否可关闭',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'showIcon',
                title: {
                    label: '显示图标',
                    tip: 'showIcon | 是否显示图标',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'type',
                title: {
                    label: '警告的类型',
                    tip: 'type | 警告的类型',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'info', value: 'info' },
                                { title: 'succ', value: 'success' },
                                { title: 'warn', value: 'warning' },
                                { title: 'err', value: 'error' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'action',
                title: {
                    label: '自定义操作项',
                    tip: 'action | 自定义操作项',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'closeElement',
                title: {
                    label: '自定义关闭按钮',
                    tip: 'closeElement | 自定义关闭按钮',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'icon',
                title: {
                    label: '指定自定义图标',
                    tip: 'icon | 可以指定自定义图标，showIcon 为 true 时生效',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'afterClose',
                title: {
                    label: '关闭动画结束后执行的回调',
                    tip: 'afterClose | 关闭动画结束后执行的回调',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'afterClose',
                            template: "\n\n  afterClose(${extParams}) {\n    // 关闭动画结束后执行的回调\n    console.log('afterClose');\n  }\n"
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
    category: '反馈',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                {
                    name: 'onClose',
                    description: '关闭的回调',
                    template: "\n\n  onClose(event, ${extParams}) {\n    // 关闭的回调\n    console.log('onClose', event);\n  }\n",
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
                content: "Here is an example text"
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
