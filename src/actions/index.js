export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const READ_EVENTS = 'READ_EVENTS'

//リクエストを送信するHttpクライアント
import axios from 'axios'



//actionを定義してactionをreturnする関数、アクションクリエーター
//viewを担当するコンポーネント側でインポートしてあるイベントを掴んだ時、当該のアクションクリエイターをインボークして適切な状態遷移を実行させるための仕組み
export const increment =() => ({
type: INCREMENT
})

export const decrement = () =>({
  type: DECREMENT
  })

  const ROOT_URL = 'htttps://udemy-utils.herokuapp.com/api/v1'
  const QUERYSTRING = '?token=token123'

  //外部のAPIサーバに対して、リクエストを投げる処理を作りたい
  //readEventsはピュアなオブジェクトを返す必要がある→この中に非同期処理を実行することは許されない（Reduxーthunkで実現）
  //redux-thunkによって、アクションクリエーターがアクションの代わりに関数を返すことができる
  //redux-thunkの内部の関数は、パラメータとして、DispatchとgetstateというStoreのメソッドを受け取ることができる
  //axiosは戻り値がpromiseになるため、async　awaitを使う
export const readEvents = () => async dispatch => {
  const response =  await axios.get('${ROOT_URL}/events${QUERYSTRING}')

  dispatch({ type: READ_EVENTS, response})

  }