import { INCREMENT, DECREMENT } from '../actions'

//状態はオブジェクトとして定義
//counterの初期値は０初期状態のオブジェクトを入れる変数名はinitialState

const initialState = { value: 0 }

//reducerは関数として定義
//stateの引数はデフォルトでは状態なしであるため、initialStateを渡す
export default (state = initialState , action) => {
 //actionのtypeはaction.typeで拾うことができる
  switch(action.type){
    //acition.typeが未定義の場合や、初期起動時の場合はデフォルトになる（stateをreturnでそのまま返してあげる処理が必要）
    case INCREMENT :
      return { value: state.value +1}
    case DECREMENT :
      return { value: state.value - 1 }
    default:
      return state


  }
}