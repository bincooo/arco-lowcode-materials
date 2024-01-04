import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeDynamicProps } from '@alilc/lowcode-types';
import pack, { baseProps } from '../pack'

const componentName: string = "Text"
const componentTitle: string = "文本"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'children',
                title: {
                  label: '内容',
                  tip: 'children | 内容',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: 'JSSlot'
                        }
                    },
                ],
            },
            {
                name: 'bold',
                title: '粗体',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'disabled',
                title: '是否禁用',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'code',
                title: '代码块样式',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'delete',
                title: '删除线样式',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'underline',
                title: '下划线样式',
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'type',
                title: {
                    label: '文本类型',
                    tip: 'type | 不同状态: primary 主要、secondary 次要、success 成功、warning 警告、error 失败'
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                {
                                    title: 'primary',
                                    value: 'primary'
                                },
                                {
                                    title: 'secondary',
                                    value: 'secondary'
                                },
                                {
                                    title: 'success',
                                    value: 'success'
                                },
                                {
                                    title: 'warning',
                                    value: 'warning'
                                },
                                {
                                    title: 'error',
                                    value: 'error'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: 'mark',
                title: '标记样式',
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ]
            },
            {
                name: 'copyable',
                title: '复制功能',
                setter: [
                    { componentName: 'BoolSetter' },
                ]
            },
            {
                name: 'editable',
                title: '编辑功能',
                setter: [
                    { componentName: 'BoolSetter' },
                ]
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
    npm: pack("Typography", componentName),
    category: '通用',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
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
                children: '我是文本'
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};