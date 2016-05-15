import React, { Component } from 'react'
import styles from './Word.css'
import { ipcRenderer, ipcMain } from 'electron'
import classnames from 'classnames'
import {handleOptionChange} from '../actions/index'
import { connect } from 'react-redux'

const KATAKANA = {
あ:"ア",
か:"カ",
さ:"カ",
た:"タ",
な:"ナ",
は:"ハ",
ま:"マ",
や:"ヤ",
ら:"ラ",
わ:"ワ",
い:"イ",
き:"キ",
し:"シ",
ち:"チ",
に:"ニ",
ひ:"ヒ",
み:"ミ",
り:"リ",
う:"ウ",
く:"ク",
す:"ス",
つ:"ツ",
ぬ:"ヌ",
ふ:"フ",
む:"ム",
ゆ:"ユ",
る:"ル",
ん:"ン",
え:"エ",
け:"ケ",
せ:"セ",
て:"テ",
ね:"ネ",
へ:"ヘ",
め:"メ",
れ:"レ",
お:"オ",
こ:"コ",
そ:"ソ",
と:"ト",
の:"ノ",
ほ:"ホ",
も:"モ",
よ:"ヨ",
ろ:"ロ",
を:"オ",
}
const ROMAJI = {
あ:"a",
か:"ka",
さ:"sa",
た:"ta",
な:"na",
は:"ha",
ま:"ma",
や:"ya",
ら:"ra",
わ:"wa",
い:"i",
き:"ki",
し:"shi",
ち:"chi",
に:"ni",
ひ:"hi",
み:"mi",
り:"ri",
う:"u",
く:"ku",
す:"su",
つ:"tsu",
ぬ:"nu",
ふ:"fu",
む:"mu",
ゆ:"yu",
る:"ru",
ん:"n",
え:"e",
け:"ke",
せ:"se",
て:"te",
ね:"ne",
へ:"he",
め:"me",
れ:"re",
お:"o",
こ:"ko",
そ:"so",
と:"to",
の:"no",
ほ:"ho",
も:"mo",
よ:"yo",
ろ:"ro",
を:"o",
}

function handleAudioPlay(soundName){
    let audio = new Audio(`../wav/${soundName}.wav`)
    audio.play()
  }


class Word extends Component {
  constructor(props){
    super(props)
    
  this.renderLine = this.renderLine.bind(this)
  }
  
  // componentDidMount(){
  //   const { handleOptionChange } = this.props
  //  ipcRenderer.on('global-shortcut', function(event,arg){
  //    handleOptionChange('clickWord',arg,'word')
  //    handleAudioPlay(arg)
  //   })
  // }
  
  renderLine(data){
    const {isopen} = this.props
    const secondWord = isopen ? ROMAJI : KATAKANA
    
    
    return(
      data.map((word,i) =>
        <div 
          onClick={()=> handleAudioPlay(word)}
          key={i} className={[styles.buttonBox]}>
          <p 
            className={styles.buttonText}>
            {word}
            <span className={styles.buttonSpan}>
              {secondWord[word]}
            </span>
          </p>
        </div>
      )
    )
  }
  
  
  render() {
    
    const data = {
      aline : ['あ','か','さ','た','な','は','ま','や','ら','わ'],
      iline : ['い','き','し','ち','に','ひ','み',' ','り',' '],
      uline : ['う','く','す','つ','ぬ','ふ','む','ゆ','る','ん'],
      eline : ['え','け','せ','て','ね','へ','め',' ','れ',' '],
      oline : ['お','こ','そ','と','の','ほ','も','よ','ろ','を']
    }
    
    return (
      <div className={styles.container}>
        <div className={styles.lineBox}>{this.renderLine(data.aline)}</div>
        <div className={styles.lineBox}>{this.renderLine(data.iline)}</div>
        <div className={styles.lineBox}>{this.renderLine(data.uline)}</div>
        <div className={styles.lineBox}>{this.renderLine(data.eline)}</div>
        <div className={styles.lineBox}>{this.renderLine(data.oline)}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{}
}

export default connect(mapStateToProps, {
  handleOptionChange
})(Word)
