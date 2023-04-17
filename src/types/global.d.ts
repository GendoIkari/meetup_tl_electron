interface AppApi {
    sendClick: () => void
}

declare global {
    var appApi: AppApi
}

export { }
