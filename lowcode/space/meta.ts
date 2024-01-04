import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Space"
const componentTitle: string = "间距"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'wrap',
                title: {
                  label: '环绕间距',
                  tip: 'wrap | 环绕类型的间距，用于折行的场景。',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'align',
                title: {
                    label: '对齐方式',
                    tip: 'align | 对齐方式'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'start', value: 'start' },
                                { title: 'end', value: 'end' },
                                { title: 'center', value: 'center' },
                                { title: 'baseline', value: 'baseline' },
                            ]
                        }
                    }
                ]
            },
            {
                name: 'direction',
                title: {
                    label: '间距方向',
                    tip: 'direction | 间距方向'
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
                    }
                ]
            },
            {
                name: 'split',
                title: {
                    label: '设置分隔符',
                    tip: 'split | 设置分隔符'
                },
                setter: { componentName: 'SlotSetter' }
            },
            {
                name: 'size',
                title: {
                    label: '尺寸',
                    tip: 'size | 尺寸。( 2.15.0 开始支持数组形式 )'
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'mini', value: 'mini' },
                                { title: 'small', value: 'small' },
                                { title: 'medium', value: 'medium' },
                                { title: 'large', value: 'large' },
                            ]
                        }
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
    category: '布局',
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
            isContainer: true
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
