import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@app/material.module';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { RainComponent } from './rain/rain.component';
import { BrokenCloudsComponent } from './broken-clouds/broken-clouds.component';
import { NightSkyComponent } from './night-sky/night-sky.component';
import { ParticlesModule } from 'ngx-particle';
import { NgParticlesModule } from 'ng-particles';
import { LocationSearchComponent } from '@app/components/location-search/location-search.component';
import { LoaderComponent } from '@app/@shared/loader/loader.component';
import { FogComponent } from './fog/fog.component';
import { SolidCloudsComponent } from './solid-clouds/solid-clouds.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    I18nModule,
    RouterModule,
    NgParticlesModule,
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
    RainComponent,
    BrokenCloudsComponent,
    NightSkyComponent,
    LocationSearchComponent,
    LoaderComponent,
    FogComponent,
    SolidCloudsComponent,
  ],
})
export class ShellModule {}
