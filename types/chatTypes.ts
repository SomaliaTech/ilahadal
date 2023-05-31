
export type users = {
    name: string,
    id: string,
    imageUrl?: string,

}

export type lastMessage = {
    id: string,
    content: string,
    createdAt: string
}

export type TypeProps = {
    newMessages?: number,
    id: string,
    users: users,
    lastMessage: lastMessage

}