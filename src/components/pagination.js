import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class DatasetsPagination extends React.Component {
	ChangePage = (event)=> {
		event.preventDefault()
		const go_to_page = event.target.getAttribute('page')
		this.props.GetData(this.props.data.text, go_to_page)

	}
	render() {
		const { data } = this.props
		const pages = parseInt(Math.ceil(data.data.count / data.limit))
		const current_page = parseInt(data.page)
		return (
			<nav className="row pagination-nav">
				<ul className="pagination">
					{ data.page > 1  ?
						<React.Fragment>
					    <li className="page-item">
					      <a className="page-link" href="#1" onClick={this.ChangePage} page="1"><FontAwesomeIcon icon="angle-double-left" /></a>
					    </li>
					    <li className="page-item">
					      <a className="page-link" href={'#' + (current_page - 1)} onClick={this.ChangePage} page={ current_page - 1 }><FontAwesomeIcon icon="angle-left" /></a>
					    </li>
					    <li className="page-item">
					      <a className="page-link" href={'#' + (current_page - 1)} onClick={this.ChangePage} page={ current_page - 1 }>{ current_page - 1} </a>
					    </li>
					    </React.Fragment>:
					    <React.Fragment>
					    <li className="page-item disabled">
					      <a className="page-link" href={'#1'}><FontAwesomeIcon icon="angle-left" /></a>
					    </li>
					    </React.Fragment>	
					}
				    <li className="page-item active">
				      <a className="page-link" href={'#' + current_page}>{ current_page }</a>
				    </li>
				    { (pages - current_page) > 0 &&
				    	<React.Fragment>
				    	<li className="page-item">
				    		<a className="page-link" href={'#' + (current_page + 1)} onClick={this.ChangePage} page={ current_page + 1 }>{ current_page + 1 }
				    		</a>
				    	</li>
				    	{ pages > current_page + 1 &&
				    		<React.Fragment>
						   		<li className="page-item disabled">
						      		<a className="page-link" href={'#' + (current_page + 1)}>...</a>
						    	</li>
						   		<li className="page-item">
						      		<a className="page-link" href={'#' + pages} onClick={this.ChangePage} page={ pages } >{ pages }</a>
						    	</li>
				    		</React.Fragment>
				    	}
				    	<li className="page-item">
				      		<a className="page-link" href={'#' + (current_page + 1)} onClick={this.ChangePage} page={ current_page + 1 }><FontAwesomeIcon icon="angle-right" /></a>
				    	</li>
				   		<li className="page-item">
				      		<a className="page-link" href={'#' + pages} onClick={this.ChangePage} page={ pages }><FontAwesomeIcon icon="angle-double-right" /></a>
				    	</li>
				    	</React.Fragment>
				    }
				</ul>
			</nav>
		)
	}
}