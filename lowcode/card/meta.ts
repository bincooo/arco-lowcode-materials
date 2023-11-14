import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Card"
const componentTitle: string = "卡片"
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
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'bordered',
                title: {
                  label: '是否有边框',
                  tip: 'bordered | 是否有边框',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'hoverable',
                title: {
                  label: '是否可悬浮',
                  tip: 'hoverable | 是否可悬浮',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'loading',
                title: {
                  label: '加载中',
                  tip: 'loading | 是否为加载中',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'size',
                title: {
                  label: '卡片尺寸',
                  tip: 'size | 卡片尺寸',
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
                name: 'cover',
                title: {
                    label: '卡片封面',
                    tip: 'cover | 卡片封面',
                },
                setter: { componentName: 'SlotSetter' }
            },
            {
                name: 'extra',
                title: {
                    label: '上角操作区',
                    tip: 'extra | 卡片右上角的操作区域',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'SlotSetter',
                        condition: () => true,
                    },
                ]
            },
            {
                name: 'title',
                title: {
                    label: '卡片标题',
                    tip: 'title | 卡片标题',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'bodyStyle',
                title: {
                    label: '内容区域样式',
                    tip: 'bodyStyle | 内容区域自定义样式',
                },
                setter: [
                    { componentName: 'JsonSetter' }
                ]
            },
            {
                name: 'headerStyle',
                title: {
                    label: '自定义标题区域样式',
                    tip: 'headerStyle | 自定义标题区域样式',
                },
                setter: [
                    { componentName: 'JsonSetter' }
                ]
            }
        ]
    },
    {
        name: 'actions',
        title: {
            label: '底部的操作组',
            tip: 'actions | 卡片底部的操作组',
        },
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'SlotSetter' }
                }
            }
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
                title: '标题',
                children: "Tips：若使用内嵌网格卡片排版，需要手工添加class: `arco-card-contain-grid`，否则样式无法并排！",
                // className: 'arco-card-contain-grid'
            }
        }
    },
];

export default {
  ...Metadata,
  snippets
};
