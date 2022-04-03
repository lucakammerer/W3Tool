import { CookiePopupComponent } from './cookie-popup/cookie-popup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppearanceService } from './services/appearance.service';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ColorPickerSliderComponent } from './tools/color/color-picker/color-picker-slider/color-picker-slider.component';
import { ColorPickerPaletteComponent } from './tools/color/color-picker/color-picker-palette/color-picker-palette.component';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  providers: [
    AppearanceService,
  ],
  imports: [
      FontAwesomeModule,
      FormsModule,
      CommonModule,
      RouterModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoaderFactory,
          deps: [HttpClient]
        }
      })
    ],
  declarations: [
      SidebarComponent,
      HeaderComponent,
      FooterComponent,
      LoadingComponent,
      CookiePopupComponent,
      ColorPickerSliderComponent,
      ColorPickerPaletteComponent,
  ],
  exports: [
      FontAwesomeModule,
      FormsModule,
      SidebarComponent,
      HeaderComponent,
      LoadingComponent,
      FooterComponent,
      CookiePopupComponent,
      ColorPickerSliderComponent,
      ColorPickerPaletteComponent,
  ]
})
export class SharedModule {}
