import {Beer} from '../domain/Beer'

export default function getBeers(pageNumber: number, beerPerPage: number): Promise<Beer[]> {
    return (
        fetch('https://api.punkapi.com/v2/beers?page=' + pageNumber + '&per_page=' + beerPerPage)
            .then(response => response.json() as Promise<Beer[]>)
    )
}