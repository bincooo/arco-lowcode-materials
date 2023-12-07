import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Cascader"
const componentTitle: string = "级联选择"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        name: 'fieldNames',
        title: {
            label: '对应的字段映射',
            tip: 'fieldNames | 指定label，value，isLeaf，disabled，children 对应的字段'
        },
        setter: [
            {
                componentName: 'ObjectSetter',
                props: {
                    config: {
                        items: [
                            {
                                name: 'label',
                                title: 'label',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ]
                            },
                            {
                                name: 'value',
                                title: 'value',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ]
                            },
                            {
                                name: 'children',
                                title: 'children',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ]
                            },
                            {
                                name: 'disabled',
                                title: 'disabled',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ]
                            },
                            {
                                name: 'isLeaf',
                                title: 'isLeaf',
                                setter: [
                                    { componentName: 'StringSetter' },
                                ]
                            },
                        ]
                    }
                }
            },
        ],
    },
    {
        name: 'filterOption',
        title: {
            label: '自定义搜索逻辑',
            tip: 'filterOption | 默认搜索从 label 属性中进行关键字搜索。通过该方法可以自定义搜索逻辑'
        },
        setter: [
            { 
                componentName: 'FunctionSetter',
                props: {
                    name: 'filterOption',
                    template: "\n\n  filterOption(inputValue, option, ${extParams}) {\n    // 自定义搜索逻辑\n    console.log('filterOption', inputValue);\n    return true;\n  }\n"
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
                name: 'allowClear',
                title: {
                    label: '允许一键清除',
                    tip: 'allowClear | 是否允许一键清除'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'animation',
                title: {
                    label: '为内部标签变化添加动画',
                    tip: 'animation | 是否为内部标签变化添加动画。'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'changeOnSelect',
                title: {
                    label: '选择时值都会发生改变',
                    tip: 'changeOnSelect | 每当选择的时候，值都会发生改变。多选时如果设置为true，会取消父子关系的关联。(默认只有在选择完成的时候，值才会更新)'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'bordered',
                title: {
                    label: '需要边框',
                    tip: 'bordered | 是否需要边框'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultActiveFirstOption',
                title: {
                    label: '默认高亮第一个选项',
                    tip: 'defaultActiveFirstOption | 是否默认高亮第一个选项'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultPopupVisible',
                title: {
                    label: '默认下拉框的展开收起状态',
                    tip: 'defaultPopupVisible | 默认下拉框的展开收起状态'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '禁用',
                    tip: 'disabled | 是否禁用'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'dragToSort',
                title: {
                    label: '可以通过拖拽为Tag排序',
                    tip: 'dragToSort | 是否可以通过拖拽为 Tag 排序'
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'loading',
                title: {
                    label: '处于加载状态',
                    tip: 'loading | 是否处于加载状态。'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'popupVisible',
                title: {
                    label: '控制下拉框的展开收起',
                    tip: 'popupVisible | 控制下拉框的展开收起'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'showEmptyChildren',
                title: {
                    label: '非动态加载时选中项children为[]的时候渲染下一级节点',
                    tip: 'showEmptyChildren | 是否在非动态加载时，选中项children为[]的时候渲染下一级节点。'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'unmountOnExit',
                title: {
                    label: '在隐藏之后销毁DOM结构',
                    tip: 'unmountOnExit | 是否在隐藏之后销毁DOM结构，默认为 true。如果是动态加载时，默认为false。'
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'inputValue',
                title: {
                    label: '输入框的值',
                    tip: 'inputValue | 输入框的值'
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'placeholder',
                title: {
                    label: '输入框提示',
                    tip: 'placeholder | 输入框提示'
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'autoWidth',
                title: {
                    label: '设置宽度自适应',
                    tip: 'autoWidth | 设置宽度自适应。minWidth 默认为 0，maxWidth 默认为 100%'
                },
                setter: [
                    { componentName: 'BoolSetter', condition: () => true },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'minWidth',
                                        title: 'minWidth',
                                        setter: 'StringSetter'
                                    },
                                    {
                                        name: 'maxWidth',
                                        title: 'maxWidth',
                                        setter: 'StringSetter'
                                    },
                                ]
                            }
                        }
                    },
                ],
            },
            {
                name: 'checkedStrategy',
                title: {
                    label: '定制回填方式',
                    tip: 'checkedStrategy | parent: 子节点都被选中时候返回父节点; child: 返回子节点'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'parent', value: 'parent' },
                                { title: 'child', value: 'child' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'expandTrigger',
                title: {
                    label: '展开下一级方式',
                    tip: 'expandTrigger | 展开下一级方式'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'click', value: 'click' },
                                { title: 'hover', value: 'hover' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'mode',
                title: {
                    label: '是否开启多选',
                    tip: 'mode | 是否开启多选'
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'default', value: '' },
                                { title: 'multiple', value: 'multiple' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'showSearch',
                title: {
                    label: '使单选模式可搜索',
                    tip: "showSearch | 使单选模式可搜索，传入 { retainInputValue: true } 在搜索框聚焦时保留现有内容传入 { retainInputValueWhileSelect: true } 在多选选择时保留输入框内容。传入 { panelMode: 'select' } 以搜索面板形式展示可选项 (2.39.0)renderOption 自定义渲染搜索项 (2.39.0)"
                },
                setter: [
                    { componentName: 'BoolSetter', condition: () => true },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'panelMode',
                                        title: '多选选择时保留输入框内容',
                                        setter: {
                                            componentName: 'RadioGroupSetter',
                                            props: {
                                                options: [
                                                    { title: 'cascader', value: 'cascader' },
                                                    { title: 'select', value: 'select' },
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        name: 'retainInputValue',
                                        title: '单选模式可搜索',
                                        setter: { componentName: 'BoolSetter', }
                                    },
                                    {
                                        name: 'retainInputValueWhileSelect',
                                        title: '搜索框聚焦时保留现有内容传入',
                                        setter: { componentName: 'BoolSetter', }
                                    },
                                ]
                            } 
                        }
                    },
                ],
            },
            {
                name: 'size',
                title: {
                    label: '分别不同尺寸的选择器',
                    tip: 'status | 分别不同尺寸的选择器'
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
                    tip: 'status | 状态'
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
                name: 'virtualListProps',
                title: {
                    label: '传递虚拟滚动属性',
                    tip: 'virtualListProps | 传递虚拟滚动属性。`AvailableVirtualListProps`'
                },
                setter: [
                    { componentName: 'JsonSetter', },
                ],
            },
            {
                name: 'addBefore',
                title: {
                    label: '选择框前添加元素',
                    tip: 'addBefore | 选择框前添加元素'
                },
                setter: [
                    { componentName: 'SlotSetter', },
                ],
            },
            {
                name: 'clearIcon',
                title: {
                    label: '清除按钮的图标',
                    tip: 'clearIcon | allowClear 时配置清除按钮的图标。'
                },
                setter: [
                    { componentName: 'SlotSetter', },
                ],
            },
            {
                name: 'notFoundContent',
                title: {
                    label: '没有数据时显示的内容',
                    tip: 'notFoundContent | 没有数据时显示的内容'
                },
                setter: [
                    { componentName: 'SlotSetter', },
                ],
            },
            {
                name: 'prefix',
                title: {
                    label: '前缀',
                    tip: 'prefix | 前缀'
                },
                setter: [
                    { componentName: 'SlotSetter', },
                ],
            },
            {
                name: 'suffixIcon',
                title: {
                    label: '自定义选择框后缀图标',
                    tip: 'suffixIcon | 自定义选择框后缀图标'
                },
                setter: [
                    { componentName: 'SlotSetter', },
                ],
            },
            {
                name: 'arrowIcon',
                title: {
                    label: '自定义箭头图标',
                    tip: 'arrowIcon | 自定义箭头图标，设置为 null 不显示箭头图标。'
                },
                setter: [
                    { componentName: 'SlotSetter', },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '自动补全组件的默认值',
                    tip: 'defaultValue | 自动补全组件的默认值'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: [
                                { componentName: 'StringSetter' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'dropdownMenuClassName',
                title: {
                    label: '自定义下拉列表类名',
                    tip: 'dropdownMenuClassName | 自定义下拉列表类名'
                },
                setter: [
                    { componentName: 'StringSetter', },
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: [
                                { componentName: 'StringSetter' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'dropdownMenuColumnStyle',
                title: {
                    label: '菜单列样式',
                    tip: 'dropdownMenuColumnStyle | 菜单列样式'
                },
                setter: [
                    { componentName: 'JsonSetter', },
                ],
            },
            {
                name: 'icons',
                title: {
                    label: '图标配置',
                    tip: 'icons | 图标配置'
                },
                setter: [
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'loading',
                                        title: 'loading',
                                        setter: { componentName: 'SlotSetter' }
                                    },
                                    {
                                        name: 'checked',
                                        title: 'checked',
                                        setter: { componentName: 'SlotSetter' }
                                    },
                                    {
                                        name: 'next',
                                        title: 'next',
                                        setter: { componentName: 'SlotSetter' }
                                    },
                                ]
                            }
                        }
                    },
                ],
            },
            {
                name: 'loadMore',
                title: {
                    label: '动态加载数据',
                    tip: 'loadMore | 动态加载数据。pathValue: 当前选中项的路径 value； level: 选中项层级。'
                },
                setter: [
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'loadMore',
                            template: "\n\n  loadMore(pathValue, level, ${extParams}) {\n    // 自定义搜索逻辑\n    console.log('loadMore', pathValue);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'options',
                title: {
                    label: '级联数据',
                    tip: 'options | 级联数据(Array)'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'removeIcon',
                title: {
                    label: '自定义显示删除图标',
                    tip: 'removeIcon | 多选时配置选中项的删除图标。当传入null，不显示删除图标。'
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'renderFooter',
                title: {
                    label: '定义每一层级的footer',
                    tip: 'renderFooter | 定义每一层级的 footer。参数：level: 当前层级, activeOption: 当前点击的节点。返回 null 不展示'
                },
                setter: [
                    { 
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["level", "activeOption"],
                            value: []
                        }
                    },
                ],
            },
            {
                name: 'renderOption',
                title: {
                    label: '自定义展示option',
                    tip: 'renderOption | 自定义展示 option'
                },
                setter: [
                    { 
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["option", "level"],
                            value: []
                        }
                    },
                ],
            },
            {
                name: 'triggerProps',
                title: {
                    label: '可以接受所有Trigger组件的Props',
                    tip: 'triggerProps | 可以接受所有 Trigger 组件的 Props'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'value',
                title: {
                    label: '选中值',
                    tip: 'value | 选中值'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'dropdownColumnRender',
                title: {
                    label: '自定义下拉菜单每一列的展示',
                    tip: 'dropdownColumnRender | 自定义下拉菜单每一列的展示'
                },
                setter: [
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'dropdownColumnRender',
                            template: "\n\n  dropdownColumnRender(menu, level, ${extParams}) {\n    // 自定义下拉菜单每一列的展示\n    console.log('dropdownColumnRender', menu);\n  }\n"
                        }
                    },
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["menu", "level"],
                            value: []
                        }
                    }
                ],
            },
            {
                name: 'dropdownRender',
                title: {
                    label: '自定义下拉菜单的展示',
                    tip: 'dropdownRender | 自定义下拉菜单的展示'
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["menu"],
                            value: []
                        }
                    }
                ],
            },
            {
                name: 'getPopupContainer',
                title: {
                    label: '弹出框挂在的父节点',
                    tip: 'getPopupContainer | 弹出框挂在的父节点'
                },
                setter: [
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getPopupContainer',
                            template: "\n\n  getPopupContainer(node, ${extParams}) {\n    // 弹出框挂在的父节点\n    console.log('getPopupContainer', node);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'maxTagCount',
                title: {
                    label: '最多显示多少个tag',
                    tip: 'maxTagCount | 最多显示多少个 tag，仅在多选或标签模式有效。'
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'count',
                                        title: 'count',
                                        setter: { componentName: 'NumberSetter' }
                                    },
                                    {
                                        name: 'render',
                                        title: 'render',
                                        setter: {
                                            componentName: 'SlotSetter',
                                            initialValue: {
                                                type: "JSSlot",
                                                params: ["count"],
                                                value: []
                                            }
                                        }
                                    },
                                ]
                            }
                        }
                    }
                ],
            },
            {
                name: 'renderFormat',
                title: {
                    label: '格式化显示内容',
                    tip: 'renderFormat | 格式化显示内容'
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["valueShow"],
                            value: []
                        }
                    }
                ],
            },
            {
                name: 'renderTag',
                title: {
                    label: '自定义标签渲染',
                    tip: 'renderTag | 自定义标签渲染，props 为当前标签属性，index 为当前标签的顺序，values 为所有标签的值'
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["props", "index", "values"],
                            value: []
                        }
                    }
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
                    description: '点击选择框的回调',
                    template: "\n\n  onChange(value, selectedOptions, ${extParams}) {\n    // 点击选择框的回调\n    console.log('onChange', value);\n  }\n",
                },
                {
                    name: 'onClear',
                    description: '点击清除时触发',
                    template: "\n\n  onClear(visible, ${extParams}) {\n    // 点击清除时触发，参数是当前下拉框的展开状态。\n    console.log('onClear', visible);\n  }\n",
                },
                {
                    name: 'onInputValueChange',
                    description: 'inputValue改变时的回调',
                    template: "\n\n  onInputValueChange(inputValue, reason, ${extParams}) {\n    // inputValue改变时的回调\n    console.log('onInputValueChange', visible);\n  }\n",
                },
                {
                    name: 'onKeyDown',
                    description: '键盘输入时的回调',
                    template: "\n\n  onKeyDown(event, ${extParams}) {\n    // 键盘输入时的回调\n    console.log('onKeyDown', event);\n  }\n",
                },
                {
                    name: 'onSearch',
                    description: '搜索时的回调',
                    template: "\n\n  onSearch(inputValue, reason, ${extParams}) {\n    // 搜索时的回调\n    console.log('onSearch', inputValue);\n  }\n",
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
                placeholder: 'Please Enter',
                style: {
                    width: 320
                },
                allowClear: true,
                renderOption: {
                    type: "JSSlot",
                    params: [ "option", "level" ],
                    value: [
                        {
                            componentName: "Text",
                            props: {
                                children: {
                                    type: "JSExpression",
                                    value: "(this.option.label + \" \" + this.option.value)"
                                },
                            },
                            title: "文本",
                        }
                    ],
                },
                options: [
                    {
                        value: "beijing",
                        label: "Beijing",
                        children: [
                            {
                                value: "Beijing",
                                label: "Beijing",
                                children: [
                                    {
                                        value: "chaoyang",
                                        label: "Chaoyang",
                                        children: [
                                            {
                                                value: "datunli",
                                                label: "Datunli"
                                            }
                                        ]
                                    },
                                    {
                                        value: "dongcheng",
                                        label: "Dongcheng"
                                    },
                                    {
                                        value: "xicheng",
                                        label: "Xicheng"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: "shanghai",
                        label: "Shanghai",
                        children: [
                        {
                            value: "shanghaishi",
                            label: "Shanghai",
                            children: [
                                {
                                    value: "huangpu",
                                    label: "Huangpu"
                                }
                            ]
                        }
                      ]
                    }
                ],
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
