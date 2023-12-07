import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'
import _props, { events } from '../date-picker/base'

const componentName: string = "YearPicker"
const componentTitle: string = "年份选择器"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
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
    npm: pack("DatePicker", componentName),
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
                children: "选项"
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
