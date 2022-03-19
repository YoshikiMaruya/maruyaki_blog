export type Article = {
  id: string
  createAt: string
  updateAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  eye_catch: {
    url: string
    height: number
    width: number
  }
  tag: string
}
