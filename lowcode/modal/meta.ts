import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Modal"
const componentTitle: string = "对话框"

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
                    label: '弹出框可见',
                    tip: 'visible | 弹出框是否可见',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'alignCenter',
                title: {
                    label: '垂直水平居中',
                    tip: 'alignCenter | 弹出框垂直水平居中',
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
                    label: '显示关闭按钮',
                    tip: 'closable | 是否显示右上角的关闭按钮',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'confirmLoading',
                title: {
                    label: '确认按钮加载中',
                    tip: 'confirmLoading | 确认按钮加载中',
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
                    label: '点击蒙层关闭',
                    tip: 'maskClosable | 点击蒙层是否可以关闭',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'mountOnEnter',
                title: {
                    label: '初次打开对话框时渲染DOM',
                    tip: 'mountOnEnter | 是否在初次打开对话框时才渲染 DOM',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'simple',
                title: {
                    label: '简洁模式的样式',
                    tip: 'simple | 简洁模式的样式，没有分割线，底部按钮居中显示。默认通过方法调用的提示类型的弹窗会展示simple样式。设置为true时，默认不显示右上角关闭图标',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'unmountOnExit',
                title: {
                    label: '隐藏之后销毁DOM结构',
                    tip: 'unmountOnExit | 是否在隐藏之后销毁DOM结构',
                },
                setter: [
                    { componentName: 'BoolSetter' },
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
                    label: '右上角的关闭按钮节点',
                    tip: 'closeIcon | 自定义右上角的关闭按钮节点',
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
                name: 'maskStyle',
                title: {
                    label: '蒙层的样式',
                    tip: 'maskStyle | 蒙层的样式',
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
                    label: '弹出框外层dom类名',
                    tip: 'wrapClassName | 弹出框外层 dom 类名',
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
                name: 'wrapStyle',
                title: {
                    label: '弹出框外层样式',
                    tip: 'wrapStyle | 弹出框外层样式',
                },
                setter: [
                    { componentName: 'JsonSetter' },
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
            {
                name: 'footer',
                title: {
                    label: '自定义页脚',
                    tip: 'footer | 自定义页脚',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['cancel', 'ok'],
                            value: [],
                        },
                    },
                ],
            },
            {
                name: 'modalRender',
                title: {
                    label: '自定义渲染对话框',
                    tip: 'modalRender | 自定义渲染对话框',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['modal'],
                            value: [],
                        },
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
                    template: "\n\n  onCancel(${extParams}) {\n    // 关闭弹出框的回调\n    console.log('onCancel');\n  }\n",
                },
                {
                    name: 'onOk',
                    description: '点击确认按钮的回调',
                    template: "\n\n  onOk(event, ${extParams}) {\n    // 点击确认按钮的回调\n    console.log('onOk', event);\n  }\n",
                },
            ],
            style: true,
        },
        component: {
            isModal: true,
            rootSelector: 'div[role=dialog]'
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
                title: 'Modal Title',
                children: ['You can customize modal body text by the current situation. This modal will be closed\nimmediately once you press the OK button.']
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
