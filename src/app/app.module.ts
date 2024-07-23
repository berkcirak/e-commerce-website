import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { LinkpdfComponent } from './linkpdf/linkpdf.component';
import { AboutusComponent } from './aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    LinkpdfComponent,
    AboutusComponent,
   ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
