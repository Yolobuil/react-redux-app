import { READ_EVENTS } from '../actions'

//配列のデータを編集する作業を得意なパッケージ
import _ from 'lodash';


//reducerは関数として定義
//stateの引数はデフォルトでは状態なしであるため、initialStateを渡す
export default (events = {}, action) => {
  //actionのtypeはaction.typeで拾うことができる
  switch (action.type) {
    //acition.typeが未定義の場合や、初期起動時の場合はデフォルトになる（stateをreturnでそのまま返してあげる処理が必要）
    //READ_EVENTS時に状態をアップデートして、それをアプリケーション内部で管理する
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}