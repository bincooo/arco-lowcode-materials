import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "ImagePreview"
const componentTitle: string = "图片预览"
const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'closable',
                title: {
                    label: '显示关闭按钮',
                    tip: 'closable | 是否显示关闭按钮',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'defaultVisible',
                title: {
                    label: '默认是否可见',
                    tip: 'defaultVisible | 默认是否可见，非受控',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'escToExit',
                title: {
                    label: '按ESC键关闭',
                    tip: 'escToExit | 按 ESC 键关闭预览',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'maskClosable',
                title: {
                    label: '触发关闭',
                    tip: 'maskClosable | 点击 mask 是否触发关闭',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'visible',
                title: {
                    label: '是否可见',
                    tip: 'visible | 是否可见，受控属性',
                },
                setter: { componentName: 'BoolSetter' }
            },
            {
                name: 'breakPoint',
                title: {
                    label: '切换为simple模式',
                    tip: 'breakPoint | 触发 toolbar 切换为 simple 模式的宽度',
                },
                setter: { componentName: 'NumberSetter' }
            },
            {
                name: 'src',
                title: {
                    label: '图片地址',
                    tip: 'src | 图片获取地址, 在 Image 中默认是 Image 的 src',
                },
                setter: { componentName: 'StringSetter', isRequired: true }
            },
            {
                name: 'imgAttributes',
                title: {
                    label: '图片属性',
                    tip: 'imgAttributes | 图片属性，透传至预览弹窗中的 img 标签上',
                },
                setter: { componentName: 'JsonSetter' }
            },
            {
                name: 'extra',
                title: {
                    label: '自定义图片预览区域的额外节点',
                    tip: 'extra | 自定义图片预览区域的额外节点',
                },
                setter: { componentName: 'SlotSetter' }
            },
        ]
    },
    {
        name: 'actions',
        title: {
            label: 'loader的样式Class',
            tip: 'actions | loader 的样式，将覆盖默认过渡效果'
        },
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: { componentName: 'StringSetter' }
                }
            }
        ]
    },
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: '',
    screenshot: "",
    devMode: "proCode",
    npm: pack("Image", "Preview"),
    category: '数据显示',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                {
                    name: 'onVisibleChange',
                    description: '切换可见状态触发的事件',
                    template: "\n\n  onVisibleChange(visible, preVisible, ${extParams}) {\n    //图片预览切换可见状态触发的事件\n    console.log('onVisibleChange', event);\n  }\n"
                }
            ],
            style: true,
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
                defaultVisible: true,
                src: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
            },
            children: []
        }
    },
];

export default {
  ...Metadata,
  snippets
};
