import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Popover"
const componentTitle: string = "气泡卡片"
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
                    label: '标题',
                    tip: 'title | 标题.函数类型在 2.48.0 支持'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'FunctionSetter' },
                ]
            },
            {
                name: 'blurToHide',
                title: {
                    label: '失去焦点关闭弹出框',
                    tip: 'blurToHide | 是否在失去焦点的时候关闭弹出框'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'defaultPopupVisible',
                title: {
                    label: '默认的弹出框状态',
                    tip: 'defaultPopupVisible | 默认的弹出框状态'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'disabled',
                title: {
                    label: '是否禁用',
                    tip: 'disabled | 是否禁用'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'popupHoverStay',
                title: {
                    label: '鼠标移入弹出框保留',
                    tip: 'popupHoverStay | 鼠标移入弹出框的话，弹出框会保留而不销毁'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'popupVisible',
                title: {
                    label: '弹出框打开',
                    tip: 'popupVisible | 弹出框是打开还是关闭状态'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'unmountOnExit',
                title: {
                    label: '隐藏时销毁',
                    tip: 'unmountOnExit | 是否在隐藏的时候销毁 DOM 结构'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'childrenPrefix',
                title: {
                    label: '打开状态Class前缀',
                    tip: 'childrenPrefix | 会在打开状态给元素加上一个类，格式为 ${childrenPrefix}-open。'
                },
                setter: [
                    { componentName: 'StringSetter' },
                ]
            },
            {
                name: 'color',
                title: {
                    label: '弹出层背景色',
                    tip: 'color | 弹出层背景色'
                },
                setter: [
                    { componentName: 'ColorSetter' },
                ]
            },
            {
                name: 'position',
                title: {
                    label: '弹出框的方位',
                    tip: 'position | 弹出框的方位，有 12 个方位可供选择'
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
                ]
            },
            {
                name: 'trigger',
                title: {
                    label: '触发方式',
                    tip: 'trigger | 触发方式'
                },
                setter: [
                    { componentName: 'StringSetter' },
                ]
            },
            {
                name: 'triggerProps',
                title: {
                    label: '高级触发方式',
                    tip: 'triggerProps | 可以接受所有 Trigger 组件的参数'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ]
            },
            {
                name: 'content',
                title: {
                    label: '弹出的内容',
                    tip: 'content | 弹出的内容'
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ]
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
            isContainer: true
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
