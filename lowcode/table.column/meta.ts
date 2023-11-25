import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "TableColumn"
const componentTitle: string = "基础表格列"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'provider',
                title: {
                    label: '上下文的key',
                    tip: 'provider | 子组件获取上下文的key'
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'ellipsis',
                title: {
                    label: '是否自动省略',
                    tip: 'ellipsis | 单元格内容超出长度后，是否自动省略，显示 ...。设置这个属性后，table 的 table-layout 将自动变成 fixed。'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'filterMultiple',
                title: {
                    label: '可以筛选多项',
                    tip: 'filterMultiple | 是否可以筛选多项'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'dataIndex',
                title: {
                    label: '数据项中对应的key',
                    tip: 'dataIndex | 列数据在数据项中对应的 key，用于取值显示，支持 a[0].b.c[1] 的嵌套写法，详情看 lodash.get。'
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'align',
                title: {
                    label: '列的对齐方式',
                    tip: 'align | 设置列的对齐方式'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'left', value:'left' },
                                { title: 'center', value:'center' },
                                { title: 'right', value:'right' },
                            ]
                        }
                    }
                ],
            },
            {
                name: 'defaultSortOrder',
                title: {
                    label: '默认排序方式',
                    tip: 'defaultSortOrder | 默认排序方式'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'ascend', value:'ascend' },
                                { title: 'descend', value:'descend' },
                            ]
                        }
                    }
                ],
            },
            {
                name: 'fixed',
                title: {
                    label: '固定头和列',
                    tip: 'fixed | 固定头和列到左边或者右边'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'left', value:'left' },
                                { title: 'right', value:'right' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'columnTitle',
                title: {
                    label: '列表选择的标题',
                    tip: 'columnTitle | 自定义列表选择的标题'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {  componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'selectedRowKeys',
                title: {
                    label: 'Table选中的项',
                    tip: 'selectedRowKeys | Table选中的项，（受控模式，需要跟 onChange 配合使用）'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    },
                ],
            },
        ]
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: '',
    screenshot: "",
    devMode: "proCode",
    npm: pack("Table", componentName),
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
                    name: 'onFinish',
                    description: '倒计时完成后触发的回调',
                    template: "\n\n  onFinish(event, ${extParams}) {\n    // 倒计时完成后触发的回调\n    console.log('onFinish', event);\n  }\n",
                }
            ],
            style: true,
        },
        component: {
            isContainer: true,
            disableBehaviors: [ 'copy', 'remove', 'move' ]
        },
        advanced: {
            callbacks: {
                onMoveHook: () => false
            }
        }
    }
};
const snippets: IPublicTypeSnippet[] = [
    {
        title: componentTitle,
        screenshot: '',
        schema: {
            componentName,
            title: componentTitle,
            props: {
                provider: 'TableColumn',
                __cache: {}
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
