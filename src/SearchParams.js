import React from 'react';
import pf, { ANIMALS } from 'petfinder-client';

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
})

export default class SearchParams extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: "Seattle, WA",
            animal: "",
            breed: "",
            breeds: []
        };

        this.handlerLocationChange = this.handlerLocationChange.bind(this);
        this.handlerAnimalChange = this.handlerAnimalChange.bind(this);
        this.handleBreedChange = this.handleBreedChange.bind(this);
    }

    handlerLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    };

    handlerAnimalChange(event) {
        this.setState({
            animal: event.target.value
        }, this.getBreeds)
    }

    getBreeds() {
        if (this.state.animal) {
            petfinder.breed.list({
                animal: this.state.animal
            })
            .then(data => {
                if (
                    data.petfinder && 
                    data.petfinder.breeds &&
                    Array.isArray(data.petfinder.breeds.breed)) {
                        this.setState({
                            breeds: data.petfinder.breeds.breed
                        });
                    }
            });
        } else {
            this.setState({
                breeds: []
            })
        }
    }

    handleBreedChange(event) {
        this.setState({
            breed: event.target.value
        })
    }

    render () {
        return (
            <div className="search-params">
                <label htmlFor="location">
                    Location
                    <input 
                        onChange={this.handlerLocationChange}
                        id="location"
                        value={this.state.location}
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={this.state.animal}
                        onChange={this.handlerAnimalChange}
                        onBlur={this.handlerAnimalChange}
                    >
                        <option />
                        {
                            ANIMALS.map(animal => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    breed
                    <select
                        id="breed"
                        value={this.state.breed}
                        onChange={this.handleBreedChange}
                        onBlur={this.handleBreedChange}
                        disabled={!this.state.breeds.length}
                    >
                        <option />
                        {this.state.breeds.map(breed => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </div>
        )
    }
}
