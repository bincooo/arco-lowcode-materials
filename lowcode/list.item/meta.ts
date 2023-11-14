import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "ListItem"
const componentTitle: string = "列表子组件"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'actionLayout',
                title: {
                  label: '列表操作组位置',
                  tip: 'actionLayout | 列表操作组的位置，默认horizontal，出现在右侧；vertical出现在下方。',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'horizontal', value: 'horizontal' },
                                { title: 'vertical', value: 'vertical' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'extra',
                title: {
                  label: '列表最右侧内容',
                  tip: 'extra | 列表最右侧内容，额外内容',
                },
                setter: [
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'actions',
                title: {
                  label: '列表项下方内容',
                  tip: 'actions | 列表项下方内容（列表操作组）',
                },
                setter:  {
                    componentName: 'ArraySetter',
                    props: {
                        itemSetter: { componentName: 'SlotSetter' }
                    }
                },
            },
        ]
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: '',
    screenshot: "",
    devMode: "proCode",
    npm: pack("List", "Item"),
    category: '数据显示',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: baseEvents,
            style: true,
        },
        component: {
            isContainer: true
        }
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
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
