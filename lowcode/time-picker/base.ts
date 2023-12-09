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
        name: 'disableConfirm',
        title: {
            label: '禁用确认步骤',
            tip: 'disableConfirm | 禁用确认步骤，开启后直接点选时间不需要点击确认按钮',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'editable',
        title: {
            label: '可手动输入',
            tip: 'editable | 是否可手动输入',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'hideDisabledOptions',
        title: {
            label: '隐藏禁止选择的选项',
            tip: 'hideDisabledOptions | 隐藏禁止选择的选项',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'popupVisible',
        title: {
            label: '控制弹出框打开或者关闭',
            tip: 'popupVisible | 控制弹出框打开或者关闭',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'scrollSticky',
        title: {
            label: '时间列在滚动的时候自动吸附和选中',
            tip: 'scrollSticky | 时间列在滚动的时候自动吸附和选中',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'unmountOnExit',
        title: {
            label: '在关闭后销毁DOM',
            tip: 'unmountOnExit | 是否在关闭后销毁 dom 结构',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'use12Hours',
        title: {
            label: '12小时制',
            tip: 'use12Hours | 12 小时制',
        },
        setter: [
            { componentName: 'BoolSetter' },
        ],
    },
    {
        name: 'utcOffset',
        title: {
            label: '设置时区偏移',
            tip: 'utcOffset | 设置时区偏移，如果需要 utc 时间则设置为 0',
        },
        setter: [
            { componentName: 'NumberSetter' },
        ],
    },
    {
        name: 'format',
        title: {
            label: '展示日期的格式',
            tip: 'format | 展示日期的格式，参考dayjs',
        },
        setter: [
            { componentName: 'StringSetter' },
        ],
    },
    {
        name: 'timezone',
        title: {
            label: '设置时区',
            tip: 'timezone | 设置时区, 如果设置了 utcOffset，则以 utcOffset 为准',
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
            label: '输入框尺寸',
            tip: 'size | 输入框尺寸',
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
        name: 'extra',
        title: {
            label: '底部附加内容',
            tip: 'extra | 底部附加内容',
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
        name: 'icons',
        title: {
            label: '用于配置图标',
            tip: 'icons | 用于配置图标',
        },
        setter: [
            {
                componentName: 'ObjectSetter',
                props: {
                    items: [
                        {
                            name: 'inputSuffix',
                            title: 'inputSuffix',
                            setter: [
                                { componentName: 'SlotSetter' },
                            ],
                        },
                    ]
                }
            },
        ],
    },
    {
        name: 'step',
        title: {
            label: '设置时间的选择间隔',
            tip: 'step | 设置 时 / 分 / 秒 的选择间隔',
        },
        setter: [
            {
                componentName: 'ObjectSetter',
                props: {
                    items: [
                        {
                            name: 'hour',
                            title: 'hour',
                            setter: [
                                { componentName: 'NumberSetter' },
                            ],
                        },
                        {
                            name: 'minute',
                            title: 'minute',
                            setter: [
                                { componentName: 'NumberSetter' },
                            ],
                        },
                        {
                            name: 'second',
                            title: 'second',
                            setter: [
                                { componentName: 'NumberSetter' },
                            ],
                        },
                    ]
                }
            },
        ],
    },
    {
        name: 'triggerProps',
        title: {
            label: 'Trigger组件的参数',
            tip: 'triggerProps | 可以传入 Trigger 组件的参数',
        },
        setter: [
            { componentName: 'JsonSetter' },
        ],
    },
    {
        name: 'disabledHours',
        title: {
            label: '禁用的部分分钟选项',
            tip: 'disabledHours | 禁用的部分分钟选项',
        },
        setter: [
            {
                componentName: 'FunctionSetter',
                props: {
                    name: 'disabledHours',
                    template: "\n\n  disabledHours(${extParams}) {\n    // 禁用的部分分钟选项\n    console.log('disabledHours');\n  }\n"
                }
            },
        ],
    },
    {
        name: 'disabledSeconds',
        title: {
            label: '禁用的部分秒数选项',
            tip: 'disabledSeconds | 禁用的部分秒数选项',
        },
        setter: [
            {
                componentName: 'FunctionSetter',
                props: {
                    name: 'disabledSeconds',
                    template: "\n\n  disabledSeconds(selectedHour, selectedMinute, ${extParams}) {\n    // 禁用的部分秒数选项\n    console.log('disabledSeconds', selectedHour);\n  }\n"
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
]
export default base

export const events = [
    {
        name: 'onClear',
        description: '点击清除按钮的回调',
        template: "\n\n  onClear(${extParams}) {\n    // 点击清除按钮的回调\n    console.log('onClear');\n  }\n",
    },
]