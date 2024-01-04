import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeDynamicSetter } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Tooltip"
const componentTitle: string = "文字气泡"



const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'blurToHide',
                title: {
                  label: '失去焦点关闭弹出框',
                  tip: 'blurToHide | 是否在失去焦点的时候关闭弹出框',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultPopupVisible',
                title: {
                  label: '默认的弹出框状态',
                  tip: 'defaultPopupVisible | 默认的弹出框状态',
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
                name: 'mini',
                title: {
                  label: '迷你尺寸',
                  tip: 'mini | 迷你尺寸',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'popupHoverStay',
                title: {
                  label: '鼠标移入弹出框保留',
                  tip: 'popupHoverStay | 鼠标移入弹出框的话，弹出框会保留而不销毁',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'popupVisible',
                title: {
                  label: '弹出框是否打开',
                  tip: 'popupVisible | 弹出框是打开还是关闭状态',
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
                name: 'childrenPrefix',
                title: {
                  label: '打开状态给元素加上一个类',
                  tip: 'childrenPrefix | 会在打开状态给元素加上一个类，格式为 ${childrenPrefix}-open。',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'color',
                title: {
                  label: '弹出层背景色',
                  tip: 'color | 弹出层背景色',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'ColorSetter' },
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
                  tip: 'trigger | 触发方式: 触发时机可查看Trigger组件文档',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'triggerProps',
                title: {
                  label: '可以接受所有Trigger组件的参数',
                  tip: 'triggerProps | 可以接受所有 Trigger 组件的参数',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'content',
                title: {
                  label: '弹出的内容',
                  tip: 'content | 弹出的内容',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'getPopupContainer',
                title: {
                  label: '弹出框挂载的节点',
                  tip: 'getPopupContainer | 弹出框挂载的节点',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getPopupContainer',
                            template: "\n\n  getPopupContainer(node, ${extParams}) {\n    // 弹出框挂载的节点\n    console.log('onClick', event);\n  }\n"
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
                    name: 'onVisibleChange',
                    description: '显示或隐藏时触发的回调',
                    template: "\n\n  onVisibleChange(event, ${extParams}) {\n    // 显示或隐藏时触发的回调\n    console.log('onVisibleChange', event);\n  }\n",
                }
            ],
            style: true,
        },
        component: {
            isContainer: true,
            actions: [
                {
                    name: '关闭气泡',
                    content: {
                        icon: 'arrow-down',
                        title: '关闭气泡',
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
                content: 'tooltip text'
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
