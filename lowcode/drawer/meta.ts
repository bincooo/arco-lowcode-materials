import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Drawer"
const componentTitle: string = "抽屉"

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
                name: 'width',
                title: {
                    label: '抽屉的宽度',
                    tip: 'width | 抽屉的宽度，placement为 left right 时生效',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'height',
                title: {
                    label: '抽屉的高度',
                    tip: 'height | 抽屉的高度，placement为 top bottom 时生效',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'NumberSetter' },
                ],
            },
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
                name: 'visible',
                title: {
                    label: '显示弹出框',
                    tip: 'visible | 是否显示弹出框',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'autoFocus',
                title: {
                    label: '默认聚焦第一个可聚焦元素',
                    tip: 'autoFocus | 是否默认聚焦第一个可聚焦元素，只在 focusLock 开启时生效',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'closable',
                title: {
                    label: '显示右上角关闭按钮',
                    tip: 'closable | 是否显示右上角关闭按钮',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'confirmLoading',
                title: {
                    label: '确认按钮为加载中状态',
                    tip: 'confirmLoading | 确认按钮是否为加载中状态',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'escToExit',
                title: {
                    label: '按ESC键关闭',
                    tip: 'escToExit | 按 ESC 键关闭',
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
                name: 'mask',
                title: {
                    label: '显示遮罩',
                    tip: 'mask | 是否显示遮罩',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'maskClosable',
                title: {
                    label: '点击蒙层可以关闭',
                    tip: 'maskClosable | 点击蒙层是否可以关闭',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'mountOnEnter',
                title: {
                    label: '初次打开对话框时才渲染dom',
                    tip: 'mountOnEnter | 是否在初次打开对话框时才渲染 dom',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'unmountOnExit',
                title: {
                    label: '隐藏的时候销毁DOM结构',
                    tip: 'unmountOnExit | 是否在隐藏的时候销毁 DOM 结构',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'zIndex',
                title: {
                    label: '设置抽屉的zIndex',
                    tip: 'zIndex | 设置抽屉的 zIndex',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'placement',
                title: {
                    label: '抽屉的方向',
                    tip: 'placement | 抽屉的方向',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'top', value: 'top' },
                                { title: 'right', value: 'right' },
                                { title: 'bottom', value: 'bottom' },
                                { title: 'left', value: 'left' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'cancelText',
                title: {
                    label: '取消按钮文案',
                    tip: 'cancelText | 取消按钮文案',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'closeIcon',
                title: {
                    label: '自定义右上角关闭按钮',
                    tip: 'closeIcon | 自定义右上角关闭按钮',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'footer',
                title: {
                    label: '自定义按钮确认和取消按钮',
                    tip: 'footer | 自定义按钮确认和取消按钮，为 null 的话没有按钮组',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'okText',
                title: {
                    label: '确认按钮文案',
                    tip: 'okText | 确认按钮文案',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'headerStyle',
                title: {
                    label: '头部的样式',
                    tip: 'headerStyle | 头部的样式',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'bodyStyle',
                title: {
                    label: '内容区域的样式',
                    tip: 'bodyStyle | 内容区域的样式',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'maskStyle',
                title: {
                    label: '设置遮罩层的样式',
                    tip: 'maskStyle | 设置遮罩层的样式',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'cancelButtonProps',
                title: {
                    label: '取消按钮的props',
                    tip: 'cancelButtonProps | 取消按钮的 props',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'okButtonProps',
                title: {
                    label: '确认按钮的props',
                    tip: 'okButtonProps | 确认按钮的 props',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'wrapClassName',
                title: {
                    label: '设置外层容器的类名',
                    tip: 'wrapClassName | 设置外层容器的类名',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter:  { componentName: 'StringSetter' }
                        }
                    },
                ],
            },
            {
                name: 'getPopupContainer',
                title: {
                    label: '弹出框挂在的父节点',
                    tip: 'getPopupContainer | 弹出框挂在的父节点'
                },
                setter: [
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getPopupContainer',
                            template: "\n\n  getPopupContainer(${extParams}) {\n    // 弹出框挂在的父节点\n    console.log('getPopupContainer');\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'getChildrenPopupContainer',
                title: {
                    label: '抽屉里的弹出框挂载的容器',
                    tip: 'getChildrenPopupContainer | 抽屉里的弹出框 Select Tooltip 等挂载的容器，默认挂载在对话框内'
                },
                setter: [
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getChildrenPopupContainer',
                            template: "\n\n  getChildrenPopupContainer(node, ${extParams}) {\n    // 抽屉里的弹出框挂载的容器\n    console.log('getChildrenPopupContainer', node);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'afterClose',
                title: {
                    label: '抽屉关闭之后的回调',
                    tip: 'afterClose | 抽屉关闭之后的回调'
                },
                setter: [
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'afterClose',
                            template: "\n\n  afterClose(${extParams}) {\n    // 抽屉关闭之后的回调\n    console.log('afterClose');\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'afterOpen',
                title: {
                    label: '抽屉打开之后的回调',
                    tip: 'afterOpen | 抽屉打开之后的回调'
                },
                setter: [
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'afterOpen',
                            template: "\n\n  afterOpen(${extParams}) {\n    // 抽屉打开之后的回调\n    console.log('afterOpen');\n  }\n"
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
                    description: '关闭弹出框的回调',
                    template: "\n\n  onCancel(event, ${extParams}) {\n    // 关闭弹出框的回调\n    console.log('onCancel', event);\n  }\n",
                },
                {
                    name: 'onOk',
                    description: '点击确认按钮的回调',
                    template: "\n\n  onOk(event, ${extParams}) {\n    // 点击确认按钮的回调\n    console.log('onOk', event);\n  }\n",
                },
            ],
            style: true
        },
        component: {
            rootSelector: 'div.arco-drawer'
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
                visible: true,
                title: componentTitle,
                width: '500px'
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
