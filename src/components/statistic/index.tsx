import { Ref, forwardRef } from 'react';
import { Statistic } from '@arco-design/web-react';
import { withWarp } from '../../utils'

const StatisticBox = forwardRef((props: any, ref: Ref<any>) => {
    return withWarp(Statistic, props, ref)
})

;(StatisticBox as any).Countdown = Statistic.Countdown;
export default StatisticBox