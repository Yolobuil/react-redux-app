import Head from 'next/head'
import { Component } from 'react'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import {readEvents} from '../src/actions'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import _ from 'lodash'

const Cat = () =>{
  return <div>Meow!</div>
}

const User = (props) =>{
return <div>Hi, I am {props.name}! and {props.age} years old!</div>
}


User.defaultProps = {
  age: 1
}



class Counter extends Component {
  constructor(props){
super(props)
console.log(this.state)
this.state = {count:0}　//stateにはcountをキーとして、０を値とするオブジェクトが設定される。
  }

  handlePlusButton = () =>{
console.log('handlePlusButton')
console.log(this.state.count)
 this.setState({ count: this.state.count + 1})

  }

  handleMinusButton = () => {
    console.log('handleMlusButton')
    console.log(this.state.count)
    this.setState({ count: this.state.count - 1 }) //状態を変える時には必ずsetState

  }




render(){　//renderでdivの要素を描画する
  console.log('render') //setStateが実行されると、そのコールバックにrenderが再実行される
  return (
    <>
  <div>count: {this.state.count}</div>
      <Button variant="contained" color="primary" onClick={this.handlePlusButton}>+1</Button>
      <Button variant="contained" color="secondary" onClick={this.handleMinusButton
      }>-1</Button>
  </>
  )
}

}


const store = createStore(reducer, applyMiddleware(thunk))
class EventsIndex extends Component{
  componentDidMout() {
    this.props.readEvents()

  }

renderEvents(){
  return _.map(this.props.events, event => (
    <tr key={event.id}>
      <td>
        {event.id}
      </td>
      <td>
        {event.title}
      </td>
      <td>
        {event.body}
      </td>
    </tr>
  ))
}

  render(){

 return(

     <table>
<thead>
<tr>
<th>
  ID
</th>
<th>
  Title
</th>
<th>
  Body
</th>
</tr>
</thead>
<tbody>
  {this.renderEvents()}
</tbody>
     </table>


 )

  }

}

const mapStateToProps = state => ({events: state.events})


//readEventsが外部のAPiサーバに対して、一覧を取得する役割を持っている
const mapDispatchToProps = ({readEvents})


export default function Home() {
  const greeting = "yaa";
  const dom = <h1> {greeting}</h1>; //h1がトランスパイルされてdomに代入されている
  const profiles = [
    { name: "Taro", age: 15},
    { name: "Hanako", age: 2},
    { name: "Hanako2"},
  ]



  return (
    //JavaScript XML→JSX　JavaScriptの拡張言語。Reactを用いてHTMLを出力するための言語。
    //Facebookが開発。XMLやHTMLに見た目は似ている→可読性が高い
    //JSXは内部でトランスパイルされ、JavaScriptのコードに変換
    //JSXでもJavaScriptでも挙動は変わらない→JSXの方が容易なため、使われる。
    //直っ感的にHTMLをかけるという点がJSXの利点。最終的な成果物の形式によりちかい構文で表現できる。
    //{}で囲うことでJavaScriptを使える
    //JSX内でのclassの指定通常class JSX上ではclassName(JSの予約語にclassがあるため)
    //reactは必ず１つのタグしか返せないが、不要なタグを返すことにもなる・・・
    //それを避けるために、<React.Fragment></React.Fragment>で囲うことで、実質１つのタグにできる。最終的には<React.Fragment>はきえる
    //JSXをJavaScriptに変換する作業のことをトランスパイリングという変換することをトランスパイル（ブラウザやnodeでは使えない）
    //自動で内部的にかつ自動的に変換されている→Babelが自動的によしなにやっている
    //様々な構文をBabelが標準的なJSに変換してくれる


        <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <label>Hello</label>  <label className={styles.text}>World!</label>
        </h1>
        {
          profiles.map((profiles,index) => {
            return <User name={profiles.name} age={profiles.age} key={index}/>
          })
        }
        <Counter />
  {/*      <EventsIndex /> */}

    <input type="text" onClick={() => {console.log("hello見えてますか？")}} />
    <input type="text" onChange={() => { console.log("hello") }} />
    <label htmlFor="bar">bar</label>
      {dom}
      <Cat />
        <Cat />
        <Cat />
        <User name={"a"} />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}