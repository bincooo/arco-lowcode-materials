import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Select"
const componentTitle: string = "下拉选择"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'value',
                title: {
                    label: '当前值',
                    tip: 'value | 当前值',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'StringSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'defaultValue',
                title: {
                    label: '初始值',
                    tip: 'defaultValue | 初始值',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'StringSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'options',
                title: {
                    label: '指定可选项',
                    tip: 'options | 指定可选项',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '是否禁用',
                    tip: 'disabled | 是否禁用',
                },
                setter: [
                    { componentName: 'BoolSetter' },
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
                    label: '需要边框',
                    tip: 'bordered | 是否需要边框',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultActiveFirstOption',
                title: {
                    label: '默认高亮第一个选项',
                    tip: 'defaultActiveFirstOption | 是否默认高亮第一个选项',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'defaultPopupVisible',
                title: {
                    label: '下拉框默认打开',
                    tip: 'defaultPopupVisible | 下拉框是否默认打开',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'dragToSort',
                title: {
                    label: '通过拖拽为Tag排序',
                    tip: 'dragToSort | 是否可以通过拖拽为 Tag 排序',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'labelInValue',
                title: {
                    label: 'onChange中的value格式',
                    tip: 'labelInValue | 设置 onChange 回调中 value 的格式。默认是string，设置为true时候，value格式为： { label: string, value: string }',
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
                name: 'popupVisible',
                title: {
                    label: '控制下拉框是否打开',
                    tip: 'popupVisible | 控制下拉框是否打开',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'unmountOnExit',
                title: {
                    label: '在隐藏的时候销毁DOM',
                    tip: 'unmountOnExit | 是否在隐藏的时候销毁 DOM 结构',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'inputValue',
                title: {
                    label: '输入框的值',
                    tip: 'inputValue | 输入框的值（受控模式）',
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
                name: 'allowCreate',
                title: {
                    label: '允许通过输入创建新的选项',
                    tip: 'allowCreate | 是否允许通过输入创建新的选项',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    { 
                                        componentName: 'FunctionSetter',
                                        props: {
                                            name: 'formatter',
                                            template: "\n\n  formatter(inputValue, creating, ${extParams}) {\n    // 允许通过输入创建新的选项\n    console.log('formatter', inputValue);\n  }\n"
                                        }
                                    },
                                ]
                            }
                        }
                    }
                ],
            },
            {
                name: 'autoWidth',
                title: {
                    label: '输入框的值',
                    tip: 'autoWidth | 输入框的值（受控模式）',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'mode',
                title: {
                    label: '开启多选模式或标签模式',
                    tip: 'mode | 是否开启多选模式或标签模式 (tags 推荐使用 mode: multiple; allowCreate: true 替代，下一大版本将移除此模式)',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'multiple', value: 'multiple' },
                                { title: 'tags', value: 'tags' },
                            ]
                        }
                    },
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
                name: 'trigger',
                title: {
                    label: '触发方式',
                    tip: 'trigger | 触发方式',
                },
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                { title: 'hover', value: 'hover' },
                                { title: 'click', value: 'click' },
                                { title: 'focus', value: 'focus' },
                                { title: 'contextMenu', value: 'contextMenu' },
                            ]
                        }
                    },
                    { componentName: 'JsonSetter' }
                ],
            },
            {
                name: 'addBefore',
                title: {
                    label: '选择框前添加元素',
                    tip: 'addBefore | 选择框前添加元素',
                },
                setter: [
                    { componentName: 'SlotSetter' }
                ],
            },
            {
                name: 'clearIcon',
                title: {
                    label: '清除按钮的图标',
                    tip: 'clearIcon | allowClear 时配置清除按钮的图标',
                },
                setter: [
                    { componentName: 'SlotSetter' }
                ],
            },
            {
                name: 'notFoundContent',
                title: {
                    label: '没有数据时显示的内容',
                    tip: 'notFoundContent | 没有数据时显示的内容',
                },
                setter: [
                    { componentName: 'SlotSetter' }
                ],
            },
            {
                name: 'prefix',
                title: {
                    label: '前缀',
                    tip: 'prefix | 前缀',
                },
                setter: [
                    { componentName: 'SlotSetter' }
                ],
            },
            {
                name: 'suffixIcon',
                title: {
                    label: '自定义选择框后缀图标',
                    tip: 'suffixIcon | 自定义选择框后缀图标',
                },
                setter: [
                    { componentName: 'SlotSetter' }
                ],
            },
            {
                name: 'arrowIcon',
                title: {
                    label: '自定义箭头图标',
                    tip: 'arrowIcon | 自定义箭头图标',
                },
                setter: [
                    { componentName: 'SlotSetter' }
                ],
            },
            {
                name: 'dropdownMenuClassName',
                title: {
                    label: '下拉列表的类',
                    tip: 'dropdownMenuClassName | 下拉列表的类',
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
            {
                name: 'dropdownMenuStyle',
                title: {
                    label: '下拉列表的样式',
                    tip: 'dropdownMenuStyle | 下拉列表的样式',
                },
                setter: [
                    { componentName: 'JsonSetter' }
                ],
            },
            {
                name: 'removeIcon',
                title: {
                    label: '多选时配置选中项的删除图标',
                    tip: 'removeIcon | 多选时配置选中项的删除图标',
                },
                setter: [
                    { componentName: 'SlotSetter' }
                ],
            },
            {
                name: 'showSearch',
                title: {
                    label: '使单选模式可搜索',
                    tip: 'showSearch | 使单选模式可搜索，传入 { retainInputValue: true } 在搜索框聚焦时保留现有内容传入 { retainInputValueWhileSelect: true } 在多选选择时保留输入框内容。',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' }
                ],
            },
            {
                name: 'tokenSeparators',
                title: {
                    label: '在多选模式下自动分词的分隔符',
                    tip: 'tokenSeparators | 在多选模式下自动分词的分隔符',
                },
                setter: [
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: { componentName: 'StringSetter' }
                        }
                    }
                ],
            },
            {
                name: 'triggerProps',
                title: {
                    label: 'Trigger的Props',
                    tip: 'triggerProps | 可以接受所有 Trigger 的 Props',
                },
                setter: [
                    { componentName: 'JsonSetter' }
                ],
            },
            {
                name: 'virtualListProps',
                title: {
                    label: '传递虚拟滚动属性',
                    tip: 'virtualListProps | 传递虚拟滚动属性',
                },
                setter: [
                    { componentName: 'JsonSetter' }
                ],
            },
            {
                name: 'dropdownRender',
                title: {
                    label: '自定义弹出内容',
                    tip: 'dropdownRender | 自定义弹出内容',
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
                name: 'filterOption',
                title: {
                    label: '根据输入的值筛选数据',
                    tip: 'filterOption | 是否根据输入的值筛选数据。如果传入函数的话，接收 inputValue 和 option 两个参数，当option符合筛选条件时，返回 true，反之返回 false',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'filterOption',
                            template: "\n\n  filterOption(inputValue, option, ${extParams}) {\n    // 根据输入的值筛选数据\n    console.log('filterOption', inputValue);\n    return true;\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'getPopupContainer',
                title: {
                    label: '弹出框挂载的父节点',
                    tip: 'filterOption | 弹出框挂载的父节点。'
                },
                setter: [
                    { 
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'getPopupContainer',
                            template: "\n\n  getPopupContainer(node, ${extParams}) {\n    // 弹出框挂载的父节点\n    console.log('getPopupContainer', node);\n    return true;\n  }\n"
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
                    { componentName: 'JsonSetter' }
                ],
            },
            {
                name: 'renderFormat',
                title: {
                    label: '定制回显内容',
                    tip: 'renderFormat | 定制回显内容。返回值将会显示在下拉框内。若 value 对应的 Option 不存在，则第一个参数是 null',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["option", "value"],
                            value: []
                        }
                    }
                ],
            },
            {
                name: 'renderTag',
                title: {
                    label: '自定义标签渲染',
                    tip: 'renderTag | 自定义标签渲染，props 为当前标签属性，index 为当前标签的顺序，values 为所有标签的值',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["option", "index", "values"],
                            value: []
                        }
                    }
                ],
            },
            {
                name: 'triggerElement',
                title: {
                    label: '自定义触发元素',
                    tip: 'triggerElement | 自定义触发元素',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["params"],
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
                    name: 'onBlur',
                    description: '失去焦点时的回调',
                    template: "\n\n  onBlur(event, ${extParams}) {\n    // 失去焦点时的回调\n    console.log('onBlur', event);\n  }\n",
                },
                {
                    name: 'onChange',
                    description: '点击选择框的回调',
                    template: "\n\n  onChange(event, ${extParams}) {\n    // 点击选择框的回调\n    console.log('onChange', event);\n  }\n",
                },
                {
                    name: 'onClear',
                    description: '点击清除时触发',
                    template: "\n\n  onClear(visible, ${extParams}) {\n    // 点击清除时触发，参数是当前下拉框的展开状态\n    console.log('onClear', visible);\n  }\n",
                },
                {
                    name: 'onClick',
                    description: '鼠标点击下拉框时的回调',
                    template: "\n\n  onClick(event, ${extParams}) {\n    // 鼠标点击下拉框时的回调\n    console.log('onClick', event);\n  }\n",
                },
                {
                    name: 'onDeselect',
                    description: '取消选中的时候触发的回调',
                    template: "\n\n  onDeselect(value, option, ${extParams}) {\n    // 取消选中的时候触发的回调，(只在 multiple 模式下触发)\n    console.log('onDeselect', value);\n  }\n",
                },
                {
                    name: 'onFocus',
                    description: '获得焦点时的回调',
                    template: "\n\n  onFocus(event, ${extParams}) {\n    // 获得焦点时的回调\n    console.log('onFocus', event);\n  }\n",
                },
                {
                    name: 'onInputValueChange',
                    description: '输入框文本改变的回调',
                    template: "\n\n  onInputValueChange(value, reason, ${extParams}) {\n    // 输入框文本改变的回调\n    console.log('onInputValueChange', value);\n  }\n",
                },
                {
                    name: 'onKeyDown',
                    description: '键盘输入时的回调',
                    template: "\n\n  onKeyDown(event, ${extParams}) {\n    // 键盘输入时的回调\n    console.log('onKeyDown', event);\n  }\n",
                },
                {
                    name: 'onPaste',
                    description: '输入框文本粘贴的回调',
                    template: "\n\n  onPaste(event, ${extParams}) {\n    // 输入框文本粘贴的回调\n    console.log('onPaste', event);\n  }\n",
                },
                {
                    name: 'onPopupScroll',
                    description: '下拉框的滚动监听函数',
                    template: "\n\n  onPopupScroll(elem, ${extParams}) {\n    // 下拉框的滚动监听函数，参数为滚动元素\n    console.log('onPopupScroll', elem);\n  }\n",
                },
                {
                    name: 'onSearch',
                    description: '搜索时的回调',
                    template: "\n\n  onSearch(value, reason, ${extParams}) {\n    // 搜索时的回调\n    console.log('onSearch', value);\n  }\n",
                },
                {
                    name: 'onSelect',
                    description: '选中选项时触发的回调',
                    template: "\n\n  onSelect(value, option, ${extParams}) {\n    // 选中选项时触发的回调，(只在 multiple 模式下触发)\n    console.log('onSelect', value);\n  }\n",
                },
                {
                    name: 'onVisibleChange',
                    description: '下拉框收起展开时触发',
                    template: "\n\n  onVisibleChange(visible, ${extParams}) {\n    // 下拉框收起展开时触发\n    console.log('onVisibleChange', visible);\n  }\n",
                },
            ],
            style: true
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'SelectOption' ]
            }
        },
        advanced: {
            initialChildren: [
                {
                    componentName: "SelectOption",
                    props: {
                        value: 1,
                        children: ["选项1"],
                    },
                    title: "下拉选择项",
                },
                {
                    componentName: "SelectOption",
                    props: {
                        value: 2,
                        children: ["选项2"],
                    },
                    title: "下拉选择项",
                },
            ]
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
