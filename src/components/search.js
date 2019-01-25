import React from 'react'
import { DatasetsPagination } from './pagination'

export class SearchInut extends React.Component {
	SearchInputUpdate = (event) => {
		const text = event.target.value
		this.props.GetData(text, 1, 1000)
	}
	render() {
		const { data } = this.props
		return (
			<div className="row col-md-12 text-center search-block">
				<div className="col-md-4 mx-auto align-self-center">
					<input 
						className="search-input"
						type="text" value={ data.text }
						onChange={this.SearchInputUpdate}
						placeholder="Start typing..."	/>
					<div className="found-block">Found {data.data.count} Datasets</div>
					<DatasetsPagination GetData={this.props.GetData}  data={data} />
				</div> 
			</div>
		)
	}
}