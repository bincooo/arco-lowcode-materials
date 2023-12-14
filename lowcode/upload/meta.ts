import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import pack, { baseEvents, baseProps } from '../pack'

const componentName: string = "Upload"
const componentTitle: string = "上传"

const fieldConfig: IPublicTypeFieldConfig[] = [
    baseProps,
    {
        title: '功能',
        display: 'block',
        type: 'group',
        items: [
            {
                name: 'name',
                title: {
                    label: '发请求时文件内容的参数名',
                    tip: 'name | 发请求时文件内容的参数名',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'data',
                title: {
                    label: '上传时的Body参数',
                    tip: 'data | 上传时的 Body 参数',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'buildData',
                            template: "\n\n  buildData(options, ${extParams}) {\n    // 上传时的 Body 参数\n    console.log('buildData', options);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'autoUpload',
                title: {
                    label: '选中文件后自动上传',
                    tip: 'autoUpload | 是否选中文件后自动上传',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'directory',
                title: {
                    label: '文件夹上传',
                    tip: 'directory | 文件夹上传',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'disabled',
                title: {
                    label: '禁用',
                    tip: 'disabled | 禁用',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'drag',
                title: {
                    label: '拖拽上传',
                    tip: 'drag | 是否拖拽上传',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'imagePreview',
                title: {
                    label: '启用内置的图片预览',
                    tip: 'imagePreview | 启用内置的图片预览，仅在 listType=\'picture-card\' 时生效。(v2.41.0)',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'multiple',
                title: {
                    label: '文件多选',
                    tip: 'multiple | 文件多选',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'withCredentials',
                title: {
                    label: '上传请求是否携带cookie',
                    tip: 'withCredentials | 上传请求是否携带 cookie',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                ],
            },
            {
                name: 'action',
                title: {
                    label: '上传接口地址',
                    tip: 'action | 上传接口地址',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'method',
                title: {
                    label: '上传请求类型',
                    tip: 'method | 上传请求的 http method',
                },
                setter: [
                    { componentName: 'StringSetter' },
                ],
            },
            {
                name: 'listType',
                title: {
                    label: '展示类型',
                    tip: 'listType | 展示类型',
                },
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { title: 'text', value: 'text' },
                                { title: 'picture-list', value: 'picture-list' },
                                { title: 'picture-card', value: 'picture-card' },
                            ]
                        }
                    },
                ],
            },
            {
                name: 'tip',
                title: {
                    label: '提示文字',
                    tip: 'tip | 提示文字，listType 不同，展示会有区别',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    { componentName: 'SlotSetter' },
                ],
            },
            {
                name: 'accept',
                title: {
                    label: '接受上传的类型',
                    tip: 'accept | 接受上传的类型 详细请参考。（strict in 2.53.0，默认为 true。设置为 false 时，accept 表现和原生一致。设置为 true 时，会严格匹配文件后缀名，过滤掉不符合 accept 规则的文件。)',
                },
                setter: [
                    { componentName: 'StringSetter' },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'type',
                                        title: 'type',
                                        setter: [
                                            { componentName: 'StringSetter' },
                                        ],
                                    },
                                    {
                                        name: 'strict',
                                        title: 'strict',
                                        setter: [
                                            { componentName: 'BoolSetter' },
                                        ],
                                    },
                                ]
                            }
                        }
                    },
                ],
            },
            {
                name: 'beforeUpload',
                title: {
                    label: '上传文件之前的回调',
                    tip: 'beforeUpload | 上传文件之前的回调。返回 false 或者 promise抛出异常的时候会取消上传',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'beforeUpload',
                            template: "\n\n  beforeUpload(file, filesList, ${extParams}) {\n    // 上传文件之前的回调\n    console.log('beforeUpload', file);\n    return true;\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'defaultFileList',
                title: {
                    label: '默认已上传的文件列表',
                    tip: 'defaultFileList | 默认已上传的文件列表(Array)',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'fileList',
                title: {
                    label: '已上传的文件列表',
                    tip: 'fileList | 已上传的文件列表(Array)',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'headers',
                title: {
                    label: '上传时使用的headers',
                    tip: 'headers | 上传时使用的 headers',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'limit',
                title: {
                    label: '限制上传数量',
                    tip: 'limit | 限制上传数量。默认超出后会隐藏上传节点。对象类型在 2.28.0 支持',
                },
                setter: [
                    { componentName: 'NumberSetter' },
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            config: {
                                items: [
                                    {
                                        name: 'maxCount',
                                        title: 'maxCount',
                                        setter: [
                                            { componentName: 'BoolSetter' },
                                        ],
                                    },
                                    {
                                        name: 'hideOnExceedLimit',
                                        title: 'hideOnExceedLimit',
                                        setter: [
                                            { componentName: 'BoolSetter' },
                                        ],
                                    },
                                ]
                            }
                        }
                    },
                ],
            },
            {
                name: 'progressProps',
                title: {
                    label: '进度条属性',
                    tip: 'progressProps | 进度条属性，接收所有进度条的 props',
                },
                setter: [
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'showUploadList',
                title: {
                    label: '是否展示上传文件列表',
                    tip: 'showUploadList | 是否展示上传文件列表。预览图标，删除图标，文件图标，重新上传图标，取消上传图标',
                },
                setter: [
                    { componentName: 'BoolSetter' },
                    { componentName: 'JsonSetter' },
                ],
            },
            {
                name: 'customRequest',
                title: {
                    label: '覆盖默认的上传行为',
                    tip: 'customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现',
                },
                setter: [
                    {
                        componentName: 'FunctionSetter',
                        props: {
                            name: 'customRequest',
                            template: "\n\n  customRequest(options, ${extParams}) {\n    // 通过覆盖默认的上传行为，可以自定义自己的上传实现\n    console.log('customRequest', options);\n  }\n"
                        }
                    },
                ],
            },
            {
                name: 'renderUploadItem',
                title: {
                    label: '自定义上传列表项',
                    tip: 'renderUploadItem | 自定义上传列表项',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["originNode", "file", "fileList"],
                            value: []
                        }
                    },
                ],
            },
            {
                name: 'renderUploadList',
                title: {
                    label: '自定义展示上传文件列表',
                    tip: 'renderUploadList | 自定义展示上传文件列表',
                },
                setter: [
                    {
                        componentName: 'SlotSetter',
                        initialValue: {
                            type: "JSSlot",
                            params: ["fileList", "uploadListProps"],
                            value: []
                        }
                    },
                ],
            },
        ]
    }
];

const Metadata: IPublicTypeComponentMetadata = {
    componentName,
    title: componentTitle,
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: pack(componentName),
    category: '数据输入',
    group: 'arco组件',
    props: [
    ],
    configure: {
        props: fieldConfig,
        supports: {
            events: [
                ...baseEvents,
                {
                    name: 'onRemove',
                    description: '点击删除文件时的回调',
                    template: "\n\n  onRemove(file, fileList, ${extParams}) {\n    // 点击删除文件时的回调。返回 false 或者 Promise.reject 的时候不会执行删除\n    console.log('onRemove', file);\n  }\n",
                },
                {
                    name: 'onChange',
                    description: '上传文件改变时的回调',
                    template: "\n\n  onChange(fileList, file, ${extParams}) {\n    // 上传文件改变时的回调。文件开始上传，失败，成功时会触发。注意：如果需要实时获取文件的上传进度，请在 onProgress 中处理\n    console.log('onChange', fileList);\n  }\n",
                },
                {
                    name: 'onDragLeave',
                    description: '拖拽上传文件离开拖拽区时的回调',
                    template: "\n\n  onDragLeave(event, ${extParams}) {\n    // 拖拽上传文件离开拖拽区时的回调\n    console.log('onDragLeave', event);\n  }\n",
                },
                {
                    name: 'onDragOver',
                    description: '拖拽上传文件进入拖拽区时的回调',
                    template: "\n\n  onDragOver(event, ${extParams}) {\n    // 拖拽上传文件进入拖拽区时的回调\n    console.log('onDragOver', event);\n  }\n",
                },
                {
                    name: 'onDrop',
                    description: '拖拽上传文件时执行的回调',
                    template: "\n\n  onDrop(event, ${extParams}) {\n    // 拖拽上传文件时执行的回调\n    console.log('onDrop', event);\n  }\n",
                },
                {
                    name: 'onExceedLimit',
                    description: '超出上传数量限制时触发',
                    template: "\n\n  onExceedLimit(files, fileList, ${extParams}) {\n    // 超出上传数量限制时触发\n    console.log('onExceedLimit', files);\n  }\n",
                },
                {
                    name: 'onPreview',
                    description: '点击预览时候的回调',
                    template: "\n\n  onPreview(file, ${extParams}) {\n    // 点击预览时候的回调\n    console.log('onPreview', file);\n  }\n",
                },
                {
                    name: 'onProgress',
                    description: '文件上传进度的回调',
                    template: "\n\n  onProgress(file, event, ${extParams}) {\n    // 文件上传进度的回调\n    console.log('onPreview', file);\n  }\n",
                },
                {
                    name: 'onReupload',
                    description: '文件重新上传时触发的回调',
                    template: "\n\n  onReupload(file, ${extParams}) {\n    // 文件重新上传时触发的回调\n    console.log('onReupload', file);\n  }\n",
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
