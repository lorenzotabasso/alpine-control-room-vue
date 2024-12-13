export enum ContentType {
  IMG = 'img',
  IFRAME = 'iframe',
}

export interface Webcam {
  id: number
  resort: string
  label: string
  altitude?: string
  contentType: ContentType
  link: string
  thumbnailLink?: string
}
