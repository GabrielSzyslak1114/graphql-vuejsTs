import gql from 'graphql-tag';

  export const GQL_CHARACTERS = gql`
    query characters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
          info {
            count
            next
            prev
          }
          results {
            id
            name
            status
            species
            gender
            image
            location{
              id
              name
            }
          }
        }
      }
  `
