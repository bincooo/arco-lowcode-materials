import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "RadioGroup"
const componentTitle: string = "单选框组"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'name',
                title: {
                    label: '名字',
                    tip: 'name | 名字',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'value',
                title: {
                    label: '选中的值',
                    tip: 'value | 选中的值（受控模式）',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '默认选中的值',
                    tip: 'defaultValue | 默认选中的值',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'options',
                title: {
                    label: '以数组配置的形式来设置单选组',
                    tip: 'options | 以数组配置的形式来设置单选组',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'direction',
                title: {
                    label: '方向',
                    tip: 'direction | 方向',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'vertical', value: 'vertical' },
                                { title: 'horizontal', value: 'horizontal' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'size',
                title: {
                    label: '尺寸',
                    tip: 'size | 按钮类型的单选框尺寸（只在按钮类型下生效）',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'small', value: 'small' },
                                { title: 'default', value: 'default' },
                                { title: 'large', value: 'large' },
                                { title: 'mini', value: 'mini' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'type',
                title: {
                    label: '单选的类型',
                    tip: 'type | 单选的类型，是单选还是按钮',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'radio', value: 'radio' },
                                { title: 'button', value: 'button' },
                            ]
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
    npm: pack("Radio", "Group"),
    category: '数据输入',
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
                    description: '点击单选的回调',
                    template: "\n\n  onChange(value, event, ${extParams}) {\n    // 点击单选的回调\n    console.log('onChange', value);\n  }\n",
                },
            ],
            style: true
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'Radio' ]
            }
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
