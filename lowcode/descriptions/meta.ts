import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Descriptions"
const componentTitle: string = "描述列表"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'title',
                title: {
                    label: '标题',
                    tip: 'title | 标题'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'border',
                title: {
                    label: '显示边框',
                    tip: 'border | 是否显示边框',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'layout',
                title: {
                    label: '排列方式',
                    tip: 'layout | 排列方式'
                },
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            { title: 'horizontal', value: 'horizontal' },
                            { title: 'vertical', value: 'vertical' },
                            { title: 'inline-horizontal', value: 'inline-horizontal' },
                            { title: 'inline-vertical', value: 'inline-vertical' },
                        ]
                    }
                }
            },
            {
                name: 'size',
                title: {
                    label: '尺寸',
                    tip: 'size | 描述列表的尺寸，如不指定默认为 default'
                },
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            { title: 'default', value: 'default' },
                            { title: 'mini', value: 'mini' },
                            { title: 'small', value: 'small' },
                            { title: 'medium', value: 'medium' },
                            { title: 'large', value: 'large' },
                        ]
                    }
                }
            },
            {
                name: 'tableLayout',
                title: {
                    label: '表格样式布局',
                    tip: 'tableLayout | 描述中表格样式的 layout-fixed，当设置成 fixed 时，宽度会均分。'
                },
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { title: 'auto', value: 'auto' },
                            { title: 'fixed', value: 'fixed' },
                        ]
                    }
                }
            },
            {
                name: 'colon',
                title: {
                    label: '标签分割标记',
                    tip: 'colon | 标签文字后显示的内容，一般配置为 :'
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ]
            },
            {
                name: 'column',
                title: {
                    label: '一行放置几列数据',
                    tip: 'column | 一行放置几列数据，一个数据为一列。支持配置 column 为数字或者对象，配置对象格式时，支持配置为 { xs: 1, md: 2, lg: 3 } 这种形式来支持响应式排列'
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    { componentName: 'JsonSetter' },
                ]
            },
            {
                name: 'data',
                title: {
                    label: '列表数据',
                    tip: 'data | 描述列表的数据'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ]
            },
            {
                name: 'labelStyle',
                title: {
                    label: '标签的单元格的样式',
                    tip: 'labelStyle | 显示标签的单元格的样式'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ]
            },
            {
                name: 'valueStyle',
                title: {
                    label: '值的单元格的样式',
                    tip: 'valueStyle | 显示值的单元格的样式'
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ]
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
    npm: pack(componentName),
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
                title: 'User Info',
                colon: ' :',
                style: {
                    margin: "10px",
                    padding: "30px",
                    border: "1px solid #9e9e9e"
                },
                data: [
                    { label: "Name", value: "Socrates" },
                    { label: "Mobile", value: "123-1234-1234" },
                    { label: "Residence", value: "Beijing" },
                    { label: "Hometown", value: "Beijing" },
                    { label: "Address", value: "Yingdu Building, Zhichun Road, Beijing" }
                ]
            },
        }
    },
];

export default {
  ...Metadata,
  snippets
};
