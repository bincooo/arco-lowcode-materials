import { Ref, forwardRef, createElement } from 'react';
import { Upload } from '@arco-design/web-react';
import { isEditor } from '../../utils'

const UploadBox = forwardRef((props: any, ref: Ref<any>) => {
    if (isEditor(props)) {
        let { style = {}, children, ...others } = props
        let { width, height, ...styleOthers } = style
        return <div ref={ref} style={{ width, height }}>
            <Upload {...others} style={styleOthers} />
        </div>
    }

    let { children, ...others } = props
    return <Upload ref={ref} {...others} />
})

export default UploadBox