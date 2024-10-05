function CreatePerfumeCardWithID(perfumeDATA) {
    return {
        ...perfumeDATA,
        isFavorite: false,
    }
}

export default CreatePerfumeCardWithID
