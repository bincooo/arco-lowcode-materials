import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'
import _props, { events } from '../input/base'
const componentName: string = "PasswordInput"
const componentTitle: string = "密码输入框"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'defaultVisibility',
                title: {
                    label: '初始是否显示',
                    tip: 'defaultVisibility | 初始是否显示',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'visibility',
                title: {
                    label: '是否显示',
                    tip: 'visibility | 是否显示',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'visibilityToggle',
                title: {
                    label: '显示切换密码可见状态的按钮',
                    tip: 'visibilityToggle | 是否显示切换密码可见状态的按钮',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            ..._props,
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Input", "Password"),
    category: '数据输入',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                ...events,
                {
                    name: 'onVisibilityChange',
                    description: 'visibility 改变时触发',
                    template: "\n\n  onVisibilityChange(visibility, ${extParams}) {\n    // visibility 改变时触发\n    console.log('onVisibilityChange', visibility);\n  }\n",
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
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};
