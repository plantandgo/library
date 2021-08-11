import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom-loader-library',
  template: `
    <p>
      custom-loader-library component works!
    </p>
  `,
  styles: [
  ]
})
export class CustomLoaderLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
