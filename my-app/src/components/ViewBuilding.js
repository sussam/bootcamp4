import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, buildingData } = this.props;
		const selectedBuilding = data.filter(directory => {
			return directory.id === buildingData;
		});

		if (selectedBuilding.length === 0) {
			return (
				<div>
					<p>
						<i>Click on a name to view more information.</i>
					</p>
				</div>

			);
		}
		else {
			return (
				<div>
					<p><text>Code:</text> {selectedBuilding[0].code}</p>
					<p><text>Name:</text> {selectedBuilding[0].name}</p>

					{selectedBuilding[0].coordinates &&
						<p><text>Longitude: </text>{selectedBuilding[0].coordinates.longitude}</p>
					}

					{selectedBuilding[0].coordinates &&
						<p><text>Latitude: </text>{selectedBuilding[0].coordinates.latitude}</p>
					}

					{selectedBuilding[0].address &&
						<p><text>Address:</text> {selectedBuilding[0].address}</p>
					}
				</div>

			);
		}

	}
}
export default ViewBuilding;