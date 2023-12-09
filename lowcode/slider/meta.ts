import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Slider"
const componentTitle: string = "滑动输入条"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'value',
                title: {
                    label: '星的个数',
                    tip: 'value | 星的个数，受控值',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '默认值',
                    tip: 'defaultValue | 默认值',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '是否禁用',
                    tip: 'disabled | 是否禁用',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'onlyMarkValue',
                title: {
                    label: '只能选择标签值',
                    tip: 'onlyMarkValue | 只能选择标签值，此时step将会被忽略',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'reverse',
                title: {
                    label: '反向坐标轴',
                    tip: 'reverse | 反向坐标轴, rtl 场景默认为 true',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'showTicks',
                title: {
                    label: '是否显示步长刻度线',
                    tip: 'showTicks | 是否显示步长刻度线',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'tooltipVisible',
                title: {
                    label: '控制tooltip的展示',
                    tip: 'tooltipVisible | 控制 tooltip 的展示。设置为 true 时，将一直展示 tooltip。设置为 false 时，将一直隐藏 tooltip',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'vertical',
                title: {
                    label: '是否竖直方向',
                    tip: 'vertical | 是否竖直方向',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'max',
                title: {
                    label: '滑动范围最大值',
                    tip: 'max | 滑动范围最大值',
                },
                setter: [
                    {
                        componentName: 'NumberSetter',
                        props: {
                            precision: 5
                        }
                    },
                ],
            },
            {
                name: 'min',
                title: {
                    label: '滑动范围最小值',
                    tip: 'min | 滑动范围最小值',
                },
                setter: [
                    {
                        componentName: 'NumberSetter',
                        props: {
                            precision: 5
                        }
                    },
                ],
            },
            {
                name: 'step',
                title: {
                    label: '步长',
                    tip: 'step | 步长',
                },
                setter: [
                    {
                        componentName: 'NumberSetter',
                        props: {
                            precision: 5
                        }
                    },
                ],
            },
            {
                name: 'tooltipPosition',
                title: {
                    label: 'tooltip的位置',
                    tip: 'tooltipPosition | tooltip 的位置',
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'top', value: 'top' },
                                { title: 'tl', value: 'tl' },
                                { title: 'tr', value: 'tr' },
                                { title: 'bottom', value: 'bottom' },
                                { title: 'bl', value: 'bl' },
                                { title: 'br', value: 'br' },
                                { title: 'left', value: 'left' },
                                { title: 'lt', value: 'lt' },
                                { title: 'lb', value: 'lb' },
                                { title: 'right', value: 'right' },
                                { title: 'rt', value: 'rt' },
                                { title: 'rb', value: 'rb' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'formatTooltip',
                title: {
                    label: '格式化tooltip内容',
                    tip: 'formatTooltip | 格式化 tooltip 内容'
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['value'],
                            value: [],
                        },
                    },
                ],
            },
            {
                name: 'marks',
                title: {
                    label: '标签',
                    tip: 'marks | 标签。是一个对象。key 为在[min, max]内的整数'
                },
                setter: [
                    { componentName: 'JsonSetter', condition: () => true },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: {
                                componentName: 'ObjectSetter',
                                props: {
                                    config: {
                                        items: [
                                            {
                                                name: 'key',
                                                title: 'key',
                                                setter: { componentName: 'NumberSetter' },
                                            },
                                            {
                                                name: 'value',
                                                title: 'value',
                                                setter: [
                                                    { componentName: 'StringSetter' },
                                                    { componentName: 'SlotSetter' },
                                                ],
                                            },
                                        ]
                                    }
                                }
                            }
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
    category: '数据输入',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
            ],
            style: true
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
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
