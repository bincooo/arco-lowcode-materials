import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "TreeSelect"
const componentTitle: string = "树选择输入框"

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
                            {
                                name: 'key',
                                title: 'key',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ],
                            },
                            {
                                name: 'title',
                                title: 'title',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ],
                            },
                            {
                                name: 'disabled',
                                title: 'disabled',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ],
                            },
                            {
                                name: 'children',
                                title: 'children',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ],
                            },
                            {
                                name: 'isLeaf',
                                title: 'isLeaf',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ],
                            },
                            {
                                name: 'disableCheckbox',
                                title: 'disableCheckbox',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ],
                            },
                            {
                                name: 'checkable',
                                title: 'checkable',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ],
                            },
                        ]
                    }
                }
            },
        ],
    },
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'treeData',
                title: {
                    label: '数据',
                    tip: 'treeData | 数据',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'value',
                title: {
                    label: '选中值',
                    tip: 'value | 选中值',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'allowClear',
                title: {
                    label: '允许清除值',
                    tip: 'allowClear | 允许清除值',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'animation',
                title: {
                    label: '为内部标签变化添加动画',
                    tip: 'animation | 是否为内部标签变化添加动画',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'bordered',
                title: {
                    label: '显示边框',
                    tip: 'bordered | 是否显示边框',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '禁用状态',
                    tip: 'disabled | 是否为禁用状态',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'dragToSort',
                title: {
                    label: '通过拖拽排序',
                    tip: 'dragToSort | 是否可以通过拖拽为 Tag 排序',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'labelInValue',
                title: {
                    label: '置value格式',
                    tip: 'labelInValue | 设置 value 格式。默认是 string，设置为 true 时候，value 格式为： { label: string, value: string }',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'loading',
                title: {
                    label: '加载状态',
                    tip: 'loading | 是否为加载状态',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'multiple',
                title: {
                    label: '是否多选',
                    tip: 'multiple | 是否多选',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'popupVisible',
                title: {
                    label: '控制下拉框的展开收起',
                    tip: 'popupVisible | 控制下拉框的展开收起',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'treeCheckable',
                title: {
                    label: '父子节点是否关联',
                    tip: 'treeCheckable | 是否展示复选框',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'treeCheckStrictly',
                title: {
                    label: '父子节点关联',
                    tip: 'treeCheckStrictly | 父子节点是否关联',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'unmountOnExit',
                title: {
                    label: '隐藏之后销毁DOM',
                    tip: 'unmountOnExit | 父子节点是否在隐藏之后销毁 DOM 结构是否关联',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'inputValue',
                title: {
                    label: '输入框搜索文本的受控值',
                    tip: 'inputValue | 输入框搜索文本的受控值',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'placeholder',
                title: {
                    label: '选择框默认文字',
                    tip: 'placeholder | 选择框默认文字',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'autoWidth',
                title: {
                    label: '设置宽度自适应',
                    tip: 'autoWidth | 设置宽度自适应。minWidth 默认为 0，maxWidth 默认为 100%',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'size',
                title: {
                    label: '尺寸',
                    tip: 'size | 分别不同尺寸的选择器。对应 24px, 28px, 32px, 36px',
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
                name: 'status',
                title: {
                    label: '状态',
                    tip: 'status | 状态',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'error', value: 'error' },
                                { title: 'warning', value: 'warning' },
                            ]
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
                name: 'addBefore',
                title: {
                    label: '选择框前添加元素',
                    tip: 'addBefore | 选择框前添加元素',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'clearIcon',
                title: {
                    label: '清除按钮的图标',
                    tip: 'clearIcon | allowClear 时配置清除按钮的图标',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'notFoundContent',
                title: {
                    label: '没有数据时显示的内容',
                    tip: 'notFoundContent | 没有数据时显示的内容',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'prefix',
                title: {
                    label: '前缀',
                    tip: 'prefix | 前缀',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'suffixIcon',
                title: {
                    label: '后缀图标',
                    tip: 'suffixIcon | 自定义选择框后缀图标',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'arrowIcon',
                title: {
                    label: '自定义箭头图标',
                    tip: 'arrowIcon | 自定义箭头图标',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '选择框的默认值',
                    tip: 'defaultValue | 选择框的默认值',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'dropdownMenuStyle',
                title: {
                    label: '设置下拉框样式',
                    tip: 'dropdownMenuStyle | 设置下拉框样式',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'removeIcon',
                title: {
                    label: '多选时配置选中项的删除图标',
                    tip: 'removeIcon | 多选时配置选中项的删除图标',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'showSearch',
                title: {
                    label: '使单选模式可搜索',
                    tip: 'showSearch | 使单选模式可搜索，传入 { retainInputValue: true } 在搜索框聚焦时保留现有内容传入 { retainInputValueWhileSelect: true } 在多选选择时保留输入框内容',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'treeProps',
                title: {
                    label: '数据',
                    tip: 'treeProps | 数据',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'triggerProps',
                title: {
                    label: 'Trigger组件的参数',
                    tip: 'triggerProps | 可以接受所有 Trigger 组件的参数',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'dropdownRender',
                title: {
                    label: '自定义下拉框展示',
                    tip: 'dropdownRender | 自定义下拉框展示',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["dom:"],
                            value: []
                        }
                    },
                ],
            },
            {
                name: 'filterTreeNode',
                title: {
                    label: '根据输入的值筛选数据',
                    tip: 'filterTreeNode | 根据输入的值筛选数据。接收 inputText 和 treeNode 两个参数，当 option 符合筛选条件时，返回 true，反之返回 false。treeNode 是树节点',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'filterTreeNode',
                            template: "\n\n  filterTreeNode(inputText, treeNode, ${extParams}) {\n    // 自定义搜索逻辑\n    console.log('filterTreeNode', inputText);\n    return true;\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'getPopupContainer',
                title: {
                    label: '弹出框挂载的父节点',
                    tip: 'getPopupContainer | 弹出框挂载的父节点',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getPopupContainer',
                            template: "\n\n  getPopupContainer(node, ${extParams}) {\n    // 弹出框挂载的父节点\n    console.log('getPopupContainer', node);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'loadMore',
                title: {
                    label: '动态加载数据',
                    tip: 'loadMore | 动态加载数据',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'loadMore',
                            template: "\n\n  loadMore(treeNode, dataRef, ${extParams}) {\n    // 动态加载数据\n    console.log('loadMore', treeNode);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'maxTagCount',
                title: {
                    label: '最多显示多少个tag',
                    tip: 'maxTagCount | 最多显示多少个 tag，仅在多选或标签模式有效',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'renderFormat',
                title: {
                    label: '定制回显内容',
                    tip: 'renderFormat | 定制回显内容。返回值将会显示在下拉框内',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["option", "value"],
                            value: []
                        }
                    },
                ],
            },
            {
                name: 'renderTag',
                title: {
                    label: '自定义标签渲染',
                    tip: 'renderTag | 自定义标签渲染，option 为当前标签属性，index 为当前标签的顺序，values 为所有标签的值',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["option", "index", "values"],
                            value: []
                        }
                    },
                ],
            },
            {
                name: 'triggerElement',
                title: {
                    label: '自定义上方显示元素',
                    tip: 'triggerElement | 自定义上方显示元素',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["params", "value"],
                            value: []
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
    npm: pack(componentName),
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
                    description: '选中值改变的回调',
                    template: "\n\n  onChange(value, extra, ${extParams}) {\n    // 选中值改变的回调\n    console.log('onChange', value);\n  }\n",
                },
                {
                    name: 'onClear',
                    description: '点击清除时触发',
                    template: "\n\n  onClear(visible, ${extParams}) {\n    // 点击清除时触发，参数是当前下拉框的展开状态\n    console.log('onClear', visible);\n  }\n",
                },
                {
                    name: 'onInputValueChange',
                    description: '输入框搜索文本改变的回调',
                    template: "\n\n  onInputValueChange(value, reason, ${extParams}) {\n    // 输入框搜索文本改变的回调\n    console.log('onInputValueChange', value);\n  }\n",
                },
                {
                    name: 'onKeyDown',
                    description: '键盘输入时的回调',
                    template: "\n\n  onKeyDown(event, ${extParams}) {\n    // 键盘输入时的回调\n    console.log('onKeyDown', event);\n  }\n",
                },
                {
                    name: 'onSearch',
                    description: '自定义搜索方法',
                    template: "\n\n  onSearch(inputValue, ${extParams}) {\n    // 自定义搜索方法。未定义的时候将会在已经在数据中进行搜索\n    console.log('onSearch', inputValue);\n  }\n",
                },
                {
                    name: 'onVisibleChange',
                    description: '下拉框收起展开时触发',
                    template: "\n\n  onVisibleChange(visible, ${extParams}) {\n    // 下拉框收起展开时触发\n    console.log('onVisibleChange', visible);\n  }\n",
                },
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
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
