import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';
const base: IPublicTypeFieldConfig[] = [
    {
        name: 'allowClear',
        title: {
            label: '允许清除',
            tip: 'allowClear | 允许清除',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'editable',
        title: {
            label: '是否可输入',
            tip: 'editable | 是否可输入',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'hideNotInViewDates',
        title: {
            label: '面板隐藏不在当前时间范围的灰色日期',
            tip: 'hideNotInViewDates | 面板隐藏不在当前时间范围的灰色日期',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'popupVisible',
        title: {
            label: '指定弹框打开或者关闭状态',
            tip: 'popupVisible | 指定弹框打开或者关闭状态',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'shortcutsPlacementLeft',
        title: {
            label: '预设范围选择放在面板左侧',
            tip: 'shortcutsPlacementLeft | 预设范围选择放在面板左侧，用于大量预设时间的场景。',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'unmountOnExit',
        title: {
            label: '在隐藏的时候销毁',
            tip: 'unmountOnExit | 是否在隐藏的时候销毁 DOM 结构',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'utcOffset',
        title: {
            label: '设置时区偏移',
            tip: 'utcOffset | 设置时区偏移，如果需要 utc 时间则设置为 0。',
        },
        setter: [
            { componentName: 'NumberSetter' },
        ],
    },
    {
        name: 'timezone',
        title: {
            label: '设置时区',
            tip: 'timezone | 设置时区, 如果设置了 utcOffset，则以 utcOffset 为准。',
        },
        setter: [
            { componentName: 'StringSetter' },
        ],
    },
    {
        name: 'position',
        title: {
            label: '弹出的框的位置',
            tip: 'position | 弹出的框的位置',
        },
        setter: [
            {
                componentName: 'SelectSetter',
                props: {
                    options: [
                        { title: 'top', value: 'top' },
                        { title: 'tl', value: 'tl' },
                        { title: 'tr', value: 'tr' },
                        { title: 'bottom', value: 'bottom' },
                        { title: 'bl', value: 'bl' },
                        { title: 'br', value: 'br' },
                    ]
                }
            },
        ],
    },
    {
        name: 'size',
        title: {
            label: '日期选择器的尺寸',
            tip: 'size | 日期选择器的尺寸',
        },
        setter: [
            {
                componentName: 'SelectSetter',
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
        name: 'extra',
        title: {
            label: '额外的页脚',
            tip: 'extra | 额外的页脚',
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
        name: 'separator',
        title: {
            label: '范围选择器输入框内的分割符号',
            tip: 'separator | 范围选择器输入框内的分割符号',
        },
        setter: [
            { componentName: 'SlotSetter' },
        ],
    },
    {
        name: 'triggerElement',
        title: {
            label: '触发元素',
            tip: 'triggerElement | 触发元素',
        },
        setter: [
            { componentName: 'SlotSetter' },
        ],
    },
    {
        name: 'dayStartOfWeek',
        title: {
            label: '每周的第一天开始于周几',
            tip: 'dayStartOfWeek | 每周的第一天开始于周几，0 - 周日，1 - 周一，以此类推。',
        },
        setter: [
            {
                componentName: 'SelectSetter',
                props: {
                    options: [
                        { title: 'Sun', value: 0 },
                        { title: 'Mon', value: 1 },
                        { title: 'Tues', value: 2 },
                        { title: 'Wed', value: 3 },
                        { title: 'Thur', value: 4 },
                        { title: 'Fri', value: 5 },
                        { title: 'Sat', value: 6 },
                    ]
                }
            },
        ],
    },
    {
        name: 'defaultPickerValue',
        title: {
            label: '默认面板显示的日期',
            tip: 'defaultPickerValue | 默认面板显示的日期',
        },
        setter: [
            { componentName: 'NumberSetter' },
            { componentName: 'StringSetter' },
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
        name: 'icons',
        title: {
            label: '日历翻页的图标配置',
            tip: 'icons | 日历翻页的图标配置',
        },
        setter: [
            {
                componentName: 'ObjectSetter',
                props: {
                    config: {
                        items: [
                            {
                                name: 'prev',
                                title: 'prev',
                                setter: { componentName: 'SlotSetter' }
                            },
                            {
                                name: 'prevDouble',
                                title: 'prevDouble',
                                setter: { componentName: 'SlotSetter' }
                            },
                            {
                                name: 'next',
                                title: 'next',
                                setter: { componentName: 'SlotSetter' }
                            },
                            {
                                name: 'nextDouble',
                                title: 'nextDouble',
                                setter: { componentName: 'SlotSetter' }
                            },
                            {
                                name: 'inputSuffix',
                                title: 'inputSuffix',
                                setter: { componentName: 'SlotSetter' }
                            },
                        ]
                    }
                }
            },
        ],
    },
    {
        name: 'locale',
        title: {
            label: '国际化配置',
            tip: 'locale | 国际化配置',
        },
        setter: [
            { componentName: 'JsonSetter' },
        ],
    },
    {
        name: 'pickerValue',
        title: {
            label: '国际化配置',
            tip: 'pickerValue | 国际化配置',
        },
        setter: [
            { componentName: 'NumberSetter' },
            { componentName: 'StringSetter' },
        ],
    },
    {
        name: 'placeholder',
        title: {
            label: '提示文案',
            tip: 'placeholder | 提示文案',
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
        name: 'shortcuts',
        title: {
            label: '预设时间范围快捷选择',
            tip: 'shortcuts | 预设时间范围快捷选择(Array)',
        },
        setter: [
            { componentName: 'JsonSetter' },
        ],
    },
    {
        name: 'triggerProps',
        title: {
            label: '可以传入Trigger组件的参数',
            tip: 'triggerProps | 可以传入 Trigger 组件的参数',
        },
        setter: [
            { componentName: 'JsonSetter' },
        ],
    },
    {
        name: 'dateRender',
        title: {
            label: '自定义日期单元格的内容',
            tip: 'dateRender | 自定义日期单元格的内容',
        },
        setter: [
            {
                componentName: 'SlotSetter',
                initialValue: {
                    type: "JSSlot",
                    params: ["currentDate"],
                    value: []
                }
            },
        ],
    },
    {
        name: 'disabledDate',
        title: {
            label: '不可选取的日期',
            tip: 'disabledDate | 不可选取的日期',
        },
        setter: [
            {
                componentName: 'FunctionSetter',
                props: {
                    name: 'disabledDate',
                    template: "\n\n  disabledDate(current, ${extParams}) {\n    // 不可选取的日期\n    console.log('disabledDate', current);\n  }\n"
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
                    template: "\n\n  getPopupContainer(current, ${extParams}) {\n    // 弹出框挂载的父节点\n    console.log('getPopupContainer', current);\n  }\n"
                }
            },
        ],
    },
    {
        name: 'panelRender',
        title: {
            label: '自定义渲染面板',
            tip: 'panelRender | 自定义渲染面板',
        },
        setter: [
            {
                componentName: 'SlotSetter',
                initialValue: {
                    type: "JSSlot",
                    params: ["panelNode"],
                    value: []
                }
            },
        ],
    },
]
export default base

export const events = [
    {
        name: 'onChange',
        description: '日历组件值发生改变时的回调',
        template: "\n\n  onChange(dateString, date, ${extParams}) {\n    // 日历组件值发生改变时的回调\n    console.log('onChange', dateString);\n  }\n",
    },
    {
        name: 'onClear',
        description: '点击清除按钮后的回调',
        template: "\n\n  onClear(${extParams}) {\n    // 点击清除按钮后的回调\n    console.log('onClear');\n  }\n",
    },
    {
        name: 'onOk',
        description: '点击确认按钮的回调',
        template: "\n\n  onOk(dateString, date, ${extParams}) {\n    // 点击确认按钮的回调\n    console.log('onOk', dateString);\n  }\n",
    },
    {
        name: 'onPickerValueChange',
        description: '面板日期改变的回调',
        template: "\n\n  onPickerValueChange(dateString, value, ${extParams}) {\n    // 面板日期改变的回调\n    console.log('onPickerValueChange', dateString);\n  }\n",
    },
    {
        name: 'onSelect',
        description: '选中日期发生改变但组件值未改变时的回调',
        template: "\n\n  onSelect(dateString, date, ${extParams}) {\n    // 选中日期发生改变但组件值未改变时的回调\n    console.log('onSelect', dateString);\n  }\n",
    },
    {
        name: 'onSelectShortcut',
        description: '点击快捷选择时的回调',
        template: "\n\n  onSelectShortcut(shortcut, ${extParams}) {\n    // 点击快捷选择时的回调\n    console.log('onSelectShortcut', shortcut);\n  }\n",
    },
    {
        name: 'onVisibleChange',
        description: '打开或关闭时的回调',
        template: "\n\n  onVisibleChange(visible, ${extParams}) {\n    // 打开或关闭时的回调\n    console.log('onVisibleChange', visible);\n  }\n",
    },
]