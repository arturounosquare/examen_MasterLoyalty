import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitterModule} from 'primeng/splitter';
import {AccordionModule} from 'primeng/accordion';
import { ChipModule } from 'primeng/chip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SpeedDialModule} from 'primeng/speeddial';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogService} from 'primeng/dynamicdialog';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {BlockUIModule} from 'primeng/blockui';
import {ColorPickerModule} from 'primeng/colorpicker';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';
import {BadgeModule} from 'primeng/badge';

@NgModule({
  declarations: [],
  exports: [
    AccordionModule,
    ChipModule,
    ToolbarModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    ProgressSpinnerModule,
    SidebarModule,
    SplitterModule,
    SpeedDialModule,
    SplitButtonModule,
    DynamicDialogModule,
    InputTextModule,
    CheckboxModule,
    InputTextareaModule,
    CardModule,
    DropdownModule,
    InputMaskModule,
    ConfirmDialogModule,
    ToastModule,
    PasswordModule,
    DividerModule,
    BlockUIModule,
    ColorPickerModule,
    CalendarModule,
    PanelModule,
    DataViewModule,
    BadgeModule
  ]
})
export class PrimeNgModule { }
