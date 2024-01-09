import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Menu"
const componentTitle: string = "菜单"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'accordion',
                title: {
                    label: '手风琴效果',
                    tip: 'accordion | 开启手风琴效果',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'autoOpen',
                title: {
                    label: '默认展开所有',
                    tip: 'autoOpen | 默认展开所有多级菜单',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'autoScrollIntoView',
                title: {
                    label: '自动滚动选中可见区域',
                    tip: 'autoScrollIntoView | 是否自动滚动选中项目到可见区域',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'collapse',
                title: {
                    label: '水平折叠收起菜单',
                    tip: 'collapse | 是否水平折叠收起菜单',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'hasCollapseButton',
                title: {
                    label: '内置折叠按钮',
                    tip: 'hasCollapseButton | 是否内置折叠按钮',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'selectable',
                title: {
                    label: '菜单选项可选',
                    tip: 'selectable | 菜单选项是否可选',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'levelIndent',
                title: {
                    label: '层级之间的缩进量',
                    tip: 'levelIndent | 层级之间的缩进量',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'iMode',
                title: {
                    label: '菜单类型',
                    tip: 'mode | 菜单类型，目前支持垂直（vertical）、水平菜单（horizontal）、弹出（pop）',
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'vertical', value: 'vertical' },
                                { title: 'horizontal', value: 'horizontal' },
                                { title: 'pop', value: 'pop' },
                                { title: 'popButton', value: 'popButton' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'theme',
                title: {
                    label: '菜单风格',
                    tip: 'theme | 菜单风格',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'light', value: 'light' },
                                { title: 'dark', value: 'dark' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'defaultOpenKeys',
                title: {
                    label: '初始展开的子菜单',
                    tip: 'defaultOpenKeys | 初始展开的子菜单 key 数组',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'openKeys',
                title: {
                    label: '展开的子菜单(受控)',
                    tip: 'openKeys | 展开的子菜单 key 数组（受控模式）',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'selectedKeys',
                title: {
                    label: '选中的菜单项(受控)',
                    tip: 'selectedKeys | 选中的菜单项 key 数组（受控模式）',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'scrollConfig',
                title: {
                    label: '滚动到可见区域的配置项',
                    tip: 'scrollConfig | 滚动到可见区域的配置项，接收所有scroll-into-view-if-needed的参数',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'defaultSelectedKeys',
                title: {
                    label: '初始选中的菜单项',
                    tip: 'defaultSelectedKeys | 初始选中的菜单项 key 数组',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'ellipsis',
                title: {
                    label: '水平菜单自动溢出省略',
                    tip: 'ellipsis | 水平菜单是否自动溢出省略',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['text'],
                            value: [],
                        },
                    },
                ],
            },
            {
                name: 'tooltipProps',
                title: {
                    label: '弹出模式ToolTip的Props',
                    tip: 'tooltipProps | 弹出模式下可接受所有 ToolTip 的 Props',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'triggerProps',
                title: {
                    label: '弹出模式Trigger的Props',
                    tip: 'triggerProps | 弹出模式下可接受所有 Trigger 的 Props',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
        ]
    },
    {
        name: 'icons',
        title: {
            label: '用于定制图标',
            tip: 'icons | 用于定制图标',
        },
        setter: [
            {
                componentName: 'ObjectSetter',
                props: {
                    config: {
                        items: [
                            { name: 'horizontalArrowDown', title: 'horizontalArrowDown', setter: 'SlotSetter' },
                            { name: 'popArrowRight', title: 'popArrowRight', setter: 'SlotSetter' },
                            { name: 'collapseDefault', title: 'collapseDefault', setter: 'SlotSetter' },
                            { name: 'collapseActive', title: 'collapseActive', setter: 'SlotSetter' },
                        ]
                    }
                }
            }
        ],
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
                {
                    name: 'onClickMenuItem',
                    description: '点击菜单项的回调',
                    template: "\n\n  onClickMenuItem(key, event, keyPath, ${extParams}) {\n    // 点击菜单项的回调\n    console.log('onClickMenuItem', key);\n  }\n",
                },
                {
                    name: 'onClickSubMenu',
                    description: '点击子菜单标题的回调',
                    template: "\n\n  onClickSubMenu(key, openKeys, keyPath, ${extParams}) {\n    // 点击子菜单标题的回调\n    console.log('onClickSubMenu', key);\n  }\n",
                },
                {
                    name: 'onCollapseChange',
                    description: '折叠状态改变时的回调',
                    template: "\n\n  onCollapseChange(collapse, ${extParams}) {\n    // 折叠状态改变时的回调\n    console.log('onCollapseChange', collapse);\n  }\n",
                },
                {
                    name: 'onEllipsisChange',
                    description: '水平菜单自动超出省略发生变化时的回调',
                    template: "\n\n  onEllipsisChange(status, ${extParams}) {\n    // 水平菜单自动超出省略发生变化时的回调\n    console.log('onEllipsisChange', status);\n  }\n",
                },
            ],
            style: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [
                    'MenuItemGroup',
                    'MenuSubMenu',
                    'MenuItem',
                ]
            }
        },
        advanced: {
            initialChildren: [
                {
                    componentName: 'MenuSubMenu',
                    props: {
                        title: 'text-1',
                        popup: false,
                    },
                    children: [
                        {
                            componentName: 'MenuItem',
                            props: {
                                children: ['text-1-1'],
                            },
                        },
                        {
                            componentName: 'MenuItem',
                            props: {
                                children: ['text-1-2'],
                            },
                        },
                    ]
                },
                {
                    componentName: 'MenuItemGroup',
                    props: {
                        title: 'group-1',
                    },
                    children: [
                        {
                            componentName: 'MenuItem',
                            props: {
                                children: ['group-1-1'],
                            },
                        },
                        {
                            componentName: 'MenuItem',
                            props: {
                                children: ['group-1-2'],
                            },
                        },
                    ]
                },
                {
                    componentName: 'MenuItemGroup',
                    props: {
                        title: 'group-2',
                    },
                    children: [
                        {
                            componentName: 'MenuItem',
                            props: {
                                children: ['group-2-1'],
                            },
                        },
                        {
                            componentName: 'MenuItem',
                            props: {
                                children: ['group-2-2'],
                            },
                        },
                    ]
                },
            ]
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
                iMode: 'vertical',
                hasCollapseButton: true,
                style: { width: 200, height: '100%' },
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
