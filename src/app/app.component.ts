import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, throwError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shop';
  helpFolder:boolean=false;
  
  constructor(private http:HttpClient){}
  
  checkFileExists(url: string) {
    return this.http.head(url, { observe: 'response' }).pipe(
      map(response => response.status === 200),
      catchError(error => {
        if (error.status === 404) {
          return of(false);
        }
        return throwError(error);
      })
    );
  }

  ngOnInit(){
      this.helpPdf();
  }

  helpPdf() {
    const pdfUrl = '/assets/help.pdf';
    this.checkFileExists(pdfUrl).subscribe(exists => {
      if (exists) {
        this.helpFolder=true;
        console.log(this.helpFolder)
        window.open(pdfUrl,'_blank')
      } else {
        this.helpFolder=false;
        console.log(this.helpFolder)
      }
    });
  }
}
