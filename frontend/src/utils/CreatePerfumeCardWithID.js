import { v4 as uuidv4 } from 'uuid'

function CreatePerfumeCardWithID(perfumeDATA) {
    return {
        ...perfumeDATA,
        id: uuidv4(),
        isFavorite: false,
    }
}

export default CreatePerfumeCardWithID
