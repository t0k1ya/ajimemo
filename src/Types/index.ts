export interface LoginTypes {
  email: string
  password: string
}

export interface Item {
  item_name: string,
  image_url: string,
  created_at: Date,
  rating?: number,
  comment?: string,
}

export interface SignUpTypes {
  name: string,
  email: string,
  password: string,
}