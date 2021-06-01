//reducerのindex.jsでは、アプリケーション内部に存在する全てのreducerを総括する役割を担う
//全reducerを１つのreducerに結合するイメージ
　
//reducerを結合を行うための機能
import { combineReducers } from 'redux'
import count from './count'
import events from './events'

//アプリケーションを通常書く場合は複数のreducerを書く（１つは稀）
//引数にアプリケーションが使っているreducerを列挙すればOK
//e.g.)export default combineReducers({foo,bar,baz})

export default combineReducers({count,events})