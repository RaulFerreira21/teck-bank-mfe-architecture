import { loadRemoteModule } from '@angular-architects/native-federation';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-shell-home-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  public componentReady: boolean = false;
  async ngOnInit() {
    await loadRemoteModule({
      remoteName: 'byteBankApp',
      exposedModule: './App',
    });

    this.componentReady = true;
  }

}
