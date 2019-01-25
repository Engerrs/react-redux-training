import React from 'react'

export class Packages extends React.Component {
	render() {
		const { data } = this.props
		return (
			<div className="row search-datasets">
				{ data.results.map((item) =>
						<div className="col-md-3" key={item.id} >
							<div className="dataset-item">
								<h2 className="dataset-title">
									<a href={"https://data.gov.au/data/dataset/"+ item.name} target="__blank" className="">
										{ item.title.length > 58 ?
											item.title.substring(0,58) + '...':
											item.title}
									</a>
								</h2>
								<div className="small-description">{ item.notes.length > 126 ?
									item.notes.substring(0,126) + '...':
									item.notes }</div>
							</div>
						</div>
					)}
			</div>
		)
	}
}