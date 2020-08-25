export interface LoginTypes {
  name: string
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
  email: string,
  password: string,
}