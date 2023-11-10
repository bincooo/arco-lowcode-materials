import { IPublicTypeNpmInfo } from '@alilc/lowcode-types';
export default function(componentName: string): IPublicTypeNpmInfo {
    return {
        package: "arco-lowcode-materials",
        version: "0.1.0",
        exportName: componentName,
        main: "src/index.tsx",
        destructuring: true,
        subName: ""
    };
};