import React from 'react'
import { NavLink, Route, Redirect, Switch,withRouter } from 'react-router-dom'
import './style.scss'
import routes from '@/routes'
import HeaderTop from '../headertop';
import MyFooter from '../footer';
import { Layout, Icon, Button, Breadcrumb } from 'antd'
const { Header, Sider, Content } = Layout;
export default class MyLayoutTop extends React.Component {
  constructor(props){
    super(props)
  }
  
  getRouteElement() {
    let result = []
    routes.map((ele) => {
      result.push(<Route key={ele.id} exact path={ele.path} component={ele.component} ></Route>)
      if(ele.child){
        ele.child.map((childele,i)=>{
          result.push(<Route key={ele.id} exact path={childele.path} component={childele.component} ></Route>)
          }
        )
      }
    }

    )
    return result;
  }
  render() {
    
    return (
      <Layout>
        <HeaderTop />
          <Content>
          {/*Switch必须是Route直接父组件，Route不能被其它JSX对象所包裹*/}
          <div>
            <Switch>
              {
                this.getRouteElement()
              }
              <Redirect from='/*' to='/home' />
            </Switch>
          </div>
        </Content>
        <MyFooter/>
      </Layout>
    )
  }
}