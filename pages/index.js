import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Cat = () =>{
  return <div>Meow!</div>
}

export default function Home() {
  const greeting = "yaa";
  const dom = <h1> {greeting}</h1>; //h1がトランスパイルされてdomに代入されている

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
    <input type="text" onClick={() => {console.log("hello")}} />
    <input type="text" onChange={() => { console.log("hello") }} />
    <label htmlFor="bar">bar</label>
      {dom}
      <Cat />
        <Cat />
        <Cat />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
