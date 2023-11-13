import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents } from '../pack'

const componentName: string = "Button"
const fieldConfig: IPublicTypeFieldConfig[] = [
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
                name: 'htmlType',
                title: {
                    label: '原生类型',
                    tip: 'htmlType | 设置 `button` 原生的 `type` 值'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                {
                                    title: 'Submit',
                                    value: 'submit',
                                },
                                {
                                    title: 'Reset',
                                    value: 'reset',
                                },
                                {
                                    title: 'Button',
                                    value: 'button',
                                },
                            ],
                        },
                    }
                ]
            },
            {
                name: 'href',
                title: {
                    label: '跳转链接',
                    tip: 'href | 添加跳转链接。设置此属性 button表现跟a标签一致'
                },
                setter: [
                    { componentName: 'StringSetter' }
                ]
            },
            {
                name: 'target',
                title: {
                    label: 'target 属性',
                    tip: 'a 链接的 target 属性，href 存在时生效'
                },
                setter: [
                    { componentName: 'StringSetter' }
                ]
            }
        ],
    },
    {
        title: '外观',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'type',
                title: { label: '类型', tip: 'type | 设置按钮类型' },
                setter: [
                  {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                title: '默认',
                                value: 'default',
                            },
                            {
                                title: '主按钮',
                                value: 'primary',
                            },
                            {
                                title: '虚线框按钮',
                                value: 'dashed',
                            },
                            {
                                title: '次级按钮',
                                value: 'secondary',
                            },
                            {
                                title: '线性按钮',
                                value: 'outline',
                            },
                            {
                                title: '类文本按钮',
                                value: 'text',
                            },
                        ],
                    },
                  },
                ],
            },
            {
                name: 'long',
                title: {
                    label: '自适应宽度',
                    tip: 'long | 按钮宽度随容器自适应'
                },
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'iconOnly',
                title: {
                    label: '只有图标',
                    tip: 'iconOnly | 只有图标，按钮宽高相等'
                },
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'loadingFixedWidth',
                title: {
                    label: '加载中定宽',
                    tip: 'loadingFixedWidth | 当 loading 的时候，不改变按钮的宽度'
                },
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'shape',
                title: {
                    label: '按钮形状',
                    tip: 'shape | 按钮形状，circle - 圆形， round - 全圆角， square - 长方形'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                {
                                    title: 'Circle',
                                    value: 'circle',
                                },
                                {
                                    title: 'Round',
                                    value: 'round',
                                },
                                {
                                    title: 'Square',
                                    value: 'square',
                                },
                            ],
                        },
                    }
                ]
            },
            {
                name: 'size',
                title: {
                    label: '尺寸',
                    tip: 'size | 按钮的尺寸'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                {
                                    title: 'mini',
                                    value: 'mini'
                                },
                                {
                                    title: 'small',
                                    value: 'small'
                                },
                                {
                                    title: 'default',
                                    value: 'default'
                                },
                                {
                                    title: 'large',
                                    value: 'large'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: 'icon',
                title: '按钮的图标',
                setter: [
                    { componentName: 'SlotSetter' }
                ]
            }
        ]
    },
    {
        title: '状态',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'disabled',
                title: {
                    label: '是否禁用',
                    tip: 'disabled | 是否禁用'
                },
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'loading',
                title: {
                    label: '加载状态',
                    tip: 'loading | 按钮是否是加载状态'
                },
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'status',
                title: '按钮状态',
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                {
                                    title: 'warning',
                                    value: 'warning'
                                },
                                {
                                    title: 'danger',
                                    value: 'danger'
                                },
                                {
                                    title: 'success',
                                    value: 'success'
                                },
                                {
                                    title: 'default',
                                    value: 'default'
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: "按钮",
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
        title: "主要按钮",
        screenshot: require('./__screenshots__/b1.png'),
        schema: {
            componentName,
            props: {
                type: 'primary',
                children: 'primary'
            }
        }
    },
    {
        title: "次级按钮",
        screenshot: require('./__screenshots__/b2.png'),
        schema: {
            componentName,
            props: {
                type: 'secondary',
                children: 'secondary'
            }
        }
    },
    {
        title: "虚框按钮",
        screenshot: require('./__screenshots__/b3.png'),
        schema: {
            componentName,
            props: {
                type: 'dashed',
                children: 'dashed'
            }
        }
    },
    {
        title: "文字按钮",
        screenshot: require('./__screenshots__/b4.png'),
        schema: {
            componentName,
            props: {
                type: 'text',
                children: 'text'
            }
        }
    },
    {
        title: "线性按钮",
        screenshot: require('./__screenshots__/b5.png'),
        schema: {
            componentName,
            props: {
                type: 'outline',
                children: 'outline'
            }
        }
    },
];

export default {
  ...Metadata,
  snippets
};
