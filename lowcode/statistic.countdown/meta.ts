import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "StatisticCountdown"
const componentTitle: string = "数值计时"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'start',
                title: {
                    label: '开始倒计时',
                    tip: 'start | 是否开始倒计时，默认为 true，可以通过设置该值控制倒计时的时机'
                },
                setter: { componentName: 'BoolSetter' },
            },
            {
                name: 'format',
                title: {
                    label: '格式化',
                    tip: 'format | dayjs\'s format'
                },
                setter: { componentName: 'StringSetter' },
            },
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
                name: 'now',
                title: {
                    label: '时间修正',
                    tip: 'now | 用于修正初始化时间显示不正确'
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'StringSetter' },
                    { componentName: 'DateSetter' },
                    { componentName: 'FunctionSetter' },
                ]
            },
            {
                name: 'value',
                title: {
                    label: '倒计时的时间',
                    tip: 'value | 倒计时的时间'
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'StringSetter' },
                    { componentName: 'DateSetter' },
                    { componentName: 'FunctionSetter' },
                ]
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
        ]
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: '',
    screenshot: "",
    devMode: "proCode",
    npm: pack("Statistic", "Countdown"),
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
                    name: 'onFinish',
                    description: '倒计时完成后触发的回调',
                    template: "\n\n  onFinish(event, ${extParams}) {\n    // 倒计时完成后触发的回调\n    console.log('onFinish', event);\n  }\n",
                }
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
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
