import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "StepsStep"
const componentTitle: string = "步骤子节点"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'id',
                title: {
                    label: '指定节点的ID',
                    tip: 'id | 指定节点的 ID，将在 onChange 回调中作为参数',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'NumberSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '禁用',
                    tip: 'disabled | 当前步骤点击被禁用',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'status',
                title: {
                    label: '当前步数的节点状态',
                    tip: 'status | 当前步数的节点状态',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'wait', value: 'wait' },
                                { title: 'proc', value: 'process' },
                                { title: 'finish', value: 'finish' },
                                { title: 'error', value: 'error' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'title',
                title: {
                    label: '节点标题',
                    tip: 'title | 节点标题',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'description',
                title: {
                    label: '节点描述',
                    tip: 'description | 节点描述',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'BoolSetter' },
                ],
            },
        ]
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Steps", "Step"),
    category: '导航',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                {
                    name: 'onClick',
                    description: '点击回调',
                    template: "\n\n  onClick(index, id, ${extParams}) {\n    // 点击回调\n    console.log('onClick', index);\n  }\n",
                },
            ],
            style: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'StepsStep' ]
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
//   snippets
};
