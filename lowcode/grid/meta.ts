import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicTypeSetterType } from '@alilc/lowcode-types';
import pack, { baseEvents } from '../pack'

const componentName: string = "Grid"

const objectConfig: IPublicTypeSetterType = {
    componentName: 'ObjectSetter',
    props: {
        config: {
            items: [
                {
                    name: 'lg',
                    title: 'lg',
                    setter: 'NumberSetter'
                },
                {
                    name: 'md',
                    title: 'md',
                    setter: 'NumberSetter'
                },
                {
                    name: 'sm',
                    title: 'sm',
                    setter: 'NumberSetter'
                },
                {
                    name: 'xl',
                    title: 'xl',
                    setter: 'NumberSetter'
                },
                {
                    name: 'xs',
                    title: 'xs',
                    setter: 'NumberSetter'
                },
                {
                    name: 'xxl',
                    title: 'xxl',
                    setter: 'NumberSetter'
                },
                {
                    name: 'xxxl',
                    title: 'xxxl',
                    setter: 'NumberSetter'
                },
            ]
        }
    }
}

const fieldConfig: IPublicTypeFieldConfig[] = [
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'collapsed',
                title: {
                    label: '是否折叠',
                    tip: 'collapsed | 是否折叠'
                },
                setter: [
                    { componentName: 'BoolSetter' }
                ]
            },
            {
                name: 'collapsedRows',
                title: {
                    label: '折叠显示行数',
                    tip: 'collapsedRows | 折叠时显示的行数'
                },
                setter: [
                    { componentName: 'NumberSetter' }
                ]
            },
            {
                name: 'colGap',
                title: {
                    label: '列间距',
                    tip: 'colGap | 列与列之间的间距'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    objectConfig,
                 ]
            },
            {
                name: 'cols',
                title: {
                    label: '展示列数',
                    tip: 'cols | 每一行展示的列数'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    objectConfig,
                 ]
            },
            {
                name: 'rowGap',
                title: {
                    label: '行间距',
                    tip: 'rowGap | 行与行之间的间距'
                },
                setter: [
                    { componentName: 'NumberSetter', condition: () => true },
                    objectConfig,
                 ]
            }
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: "栅格",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '布局',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: baseEvents,
            style: true
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: [ 'GridItem' ]
            }
        },
        advanced: {
            initialChildren: [
                {
                    componentName: 'GridItem',
                    props: { span: 12 }
                },
                {
                    componentName: 'GridItem',
                    props: { span: 12 }
                },
            ]
        }
    }
};

const snippets: IPublicTypeSnippet[] = [
    {
        title: "栅格",
        screenshot: require('./__screenshots__/1.png'),
        schema: {
            componentName,
            props: {
            }
        }
    }
];

export default {
  ...Metadata,
  snippets
};