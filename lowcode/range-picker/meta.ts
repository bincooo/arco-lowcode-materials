import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'
import _props, { events } from '../time-picker/base'

const componentName: string = "RangePicker"
const componentTitle: string = "时间区间"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'value',
                title: {
                    label: '星的个数',
                    tip: 'value | 星的个数，受控值',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '默认值',
                    tip: 'defaultValue | 默认值',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'placeholder',
                title: {
                    label: '提示文案',
                    tip: 'placeholder | 提示文案',
                },
                setter: [
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter:  { componentName: 'StringSetter' }
                        }
                    },
                ],
            },
            {
                name: 'order',
                title: {
                    label: '起止时间是否自动排序',
                    tip: 'order | 起止时间是否自动排序',
                },
                setter: [
                    { componentName: 'BoolSetter' },
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
    npm: pack("TimePicker", componentName),
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
                {
                    name: 'onChange',
                    description: '日历组件值发生改变时的回调',
                    template: "\n\n  onChange(valueString, value, ${extParams}) {\n    // 日历组件值发生改变时的回调\n    console.log('onChange', valueString);\n  }\n",
                },
                {
                    name: 'onSelect',
                    description: '选择日期时的回调',
                    template: "\n\n  onSelect(valueString, value, ${extParams}) {\n    // 选择日期时的回调\n    console.log('onSelect', valueString);\n  }\n",
                },
            ],
            style: true
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
    }
];

export default {
  ...Metadata,
  snippets
};
