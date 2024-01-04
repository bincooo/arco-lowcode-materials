import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Popconfirm"
const componentTitle: string = "气泡确认框"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'title',
                title: {
                    label: '弹出框的标题',
                    tip: 'title | 弹出框的标题（设置为 null 时，不显示标题栏）',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'content',
                title: {
                    label: '组件内容',
                    tip: 'content | 组件内容',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'children',
                title: {
                    label: '子组件内容',
                    tip: 'children | 子组件内容',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'defaultPopupVisible',
                title: {
                    label: '默认弹出框是打开还是关闭',
                    tip: 'defaultPopupVisible | 默认弹出框是打开还是关闭',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'popupVisible',
                title: {
                    label: '弹出框是打开还是关闭',
                    tip: 'popupVisible | 弹出框是打开还是关闭。(受控)',
                },
                setter: [
                    { componentName: 'BoolSetter' },
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
                name: 'focusLock',
                title: {
                    label: '将焦点锁定在弹出框内',
                    tip: 'focusLock | 是否将焦点锁定在弹出框内',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'unmountOnExit',
                title: {
                    label: '隐藏的时候销毁DOM节点',
                    tip: 'unmountOnExit | 是否在隐藏的时候销毁 DOM 节点',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'okType',
                title: {
                    label: '确认按钮的类型',
                    tip: 'okType | 确认按钮的类型',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'position',
                title: {
                    label: '弹出框的方位',
                    tip: 'position | 弹出框的方位，有 12 个方位可供选择',
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
                name: 'trigger',
                title: {
                    label: '触发方式',
                    tip: 'trigger | 触发方式',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    },
                ],
            },
            {
                name: 'okText',
                title: {
                    label: '确认按钮文字',
                    tip: 'okText | 确认按钮文字',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'cancelText',
                title: {
                    label: '取消按钮文字',
                    tip: 'cancelText | 取消按钮文字',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'icon',
                title: {
                    label: '标题前的图标',
                    tip: 'icon | 标题前的图标',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'cancelButtonProps',
                title: {
                    label: '取消按钮的参数',
                    tip: 'cancelButtonProps | 取消按钮的参数，可接受 Button 组件的所有参数',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'okButtonProps',
                title: {
                    label: '确定按钮的参数',
                    tip: 'okButtonProps | 确定按钮的参数，可接受 Button 组件的所有参数',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'triggerProps',
                title: {
                    label: 'Trigger的参数',
                    tip: 'triggerProps | 可以接受所有 Trigger 的参数',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'getPopupContainer',
                title: {
                    label: '弹出挂载的节点',
                    tip: 'getPopupContainer | 弹出挂载的节点'
                },
                setter: [
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getPopupContainer',
                            template: "\n\n  getPopupContainer(node, ${extParams}) {\n    // 弹出挂载的节点\n    console.log('getPopupContainer', node);\n  }\n"
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
    category: '反馈',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                {
                    name: 'onCancel',
                    description: '点击取消按钮的回调函数',
                    template: "\n\n  onCancel(event, ${extParams}) {\n    // 点击取消按钮的回调函数\n    console.log('onCancel', event);\n  }\n",
                },
                {
                    name: 'onOk',
                    description: '点击确认按钮的回调函数',
                    template: "\n\n  onOk(event, ${extParams}) {\n    // 点击确认按钮的回调函数\n    console.log('onOk', event);\n  }\n",
                },
                {
                    name: 'onVisibleChange',
                    description: '弹出打开和关闭触发的回调',
                    template: "\n\n  onVisibleChange(visible, ${extParams}) {\n    // 弹出打开和关闭触发的回调\n    console.log('onVisibleChange', visible);\n  }\n",
                },
            ],
            style: true,
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
                visible: true,
                title: 'Confirm',
                content: 'Are you sure you want to delete?',
                children: {
                    type: 'JSSlot',
                    value: [
                    ],
                } as any
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
