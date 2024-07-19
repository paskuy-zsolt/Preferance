import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Suit = 'Hearts' | 'Leaves' | 'Bells' | 'Acorns';
type Value = '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

class Card {
  suit: Suit;
  value: Value;
  image: string

  constructor(suit: Suit, value: Value, image: string) {
    this.suit = suit;
    this.value = value;
    this.image = image;
  }

  displayCard(): string {
    return `${this.value} of ${this.suit}`;
  }
}

@Component({
  selector: 'app-three-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three-players.component.html',
  styleUrl: './three-players.component.css'
})

export class ThreePlayersComponent {
  cards: Card[];

  constructor() {
    this.cards = this.createDeck();
  }

  createDeck(): Card[] {
    const suits: Suit[] = ['Hearts', 'Leaves', 'Bells', 'Acorns'];
    const values: Value[] = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck: Card[] = [];

    for (const suit of suits) {
      for (const value of values) {
        const image = `/assets/images/kartyak/${value}_${suit}.jpg`;
        deck.push(new Card(suit, value, image));
      }
    }
    
    const shuffle = (array: Card[]) => { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      }
      
      return array; 
    };

    shuffle(deck)

    return deck;
  }
}