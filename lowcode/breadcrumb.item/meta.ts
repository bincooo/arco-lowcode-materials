import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "BreadcrumbItem"
const componentTitle: string = "面包屑子组件"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'href',
                title: {
                    label: '超链接地址',
                    tip: 'href | 超链接地址',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'tagName',
                title: {
                    label: '标签名',
                    tip: 'tagName | 标签名，可以是 html 标签或是组件',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'droplist',
                title: {
                    label: '下拉菜单的内容',
                    tip: 'droplist | 下拉菜单的内容，等同于下拉菜单组件的 droplist 属性',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'dropdownProps',
                title: {
                    label: '下拉菜单的属性',
                    tip: 'dropdownProps | 下拉菜单的属性 DropdownProps',
                },
                setter: [
                    { componentName: 'JsonSetter' },
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
    npm: pack("Breadcrumb", "Item"),
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
            }
        }
    }
];

export default {
  ...Metadata,
//   snippets
};
