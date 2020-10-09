import React, { Component } from 'react';
import  { 
  HeaderWrapper,
  LeftLogo,
  RightShow,
  MiddleShow
} from './style'
import logo from '../../../images/logo.svg'
import { connect } from 'react-redux'
import { changeSearchFocused, changeSearchMouse } from '../../../store/action/headerAction'
class MyHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
      historyList: [],
    }
  }
  componentDidMount() {
    let str = localStorage.getItem('historyList')
    if(str) {
      this.setState(state=>({
        historyList: JSON.parse(str)
      }))
    }
  }
  handleEnterSearch = (e)=> {
    if(e.keyCode === 13) {
      this.handleSearch()
    }
  }
  handleSearch = ()=> {
    if(this.state.searchValue !== '') {
      const obj = {
        id: new Date(),
        content: this.state.searchValue
      }
      const list = [...this.state.historyList]
      list.unshift(obj)
      this.setState(state=> ({
        historyList: list
      }), ()=> {
        const str = JSON.stringify(this.state.historyList)
        localStorage.setItem('historyList', str)
      })
    }
  }
  handleSearchChange = (e)=> {
    const value = e.target.value
    this.setState({
      searchValue: value
    })
  }
  deleteHistoryItem = (index)=> {
    const list = [...this.state.historyList]
    list.splice(index, 1)
    this.setState(state=> ({
      historyList: list
    }), ()=> {
      const str = JSON.stringify(this.state.historyList)
      localStorage.setItem('historyList', str)
    })
  }
  renderHistorySearch() {
    if(this.props.focused || this.props.mouseIn) {
      return (
        <div 
          className="historySearch"
          onMouseEnter={ this.props.handleMouseIn }
          onMouseLeave={ this.props.handleMouseOut }>
          { this.state.historyList.map((item, index)=> {
            return (
              <div className="searchItem" key={ item.id }>
                <div className="left">
                  <i className="iconfont">&#xe631;</i>
                  <span>{ item.content }</span>
                </div>
                <i className="iconfont right" onClick={ ()=> { this.deleteHistoryItem(index) } }>&#xe614;</i>
              </div>
            )
          }) }
        </div>
      )
    }else {
      return null
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <LeftLogo>
          <img src={ logo } alt="" />
        </LeftLogo>
        <RightShow>
          <div className="item1">
            <i className="iconfont">&#xe636;</i>
          </div>
          <div className="item2">登录</div>
          <div className="item3">注册</div>
          <div className="item3 item4">
            <i className="iconfont edit">&#xe724;</i>
            写文章
          </div>
        </RightShow>
        <MiddleShow>
          <div className="middle1">首页</div>
          <div className="middle1">下载APP</div>
          <div className={ this.props.focused ? 'middle3 focused' : 'middle3' }>
            <input 
              placeholder="搜索" 
              className="search" 
              onFocus={ this.props.handleFocus }
              onBlur={ this.props.handleBlur }
              onKeyUp= { this.handleEnterSearch }
              value={ this.state.searchValue }
              onChange={ this.handleSearchChange }
            />
            <div className="searchIcon" onClick={ this.handleSearch }><i className="iconfont">&#xe633;</i></div>
            { this.renderHistorySearch() }
          </div>
        </MiddleShow>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state)=> {
  return {
    focused: state.headerReducer.get('focused'),
    mouseIn: state.headerReducer.get('mouseIn')
  }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    handleFocus(){
      dispatch(changeSearchFocused(true))
    },
    handleBlur() {
      dispatch(changeSearchFocused(false))
    },
    handleMouseIn() {
      dispatch(changeSearchMouse(true))
    },
    handleMouseOut() {
      dispatch(changeSearchMouse(false))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyHeader)