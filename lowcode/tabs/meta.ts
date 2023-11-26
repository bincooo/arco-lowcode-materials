import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeDynamicSetter } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Tabs"
const componentTitle: string = "标签页"


const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'destroyOnHide',
                title: {
                    label: '销毁隐藏标签页',
                    tip: 'destroyOnHide | 是否销毁隐藏标签页的节点, TabPane 的该属性优先级高于 Tabs。'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'editable',
                title: {
                    label: '允许增减标签',
                    tip: 'editable | 是否允许增减标签。只在 type 为 card 或 card-gutter 时候生效。'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'headerPadding',
                title: {
                    label: '选项卡头部存在水平边距',
                    tip: 'headerPadding | 选项卡头部是否存在水平边距。仅对 type等于 line、text类型的选项卡生效'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'justify',
                title: {
                    label: '高度撑满容器',
                    tip: 'justify | 高度撑满容器，只在水平模式下生效。（默认的高度是又撑起的。）'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'lazyload',
                title: {
                    label: '挂载的时候不渲染被隐藏的标签页',
                    tip: 'lazyload | 设置为 true 时，将不会在组件挂载的时候渲染被隐藏的标签页。'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'showAddButton',
                title: {
                    label: '显示新增按钮',
                    tip: 'showAddButton | 是否显示新增按钮（仅在editable为true时生效）'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'activeTab',
                title: {
                    label: '选中的tab的key',
                    tip: 'activeTab | 当前选中的 tab 的 key'
                },
                setter: { componentName: 'StringSetter' },
            },
            {
                name: 'defaultActiveTab',
                title: {
                    label: '默认选中的标签选项卡',
                    tip: 'defaultActiveTab | 默认选中的标签选项卡，如不指定默认选择第一个'
                },
                setter: { componentName: 'StringSetter' },
            },
            {
                name: 'inkBarSize',
                title: {
                    label: '定制下划线尺寸',
                    tip: 'inkBarSize | 定制下划线尺寸'
                },
                setter: {
                    componentName: 'ObjectSetter',
                    props: {
                        config: {
                            items: [
                                {
                                    name: 'width',
                                    title: {
                                        label: '宽度',
                                        tip: 'width | 宽度'
                                    },
                                    setter: 'StringSetter'
                                },
                                {
                                    name: 'height',
                                    title: {
                                        label: '高度',
                                        tip: 'height | 高度'
                                    },
                                    setter: 'StringSetter'
                                },
                            ]
                        }
                    }
                },
            },
            {
                name: 'overflow',
                title: {
                    label: '形式展示tab',
                    tip: 'overflow | 标签页较多时候，选择滚动/下拉菜单形式展示 tab'
                },
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { title: 'scroll', value: 'scroll' },
                            { title: 'dropdown', value: 'dropdown' },
                        ]
                    }
                },
            },
            {
                name: 'scrollPosition',
                title: {
                    label: '被选中tab的滚动位置',
                    tip: 'scrollPosition | 被选中 tab 的滚动位置，默认 auto 即会将 activeTab 滚动到可见区域，但不会特意做位置调整'
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'start', value: 'start' },
                                { title: 'end', value: 'end' },
                                { title: 'center', value: 'center' },
                                { title: 'auto', value: 'auto' },
                            ]
                        }
                    },
                    { componentName: 'NumberSetter' }
                ]
            },
            {
                name: 'size',
                title: {
                    label: '尺寸',
                    tip: 'size | 尺寸'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'mini', value: 'mini' },
                                { title: 'small', value: 'small' },
                                { title: 'default', value: 'default' },
                                { title: 'large', value: 'large' },
                            ]
                        }
                    },
                ]
            },
            {
                name: 'tabPosition',
                title: {
                    label: '选项卡位置',
                    tip: 'tabPosition | 选项卡位置'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'left', value: 'left' },
                                { title: 'right', value: 'right' },
                                { title: 'top', value: 'top' },
                                { title: 'bottom', value: 'bottom' },
                            ]
                        }
                    },
                ]
            },
            {
                name: 'type',
                title: {
                    label: '标签选项卡的类型',
                    tip: 'type | 标签选项卡的类型'
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'line', value: 'line' },
                                { title: 'card', value: 'card' },
                                { title: 'card-gutter', value: 'card-gutter' },
                                { title: 'text', value: 'text' },
                                { title: 'rounded', value: 'rounded' },
                                { title: 'capsule', value: 'capsule' },
                            ]
                        }
                    },
                ]
            },
            {
                name: 'addButton',
                title: {
                    label: '自定义新增按钮',
                    tip: 'addButton | 自定义新增按钮'
                },
                setter: { componentName: 'SlotSetter' },
            },
            {
                name: 'deleteButton',
                title: {
                    label: '自定义删除按钮',
                    tip: 'deleteButton | 自定义删除按钮'
                },
                setter: { componentName: 'SlotSetter' },
            },
            {
                name: 'extra',
                title: {
                    label: '标签页右侧的附加',
                    tip: 'extra | 显示在标签页右侧的附加'
                },
                setter: { componentName: 'SlotSetter' },
            },
            {
                name: 'animation',
                title: {
                    label: '开启过渡效果',
                    tip: 'animation | 是否开启过渡效果'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'tabPane',
                                        title: {
                                            label: 'tab面板',
                                            tip: 'tabPane | tab面板'
                                        },
                                        setter: 'BoolSetter'
                                    },
                                    {
                                        name: 'inkBar',
                                        title: {
                                            label: '工具栏',
                                            tip: 'inkBar | 工具栏'
                                        },
                                        setter: 'BoolSetter'
                                    },
                                ]
                            }
                        }
                    },
                ]
            },
            {
                name: 'icons',
                title: {
                    label: '标签页头部',
                    tip: 'icons | 标签页头部 编辑/滚动/下拉 图标配置。对于不想展示的图标可以将其设置为null'
                },
                setter: [
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'add',
                                        title: 'add',
                                        setter: 'SlotSetter'
                                    },
                                    {
                                        name: 'delete',
                                        title: 'delete',
                                        setter: 'SlotSetter'
                                    },
                                    {
                                        name: 'prev',
                                        title: 'prev',
                                        setter: 'SlotSetter'
                                    },
                                    {
                                        name: 'next',
                                        title: 'next',
                                        setter: 'SlotSetter'
                                    },
                                    {
                                        name: 'dropdown',
                                        title: 'dropdown',
                                        setter: 'SlotSetter'
                                    },
                                ]
                            }
                        }
                    },
                ]
            },
            {
                name: 'scrollAfterEdit',
                title: {
                    label: '在标签增减后自动进行滚动调整',
                    tip: 'scrollAfterEdit | 是否在标签增减后，自动进行滚动调整(editable为true时生效）'
                },
                setter: [
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'delete',
                                        title: 'delete',
                                        setter: 'BoolSetter'
                                    },
                                    {
                                        name: 'add',
                                        title: 'add',
                                        setter: 'BoolSetter'
                                    },
                                ]
                            }
                        }
                    },
                ]
            },
        ]
    },
    {
        name: 'renderTabHeader',
        title: {
            label: '自定义选项卡头部',
            tip: 'renderTabHeader | 自定义选项卡头部'
        },
        propType: 'func',
        setter: {
            componentName: 'SlotSetter',
             initialValue: {
                type: 'JSSlot',
                params: ['tabProps', 'tabHeader'],
                value: [],
              },
        },
    } as any,
    {
        name: 'renderTabTitle',
        title: {
            label: '自定义单个选项卡头部',
            tip: 'renderTabTitle | 自定义单个选项卡头部'
        },
        propType: 'func',
        setter: {
            componentName: 'SlotSetter',
             initialValue: {
                type: 'JSSlot',
                params: ['tabTitle', 'info'],
                value: [],
              },
        },
    } as any,
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
                    name: 'onAddTab',
                    description: '点击新增 tab 按钮的回调',
                    template: "\n\n  onAddTab(event, ${extParams}) {\n    // 点击新增 tab 按钮的回调\n    console.log('onAddTab', event);\n  }\n",
                },
                {
                    name: 'onChange',
                    description: 'activeTab 改变的回调',
                    template: "\n\n  onChange(event, ${extParams}) {\n    // activeTab 改变的回调\n    console.log('onChange', event);\n  }\n",
                },
                {
                    name: 'onClickTab',
                    description: '点击选项卡的回调',
                    template: "\n\n  onClickTab(event, ${extParams}) {\n    // 点击选项卡的回调\n    console.log('onClickTab', event);\n  }\n",
                },
                {
                    name: 'onDeleteTab',
                    description: '点击删除按钮的回调',
                    template: "\n\n  onDeleteTab(event, ${extParams}) {\n    // 点击删除按钮的回调\n    console.log('onDeleteTab', event);\n  }\n",
                },
            ],
            style: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: ['TabPane']
            },
        },
        advanced: {
            initialChildren: [
                {
                    componentName: 'TabPane',
                    props: {
                        title: 'Tab1',
                    },
                    children: [
                        {
                            componentName: 'Empty',
                            title: '空状态',
                            props: {},
                        }
                    ]
                },
                {
                    componentName: 'TabPane',
                    props: {
                        title: 'Tab2'
                    },
                    children: [
                        {
                            componentName: 'Empty',
                            title: '空状态',
                            props: {},
                        }
                    ]
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
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
