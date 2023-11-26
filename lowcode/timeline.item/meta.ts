import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeDynamicSetter } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "TimelineItem"
const componentTitle: string = "时间轴子组件"



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
                name: 'autoFixDotSize',
                title: {
                  label: '适配自定义节点尺寸',
                  tip: 'autoFixDotSize | 是否自动适配自定义节点尺寸到 16px',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'dotColor',
                title: {
                  label: '节点颜色',
                  tip: 'dotColor | 节点颜色',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'ColorSetter' },
                ],
            },
            {
                name: 'lineColor',
                title: {
                  label: '时间轴颜色',
                  tip: 'lineColor | 时间轴颜色',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'ColorSetter' },
                ],
            },
            {
                name: 'dotType',
                title: {
                  label: '节点类型',
                  tip: 'dotType | 节点类型：空心圆/实心圆',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'hollow', value: 'hollow' },
                                { title: 'solid', value: 'solid' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'labelPosition',
                title: {
                  label: '时间轴节点的位置',
                  tip: 'labelPosition | 时间轴节点的位置。 在时间轴组件 mode=alternate 时候生效',
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
                name: 'lineType',
                title: {
                  label: '时间轴类型',
                  tip: 'lineType | 时间轴类型：实线/虚线/点状线',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'solid', value: 'solid' },
                                { title: 'dashed', value: 'dashed' },
                                { title: 'dotted', value: 'dotted' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'dot',
                title: {
                  label: '自定义节点',
                  tip: 'dot | 自定义节点',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'label',
                title: {
                  label: '标签文本',
                  tip: 'label | 标签文本',
                },
                setter: [
                    { componentName: 'StringSetter' },
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
    npm: pack("Timeline", "Item"),
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
            nestingRule: {
                parentWhitelist: ['Timeline']
            }
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
            },
        }
    },
];

export default {
  ...Metadata,
//   snippets
};
