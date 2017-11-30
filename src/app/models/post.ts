export interface IResumePost {
  titleUrl: string,
  title: string,
  img: string,
  resumeContent: string,
  category: string,
  date: Date,
  author: string
}

export interface IPost {
  _id?: string,
  titleUrl?: string,
  title: string,
  img?: string,
  content: string,
  resumeContent: string,
  category: string,
  date: Date,
  author: string
}

export interface IPostCreate {
  title: string,
  img: string,
  resumeContent: string,
  content: string,
  category: string
}

export interface IPostUpdate {
  _id: string,
  title: string,
  img: string,
  content: string,
  resumeContent: string,
  category: string,
  author: string
}