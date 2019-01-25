import '../css/App.scss';
import NotFoundImage from '../images/no-data-found.png'

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { SearchInut } from '../components/search'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Packages } from '../components/packages'
import axios from 'axios';
import { isLoading, getData } from '../actions/searchActions'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight)


var send_request = null


class App extends Component {
    constructor(props) {
      super(props)
      this.GetData = this.GetData.bind(this);
    }
    RequestData(text,page) {
      axios.get('https://data.gov.au/data/api/3/action/package_search', {
        timeout: 10000,
        params: {
        q: text,
        start: (page - 1) * this.props.data.limit,
        rows: this.props.data.limit }})
          .then(response => {
             return response.data
          })
          .then(data => {
            this.props.getDataAction(text, data.result, page)
          })
    }

    GetData(text, page, timeout=0) {
      clearTimeout(send_request)
      this.props.isLoadingAction(true, text)
      send_request = setTimeout(()=>{this.RequestData(text,page)}, timeout)
    }
  componentDidMount() {
    this.GetData('', 1)
  }
  render() {
    const { data, isLoadingAction } = this.props
    return (
      <div>
        <Header />
        <SearchInut data={data} GetData={this.GetData} isLoadingAction={isLoadingAction} />
        <div className="container datasets-block">
          { data.is_loading && <div className="lds-ring text-center"><div></div><div></div><div></div><div></div></div> }
          { data.data.count > 0 ?
            <Packages data={ data.data }/>:
            <div className="no-datasets-found">
              <img src={NotFoundImage} alt=""/>
            </div> }
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    data: store.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isLoadingAction: (value, text) => dispatch(isLoading(value, text)),
    getDataAction: (text, data, page) => dispatch(getData(text, data, page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
