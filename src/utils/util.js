import moment from 'moment'
import 'moment/locale/zh-cn'

// 格式化时间
const diffForHumans = (date, format='YYYYMMDD H:mm:ss') => {
  moment.locale('zh-cn')
  return moment(date, format).fromNow()
}

const diffFormat = (date, format='YYYYMMDD H:mm:ss') => {
  return moment(date).format(format);
}

export default {
  diffForHumans,
  diffFormat
}
