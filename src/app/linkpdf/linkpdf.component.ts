import { Component } from '@angular/core';

@Component({
  selector: 'app-linkpdf',
  template: '',
  styleUrls: ['./linkpdf.component.css']
})
export class LinkpdfComponent {

  constructor(){}

  ngOnInit():void{
    window.location.href='https://www.dialogue.com.tr/wp-content/uploads/2020/04/iptal-ve-iade-kosullari.pdf'
  }
 


}
