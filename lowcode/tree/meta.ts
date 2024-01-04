import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeDynamicSetter } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Tree"
const componentTitle: string = "树结构"



const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        name: 'fieldNames',
        title: {
          label: '字段映射',
          tip: 'fieldNames | 指定 key，title，isLeaf，disabled，children 对应的字段',
        },
        setter: [
            {
                componentName: 'ObjectSetter',
                props: {
                    config: {
                        items: [
                            { name: 'key', title: 'key', setter: 'StringSetter' },
                            { name: 'title', title: 'title', setter: 'StringSetter' },
                            { name: 'disabled', title: 'disabled', setter: 'StringSetter' },
                            { name: 'children', title: 'children', setter: 'StringSetter' },
                            { name: 'isLeaf', title: 'isLeaf', setter: 'StringSetter' },
                            { name: 'disableCheckbox', title: 'disableCheckbox', setter: 'StringSetter' },
                            { name: 'checkable', title: 'checkable', setter: 'StringSetter' },
                        ]
                    }
                }
            },
        ],
    },
    {
        name: 'treeData',
        title: {
          label: '树结构数据',
          tip: 'treeData | 可以通过传入treeData,生成对应的树结构',
        },
        setter: [
            { componentName: 'JsonSetter' },
        ],
    },
    {
        name: 'icons',
        title: {
          label: '定制节点图标',
          tip: 'icons | 定制节点图标',
        },
        setter: [
            {
                componentName: 'ObjectSetter',
                props: {
                    config: {
                        items: [
                            { name: 'dragIcon', title: 'dragIcon', setter: 'SlotSetter' },
                            { name: 'switcherIcon', title: 'switcherIcon', setter: 'SlotSetter' },
                            { name: 'loadingIcon', title: 'loadingIcon', setter: 'SlotSetter' },
                        ]
                    }
                }
            },
            {
                componentName: 'FunctionSetter',
                props: {
                    name: 'iconsRender',
                    template: "\n\n  iconsRender(nodeProps, ${extParams}) {\n    // 定制节点图标\n    console.log('iconsRender', nodeProps);\n    return {};\n  }\n"
                }
            }
        ],
    },
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'autoExpandParent',
                title: {
                  label: '自动展开父节点',
                  tip: 'autoExpandParent | 是否自动展开父节点',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'blockNode',
                title: {
                  label: '节点占据一行',
                  tip: 'blockNode | 是否节点占据一行',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'checkable',
                title: {
                  label: '在节点前添加选框',
                  tip: 'checkable | 是否在节点前添加选框',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'checkStrictly',
                title: {
                  label: '取消父子节点关联',
                  tip: 'checkStrictly | 是否取消父子节点关联',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'draggable',
                title: {
                  label: '可拖拽',
                  tip: 'draggable | 是否可拖拽',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'multiple',
                title: {
                  label: '支持多选',
                  tip: 'multiple | 是否支持多选',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'selectable',
                title: {
                  label: '可以选择',
                  tip: 'selectable | 是否可以选择',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'showLine',
                title: {
                  label: '展示连接线',
                  tip: 'showLine | 是否展示连接线',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'size',
                title: {
                  label: '不同尺寸',
                  tip: 'size | 不同尺寸',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'mini', value: 'mini' },
                                { title: 'small', value: 'small' },
                                { title: 'default', value: 'default' },
                                { title: 'large', value: 'large' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'allowDrop',
                title: {
                  label: '允许拖拽时放置在该节点',
                  tip: 'allowDrop | 是否允许拖拽时放置在该节点。',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'allowDrop',
                            template: "\n\n  allowDrop(options, ${extParams}) {\n    // 允许拖拽时放置在该节点\n    console.log('allowDrop', event);\n    return true;\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'checkedStrategy',
                title: {
                  label: '定制回填方式',
                  tip: 'checkedStrategy | 定制回填方式 all: 返回所有选中的节点, parent: 父子节点都选中时只返回父节点, child: 只返回子节点',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'all', value: 'all' },
                                { title: 'parent', value: 'parent' },
                                { title: 'child', value: 'child' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'virtualListProps',
                title: {
                  label: '传递虚拟列表属性',
                  tip: 'virtualListProps | 传递虚拟列表属性，传入此参数以开启虚拟滚动',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'loadMore',
                title: {
                  label: '异步加载数据的回调',
                  tip: 'loadMore | 异步加载数据的回调，返回一个 Promise。',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'loadMore',
                            template: "\n\n  loadMore(node, ${extParams}) {\n    // 异步加载数据的回调，返回一个 Promise。\n    console.log('loadMore', node);\n}\n"
                        }
                    },
                ],
            },
            {
                name: 'renderExtra',
                title: {
                  label: '渲染额外节点',
                  tip: 'renderExtra | 渲染额外节点',
                },
                propType: 'func',
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['nodeProps'],
                            value: [],
                        },
                    },
                ],
            } as any,
            {
                name: 'renderTitle',
                title: {
                  label: '渲自定义title的渲染染额外节点',
                  tip: 'renderTitle | 自定义 title 的渲染',
                },
                propType: 'func',
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['nodeProps'],
                            value: [],
                        },
                    },
                ],
            } as any,
        ]
    },
    {
        name: 'actionOnClick',
        title: {
          label: '点击节点时对应的操作',
          tip: 'actionOnClick | 点击节点时对应的操作，可以是选中，复选选中，展开/收起',
        },
        setter: [
            {
                componentName: 'SelectSetter',
                props: {
                    options: [
                        { title: 'select', value: 'select' },
                        { title: 'check', value: 'check' },
                        { title: 'expand', value: 'expand' },
                    ]
                }
            },
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'select', value: 'select' },
                                { title: 'check', value: 'check' },
                                { title: 'expand', value: 'expand' },
                            ]
                        }
                    },
                }
            }
        ],
    },
    {
        name: 'checkedKeys',
        title: {
          label: '选中复选框的树节点',
          tip: 'checkedKeys | 选中复选框的树节点。',
        },
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'StringSetter' }
                }
            },
        ],
    },
    {
        name: 'defaultCheckedKeys',
        title: {
          label: '默认选中复选框的树节点',
          tip: 'defaultCheckedKeys | 默认选中复选框的树节点',
        },
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'StringSetter' }
                }
            },
        ],
    },
    {
        name: 'defaultExpandedKeys',
        title: {
          label: '默认展开的节点',
          tip: 'defaultExpandedKeys | 默认展开的节点',
        },
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'StringSetter' }
                }
            },
        ],
    },
    {
        name: 'defaultSelectedKeys',
        title: {
          label: '默认选中的树节点',
          tip: 'defaultSelectedKeys | 默认选中的树节点',
        },
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'StringSetter' }
                }
            },
        ],
    },
    {
        name: 'expandedKeys',
        title: {
          label: '展开的节点',
          tip: 'expandedKeys | 展开的节点，(受控)。',
        },
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'StringSetter' }
                }
            },
        ],
    },
    {
        name: 'halfCheckedKeys',
        title: {
          label: '半选状态的节点',
          tip: 'halfCheckedKeys | 半选状态的节点.仅在 checkable 且 checkStrictly 时生效',
        },
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'StringSetter' }
                }
            },
        ],
    },
    {
        name: 'selectedKeys',
        title: {
          label: '选中的树节点',
          tip: 'selectedKeys | 选中的树节点。（受控）',
        },
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'StringSetter' }
                }
            },
        ],
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: '',
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
            events: [
                ...baseEvents,
                {
                    name: 'onDragEnd',
                    description: '节点结束拖拽的回调',
                    template: "\n\n  onDragEnd(event, node, ${extParams}) {\n    // 节点结束拖拽的回调\n    console.log('onDragEnd', event);\n  }\n",
                },
                {
                    name: 'onDragLeave',
                    description: '节点离开可释放目标上时的回调',
                    template: "\n\n  onDragLeave(event, node, ${extParams}) {\n    // 节点离开可释放目标上时的回调\n    console.log('onDragLeave', event);\n  }\n",
                },
                {
                    name: 'onDragOver',
                    description: '节点被拖拽至可释放目标上时的回调',
                    template: "\n\n  onDragOver(event, node, ${extParams}) {\n    // 节点被拖拽至可释放目标上时的回调\n    console.log('onDragOver', event);\n  }\n",
                },
                {
                    name: 'onDragStart',
                    description: '节点开始拖拽的回调',
                    template: "\n\n  onDragStart(event, node, ${extParams}) {\n    // 节点开始拖拽的回调\n    console.log('onDragStart', event);\n  }\n",
                },
                {
                    name: 'onDrop',
                    description: '节点在可释放目标上释放时的回调',
                    template: "\n\n  onDrop(event, node, ${extParams}) {\n    // 节点在可释放目标上释放时的回调\n    console.log('onDrop', event);\n  }\n",
                },
                {
                    name: 'onCheck',
                    description: '点击树节点复选框的回调',
                    template: "\n\n  onCheck(checkedKeys, extra, ${extParams}) {\n    // 点击树节点复选框的回调\n    console.log('onCheck', arguments);\n  }\n",
                },
                {
                    name: 'onExpand',
                    description: '点击展开/关闭的回调',
                    template: "\n\n  onExpand(expandedKeys, exra, ${extParams}) {\n    // 点击展开/关闭的回调\n    console.log('onExpand', arguments);\n  }\n",
                },
                {
                    name: 'onSelect',
                    description: '点击树节点的回调',
                    template: "\n\n  onSelect(expandedKeys, exra, ${extParams}) {\n    // 点击树节点的回调\n    console.log('onSelect', arguments);\n  }\n",
                },
            ],
            style: true,
        },
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
                treeData: [
                    {
                      title: 'Trunk 0-0',
                      key: '0-0',
                      children: [
                        {
                          title: 'Branch 0-0-2',
                          key: '0-0-2',
                          selectable: false,
                          children: [
                            {
                              title: 'Leaf',
                              key: '0-0-2-1',
                              children: [
                                {
                                  title: 'Leafsss 0-0-2',
                                  key: '0-0-2-1-0',
                                  children: [
                                    {
                                      title: 'Leaf',
                                      key: '0-0-2-1-0-0',
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      title: 'Trunk 0-1',
                      key: '0-1',
                      children: [
                        {
                          title: 'Branch 0-1-1',
                          key: '0-1-1',
                          children: [
                            {
                              title: 'Leaf',
                              key: '0-1-1-0',
                            },
                          ],
                        },
                      ],
                    },
                ]
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
