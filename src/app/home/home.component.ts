import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) {}

  title = 'Material app works!';

  @ViewChild('sidenav') sidenav: MdSidenav;

  dogs = [
    {rows: 2, name: "Mal", human: "Jeremy", age: 5},
    {rows: 1, name: "Molly", human: "David", age: 5},
    { rows: 1, name: "Sophie", human: "Alex", age: 8},
    {rows: 2, name: "Taz", human: "Joey", age: '11 weeks'},
    { rows: 1, name: "Kobe", human: "Igor", age: 5},
    {rows: 2, name: "Porter", human: "Kara", age: 3},
    { rows: 1, name: "Stephen", human: "Stephen", age: 8},
    {rows: 1, name: "Cinny", human: "Jules", age: 3},
    { rows: 1, name: "Hermes", human: "Kara", age: 3},
  ];

  currentDog = {};

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialog, config);
  }

  showDog(dog) {
    this.currentDog = dog;
    this.sidenav.open();
  }

  ngOnInit() {}
}

export class SettingsDialog {

}
