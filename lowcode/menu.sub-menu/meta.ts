import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "MenuSubMenu"
const componentTitle: string = "嵌套菜单"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'selectable',
                title: {
                    label: '作为一个菜单项',
                    tip: 'selectable | 是否将多级菜单头也作为一个菜单项，支持点击选中等状态',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'title',
                title: {
                    label: '子菜单的标题',
                    tip: 'title | 子菜单的标题',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'triggerProps',
                title: {
                    label: '弹出模式下Trigger的Props',
                    tip: 'triggerProps | 弹出模式下可接受所有 Trigger 的 Props',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'popup',
                title: {
                    label: '是否强制使用弹出模式',
                    tip: 'popup | 是否强制使用弹出模式，level 表示当前子菜单的层级',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'popup',
                            template: "\n\n  popup(level, ${extParams}) {\n    // 是否强制使用弹出模式\n    console.log('popup', level);\n    return false;\n  }\n"
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
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack("Menu", "SubMenu"),
    category: '导航',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            style: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [
                    'MenuItem',
                ]
            }
        },
        advanced: {
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
            }
        }
    }
];

export default {
  ...Metadata,
//   snippets
};
