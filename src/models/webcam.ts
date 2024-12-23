import type { Coordinates } from './coordinates'

export enum ContentType {
  IMG = 'img',
  IFRAME = 'iframe',
}

export interface Webcam {
  nation: string
  region: string
  subRegion?: string
  coordinates?: Coordinates
  resortGroup?: string
  resort: string
  label: string
  altitude?: string
  contentType: ContentType
  link: string
  thumbnailLink?: string
}
