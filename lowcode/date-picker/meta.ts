import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'
import _props, { events } from './base'

const componentName: string = "DatePicker"
const componentTitle: string = "日期选择器"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'showNowBtn',
                title: {
                    label: '显示选择当前时间的按钮',
                    tip: 'showNowBtn | 是否显示 showTime 时，选择当前时间的按钮。',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '默认日期',
                    tip: 'defaultValue | 默认日期',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'showTime',
                title: {
                    label: '是否增加时间选择',
                    tip: 'showTime | 是否增加时间选择',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'timepickerProps',
                title: {
                    label: '时间显示的参数',
                    tip: 'timepickerProps | 时间显示的参数，参考 TimePickerProps，作用同 showTime。',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'value',
                title: {
                    label: '日历组件的值',
                    tip: 'value | 日历组件的值',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'disabledTime',
                title: {
                    label: '不可选取的时间(Time)',
                    tip: 'disabledTime | 不可选取的时间(Time)',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'disabledTime',
                            template: "\n\n  disabledTime(current, ${extParams}) {\n    // 不可选取的时间\n    console.log('disabledTime', current);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'format',
                title: {
                    label: '展示日期的格式',
                    tip: 'format | 展示日期的格式，参考dayjs。使用 string 时，可以手动键入和编辑日期。使用 (value: Dayjs) => string 时，只能在 Picker 中选取日期。',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'format',
                            template: "\n\n  format(value, ${extParams}) {\n    // 展示日期的格式\n    console.log('format', value);\n  }\n"
                        }
                    },
                ],
            },
            ..._props,
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
    category: '数据输入',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                ...events,
            ],
            style: true
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
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
