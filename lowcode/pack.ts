import { IPublicTypeNpmInfo } from '@alilc/lowcode-types';
export default function(componentName: string, subName: string = ''): IPublicTypeNpmInfo {
    return {
        package: "arco-lowcode-materials",
        version: "0.1.0",
        exportName: componentName,
        main: "src/index.tsx",
        destructuring: true,
        subName
    };
};

export const baseEvents = [
    {
        name: 'onClick',
        template: "\nonClick(event, ${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
    },
]