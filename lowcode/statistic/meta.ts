import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Statistic"
const componentTitle: string = "数值显示"

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
                    label: '数值的标题',
                    tip: 'title | 数值的标题'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'value',
                title: {
                    label: '数值',
                    tip: 'value | 数值'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'countUp',
                title: {
                    label: '数字动态变大',
                    tip: 'countUp | 数字动态变大'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'groupSeparator',
                title: {
                    label: '显示千位分割符',
                    tip: 'groupSeparator | 显示千位分割符'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'loading',
                title: {
                    label: '数字是否加载中',
                    tip: 'loading | 数字是否加载中'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'countDuration',
                title: {
                    label: '动态变大的过渡时间',
                    tip: 'countDuration | 动态变大的过渡时间 (ms)'
                },
                setter: { componentName: 'NumberSetter' },
            },
            {
                name: 'countFrom',
                title: {
                    label: '起始数字动态变大',
                    tip: 'countFrom | 从什么数字开始动态变大'
                },
                setter: { componentName: 'NumberSetter' },
            },
            {
                name: 'precision',
                title: {
                    label: '数字精度',
                    tip: 'precision | 数字精度'
                },
                setter: { componentName: 'NumberSetter' },
            },
            {
                name: 'format',
                title: {
                    label: '格式化',
                    tip: "format | dayjs's format"
                },
                setter: { componentName: 'StringSetter' },
            },
            {
                name: 'renderFormat',
                title: {
                    label: '自定义格式化',
                    tip: "renderFormat | 自定义 render 函数。formattedValue 表示格式化后的值。"
                },
                setter: {
                    componentName: 'FunctionSetter',
                    props: {
                        name: 'renderFormat',
                        template: "\n\n  renderFormat(event, ${extParams}) {\n    // 点击按钮时的回调\n    console.log('onClick', event);\n  }\n"
                    }
                },
            },
            {
                name: 'extra',
                title: {
                    label: '在数值下展示额外内容',
                    tip: 'extra | 在数值下展示额外内容'
                },
                setter: { componentName: 'SlotSetter' },
            },
            {
                name: 'prefix',
                title: {
                    label: '前缀',
                    tip: 'prefix | 前缀'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'suffix',
                title: {
                    label: '后缀',
                    tip: 'suffix | 后缀'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'styleValue',
                title: {
                    label: '数值的样式',
                    tip: 'styleValue | 数值的样式'
                },
                setter: { componentName: 'JsonSetter' },
            },
            {
                name: 'styleDecimal',
                title: {
                    label: '数值小数的样式',
                    tip: 'styleDecimal | 数值小数部分的样式'
                },
                setter: { componentName: 'JsonSetter' },
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
            ],
            style: true,
        },
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
                title: 'Comments',
                value: 40509
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
