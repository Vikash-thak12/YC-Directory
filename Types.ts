export interface startupCardType {
    _createdAt: Date,
    views: number,
    author: {
      image: string,
      _id: number,
      name: string
    },
    _id: number, 
    description: string,
    image: string,
    category: string,
    title: string
  }