import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "FormList"
const componentTitle: string = "表单列"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'field',
                title: {
                    label: '字段名',
                    tip: 'field | 字段名',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'noStyle',
                title: {
                    label: '不渲染任何外部标签/样式',
                    tip: 'noStyle | FormItemProps[\'noStyle\'].rules 存在时默认为 false(需要渲染校验信息)，否则默认为 true',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'initialValue',
                title: {
                    label: '初始值',
                    tip: 'initialValue | 初始值',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'rules',
                title: {
                    label: '受控模式下的验证规则',
                    tip: 'rules | 受控模式下的验证规则',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'children',
                title: {
                    label: '函数类型的children',
                    tip: 'rules | 函数类型的 children',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['fields', 'operation'],
                            value: [],
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
    npm: pack("Form", "List"),
    category: '数据输入',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                
            ],
            style: true
        },
        component: {
            isContainer: true,
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
