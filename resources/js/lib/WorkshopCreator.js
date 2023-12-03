export const workshopDetails = () => {
    return {
        name: "",
        form_date: "",
        to_date: "",
        type: "",
        price: "",
        sponsors: "",
        objective: "",
        description: "",
        image_file: "",
        days: []
    }
}

export const dayInfo = () => {
    return  {
        title: "",
        sessions: []
    }
}


export const sessionsInfo = () => {
    return  {
        title: "",
        from: "",
        to: "",
        topics: "",
        mentors: []
    }
}
