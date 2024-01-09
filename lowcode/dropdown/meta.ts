import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Dropdown"
const componentTitle: string = "下拉菜单"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'defaultPopupVisible',
                title: {
                    label: '默认打开',
                    tip: 'defaultPopupVisible | 控制下拉框是否默认打开',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '禁用弹出',
                    tip: 'disabled | 是否禁用弹出',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'popupVisible',
                title: {
                    label: '下拉框打开',
                    tip: 'popupVisible | 控制下拉框是否打开（受控模式）',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'unmountOnExit',
                title: {
                    label: '隐藏后销毁DOM',
                    tip: 'unmountOnExit | 隐藏后是否销毁 DOM 结构',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'position',
                title: {
                    label: '下拉框的弹出位置',
                    tip: 'position | 下拉框的弹出位置',
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
                            ]
                        }
                    },
                ],
            },
            {
                name: 'triggerProps',
                title: {
                    label: '弹出框Trigger',
                    tip: 'triggerProps | 弹出框下可接受所有 Trigger 组件的 Props',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'droplist',
                title: {
                    label: '下拉框的内容',
                    tip: 'droplist | 下拉框的内容',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'getPopupContainer',
                title: {
                    label: '弹出框挂在的父级节点',
                    tip: 'getPopupContainer | 弹出框挂在的父级节点'
                },
                setter: [
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getPopupContainer',
                            template: "\n\n  getPopupContainer(node, ${extParams}) {\n    // 弹出框挂在的父级节点\n    console.log('getPopupContainer', node);\n  }\n"
                        }
                    },
                ],
            },
        ]
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '导航',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                {
                    name: 'onVisibleChange',
                    description: '弹出框打开/关闭时会触发',
                    template: "\n\n  onVisibleChange(visible, ${extParams}) {\n    // 弹出框打开/关闭时会触发\n    console.log('onVisibleChange', visible);\n  }\n",
                },
            ],
            style: true,
        },
        component: {
            isContainer: true,
            actions: [
                {
                    name: '关闭下拉',
                    content: {
                        icon: 'arrow-down',
                        title: '关闭下拉',
                        action: (curr: any) => {
                            const popupVisible = curr.getDOMNode()?._pv
                            curr.setPropValue('popupVisible', popupVisible)
                            delete curr.getDOMNode()._pv
                        }
                    },
                    condition: (curr) => {
                        if (curr.getDOMNode()) {
                            setTimeout(() => {
                                const mediums = document.querySelectorAll('.lc-simulator .lc-borders-actions .next-medium')
                                mediums?.forEach(item => {
                                    // 图标变大... 只能这样删除
                                    item.classList.remove('next-medium')
                                })
                            }, 10)
                            return true
                        }
                        return false
                    }
                }
            ],
        },
        advanced: {
            initialChildren: [
                {
                    componentName: 'Button',
                    props: {
                        type: 'text',
                        children: 'Hover me'
                    },
                }
            ],
            callbacks: {
                onSelectHook: (curr: any) => {
                    if (curr.getDOMNode() && !curr.getDOMNode()?._pv) {
                        curr.getDOMNode()._pv = curr.getPropValue('popupVisible')
                        curr.setPropValue('popupVisible', true)
                    }
                    return true
                }
            },
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
                droplist: {
                    type: "JSSlot",
                    value: [
                        {
                            componentName: "MenuItem",
                            props: {
                                children: "Beijing"
                            },
                        },
                        {
                            componentName: "MenuItem",
                            props: {
                                children: "Shanghai"
                            },
                        },
                        {
                            componentName: "MenuItem",
                            props: {
                                children: "Guangzhou",
                                disabled: true
                            },
                        }
                    ],
                    title: "插槽容器",
                }
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
