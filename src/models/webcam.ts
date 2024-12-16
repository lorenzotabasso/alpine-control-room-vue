export enum ContentType {
  IMG = 'img',
  IFRAME = 'iframe',
}

export interface Webcam {
  nation: string
  region: string
  subRegion?: string
  resort: string
  label: string
  altitude?: string
  contentType: ContentType
  link: string
  thumbnailLink?: string
}
