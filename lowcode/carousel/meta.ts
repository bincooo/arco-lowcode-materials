import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Carousel"
const componentTitle: string = "图片轮播"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'miniRender',
                title: {
                    label: '最少渲染',
                    tip: 'miniRender | 是否仅渲染满足动画效果的最少数量的 children',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'currentIndex',
                title: {
                    label: '当前展示索引',
                    tip: 'currentIndex | 当前展示索引',
                },
                setter: { componentName: 'NumberSetter' }
            },
            {
                name: 'moveSpeed',
                title: {
                    label: '移动速率',
                    tip: 'moveSpeed | 幻灯片移动速率(ms)',
                },
                setter: {
                    componentName: 'NumberSetter',
                    props: {
                        units: 'ms'
                    }
                }
            },
            {
                name: 'timingFunc',
                title: {
                    label: '最少渲染',
                    tip: 'timingFunc | 过渡速度曲线, 默认匀速 transition-timing-function',
                },
                setter: { componentName: 'StringSetter' }
            },
            {
                name: 'animation',
                title: {
                    label: '切换动画',
                    tip: 'animation | 切换动画',
                },
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { title: 'slide', value: 'slide' },
                            { title: 'card', value: 'card' },
                            { title: 'fade', value: 'fade' },
                        ]
                    }
                }
            },
            {
                name: 'direction',
                title: {
                    label: '移动方向',
                    tip: 'direction | 幻灯片移动方向',
                },
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { title: 'horizontal', value: 'horizontal' },
                            { title: 'vertical', value: 'vertical' },
                        ]
                    }
                }
            },
            {
                name: 'indicatorPosition',
                title: {
                    label: '指示器位置',
                    tip: 'indicatorPosition | 指示器位置',
                },
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            { title: 'bottom', value: 'bottom' },
                            { title: 'top', value: 'top' },
                            { title: 'left', value: 'left' },
                            { title: 'right', value: 'right' },
                            { title: 'outer', value: 'outer' },
                        ]
                    }
                }
            },
            {
                name: 'indicatorType',
                title: {
                    label: '指示器位置',
                    tip: 'indicatorPosition | 指示器位置',
                },
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { title: 'line', value: 'line' },
                            { title: 'dot', value: 'dot' },
                            { title: 'slider', value: 'slider' },
                            { title: 'never', value: 'never' },
                        ]
                    }
                }
            },
            {
                name: 'showArrow',
                title: {
                    label: '箭头显示时机',
                    tip: 'showArrow | 切换箭头显示时机',
                },
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { title: 'always', value: 'always' },
                            { title: 'hover', value: 'hover' },
                            { title: 'never', value: 'never' },
                        ]
                    }
                }
            },
            {
                name: 'trigger',
                title: {
                    label: '切换触发方式',
                    tip: 'trigger | 幻灯片切换触发方式, click/hover 指示器',
                },
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { title: 'click', value: 'click' },
                            { title: 'hover', value: 'hover' },
                        ]
                    }
                }
            },
            {
                name: 'arrowClassName',
                title: {
                    label: '切换箭头样式Class',
                    tip: 'arrowClassName | 切换箭头样式Class',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    }
                ]
            },
            {
                name: 'autoPlay',
                title: {
                    label: '自动循环展示',
                    tip: 'autoPlay | 是否自动循环展示，或者传入 { interval: 自动切换的时间间隔(默认: 3000), hoverToPause: 鼠标悬浮时是否暂停自动切换(默认: true) } 进行高级配置 (2.14.0 支持传入对象)',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    { name: 'interval', title: '时间间隔', setter: 'NumberSetter' },
                                    { name: 'hoverToPause', title: '鼠标悬浮', setter: 'BoolSetter' },
                                ]
                            }
                        }
                    }
                ]
            },
            {
                name: 'icons',
                title: {
                    label: '自定义图标',
                    tip: 'icons | 自定义图标',
                },
                setter: {
                    componentName: 'ObjectSetter',
                    props: {
                        config: {
                            items: [
                                { name: 'prev', title: '左图标', setter: 'SlotSetter' },
                                { name: 'next', title: '右图标', setter: 'SlotSetter' },
                            ]
                        }
                    }
                }
            },
            {
                name: 'indicatorClassName',
                title: {
                    label: '指示器的样式',
                    tip: 'indicatorClassName | 指示器的样式',
                },
                setter: [
                    { componentName: 'StringSetter', condition: () => true },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    }
                ],
            },
        ]
    }
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
                {
                    name: 'onChange',
                    template: "\onChange(event, ${extParams}){\n// 数据修改时的回调\nconsole.log('onChange', event);}",
                    description: '幻灯片发生切换时的回调函数。'
                }
            ],
            style: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'Basic' ]
            },
        },
        advanced: {
            initialChildren: [
                {
                    title: 'img',
                    componentName: 'Basic',
                    props: {
                        tag: 'img',
                        attr: [
                            {
                                "key": "src",
                                "value": "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp"
                            }
                        ]
                    }
                },
                {
                    title: 'img',
                    componentName: 'Basic',
                    props: {
                        tag: 'img',
                        attr: [
                            {
                                "key": "src",
                                "value": "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp"
                            }
                        ]
                    }
                }
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
            }
        }
    },
];

export default {
  ...Metadata,
  snippets
};
