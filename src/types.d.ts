export type TileJSON = {
  tilejson: '2.2.0',
  tiles: Array<string>,
  name?: string,
  description?: string,
  version?: string,
  attribution?: string,
  template?: string,
  legend?: string,
  scheme?: string,
  grids?: Array<string>,
  data?: Array<string>,
  minzoom?: number,
  maxzoom?: number,
  bounds?: Array<number>,
  center?: Array<number>
}

export type TileIndex = {
  z: number,
  x: number,
  y: number
}

export type Bbox = [number, number, number, number];

type CogMetadata = {
  offset: number,
  scale: number,
  noData?: number,
  photometricInterpretation?: number
  bitsPerSample?: Array<number>,
  colorMap?: Array<number>,
  artist?: string,
  bbox?: Bbox,
  images: Array<ImageMetadata>
}

type ImageMetadata = {
  zoom: number,
  isOverview: boolean,
  isMask: boolean
}

export type TypedArray = Uint8Array | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array;

export type ImageRenderer <T extends object> = (data: TypedArray[], options: T) => Uint8ClampedArray;
