import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Calendar"
const componentTitle: string = "日历"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'allowSelect',
                title: {
                  label: '允许选中和切换',
                  tip: 'allowSelect | 是否允许选中和切换日期，panel 模式下默认可选中切换',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'isWeek',
                title: {
                    label: '周选择',
                    tip: 'isWeek | 周选择',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'panel',
                title: {
                    label: '放在容器中',
                    tip: 'panel | 是否放在容器中进行展示。',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'panelTodayBtn',
                title: {
                    label: '显示跳转到今天',
                    tip: 'panelTodayBtn | 是否显示跳转到今天的按钮',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultMode',
                title: {
                    label: '默认选择模式',
                    tip: 'defaultMode | 选择日期的月日历和选择月份的年日历。',
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'day', value: 'day' },
                                { title: 'week', value: 'week' },
                                { title: 'month', value: 'month' },
                                { title: 'year', value: 'year' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'mode',
                title: {
                    label: '选择模式',
                    tip: 'mode | 选择日期的月日历和选择月份的年日历，受控模式。',
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'day', value: 'day' },
                                { title: 'week', value: 'week' },
                                { title: 'month', value: 'month' },
                                { title: 'year', value: 'year' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'headerType',
                title: {
                    label: '头部类型',
                    tip: 'headerType | 有两种头部可供选择，默认的按钮类型和下拉框类型，只在全屏日历模式下生效。',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'button', value: 'button' },
                                { title: 'select', value: 'select' },
                            ]
                        }
                    }
                ]
            },
            {
                name: 'dayStartOfWeek',
                title: {
                    label: '每周起始',
                    tip: 'dayStartOfWeek | 每周的第一天开始于周几，0 - 周日，1 - 周一。',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'Sun', value: 0 },
                                { title: 'Mon', value: 1 },
                            ]
                        }
                    }
                ]
            },
            {
                name: 'panelWidth',
                title: {
                    label: '卡片模式的宽度',
                    tip: 'panelWidth | 卡片模式的宽度',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'StringSetter' },
                ]
            },
            {
                name: 'locale',
                title: {
                    label: '国际化配置',
                    tip: 'locale | 国际化配置',
                },
                setter: [
                    { componentName: 'JsonSetter' }
                ]
            },
            {
                name: 'dateInnerContent',
                title: {
                    label: '定制日期单元格',
                    tip: 'panelWidth | 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。',
                },
                setter: { componentName: 'FunctionSetter' }
            },
            {
                name: 'dateRender',
                title: {
                    label: '定制日期显示',
                    tip: 'dateRender | 定制日期显示，会完全覆盖日期单元格。',
                },
                setter: { componentName: 'FunctionSetter' }
            },
            {
                name: 'disabledDate',
                title: {
                    label: '不可选取的时间',
                    tip: 'disabledDate | 不可选取的时间',
                },
                setter: { componentName: 'FunctionSetter' }
            },
            {
                name: 'headerRender',
                title: {
                    label: '自定义头部渲染',
                    tip: 'headerRender | 自定义头部渲染。',
                },
                setter: { componentName: 'FunctionSetter' }
            },
            {
                name: 'monthRender',
                title: {
                    label: '定制月份显示',
                    tip: 'monthRender | 定制月份显示，会完全覆盖月份单元格。',
                },
                setter: { componentName: 'FunctionSetter' }
            },
        ]
    },
    {
        name: 'panelOperations',
        title: {
            label: '配置操作按钮',
            tip: "panelOperations | 卡片模式下配置操作按钮 'left' | 'double-left' | 'right' | 'double-right'",
        },
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: {
                        componentName: 'StringSetter'
                    }
                }
            }
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
                    name: 'onChange',
                    description: '日期变化触发的回调。',
                    template: "onChange(date, ${extParams}) => {\n// 点击按钮时的回调\nconsole.log('onChange', date);}"
                },
                {
                    name: 'onPanelChange',
                    description: '面板日期发生改变触发的回调。',
                    template: "onPanelChange(date, ${extParams}) => {\n// 点击按钮时的回调\nconsole.log('onPanelChange', date);}"
                },
            ],
            style: true,
        },
        component: {
            isContainer: true,
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
            }
        }
    },
];

export default {
  ...Metadata,
  snippets
};
