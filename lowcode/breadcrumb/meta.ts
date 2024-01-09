import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Breadcrumb"
const componentTitle: string = "面包屑"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'maxCount',
                title: {
                    label: '最多渲染数量',
                    tip: 'maxCount | 最多渲染的面包屑数量',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                ],
            },
            {
                name: 'separator',
                title: {
                    label: '指定分割符',
                    tip: 'separator | 指定分割符',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'routes',
                title: {
                    label: '设置下拉菜单',
                    tip: 'routes | 直接设置下拉菜单',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'itemRender',
                title: {
                    label: '自定义渲染',
                    tip: 'itemRender | routes 时生效，自定义渲染面包屑',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                            type: 'JSSlot',
                            params: ['route', 'routes', 'paths'],
                            value: [],
                        },
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
    npm: pack(componentName),
    category: '导航',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents
            ],
            style: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'BreadcrumbItem' ]
            }
        },
        advanced: {
            initialChildren: [
                {
                    componentName: "BreadcrumbItem",
                    props: {
                        children: [ 'Home' ]
                    },
                    title: "面包屑子组件",
                },
                {
                    componentName: "BreadcrumbItem",
                    props: {
                        href: '#',
                        children: [ 'Channel' ]
                    },
                    title: "面包屑子组件",
                },
                {
                    componentName: "BreadcrumbItem",
                    props: {
                        children: [ 'News' ]
                    },
                    title: "面包屑子组件",
                },
            ],
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
  snippets
};
