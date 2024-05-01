import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import {
  COLOR_GRID_ITEMS,
  ColorGridSelectComponent,
} from '@brew/ng/ui/components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RadioColorGridComponent } from './radio-color-grid/radio-color-grid.component';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RadioColorGridComponent,
    ColorGridSelectComponent,
  ],
  selector: 'brew-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly _fb = inject(FormBuilder);
  items :String[]= [
    'rgb(0, 0, 255)',
    'rgb(255, 0, 0)',
    'rgb(255, 255,0)',
    'rgb(0, 255,0)',
    'rgb(128, 0,0)',
    'rgb(255, 165,0)',
    'rgb(128,128,128)',
    'rgb(255,0,255)',
    'rgb(160,32,240)',
    'rgb(255, 0, 0)',
    'rgb(200,205,200)',
    'rgb(0, 255,0)',
    'rgb(0, 0, 255)',
    'rgb(0, 255,0)',
    'rgb(255, 165,0)',
    'rgb(255, 255,0)',
  ]
  // items :string[] =[]
  public readonly form = this._fb.group({
    search: this._fb.control(''),
    color: this._fb.control(COLOR_GRID_ITEMS[2], {
      validators: [Validators.required],
    }),
  });
}
