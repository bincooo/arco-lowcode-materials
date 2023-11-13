import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Badge"
const componentTitle: string = "徽标数"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'dot',
                title: {
                  label: '显示为小红点',
                  tip: 'dot | 显示为小红点',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'maxCount',
                title: {
                  label: '最多显示数量',
                  tip: 'maxCount | 头像组最多显示的头像数量，多余头像将以 +x 的形式展示。',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'text',
                title: {
                    label: '提示内容',
                  tip: 'text | 自定义提示内容',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'color',
                title: {
                    label: '内置颜色',
                    tip: 'color | 内置的一些颜色',
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'red', value: 'red' },
                                { title: 'orangered', value: 'orangered' },
                                { title: 'orange', value: 'orange' },
                                { title: 'gold', value: 'gold' },
                                { title: 'lime', value: 'lime' },
                                { title: 'green', value: 'green' },
                                { title: 'cyan', value: 'cyan' },
                                { title: 'arcoblue', value: 'arcoblue' },
                                { title: 'purple', value: 'purple' },
                                { title: 'pinkpurple', value: 'pinkpurple' },
                                { title: 'magenta', value: 'magenta' },
                                { title: 'gray', value: 'gray' },
                            ]
                        }
                    },
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'status',
                title: {
                    label: '状态类型',
                    tip: 'status | 徽标的状态类型',
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'default', value: 'default' },
                                { title: 'processing', value: 'processing' },
                                { title: 'success', value: 'success' },
                                { title: 'warning', value: 'warning' },
                                { title: 'error', value: 'error' },
                            ]
                        }
                    },
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'count',
                title: {
                    label: '显示数字',
                    tip: 'count | 徽标显示的数字',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'SlotSetter' }
                ]
            },
            {
                name: 'offset',
                title: {
                    label: '位置偏移(最多两项，代表xy轴)',
                    tip: 'offset | 设置徽标位置的偏移(最多两项，代表xy轴)',
                },
                setter: [
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: {
                                componentName: 'NumberSetter'
                            }
                        },
                    }
                ]
            }
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
    category: '数据显示',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: baseEvents,
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
