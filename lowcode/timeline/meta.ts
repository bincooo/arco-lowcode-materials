import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeDynamicSetter } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Timeline"
const componentTitle: string = "时间轴"



const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'reverse',
                title: {
                  label: '倒序',
                  tip: 'reverse | 是否倒序',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'direction',
                title: {
                  label: '时间轴方向',
                  tip: 'direction | 时间轴方向',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'horizontal', value: 'horizontal' },
                                { title: 'vertical', value: 'vertical' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'labelPosition',
                title: {
                  label: '标签文本的位置',
                  tip: 'labelPosition | 设置标签文本的位置',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'relative', value: 'relative' },
                                { title: 'same', value: 'same' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'mode',
                title: {
                  label: '展示类型',
                  tip: 'mode | 时间轴的展示类型：时间轴在左侧/右侧(垂直方向)、上方/下方（水平方向），或交替出现。',
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'left', value: 'left' },
                                { title: 'right', value: 'right' },
                                { title: 'top', value: 'top' },
                                { title: 'bottom', value: 'bottom' },
                                { title: 'alternate', value: 'alternate' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'pending',
                title: {
                  label: '展示幽灵节点',
                  tip: 'pending | 是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入ReactNode时，会作为节点内容展示。',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'pendingDot',
                title: {
                  label: '定制幽灵节点',
                  tip: 'pendingDot | 可以传入 ReactNode 定制幽灵节点',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
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
            events: [
                ...baseEvents,
            ],
            style: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: ['TimelineItem']
            },
        },
        advanced: {
            initialChildren: [
                {
                    componentName: 'TimelineItem',
                    props: {
                        label: '2017-03-10',
                        dotColor: '#52C419'
                    },
                    children: 'The first milestone'
                },
                {
                    componentName: 'TimelineItem',
                    props: {
                        label: '2018-05-12',
                        dotColor: '#F5222D',
                        labelPosition: 'same'
                    },
                    children: 'The second milestone'
                },
                {
                    componentName: 'TimelineItem',
                    props: {
                        label: '2020-09-30',
                    },
                    children: 'The third milestone'
                },
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
                mode: 'left',
                labelPosition: 'same',
                style: {
                    padding: "20px"
                }
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
