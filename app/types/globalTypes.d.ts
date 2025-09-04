declare module '@biswarup598/date-parser' {
    const dateParser: any; // or define actual types if you know them
}

type Message = {
    id?: number
    type: string
    text: string
    time: string
    isLoading: boolean
}

type User = {
    name: string
    email: string
    password: string
}

