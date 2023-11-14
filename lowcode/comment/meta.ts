import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Comment"
const componentTitle: string = "评论"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'align',
                title: {
                    label: '展示类型',
                    tip: 'align | 靠左/靠右 展示 datetime 和 actions',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'left', value: 'left' },
                                { title: 'right', value: 'right' },
                            ]
                        }
                    },
                    { componentName: 'JsonSetter' }
                ]
            },
            {
                name: 'avatar',
                title: {
                    label: '头像',
                    tip: 'avatar | 头像'
                },
                setter: { componentName: 'SlotSetter' }
            },
            {
                name: 'author',
                title: {
                    label: '作者名',
                    tip: 'author | 作者名'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'datetime',
                title: {
                    label: '时间描述',
                    tip: 'datetime | 时间描述'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'content',
                title: {
                    label: '评论内容',
                    tip: 'content | 评论内容'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'actions',
                title: {
                    label: '操作列表',
                    tip: 'actions | 操作列表'
                },
                setter: { componentName: 'SlotSetter' }
            },
        ]
    },
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
            events: baseEvents,
            style: true,
        },
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
                author: 'Socrates',
                datetime: '1 hour',
                avatar: {
                    type: 'JSSlot',
                    value: [
                        {
                            componentName: 'Avatar',
                            props: {
                                children: 'A'
                            },
                            title: '头像'
                        }
                    ],
                },
                content: {
                    type: 'JSSlot',
                    value: [
                    ],
                },
                style: {
                    width: '300px',
                    border: '1px solid #9e9e9e',
                    padding: '10px'
                }
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
