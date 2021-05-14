import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search = ''
  searchField = 'title'

  posts: Post[] = [
    { title: 'Определить свою цель', text: 'Это как найти полярную звезду. Она станет для вас ориентиром, если вы ненароком собьетесь с пути' },
    { title: 'Live without regrets', text: 'Work hard. Dream big' },
    { title: 'Qarabağ', text: 'Azərbaycandır!' }
  ]
}