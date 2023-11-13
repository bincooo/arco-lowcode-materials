import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Link"
const componentTitle: string = "链接"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'href',
                title: '链接',
                setter: [
                    { componentName: 'StringSetter' }
                ]
            },
            {
                name: 'disabled',
                title: '是否禁用',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'hoverable',
                title: {
                    label: '是否有底色',
                    tip: 'hoverable | 悬浮状态是否有底色'
                },
                defaultValue: true,
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'status',
                title: {
                    label: '不同状态',
                    tip: 'status | 不同状态: error 错误、success 成功、warning 警告'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                {
                                    title: 'Error',
                                    value: 'error'
                                },
                                {
                                    title: 'Success',
                                    value: 'success'
                                },
                                {
                                    title: 'Warning',
                                    value: 'warning'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: 'icon',
                title: '图标',
                setter: [
                    { componentName: 'SlotSetter' }
                ]
            }
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
    category: '通用',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: baseEvents,
            style: true
        }
    }
};

const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: require('./__screenshots__/link.png'),
        schema: {
            componentName,
            title: componentTitle,
            props: {
                href: '#',
                children: 'Link'
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};