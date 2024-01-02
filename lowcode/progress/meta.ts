import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Progress"
const componentTitle: string = "进度条"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'animation',
                title: {
                    label: '动画效果',
                    tip: 'animation | 动画效果，仅在 type=line 时可用',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'buffer',
                title: {
                    label: '显示缓冲区',
                    tip: 'buffer | 加载中的进度条是否显示缓冲区。仅对 type=line 且加载中的进度条有效',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'showText',
                title: {
                    label: '展示文本',
                    tip: 'showText | 是否展示文本',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'percent',
                title: {
                    label: '百分比',
                    tip: 'percent | 百分比',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'steps',
                title: {
                    label: '显示步骤进度条',
                    tip: 'steps | 显示步骤进度条',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'strokeWidth',
                title: {
                    label: '进度条线宽度',
                    tip: 'strokeWidth | 进度条线的宽度',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'trailColor',
                title: {
                    label: '剩余进度条颜色',
                    tip: 'trailColor | 剩余进度条颜色',
                },
                setter: [
                    { componentName: 'ColorSetter' },
                ],
            },
            {
                name: 'size',
                title: {
                    label: '尺寸',
                    tip: 'size | 不同尺寸的进度条',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'small', value: 'small' },
                                { title: 'default', value: 'default' },
                                { title: 'mini', value: 'mini' },
                                { title: 'large', value: 'large' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'status',
                title: {
                    label: '状态',
                    tip: 'status | 进度条状态',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'succ', value: 'success' },
                                { title: 'err', value: 'error' },
                                { title: 'nor', value: 'normal' },
                                { title: 'warn', value: 'warning' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'type',
                title: {
                    label: '类型',
                    tip: 'type | 进度条类型',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'line', value: 'line' },
                                { title: 'circle', value: 'circle' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'bufferColor',
                title: {
                    label: '缓冲区的颜色',
                    tip: 'bufferColor | 缓冲区的颜色',
                },
                setter: [
                    { componentName: 'ColorSetter' },
                ],
            },
            {
                name: 'color',
                title: {
                    label: '进度条颜色',
                    tip: 'color | 进度条颜色，优先级高于 status。传入对象时，会显示渐变色进度条',
                },
                setter: [
                    { componentName: 'ColorSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'width',
                title: {
                    label: '进度条的宽度',
                    tip: 'width | 进度条的宽度。circle 类型的进度条仅支持数字类型的width',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'formatText',
                title: {
                    label: '进度条文本函数',
                    tip: 'formatText | 进度条文本函数',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['percent'],
                            value: [],
                        },
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
                buffer: true,
                percent: 30
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
